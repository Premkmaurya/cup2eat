import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandIntro } from './components/BrandIntro';
import { ProductShowcase } from './components/ProductShowcase';
import { HowItWorks } from './components/HowItWorks';
import { WhyCup2Eat } from './components/WhyCup2Eat';
import { WhereItFits } from './components/WhereItFits';
import { CustomerExperiences } from './components/CustomerExperiences';
import { QualitySection } from './components/QualitySection';
import { BusinessEnquiry } from './components/BusinessEnquiry';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

export function App() {
  const [selectedProductForEnquiry, setSelectedProductForEnquiry] = useState<string>('');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleProductEnquiry = (productName?: string) => {
    if (productName) {
      setSelectedProductForEnquiry(productName);
    }
    scrollToSection('business-enquiry');
  };

  return (
    <div className="min-h-screen bg-cream text-charcoal flex flex-col selection:bg-gold/30 selection:text-forest">
      {/* 01 Navigation */}
      <Navbar onQuoteClick={() => scrollToSection('business-enquiry')} />

      <main className="flex-grow">
        {/* 02 Hero Section */}
        <Hero
          onExploreCups={() => scrollToSection('product')}
          onBusinessEnquiry={() => scrollToSection('business-enquiry')}
        />

        {/* 03 Brand Introduction */}
        <BrandIntro />

        {/* 04 Product Showcase */}
        <ProductShowcase onEnquire={handleProductEnquiry} />

        {/* 05 How It Works */}
        <HowItWorks />

        {/* 06 Why CUP2EAT */}
        <WhyCup2Eat />

        {/* 07 Where CUP2EAT Fits (B2B) */}
        <WhereItFits onExploreBusiness={() => scrollToSection('business-enquiry')} />

        {/* 08 Customer Experiences & Social Verification */}
        <CustomerExperiences />

        {/* 09 Quality and Safety */}
        <QualitySection />

        {/* 10 Business Enquiry Form */}
        <BusinessEnquiry initialProductName={selectedProductForEnquiry} />

        {/* 11 Final CTA */}
        <FinalCTA onContactClick={() => scrollToSection('business-enquiry')} />
      </main>

      {/* 12 Footer */}
      <Footer />
    </div>
  );
}

export default App;
