import { NextRequest, NextResponse } from "next/server";
import { hash } from "bcryptjs";
import { z } from "zod";
import { prisma } from "@/lib/prisma";

const isValidIIITDomain = (domain: string): boolean => {
    const lowerDomain = domain.toLowerCase();
    const allowDomains = process.env.ALLOWED_IIIT_DOMAINS?.split(',').map(d => d.trim().toLowerCase()) || [];
    return allowDomains.includes(lowerDomain);
};

const registerSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z
        .string()
        .email("Invalid email format")
        .refine((email) => {
            const domain = email.split("@")[1];
            return domain && isValidIIITDomain(domain);
        }, {
            message: "Email must be from an IIIT institution domain",
        }),
    password: z.string().min(6, "Password must be at least 6 characters"),
});

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const result = registerSchema.safeParse(body);

        if (!result.success) {
            return NextResponse.json(
                { error: result.error.issues[0]?.message || "Invalid input" },
                { status: 400 }
            );
        }

        const { name, email, password } = result.data;

        const existingUser = await prisma.user.findUnique({
            where: { email: email.toLowerCase() },
        });

        if (existingUser) {
            return NextResponse.json(
                { error: "User with this email already exists" },
                { status: 400 }
            );
        }

        const hashedPassword = await hash(password, 12);

        const user = await prisma.user.create({
            data: {
                name,
                email: email.toLowerCase(),
                password: hashedPassword,
                role: "USER",
            },
        });
        const { password: _, ...userWithoutPassword } = user;

        return NextResponse.json(
            {
                message: "User created successfully",
                user: userWithoutPassword
            },
            { status: 201 }
        );
    } catch (error) {
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
