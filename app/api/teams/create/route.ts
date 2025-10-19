import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { z } from "zod";

function generateTeamCode(): string {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let result = "";
  for (let i = 0; i < 6; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

const createTeamSchema = z.object({
  teamName: z
    .string()
    .min(2, "Team name must be at least 2 characters")
    .max(50, "Team name must be less than 50 characters"),
  clubName: z.string().optional(),
  maxMembers: z.number().min(2).max(3).default(3),
});

export async function POST(request: NextRequest) {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      return NextResponse.json(
        { success: false, error: "Authentication required" },
        { status: 401 }
      );
    }

    const userId = session.user.id;

    const body = await request.json();
    const parsed = createTeamSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid input",
          details: parsed.error.issues,
        },
        { status: 400 }
      );
    }

    const { teamName, clubName, maxMembers } = parsed.data;

    const existingUser = await prisma.user.findUnique({
      where: { id: userId },
      include: { team: true },
    });

    if (!existingUser) {
      return NextResponse.json(
        { success: false, error: "User not found" },
        { status: 404 }
      );
    }

    if (existingUser.teamId) {
      return NextResponse.json(
        { success: false, error: "You are already part of a team" },
        { status: 400 }
      );
    }

    const existingTeam = await prisma.team.findFirst({
      where: { creatorId: userId },
    });

    if (existingTeam) {
      return NextResponse.json(
        { success: false, error: "You have already created a team" },
        { status: 400 }
      );
    }

    let teamCode = generateTeamCode();
    let codeExists = await prisma.team.findUnique({ where: { teamCode } });

    while (codeExists) {
      teamCode = generateTeamCode();
      codeExists = await prisma.team.findUnique({ where: { teamCode } });
    }

    const result = await prisma.$transaction(async (tx) => {
      const team = await tx.team.create({
        data: {
          name: teamName,
          collegeId: existingUser.collegeId,
          teamCode,
          ClubName: clubName,
          maxMembers,
          creatorId: userId,
        },
      });

      await tx.user.update({
        where: { id: userId },
        data: {
          teamId: team.id,
          isTeamLeader: true,
        },
      });

      return team;
    });

    return NextResponse.json({
      success: true,
      team: {
        id: result.id,
        name: result.name,
        teamCode: result.teamCode,
        maxMembers: result.maxMembers,
        clubName: result.ClubName,
      },
      message:
        "Team created successfully! Share your team code with teammates.",
    });
  } catch (error) {
    console.error("Error in team creation:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
