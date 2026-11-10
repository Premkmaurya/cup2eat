import { ArrowUpRight } from 'lucide-react';

interface ProductStoryProps {
  onLearnMore: () => void;
}

export const ProductStory = ({ onLearnMore }: ProductStoryProps) => {
  return (
    <section id="story" className="py-24 sm:py-32 bg-cream-soft border-y border-cream-border/70 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Editorial Layout: Large Macro Product Photography & Typography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Macro Photograph Side */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden editorial-frame bg-cream border border-cream-border">
              <img
                src="/images/product-story-cup.jpg"
                alt="Close-up macro of steaming coffee inside a baked edible waffle cup with dark chocolate rim and roasted coffee beans"
                className="w-full h-[400px] sm:h-[500px] lg:h-[580px] object-cover object-center transition-transform duration-700 hover:scale-[1.03]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep/30 via-transparent to-transparent pointer-events-none" />

              {/* Minimal Editorial Badge */}
              <div className="absolute top-6 left-6 bg-forest/90 backdrop-blur-md text-cream-soft px-4 py-1.5 rounded-full text-xs font-heading font-medium tracking-wide border border-gold/30">
                Macro Detail · Baked Waffle Architecture
              </div>
            </div>
          </div>

          {/* Editorial Story Text Side */}
          <div className="lg:col-span-5 space-y-7">
            
            <div className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold" />
              <span className="text-xs font-heading font-semibold tracking-[0.2em] uppercase text-forest/75">
                The Product Concept
              </span>
            </div>

            <h2 className="text-editorial-h2 font-serif font-normal text-forest leading-[1.08] tracking-tight">
              More than a way <br />
              <span className="italic">to hold your drink.</span>
            </h2>

            <div className="space-y-5 text-base sm:text-lg text-charcoal/80 leading-relaxed font-normal">
              <p>
                Conventional paper cups are lined with plastic polymers that take decades to disintegrate. We took a radically different path: make the cup delicious.
              </p>
              <p className="text-sm sm:text-base text-charcoal/70">
                Crafted from all-natural grains, every CUP2EAT cup holds piping hot espressos, cappuccinos, or artisan teas with zero sogginess for over 40 minutes. When your beverage is finished, the cup becomes your post-coffee crispy biscuit snack.
              </p>
            </div>

            {/* Editorial Focus Points */}
            <div className="pt-4 border-t border-cream-border space-y-3">
              <div className="flex items-baseline justify-between text-sm py-2 border-b border-cream-border/50">
                <span className="font-heading font-semibold text-forest">Thermal Endurance</span>
                <span className="text-charcoal/70 text-xs">Piping hot coffee, tea & cold desserts</span>
              </div>
              <div className="flex items-baseline justify-between text-sm py-2 border-b border-cream-border/50">
                <span className="font-heading font-semibold text-forest">Sensory Experience</span>
                <span className="text-charcoal/70 text-xs">Crispy baked wafer with subtle roasted notes</span>
              </div>
              <div className="flex items-baseline justify-between text-sm py-2">
                <span className="font-heading font-semibold text-forest">Zero Landfill Trash</span>
                <span className="text-charcoal/70 text-xs">100% Edible or naturally biodegradable</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={onLearnMore}
                className="inline-flex items-center gap-2 text-sm font-heading font-semibold text-forest hover:text-gold-dark transition-colors group"
              >
                <span>View serving applications & specs</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
