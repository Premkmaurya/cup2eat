import { Coffee, UtensilsCrossed, Hotel, CalendarDays, Briefcase, PartyPopper, ArrowRight } from 'lucide-react';

interface WhereItFitsProps {
  onExploreBusiness: () => void;
}

export const WhereItFits = ({ onExploreBusiness }: WhereItFitsProps) => {
  const venues = [
    {
      title: 'Cafés & Specialty Coffee',
      tagline: 'Signature Espresso Experience',
      desc: 'Offer guests an edible cortado or espresso cup as your house specialty or seasonal feature.',
      icon: Coffee,
      bgTone: 'from-[#123D32] to-[#0E2E26]',
      accentBadge: 'High Daily Footfall',
    },
    {
      title: 'Boutique Restaurants',
      tagline: 'Memorable Amuse-Bouche & Desserts',
      desc: 'Serve after-dinner coffee flights, affogatos, or tasting course palate cleansers with zero waste.',
      icon: UtensilsCrossed,
      bgTone: 'from-[#184639] to-[#123D32]',
      accentBadge: 'Culinary Differentiation',
    },
    {
      title: 'Luxury Hotels & Resorts',
      tagline: 'Sustainable Welcome Hospitality',
      desc: 'Delight arriving VIP guests with welcome herbal teas or espresso served in a bespoke edible cup.',
      icon: Hotel,
      bgTone: 'from-[#0B2822] to-[#153D33]',
      accentBadge: 'Premium Guest Experience',
    },
    {
      title: 'Events & Exhibitions',
      tagline: 'Zero-Waste Expo Serving',
      desc: 'Eliminate overflowing trash cans at exhibition halls and brand pop-ups while generating high buzz.',
      icon: CalendarDays,
      bgTone: 'from-[#144237] to-[#0D2E26]',
      accentBadge: 'High Visual Impact',
    },
    {
      title: 'Corporate Gatherings',
      tagline: 'Forward-Thinking Meetings',
      desc: 'Showcase sustainability and innovation in boardrooms, investor summits, and client retreats.',
      icon: Briefcase,
      bgTone: 'from-[#1B4D3E] to-[#123D32]',
      accentBadge: 'Brand Alignment',
    },
    {
      title: 'Catering & Banquets',
      tagline: 'Scalable Green Service',
      desc: 'Simplify cleanup for weddings, cocktail hours, and banquets with pre-packaged edible vessels.',
      icon: PartyPopper,
      bgTone: 'from-[#0F362C] to-[#0A241E]',
      accentBadge: 'Efficient Logistics',
    },
  ];

  return (
    <section id="for-businesses" className="py-20 sm:py-28 bg-deep text-cream relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-forest/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-cream/15">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-gold" />
              <span className="text-xs font-heading font-semibold uppercase tracking-widest text-gold-light">
                B2B Commercial Applications
              </span>
            </div>
            <h2 className="text-fluid-h2 font-heading font-bold text-white">
              Bring something different to your customers.
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm sm:text-base text-cream/75 max-w-md font-normal">
            Designed to seamlessly integrate into existing commercial bar flows, catering stations, and event setups.
          </p>
        </div>

        {/* 6 Venues Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {venues.map((v) => {
            const Icon = v.icon;
            return (
              <div
                key={v.title}
                className="bg-gradient-to-br from-[#123D32]/80 to-[#0A2620]/90 border border-gold/20 hover:border-gold/50 rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-deep-lg group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-forest-light/60 border border-gold/30 flex items-center justify-center text-gold-light group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-heading font-medium text-gold/80 bg-deep/80 px-2.5 py-1 rounded-full border border-gold/15">
                      {v.accentBadge}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-lg sm:text-xl text-white mb-1">
                    {v.title}
                  </h3>
                  
                  <p className="text-xs font-heading font-semibold text-gold-light uppercase tracking-wider mb-3">
                    {v.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-cream/80 leading-relaxed font-normal">
                    {v.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-cream/10 flex items-center justify-between text-xs text-cream/60">
                  <span>Available in Bulk Packs</span>
                  <span className="text-gold font-semibold group-hover:translate-x-0.5 transition-transform">→</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Bar */}
        <div className="mt-14 sm:mt-18 pt-8 border-t border-cream/15 flex flex-col sm:flex-row items-center justify-between gap-6 bg-forest/50 p-6 sm:p-8 rounded-2xl border border-gold/30">
          <div>
            <h3 className="font-heading font-bold text-xl sm:text-2xl text-white">
              Ready to introduce CUP2EAT to your venue?
            </h3>
            <p className="text-sm text-cream/80 mt-1 font-normal">
              Request sample kits, wholesale price sheets, and commercial serving advice.
            </p>
          </div>
          <button
            type="button"
            onClick={onExploreBusiness}
            className="inline-flex items-center gap-3 bg-gold hover:bg-gold-light text-deep font-heading font-semibold text-sm px-6 py-3.5 rounded-full shadow-warm-md transition-all duration-200 shrink-0"
          >
            <span>Explore Business Opportunities</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
