import { ArrowUpRight } from 'lucide-react';

interface WhereItBelongsProps {
  onContactClick: () => void;
}

export const WhereItBelongs = ({ onContactClick }: WhereItBelongsProps) => {
  return (
    <section id="venues" className="py-24 sm:py-32 bg-cream-soft border-y border-cream-border/70 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-forest" />
            <span className="text-xs font-heading font-semibold tracking-[0.2em] uppercase text-forest/75">
              Real-World Applications
            </span>
          </div>
          <h2 className="text-editorial-h2 font-serif font-normal text-forest leading-[1.08] tracking-tight">
            Bring something different <br />
            <span className="italic">to the table.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-charcoal/75 leading-relaxed font-normal">
            From specialty espresso bars to luxury weddings and brand pop-ups, CUP2EAT transforms beverage service into an unforgettable brand signature.
          </p>
        </div>

        {/* Asymmetrical Editorial Photographic Collage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Large Focal Image & Editorial Overlay (7 Columns) */}
          <div className="lg:col-span-7 flex flex-col justify-between rounded-3xl overflow-hidden editorial-frame bg-cream border border-cream-border group">
            <div className="relative h-[340px] sm:h-[460px] overflow-hidden">
              <img
                src="/images/cafe-table-pour.jpg"
                alt="Artisan cortado served in a CUP2EAT edible cup on a specialty coffee bar counter"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep/75 via-deep/20 to-transparent" />
              
              <div className="absolute bottom-8 left-8 right-8 text-cream-soft">
                <span className="text-xs font-heading font-semibold uppercase tracking-widest text-gold-light">
                  Cafés & Specialty Roasters
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-normal text-white mt-1">
                  The Signature Morning Pour
                </h3>
                <p className="text-xs sm:text-sm text-cream/80 mt-2 max-w-lg leading-relaxed">
                  Offer patrons an unexpected ritual. Serving espresso in an edible cup gives guests a reason to photograph, share, and talk about your café.
                </p>
              </div>
            </div>

            {/* Sub-strip detail */}
            <div className="p-6 bg-cream border-t border-cream-border flex flex-wrap items-center justify-between gap-4 text-xs font-heading">
              <span className="text-forest font-semibold">Standard & Cortado Formats Available</span>
              <button
                type="button"
                onClick={onContactClick}
                className="inline-flex items-center gap-1.5 text-forest hover:text-gold-dark transition-colors font-bold"
              >
                <span>Request Sample Kit</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Supporting Asymmetrical Grid (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Top Supporting Block: Boutique Events & Hospitality */}
            <div className="rounded-3xl p-8 bg-forest text-cream-soft border border-gold/30 shadow-warm-md flex flex-col justify-between flex-1">
              <div>
                <span className="text-xs font-heading font-bold uppercase tracking-widest text-gold-light">
                  Events & Brand Pop-Ups
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-normal text-white mt-2">
                  Zero-Waste Gatherings
                </h3>
                <p className="text-xs sm:text-sm text-cream/80 mt-3 leading-relaxed font-normal">
                  Eliminate unsightly overflowing trash bins at exhibitions, weddings, and galas. An edible vessel leaves no disposable waste behind while delighting attendees.
                </p>
              </div>

              <div className="pt-6 border-t border-cream/15 flex items-center justify-between text-xs text-cream/70">
                <span>Festivals · Galas · Expos</span>
                <span className="text-gold font-semibold">Bulk Crates Available</span>
              </div>
            </div>

            {/* Bottom Supporting Block: Hotels & Fine Dining */}
            <div className="rounded-3xl p-8 bg-cream border border-cream-border shadow-warm-sm flex flex-col justify-between flex-1">
              <div>
                <span className="text-xs font-heading font-bold uppercase tracking-widest text-forest/75">
                  Hotels & Fine Dining
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-normal text-forest mt-2">
                  Memorable VIP Amenity
                </h3>
                <p className="text-xs sm:text-sm text-charcoal/75 mt-3 leading-relaxed font-normal">
                  Elevate guest check-in with a warm welcome herbal tea served in an edible cup, or introduce tasting flights and dessert courses that conclude with a crisp bite.
                </p>
              </div>

              <div className="pt-6 border-t border-cream-border/60 flex items-center justify-between text-xs text-charcoal/60">
                <span>Luxury Hospitality</span>
                <span className="text-forest font-semibold">Custom Branding Option</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
