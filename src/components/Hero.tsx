import { ArrowDown, ArrowRight } from 'lucide-react';

interface HeroProps {
  onExploreCups: () => void;
  onBusinessEnquiry: () => void;
}

export const Hero = ({ onExploreCups, onBusinessEnquiry }: HeroProps) => {
  return (
    <section className="relative min-h-[92vh] lg:min-h-screen pt-32 pb-16 lg:pb-24 flex items-center overflow-hidden bg-cream">
      
      {/* Subtle organic paper grain overlay */}
      <div className="absolute inset-0 paper-grain pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Expressive Editorial Copy & Direct CTAs */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left space-y-7">
            
            {/* Minimal Brand Label */}
            <div className="inline-flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-forest" />
              <span className="text-xs font-heading font-semibold tracking-[0.2em] uppercase text-forest/75">
                Edible Drinkware Innovation
              </span>
            </div>

            {/* Oversized Expressive Serif Headline */}
            <h1 className="text-editorial-hero font-serif font-normal text-forest leading-[1.03] tracking-tight">
              A cup that <br />
              <span className="italic font-normal">doesn’t end</span> <br />
              in the bin.
            </h1>

            {/* Concise Supporting Copy */}
            <p className="text-base sm:text-lg text-charcoal/85 leading-relaxed text-measure font-normal">
              Meet CUP2EAT. A different way to enjoy your drink, right down to the last bite.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3">
              <button
                type="button"
                onClick={onExploreCups}
                className="inline-flex items-center justify-center gap-3 bg-forest text-cream-soft hover:bg-forest-light px-8 py-4 rounded-full text-sm font-heading font-semibold tracking-wide transition-all duration-300 shadow-warm-md hover:shadow-warm-lg group"
              >
                <span>Explore Our Cups</span>
                <ArrowDown className="w-4 h-4 text-gold group-hover:translate-y-0.5 transition-transform" />
              </button>

              <button
                type="button"
                onClick={onBusinessEnquiry}
                className="inline-flex items-center justify-center gap-2 bg-transparent text-forest hover:bg-cream-muted/60 border border-forest/30 hover:border-forest px-7 py-4 rounded-full text-sm font-heading font-semibold tracking-wide transition-all duration-300"
              >
                <span>Business Enquiries</span>
                <ArrowRight className="w-4 h-4 text-forest" />
              </button>
            </div>

            {/* Subdued Editorial Footnote */}
            <div className="pt-6 border-t border-cream-border/70 flex items-center gap-8 text-xs font-heading text-charcoal/65">
              <div>
                <span className="block font-serif font-bold text-base text-forest">100%</span>
                <span>Edible Wafer Vessel</span>
              </div>
              <div className="h-6 w-px bg-cream-border" />
              <div>
                <span className="block font-serif font-bold text-base text-forest">40+ Mins</span>
                <span>Hot Beverage Resistance</span>
              </div>
              <div className="h-6 w-px bg-cream-border" />
              <div>
                <span className="block font-serif font-bold text-base text-forest">Zero</span>
                <span>Disposable Trash</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Product Photography Campaign Image */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg lg:max-w-none">
              
              {/* Main Product Photography Container with Warm Studio Lighting */}
              <div className="relative rounded-3xl overflow-hidden editorial-frame bg-cream-muted/50 border border-cream-border">
                <img
                  src="/images/hero-edible-cup.jpg"
                  alt="CUP2EAT Edible Cup with roasted coffee beans on warm natural ground"
                  className="w-full h-[440px] sm:h-[540px] lg:h-[620px] object-cover object-center transition-transform duration-700 hover:scale-105"
                  loading="eager"
                />

                {/* Subtle bottom vignette to ground the image */}
                <div className="absolute inset-0 bg-gradient-to-t from-deep/20 via-transparent to-transparent pointer-events-none" />

                {/* Editorial Corner Plate */}
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs font-heading bg-cream-soft/90 backdrop-blur-md px-5 py-3 rounded-2xl border border-cream-border shadow-warm-sm">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-terracotta" />
                    <span className="font-semibold text-forest">Original Baked Edition</span>
                  </div>
                  <span className="text-charcoal/60">Crisp grain wafer & chocolate lip</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
