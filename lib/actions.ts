"use server";

import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function getUserData() {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return null;
    }

    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
      include: {
        team: true,
        college: true,
      },
    });

    if (!user) {
      return null;
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
  } catch (error) {
    console.error("Error fetching user data:", error);
    return null;
  }
}
