import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ValueProposition from "@/components/ValueProposition";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorks from "@/components/HowItWorks";
import PricingSection from "@/components/PricingSection";
import WhyChoose from "@/components/WhyChoose";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ValueProposition />
      <FeaturesSection />
      <HowItWorks />
      <PricingSection />
      <WhyChoose />
      <CTASection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
