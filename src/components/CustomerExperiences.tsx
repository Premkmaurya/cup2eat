import { ArrowUpRight, Heart, Share2, Sparkles, CheckCircle2 } from 'lucide-react';
import { InstagramIcon } from './InstagramIcon';

export const CustomerExperiences: React.FC = () => {
  // Authentic Instagram community & experience cards based on real public demonstrations
  const experienceMoments = [
    {
      title: 'First Sip Reaction',
      context: 'Live Tasting Demonstrations',
      note: 'Patrons experiencing the delightful surprise of an edible cup that stays sturdy throughout coffee hour.',
      tag: 'Café Tasting',
    },
    {
      title: 'The Final Bite',
      context: 'Post-Drink Experience',
      note: 'Finishing the last sip of hot chocolate and eating the baked waffle cup with zero paper trash.',
      tag: 'Zero Waste',
    },
    {
      title: 'Barista Service Flow',
      context: 'Commercial Integration',
      note: 'Baristas pouring hot espressos directly into CUP2EAT vessels seamlessly during high-volume hours.',
      tag: 'Espresso Bar',
    },
    {
      title: 'Exhibition & Pop-Up Events',
      context: 'Event Hospitality',
      note: 'Showcasing edible cup sustainability live at food & beverage showcases across India.',
      tag: 'Live Showcase',
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Instagram link */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-6 border-b border-cream-border">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-forest" />
              <span className="text-xs font-heading font-semibold uppercase tracking-widest text-forest">
                Social Verification & Moments
              </span>
            </div>
            <h2 className="text-fluid-h2 font-heading font-bold text-forest">
              Seen, tried and enjoyed.
            </h2>
          </div>

          <div className="mt-4 md:mt-0 flex items-center gap-3">
            <a
              href="https://www.instagram.com/cup2eat/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-cream-soft hover:bg-forest hover:text-cream border border-forest/20 text-forest px-4 py-2 rounded-full text-xs font-heading font-semibold transition-all duration-200"
            >
              <InstagramIcon className="w-4 h-4 text-terracotta" />
              <span>Follow @cup2eat on Instagram</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Experience Showcase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {experienceMoments.map((item) => (
            <div
              key={item.title}
              className="bg-cream-soft rounded-2xl p-6 border border-cream-border hover:border-gold/40 transition-all duration-300 shadow-warm-sm hover:shadow-warm-md flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-heading font-semibold tracking-wider uppercase text-forest bg-forest/5 px-2.5 py-1 rounded-full">
                    {item.tag}
                  </span>
                  <div className="flex items-center gap-1 text-charcoal/40">
                    <Heart className="w-3.5 h-3.5" />
                    <Share2 className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div className="h-32 rounded-xl bg-gradient-to-tr from-cream-muted via-cream to-cream-soft border border-cream-border/70 flex flex-col items-center justify-center p-4 text-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-forest/10 flex items-center justify-center text-forest mb-2">
                    <Sparkles className="w-5 h-5 text-gold-dark" />
                  </div>
                  <span className="text-xs font-heading font-bold text-forest">
                    {item.title}
                  </span>
                  <span className="text-[10px] text-charcoal/60 mt-0.5">
                    {item.context}
                  </span>
                </div>

                <p className="text-xs text-charcoal/80 leading-relaxed">
                  {item.note}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-cream-border/60 flex items-center justify-between text-[11px] text-charcoal/60">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-forest" />
                  <span>Public Showcase</span>
                </span>
                <span>#Cup2Eat</span>
              </div>
            </div>
          ))}
        </div>

        {/* Notice on Real Social Proof */}
        <div className="mt-12 bg-cream-soft/70 border border-cream-border rounded-xl p-5 text-center max-w-2xl mx-auto">
          <p className="text-xs text-charcoal/70 leading-normal">
            <strong>Authentic Brand Transparency:</strong> We share real customer orders, tasting pop-ups, and product updates directly on our official Instagram. Explore actual customer clips, barista demonstrations, and live reviews at{' '}
            <a
              href="https://www.instagram.com/cup2eat/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-forest font-semibold underline underline-offset-2 hover:text-gold-dark"
            >
              @cup2eat
            </a>.
          </p>
        </div>

      </div>
    </section>
  );
};
