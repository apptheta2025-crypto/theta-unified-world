import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ProblemSection from '@/components/ProblemSection';
import BenefitsSection from '@/components/BenefitsSection';
import AppSection from '@/components/AppSection';
import CreateSection from '@/components/CreateSection';
import FlywheelSection from '@/components/FlywheelSection';
import WishlistSection from '@/components/WishlistSection';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';
import SitemapGenerator from '@/components/SitemapGenerator';

const Index = () => {
  return (
    <>
      <StructuredData />
      <SitemapGenerator />
      <div className="min-h-screen">
        <Navigation />
        <main>
          <HeroSection />
          <ProblemSection />
          <BenefitsSection />
          <AppSection />
          <CreateSection />
          <FlywheelSection />
          <WishlistSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;