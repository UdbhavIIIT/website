import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";

export async function GET() {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      return NextResponse.json(
        { success: false, error: "Authentication required" },
        { status: 401 }
      );
    }

    const userId = session.user.id;

    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        team: {
          include: {
            users: {
              select: {
                id: true,
                name: true,
                email: true,
                isTeamLeader: true,
                batch: true,
                phone_number: true,
              },
            },
            creator: {
              select: {
                id: true,
                name: true,
                email: true,
              },
            },
          },
        },
      },
    });

    if (!user) {
      return NextResponse.json(
        { success: false, error: "User not found" },
        { status: 404 }
      );
    }

    if (!user.team) {
      return NextResponse.json({
        success: true,
        hasTeam: false,
        message: "User is not part of any team",
      });
    }

    const isLeader = user.team.creatorId === userId;

    return NextResponse.json({
      success: true,
      hasTeam: true,
      isLeader,
      team: {
        id: user.team.id,
        name: user.team.name,
        teamCode: user.team.teamCode,
        clubName: user.team.ClubName,
        points: user.team.points,
        maxMembers: user.team.maxMembers,
        isActive: user.team.isActive,
        memberCount: user.team.users.length,
        members: user.team.users,
        creator: user.team.creator,
        createdAt: user.team.created_at,
      },
    });
  } catch (error) {
    console.error("Error fetching team data:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function DELETE() {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      return NextResponse.json(
        { success: false, error: "Authentication required" },
        { status: 401 }
      );
    }

    const userId = session.user.id;

    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: { team: true },
    });

    if (!user || !user.team) {
      return NextResponse.json(
        { success: false, error: "You are not part of any team" },
        { status: 400 }
      );
    }

    const isLeader = user.team.creatorId === userId;

    if (isLeader) {
      await prisma.$transaction(async (tx) => {
        await tx.user.updateMany({
          where: { teamId: user.team!.id },
          data: { teamId: null, isTeamLeader: false },
        });

        await tx.team.delete({
          where: { id: user.team!.id },
        });
      });

      return NextResponse.json({
        success: true,
        message: "Team deleted successfully",
      });
    } else {
      await prisma.user.update({
        where: { id: userId },
        data: { teamId: null },
      });

      return NextResponse.json({
        success: true,
        message: "Successfully left the team",
      });
    }
  } catch (error) {
    console.error("Error leaving/deleting team:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
