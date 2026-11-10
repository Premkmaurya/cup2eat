import { useState } from 'react';
import { ArrowUpRight, CheckCircle2, Droplets, Flame } from 'lucide-react';

interface ProductShowcaseProps {
  onEnquire: (productName?: string) => void;
}

interface ProductVariant {
  id: string;
  name: string;
  capacity: string;
  flavourNote: string;
  bestFor: string;
  description: string;
  highlightTag?: string;
  liquidDuration: string;
}

export const ProductShowcase: React.FC<ProductShowcaseProps> = ({ onEnquire }) => {
  // Configurable product showcase based on real product line
  const products: ProductVariant[] = [
    {
      id: 'classic-espresso',
      name: 'The Espresso & Cortado Cup',
      capacity: '60ml – 110ml (Approx)',
      flavourNote: 'Natural Crispy Baked Wafer',
      bestFor: 'Espresso, Cortado, Macchiato, Tasting Shots',
      description: 'Engineered with a dense, crisp waffle structure designed to withstand steaming espressos while preserving aroma and structural integrity.',
      highlightTag: 'Flagship Edition',
      liquidDuration: 'Holds liquid up to 40 mins',
    },
    {
      id: 'regular-serving',
      name: 'The Standard Beverage Cup',
      capacity: '150ml – 220ml (Approx)',
      flavourNote: 'Subtle Roasted Grain / Chocolate Lined',
      bestFor: 'Cappuccino, Filter Coffee, Artisan Teas, Hot Cocoa',
      description: 'The everyday café staple. Offers a rich, satisfying beverage volume followed by a crispy, enjoyable wafer biscuit finish.',
      highlightTag: 'Café Favourite',
      liquidDuration: 'Holds hot drinks crisp',
    },
    {
      id: 'dessert-treat',
      name: 'The Dessert & Gelato Vessel',
      capacity: 'Chilled & Soft Serve',
      flavourNote: 'Sweetened Wafer Base',
      bestFor: 'Ice Creams, Affogato, Mousse & Tasting Events',
      description: 'Specially tempered to pair with chilled dairy and frozen treats, transforming dessert into an entirely zero-waste experience.',
      highlightTag: 'Event Special',
      liquidDuration: 'Leak-resistant formulation',
    },
  ];

  const [activeProduct, setActiveProduct] = useState<string>(products[0].id);
  const selected = products.find((p) => p.id === activeProduct) || products[0];

  return (
    <section id="product" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-6 border-b border-cream-border">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-forest" />
              <span className="text-xs font-heading font-semibold uppercase tracking-widest text-forest">
                CUP2EAT Collection
              </span>
            </div>
            <h2 className="text-fluid-h2 font-heading font-bold text-forest">
              Meet your new favourite cup.
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm sm:text-base text-charcoal/70 max-w-md font-normal">
            Bespoke edible drinkware designed for modern hospitality, coffee roasters, and mindful gatherings.
          </p>
        </div>

        {/* Editorial Product Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Product Selection & Feature List */}
          <div className="lg:col-span-5 space-y-4">
            {products.map((item) => {
              const isSelected = item.id === activeProduct;
              return (
                <div
                  key={item.id}
                  onClick={() => setActiveProduct(item.id)}
                  className={`p-6 rounded-xl border transition-all duration-300 cursor-pointer text-left ${
                    isSelected
                      ? 'bg-cream-soft border-gold shadow-warm-md translate-x-1'
                      : 'bg-cream/50 border-cream-border/80 hover:bg-cream-soft/60 hover:border-forest/20'
                  }`}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      setActiveProduct(item.id);
                    }
                  }}
                  aria-pressed={isSelected}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-heading font-semibold uppercase tracking-wider text-forest/70">
                      {item.flavourNote}
                    </span>
                    {item.highlightTag && (
                      <span className="text-[11px] font-heading font-medium bg-forest/10 text-forest px-2.5 py-0.5 rounded-full">
                        {item.highlightTag}
                      </span>
                    )}
                  </div>
                  <h3 className="font-heading font-bold text-lg sm:text-xl text-forest">
                    {item.name}
                  </h3>
                  <p className="text-xs text-charcoal/70 mt-1 line-clamp-2">
                    {item.description}
                  </p>
                  <div className="mt-4 flex items-center justify-between text-xs font-heading">
                    <span className="text-forest font-semibold">{item.capacity}</span>
                    <span className={`flex items-center gap-1 ${isSelected ? 'text-forest' : 'text-charcoal/50'}`}>
                      <span>View Specifications</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Hero Showcase Visual & Spec Card */}
          <div className="lg:col-span-7">
            <div className="bg-forest text-cream-soft rounded-2xl p-8 sm:p-10 shadow-deep-lg border border-gold/30 relative overflow-hidden">
              
              {/* Subtle background motif */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 space-y-6">
                
                {/* Variant Header */}
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-cream/15 pb-6">
                  <div>
                    <span className="text-xs font-heading font-semibold tracking-widest uppercase text-gold-light">
                      Selected Model Details
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white mt-1">
                      {selected.name}
                    </h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => onEnquire(selected.name)}
                    className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-deep font-heading font-semibold text-xs tracking-wide px-5 py-2.5 rounded-full transition-colors shadow-sm"
                  >
                    <span>Enquire for Bulk Order</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Main Product Description */}
                <p className="text-sm sm:text-base text-cream/90 leading-relaxed font-normal">
                  {selected.description}
                </p>

                {/* Technical / Usability Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="bg-deep/60 border border-gold/20 p-4 rounded-xl">
                    <div className="flex items-center gap-2 text-gold-light text-xs font-heading font-semibold uppercase tracking-wider mb-1">
                      <Flame className="w-4 h-4 text-gold" />
                      <span>Temperature Endurance</span>
                    </div>
                    <p className="text-xs text-cream/80">
                      Formulated to hold hot steaming liquids (coffee, tea, hot cocoa) without softening or seeping through.
                    </p>
                  </div>

                  <div className="bg-deep/60 border border-gold/20 p-4 rounded-xl">
                    <div className="flex items-center gap-2 text-gold-light text-xs font-heading font-semibold uppercase tracking-wider mb-1">
                      <Droplets className="w-4 h-4 text-gold" />
                      <span>Moisture Integrity</span>
                    </div>
                    <p className="text-xs text-cream/80">
                      Internal food-grade barrier maintains crunchiness throughout normal beverage drinking duration.
                    </p>
                  </div>
                </div>

                {/* Key Attributes Checklist */}
                <div className="pt-4 border-t border-cream/15 space-y-2.5">
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-cream/90">
                    <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                    <span><strong>Recommended Applications:</strong> {selected.bestFor}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-cream/90">
                    <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                    <span><strong>Sensory Finish:</strong> Crisp, wholesome biscuit texture that compliments espresso notes</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-cream/90">
                    <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                    <span><strong>Disposal Factor:</strong> 100% Edible or safely compostable in standard natural conditions</span>
                  </div>
                </div>

                {/* Bottom Callout */}
                <div className="pt-2 text-xs text-cream/60 italic">
                  * Custom embossing and size specifications available upon request for verified commercial partners.
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
