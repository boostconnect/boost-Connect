import AnimatedBackground from "@/components/AnimatedBackground";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnimatedBackground />
      <Hero />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
