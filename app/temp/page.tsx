import Hero from "@/components/Hero";
import NotificationPanel from "@/components/NotificationPanel";
import Features from "@/components/Features";
import Schedule from "@/components/Schedule";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <NotificationPanel />
      <Features />
      <Schedule />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
