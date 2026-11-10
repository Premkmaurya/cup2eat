import { ArrowUp } from 'lucide-react';
import { InstagramIcon } from './InstagramIcon';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-deep text-cream-soft border-t border-forest-light/30 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 sm:gap-12 pb-12 border-b border-cream/10">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-gold/60 p-0.5 bg-forest flex items-center justify-center">
                <img src="/logo-mark.svg" alt="CUP2EAT logo" className="w-full h-full" />
              </div>
              <div>
                <span className="font-heading font-extrabold text-xl tracking-tight text-white">
                  CUP2EAT
                </span>
                <span className="block text-[10px] font-heading font-semibold text-gold tracking-widest uppercase">
                  Eat Your Drink
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-cream/75 max-w-sm leading-relaxed font-normal">
              CUP2EAT creates edible beverage cups designed as a sensory, sustainable alternative to conventional disposable drinkware. Founded by Varun Khera.
            </p>

            <div className="pt-2">
              <a
                href="https://www.instagram.com/cup2eat/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-heading font-medium text-gold hover:text-white transition-colors"
              >
                <InstagramIcon className="w-4 h-4 text-gold" />
                <span>Follow @cup2eat on Instagram</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-xs uppercase tracking-widest text-gold-light">
              Explore
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-cream/70 font-normal">
              <li><a href="#hero" className="hover:text-gold transition-colors">Home</a></li>
              <li><a href="#product" className="hover:text-gold transition-colors">Our Cups</a></li>
              <li><a href="#how-it-works" className="hover:text-gold transition-colors">How It Works</a></li>
              <li><a href="#why-cup2eat" className="hover:text-gold transition-colors">Why CUP2EAT</a></li>
              <li><a href="#for-businesses" className="hover:text-gold transition-colors">For Businesses</a></li>
              <li><a href="#business-enquiry" className="hover:text-gold transition-colors">Enquiry Form</a></li>
            </ul>
          </div>

          {/* Product Ethics & Category */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-heading font-bold text-xs uppercase tracking-widest text-gold-light">
              Brand Ethos
            </h4>
            <p className="text-xs text-cream/70 leading-relaxed font-normal">
              Sustainable food packaging innovation based in India. Focused on elevating beverage experiences for cafés, roasters, catering services, and premium events.
            </p>
            <div className="p-3.5 rounded-xl bg-forest/40 border border-gold/20 text-[11px] text-cream/80">
              <strong className="text-gold">Quality & Safety:</strong> Food safety & FSSAI-compliant processes verified on official brand channels.
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Scroll to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream/60">
          <p>© {new Date().getFullYear()} CUP2EAT. All rights reserved. “Eat Your Drink” is a trademark of CUP2EAT.</p>
          
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs font-heading text-cream/80 hover:text-gold transition-colors"
            aria-label="Scroll to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
