
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import WorkflowDemo from "@/components/WorkflowDemo";
import Stats from "@/components/Stats";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Features />
      <WorkflowDemo />
      <Stats />
      <Footer />
    </div>
  );
};

export default Index;
