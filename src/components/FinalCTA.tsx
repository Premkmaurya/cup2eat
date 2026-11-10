import { ArrowUpRight, Sparkles } from 'lucide-react';

interface FinalCTAProps {
  onContactClick: () => void;
}

export const FinalCTA = ({ onContactClick }: FinalCTAProps) => {
  return (
    <section className="py-24 sm:py-32 bg-forest text-cream-soft relative overflow-hidden">
      
      {/* Background Subtle Motifs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-deep/80 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 opacity-10 wafer-pattern pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Emblem */}
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-gold/40 p-1 bg-deep/60 mx-auto flex items-center justify-center mb-8 shadow-deep-lg">
          <img src="/logo-mark.svg" alt="CUP2EAT Emblem" className="w-full h-full object-contain" />
        </div>

        {/* Small Highlight Pill */}
        <div className="inline-flex items-center gap-2 bg-deep/70 border border-gold/30 px-4 py-1.5 rounded-full mb-6">
          <Sparkles className="w-3.5 h-3.5 text-gold" />
          <span className="text-xs font-heading font-semibold uppercase tracking-widest text-gold-light">
            Eat Your Drink
          </span>
        </div>

        {/* Bold Headline */}
        <h2 className="text-fluid-display font-heading font-extrabold text-white leading-tight tracking-tight max-w-3xl mx-auto">
          Your next drink could be different.
        </h2>

        {/* Supporting Line */}
        <p className="mt-5 text-base sm:text-xl text-cream/85 font-normal max-w-xl mx-auto leading-relaxed">
          Discover the edible cup experience with CUP2EAT. Elevate your beverage service and eliminate single-use paper cups entirely.
        </p>

        {/* CTA Button */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={onContactClick}
            className="inline-flex items-center gap-3 bg-gold hover:bg-gold-light text-deep font-heading font-bold text-base px-8 py-4 rounded-full shadow-deep-lg hover:shadow-warm-lg transition-all duration-300 transform hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-white"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-5 h-5" />
          </button>
          
          <a
            href="https://www.instagram.com/cup2eat/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-heading font-semibold text-cream/75 hover:text-gold transition-colors py-3 px-5"
          >
            <span>Or message us on Instagram @cup2eat</span>
            <span>→</span>
          </a>
        </div>

      </div>
    </section>
  );
};
