import { Compass, Cookie, MessageSquareQuote, Store } from 'lucide-react';

export const WhyCup2Eat = () => {
  const pillars = [
    {
      index: '01',
      title: 'A Different Experience',
      highlight: 'Memorable by default',
      description: 'Turn a regular beverage serving into an experience people remember and want to share. Customers love the unexpected moment of finishing their drink and enjoying the cup itself.',
      icon: Compass,
    },
    {
      index: '02',
      title: 'Edible by Design',
      highlight: 'Crafted as food',
      description: 'Engineered as an edible baked wafer vessel from the start. Formulated to retain beverage warmth and integrity, then provide a pleasant, crunchy snack afterwards.',
      icon: Cookie,
    },
    {
      index: '03',
      title: 'A Conversation Starter',
      highlight: 'Organic word-of-mouth',
      description: 'Give customers something genuine to talk about. A beverage served in an edible cup naturally invites smiles, social sharing, and repeat visits from curious guests.',
      icon: MessageSquareQuote,
    },
    {
      index: '04',
      title: 'Made for Experiences',
      highlight: 'Cafés, hotels & events',
      description: 'Designed for hospitality innovators. Whether hosting an intimate tasting flight, a high-end corporate gala, or a bustling café rush, CUP2EAT sets your service apart.',
      icon: Store,
    },
  ];

  return (
    <section id="why-cup2eat" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-forest" />
            <span className="text-xs font-heading font-semibold uppercase tracking-widest text-forest">
              Purposeful Distinction
            </span>
          </div>
          <h2 className="text-fluid-h2 font-heading font-bold text-forest">
            Rethink the way you serve.
          </h2>
          <p className="mt-3 text-base text-charcoal/75 leading-relaxed font-normal">
            Disposable single-use cups have been the uninspired standard for decades. CUP2EAT turns the vessel into part of the hospitality experience.
          </p>
        </div>

        {/* 4 Editorial Feature Blocks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {pillars.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.index}
                className="bg-cream-soft rounded-2xl p-8 sm:p-10 border border-cream-border hover:border-forest/30 transition-all duration-300 shadow-warm-sm hover:shadow-warm-md flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-heading font-bold tracking-widest uppercase text-gold-dark bg-cream px-3 py-1 rounded-full border border-gold/20">
                      Pillar {item.index}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-forest/5 flex items-center justify-center text-forest group-hover:bg-forest group-hover:text-cream transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-heading font-bold text-xl sm:text-2xl text-forest mb-2">
                    {item.title}
                  </h3>
                  
                  <p className="text-xs font-heading font-semibold uppercase tracking-wider text-terracotta mb-4">
                    {item.highlight}
                  </p>

                  <p className="text-sm sm:text-base text-charcoal/80 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-cream-border/60 flex items-center gap-2 text-xs font-heading font-medium text-forest/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-forest" />
                  <span>CUP2EAT Standard</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
