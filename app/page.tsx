import { auth, signIn, signOut } from "@/lib/auth";

export default async function Home() {
  const session = await auth();
  return (
    <div>
      {session?.user ? (
        <form
          action={async () => {
            "use server";
            await signOut();
          }}
        >
          <button type="submit">Sign Out</button>
        </form>
      ) : (
        <form
          action={async () => {
            "use server";
            await signIn();
          }}
        >
          <button type="submit">Sign in</button>
        </form>
      )}
      <div>{JSON.stringify(session)}</div>
    </div>
  );
}
