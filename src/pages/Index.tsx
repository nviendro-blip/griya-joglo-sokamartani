import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import USPSection from "@/components/USPSection";
import Gallery from "@/components/Gallery";
import TargetMarket from "@/components/TargetMarket";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProblemSolution />
      <USPSection />
      <Gallery />
      <TargetMarket />
      <Footer />
    </div>
  );
};

export default Index;
