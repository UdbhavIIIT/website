import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
import { prisma } from "./prisma";
import { compare } from "bcryptjs";

declare module "next-auth" {
  interface User {
    role: string;
    teamId?: string;
    isTeamLeader?: boolean;
  }

  interface Session {
    user: {
      id: string;
      email: string;
      name: string;
      role: string;
      teamId?: string;
      isTeamLeader?: boolean;
    };
  }
}
const isValidIIITDomain = (domain: string): boolean => {
  const lowerDomain = domain.toLowerCase();
  const allowDomains = process.env.ALLOWED_IIIT_DOMAINS?.split(',').map(d => d.trim().toLowerCase()) || [];
  return allowDomains.includes(lowerDomain);
};

const credentialsSchema = z.object({
  email: z
    .string()
    .email("Invalid email format")
    .refine((email) => {
      const domain = email.split("@")[1];
      return domain && isValidIIITDomain(domain);
    }, {
      message: "Email must be from an IIIT institution domain",
    }),
  password: z.string().min(6).max(20),
});

export const { handlers, signIn, signOut, auth } = NextAuth({
  pages: {
    signIn: "/auth/signin",
  },
  providers: [
    Credentials({
      credentials: {
        email: {
          type: "email",
          label: "Email",
          placeholder: "student@iiits.ac.in",
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
            return null;
          }

          const { email, password } = parsed.data;

          const user = await prisma.user.findUnique({
            where: { email: email.toLowerCase() },
          });

          if (!user || !user.password) {
            return null;
          }

          const isValid = await compare(password, user.password);
          if (!isValid) {
            return null;
          }

          return {
            id: user.id,
            email: user.email,
            role: user.role,
            name: user.name,
            teamId: user.teamId || undefined,
            isTeamLeader: user.isTeamLeader,
          };
        } catch (error) {
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
    updateAge: 24 * 60 * 60,
    maxAge: 30 * 24 * 60 * 60,
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.role = user.role;
        token.name = user.name;
        token.teamId = user.teamId;
        token.isTeamLeader = user.isTeamLeader;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id as string;
      session.user.email = token.email as string;
      session.user.role = token.role as string;
      session.user.name = token.name as string;
      session.user.teamId = token.teamId as string;
      session.user.isTeamLeader = token.isTeamLeader as boolean;
      return session;
    },
  },
});
