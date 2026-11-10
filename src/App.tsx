import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductStory } from './components/ProductStory';
import { TheExperience } from './components/TheExperience';
import { WhereItBelongs } from './components/WhereItBelongs';
import { RealWorldProof } from './components/RealWorldProof';
import { BusinessPartnerships } from './components/BusinessPartnerships';
import { BrandClosing } from './components/BrandClosing';

export function App() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-cream text-charcoal flex flex-col selection:bg-gold/30 selection:text-forest">
      {/* Editorial Navigation */}
      <Navbar onQuoteClick={() => scrollToSection('business')} />

      <main className="flex-grow">
        {/* 01. Immersive Hero */}
        <Hero
          onExploreCups={() => scrollToSection('story')}
          onBusinessEnquiry={() => scrollToSection('business')}
        />

        {/* 02. Product Story */}
        <ProductStory onLearnMore={() => scrollToSection('venues')} />

        {/* 03. The Experience (Pour -> Sip -> Eat) */}
        <TheExperience />

        {/* 04. Where It Belongs (Real-World Applications) */}
        <WhereItBelongs onContactClick={() => scrollToSection('business')} />

        {/* 05. Real People (Real-world proof & Instagram Reels) */}
        <RealWorldProof />

        {/* 06. Business Partnerships & Enquiry */}
        <BusinessPartnerships />

        {/* 07. Brand Closing Statement & Ironhill-style Framed Footer */}
        <BrandClosing onContactClick={() => scrollToSection('business')} />
      </main>
    </div>
  );
}

export default App;
