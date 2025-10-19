import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { z } from "zod";

const joinTeamSchema = z.object({
  teamCode: z.string().length(6, "Team code must be exactly 6 characters"),
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
    const parsed = joinTeamSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: "Invalid team code format" },
        { status: 400 }
      );
    }

    const { teamCode } = parsed.data;

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

    const team = await prisma.team.findUnique({
      where: { teamCode },
      include: {
        users: true,
        creator: { select: { id: true, name: true, email: true } },
      },
    });

    if (!team) {
      return NextResponse.json(
        { success: false, error: "Invalid team code" },
        { status: 404 }
      );
    }

    if (!team.isActive) {
      return NextResponse.json(
        {
          success: false,
          error: "This team is no longer accepting new members",
        },
        { status: 400 }
      );
    }

    if (team.users.length >= team.maxMembers) {
      return NextResponse.json(
        { success: false, error: "This team is full" },
        { status: 400 }
      );
    }

    if (team.creatorId === userId) {
      return NextResponse.json(
        { success: false, error: "You cannot join your own team" },
        { status: 400 }
      );
    }

    await prisma.user.update({
      where: { id: userId },
      data: { teamId: team.id },
    });

    const updatedTeam = await prisma.team.findUnique({
      where: { id: team.id },
      include: {
        users: {
          select: { id: true, name: true, email: true, isTeamLeader: true },
        },
        creator: { select: { id: true, name: true, email: true } },
      },
    });

    return NextResponse.json({
      success: true,
      team: {
        id: updatedTeam?.id,
        name: updatedTeam?.name,
        teamCode: updatedTeam?.teamCode,
        members: updatedTeam?.users,
        creator: updatedTeam?.creator,
        memberCount: updatedTeam?.users.length,
        maxMembers: updatedTeam?.maxMembers,
      },
      message: `Successfully joined team "${team.name}"!`,
    });
  } catch (error) {
    console.error("Error joining team:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
