import { auth, signIn, signOut } from "@/lib/auth";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { About } from "@/components/sections/About";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";
import { Navigation } from "@/components/ui/Navigation";

export default async function Home() {
  const session = await auth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      <Navigation session={session} />
      <Hero />
      <Features />
      <About />
      <CTA />
      <Footer />
    </div>
  );
}
