"use server";

import { signIn, signOut } from "@/lib/auth";

export async function handleSignIn() {
  await signIn();
}

export async function handleSignOut() {
  await signOut();
}
