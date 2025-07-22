import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
import { prisma } from "./prisma";
import { compare } from "bcryptjs";

declare module "next-auth" {
  interface User {
    role: string;
  }
}

const credentialsSchema = z.object({
  email: z.email(),
  password: z.string().min(6).max(20),
});

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {
          type: "email",
          label: "Email",
          placeholder: "johndoe@gmail.com",
        },
        password: {
          type: "password",
          label: "Password",
          placeholder: "*****",
        },
      },
      authorize: async (credentials) => {
        try {
          const parsed = credentialsSchema.safeParse(credentials);
          if (!parsed.success) {
            console.error("Invalid credentials format", parsed.error);
            return null;
          }

          const { email, password } = parsed.data;

          const user = await prisma.user.findUnique({
            where: { email: email.toLowerCase() },
          });

          if (!user) {
            console.error("User not found");
            return null;
          }
          if (!user.password) {
            console.log("User has no password set:", email);
            return null;
          }

          const isValid = await compare(password, user.password);
          if (!isValid) {
            console.log("Invalid password for user:", email);
            return null;
          }

          console.log("User authenticated successfully:", email);

          return {
            id: user.id,
            email: user.email,
            role: user.role,
            name: user.name,
          };
        } catch (error) {
          console.error("Error during authentication:", error);
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
    updateAge: 24 * 60 * 60, // 24 hours
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  callbacks: {
    async jwt({ token, user }) {
      console.log("User: ", user);
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.role = user.role;
        token.name = user.name;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id as string;
      session.user.email = token.email as string;
      session.user.role = token.role as string;
      session.user.name = token.name as string;
      return session;
    },
  },
});
