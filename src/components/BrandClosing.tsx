import { ArrowUpRight, ArrowUp } from 'lucide-react';
import { InstagramIcon } from './InstagramIcon';

interface BrandClosingProps {
  onContactClick: () => void;
}

export const BrandClosing = ({ onContactClick }: BrandClosingProps) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="bg-cream">
      {/* Large Framed Forest Green Card Inspired by Ironhill Reference */}
      <div className="w-full bg-forest text-cream-soft rounded-t-[2.5rem] sm:rounded-t-[3rem] p-8 sm:p-14 lg:p-20 shadow-deep-lg border border-gold/25 relative overflow-hidden flex flex-col justify-between min-h-[680px]">
        
        {/* Background Ambient Warmth */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-deep/80 rounded-full blur-3xl pointer-events-none" />

        {/* Top: Grand Editorial Brand Display Wordmark */}
        <div className="relative z-10 border-b border-cream/15 pb-12 lg:pb-16">
          <div className="flex items-center justify-between mb-8 text-xs font-heading tracking-[0.25em] uppercase text-gold-light">
            <span>Sustainable Food Packaging</span>
            <span>Est. 2024 · India</span>
          </div>

          <h2 className="font-serif font-normal text-cream-soft tracking-tight text-center text-[clamp(3.5rem,11vw,9.5rem)] leading-[0.9] select-none">
            CUP2EAT
          </h2>
          <p className="text-center font-heading text-xs tracking-[0.3em] uppercase text-gold-light mt-4">
            Eat Your Drink
          </p>
        </div>

        {/* Middle: Impactful Closing Statement & Primary Action */}
        <div className="relative z-10 py-12 lg:py-16 text-center max-w-3xl mx-auto space-y-6">
          <h3 className="text-editorial-h2 font-serif font-normal text-white leading-tight">
            Your next drink <br />
            <span className="italic">could be different.</span>
          </h3>

          <p className="text-sm sm:text-base text-cream/80 max-w-lg mx-auto leading-relaxed font-normal">
            Join the cafés, roasteries, and event creators who are replacing single-use cups with an edible culinary experience.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={onContactClick}
              className="inline-flex items-center gap-3 bg-gold hover:bg-gold-light text-deep font-heading font-bold text-sm sm:text-base px-8 py-4 rounded-full shadow-deep-lg transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <span>Get in Touch for Samples</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <a
              href="https://www.instagram.com/cup2eat/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-heading font-medium text-cream/75 hover:text-gold-light transition-colors py-3 px-5"
            >
              <InstagramIcon className="w-4 h-4 text-gold" />
              <span>Connect on Instagram @cup2eat</span>
            </a>
          </div>
        </div>

        {/* Bottom: Understated Refined Footer Columns */}
        <div className="relative z-10 pt-10 border-t border-cream/15 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-xs font-heading">
          
          <div className="space-y-2">
            <span className="block font-bold text-gold-light uppercase tracking-wider">CUP2EAT Brand</span>
            <p className="text-cream/70 font-normal leading-relaxed text-[11px]">
              Edible drinkware innovation. Alternative to conventional disposable drink cups. Founded by Varun Khera.
            </p>
          </div>

          <div className="space-y-2">
            <span className="block font-bold text-gold-light uppercase tracking-wider">Navigation</span>
            <ul className="space-y-1.5 text-cream/70 font-normal">
              <li><a href="#story" className="hover:text-gold transition-colors">The Product Story</a></li>
              <li><a href="#experience" className="hover:text-gold transition-colors">How It Works</a></li>
              <li><a href="#venues" className="hover:text-gold transition-colors">Where It Belongs</a></li>
              <li><a href="#business" className="hover:text-gold transition-colors">B2B Wholesale</a></li>
            </ul>
          </div>

          <div className="space-y-2">
            <span className="block font-bold text-gold-light uppercase tracking-wider">Standards</span>
            <p className="text-cream/70 font-normal leading-relaxed text-[11px]">
              Food safety and FSSAI-compliant processes. 100% Edible grains with leak-resistant formulation.
            </p>
          </div>

          <div className="space-y-2 flex flex-col justify-between sm:items-end">
            <div>
              <span className="block font-bold text-gold-light uppercase tracking-wider">Official Link</span>
              <a
                href="https://www.instagram.com/cup2eat/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/80 hover:text-white underline mt-1 inline-block"
              >
                instagram.com/cup2eat
              </a>
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-gold-light hover:text-white transition-colors pt-2"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Copyright strip */}
        <div className="relative z-10 mt-8 pt-6 border-t border-cream/10 text-center sm:text-left text-[11px] text-cream/50 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} CUP2EAT. All rights reserved. “Eat Your Drink” is a trademark of CUP2EAT.</p>
          <p>Designed with editorial craft for client presentation.</p>
        </div>

      </div>
    </section>
  );
};
