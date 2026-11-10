import { Utensils, HeartHandshake } from 'lucide-react';

export const BrandIntro: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-cream-soft border-y border-cream-border/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Showcase Side */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden border border-cream-border shadow-warm-lg bg-cream">
              {/* High-quality lifestyle aesthetic visual presentation */}
              <div className="relative h-[380px] sm:h-[460px] bg-gradient-to-br from-cream-muted via-cream to-[#ECE4D0] p-8 flex flex-col justify-between">
                
                {/* Visual Backdrop Graphic */}
                <div className="absolute inset-0 opacity-20 wafer-pattern pointer-events-none" />
                
                {/* Top Badge */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-xs font-heading font-bold uppercase tracking-wider text-forest bg-cream-soft px-3 py-1.5 rounded-full border border-forest/15">
                    Mindful Serving
                  </span>
                  <span className="text-xs font-heading font-medium text-charcoal/60">
                    Founded by Varun Khera
                  </span>
                </div>

                {/* Central Artful Composition */}
                <div className="relative z-10 my-auto text-center py-6 flex flex-col items-center">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-2 border-gold/40 p-1.5 bg-forest/5 flex items-center justify-center mb-6">
                    <img src="/logo-mark.svg" alt="CUP2EAT Logo" className="w-full h-full object-contain" />
                  </div>
                  <blockquote className="font-heading font-semibold text-xl sm:text-2xl text-forest max-w-md tracking-tight leading-snug">
                    “The cup is not trash. It is the dessert.”
                  </blockquote>
                  <p className="text-xs font-heading text-charcoal/60 uppercase tracking-widest mt-2">
                    CUP2EAT Ethos
                  </p>
                </div>

                {/* Bottom Attribute Strip */}
                <div className="relative z-10 pt-4 border-t border-forest/10 grid grid-cols-3 gap-2 text-center">
                  <div>
                    <span className="block font-heading font-bold text-sm text-forest">100%</span>
                    <span className="text-[11px] text-charcoal/70">Edible</span>
                  </div>
                  <div className="border-x border-forest/10">
                    <span className="block font-heading font-bold text-sm text-forest">40+ Min</span>
                    <span className="text-[11px] text-charcoal/70">Liquid Hold</span>
                  </div>
                  <div>
                    <span className="block font-heading font-bold text-sm text-forest">Zero</span>
                    <span className="text-[11px] text-charcoal/70">Paper Waste</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Editorial Content Side */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6 sm:space-y-8">
            <div className="inline-flex items-center gap-2">
              <span className="h-px w-6 bg-gold" />
              <span className="text-xs font-heading font-semibold uppercase tracking-widest text-gold-dark">
                A Fresh Perspective
              </span>
            </div>

            <h2 className="text-fluid-h2 font-heading font-bold text-forest leading-[1.12]">
              More than just a cup.
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-charcoal/80 leading-relaxed font-normal">
              <p>
                Why throw away the cup when the experience can continue? <strong className="font-semibold text-forest">CUP2EAT</strong> brings a new idea to beverage serving with edible cups designed to make every sip a little more interesting.
              </p>
              <p className="text-sm sm:text-base text-charcoal/75">
                Crafted using wholesome grains and baked wafer craft, each cup provides a sturdy vessel for warm espressos, teas, hot chocolates, or chilled creations — concluding with a crispy, enjoyable wafer snack instead of disposable paper waste.
              </p>
            </div>

            {/* Feature Bullet Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-cream-border">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-forest/5 text-forest mt-0.5">
                  <Utensils className="w-4 h-4 text-forest" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-sm text-forest">Eat Your Drink</h3>
                  <p className="text-xs text-charcoal/70 mt-0.5">A complete culinary loop from first pour to final bite.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-forest/5 text-forest mt-0.5">
                  <HeartHandshake className="w-4 h-4 text-forest" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-sm text-forest">Memorable Hospitality</h3>
                  <p className="text-xs text-charcoal/70 mt-0.5">Delight your patrons with a tactile, share-worthy ritual.</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
