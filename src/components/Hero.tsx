import { ArrowDown, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { EdibleCupVisual } from './EdibleCupVisual';

interface HeroProps {
  onExploreCups: () => void;
  onBusinessEnquiry: () => void;
}

export const Hero = ({ onExploreCups, onBusinessEnquiry }: HeroProps) => {
  return (
    <section 
      id="hero" 
      className="relative min-h-[92vh] lg:min-h-screen pt-28 sm:pt-32 pb-16 lg:pb-24 flex items-center overflow-hidden"
    >
      {/* Background Organic Ambient Accents */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-forest/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Asymmetric Editorial Copy & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left space-y-6 sm:space-y-8">
            
            {/* Small Brand Label */}
            <div className="inline-flex items-center gap-2 self-start bg-cream-muted/80 border border-gold/30 px-3.5 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-terracotta" />
              <span className="text-xs font-heading font-semibold tracking-wider text-forest uppercase">
                Edible Cups · A Different Way to Drink
              </span>
            </div>

            {/* Large Editorial Headline */}
            <h1 className="text-fluid-display font-heading font-extrabold text-forest tracking-tight leading-[1.05]">
              A cup worth <br className="hidden sm:inline" />
              <span className="relative inline-block">
                finishing.
                {/* Handcrafted warm underline highlight */}
                <svg
                  className="absolute left-0 -bottom-2 w-full h-3 text-gold/60 pointer-events-none"
                  viewBox="0 0 200 12"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M3 8 C50 2, 150 2, 197 7"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg lg:text-xl text-charcoal/85 leading-relaxed text-measure font-normal">
              Meet edible cups that turn your everyday drinking experience into something you can enjoy right to the last bite.
            </p>

            {/* Short Tagline */}
            <div className="flex items-center gap-3 pt-1">
              <span className="h-px w-8 bg-gold" />
              <p className="font-heading font-medium text-sm tracking-wide text-forest-light italic">
                “Sip it. Enjoy it. Eat it.”
              </p>
            </div>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                type="button"
                onClick={onExploreCups}
                className="inline-flex items-center justify-center gap-3 bg-forest text-cream hover:bg-forest-light px-7 py-3.5 rounded-full text-sm font-heading font-semibold transition-all duration-300 shadow-warm-md hover:shadow-warm-lg group focus-visible:ring-2 focus-visible:ring-gold"
              >
                <span>Explore Our Cups</span>
                <ArrowDown className="w-4 h-4 text-gold-light group-hover:translate-y-0.5 transition-transform" />
              </button>

              <button
                type="button"
                onClick={onBusinessEnquiry}
                className="inline-flex items-center justify-center gap-2 bg-transparent text-forest hover:bg-cream-muted/60 border border-forest/30 hover:border-forest px-6 py-3.5 rounded-full text-sm font-heading font-semibold transition-all duration-300"
              >
                <span>Business Enquiries</span>
                <ArrowRight className="w-4 h-4 text-forest" />
              </button>
            </div>

            {/* Factual Trust & Real-world Attributes */}
            <div className="pt-4 border-t border-cream-border/70 flex flex-wrap items-center gap-6 text-xs text-charcoal/75">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-forest" />
                <span>Food Safety & FSSAI Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-gold-dark" />
                <span>Zero Disposable Plastic Waste</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Edible Cup Visual */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <EdibleCupVisual className="w-full max-w-md" />
          </div>

        </div>
      </div>
    </section>
  );
};
