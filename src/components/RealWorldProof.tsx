import { ArrowUpRight, Play, Heart, MessageCircle } from 'lucide-react';
import { InstagramIcon } from './InstagramIcon';

export const RealWorldProof = () => {
  const reelCards = [
    {
      title: 'First-time reactions to eating the cup',
      caption: 'Watch guests finish their drink and realise the cup itself is a crisp baked wafer snack.',
      tag: 'Live Reactions',
      stats: 'Tasting Pop-Up',
      type: 'video',
    },
    {
      title: 'The 40-Minute Hot Coffee Test',
      caption: 'Real-time demonstration of an espresso pour held for 40 minutes with zero leakage.',
      tag: 'Product Demo',
      stats: 'Coffee Lab',
      type: 'demo',
    },
    {
      title: 'Barista Service Flow at Peak Rush',
      caption: 'How specialty coffee bars integrate CUP2EAT directly under standard espresso group heads.',
      tag: 'Café Operations',
      stats: 'Barista Feature',
      type: 'feature',
    },
  ];

  return (
    <section id="community" className="py-24 sm:py-32 bg-cream relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header with Instagram Link */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-cream-border">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-forest" />
              <span className="text-xs font-heading font-semibold tracking-[0.2em] uppercase text-forest/75">
                Authentic Verification
              </span>
            </div>
            <h2 className="text-editorial-h2 font-serif font-normal text-forest tracking-tight">
              Seen, tried <br className="hidden sm:inline" />
              <span className="italic">and enjoyed.</span>
            </h2>
          </div>

          <div className="mt-4 md:mt-0">
            <a
              href="https://www.instagram.com/cup2eat/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-cream-soft hover:bg-forest hover:text-cream-soft border border-cream-border text-forest px-5 py-2.5 rounded-full text-xs font-heading font-semibold transition-all duration-300 shadow-warm-sm"
            >
              <InstagramIcon className="w-4 h-4 text-terracotta" />
              <span>Explore @cup2eat on Instagram</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Featured Lifestyle Story + Reel Gallery Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Featured Authentic Customer Lifestyle Photograph */}
          <div className="lg:col-span-5 rounded-3xl overflow-hidden editorial-frame bg-cream-soft border border-cream-border flex flex-col justify-between">
            <div className="relative h-[340px] sm:h-[400px] overflow-hidden">
              <img
                src="/images/social-people.jpg"
                alt="Friends enjoying drinks in sustainable edible cups outdoor in the sunshine"
                className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep/80 via-deep/20 to-transparent" />
              
              <div className="absolute top-4 left-4 bg-cream/90 backdrop-blur-md px-3.5 py-1 rounded-full text-[11px] font-heading font-semibold text-forest">
                Real Community Moments
              </div>

              <div className="absolute bottom-6 left-6 right-6 text-cream-soft">
                <blockquote className="font-serif italic text-lg sm:text-xl text-white leading-snug">
                  “People don't throw them away. They share them, photograph them, and eat every crumb.”
                </blockquote>
                <p className="text-xs font-heading text-gold-light uppercase tracking-wider mt-2">
                  Pop-up Tasting Feedback
                </p>
              </div>
            </div>

            <div className="p-6 bg-cream border-t border-cream-border flex items-center justify-between text-xs font-heading text-charcoal/70">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1"><Heart className="w-3.5 h-3.5 text-terracotta" /> Community Loved</span>
                <span className="flex items-center gap-1"><MessageCircle className="w-3.5 h-3.5" /> Zero Rubbish</span>
              </div>
              <span className="text-forest font-semibold">#Cup2Eat</span>
            </div>
          </div>

          {/* Right: Instagram Media Reel Cards (3 Horizontal Cards) */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-4">
            {reelCards.map((reel) => (
              <a
                key={reel.title}
                href="https://www.instagram.com/cup2eat/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-cream-soft hover:bg-cream rounded-2xl p-6 border border-cream-border hover:border-gold/50 transition-all duration-300 shadow-warm-sm hover:shadow-warm-md flex items-center justify-between gap-6 group"
              >
                <div className="space-y-1.5 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-heading font-semibold uppercase tracking-wider text-forest/70 bg-cream px-2.5 py-0.5 rounded-full border border-cream-border">
                      {reel.tag}
                    </span>
                    <span className="text-xs text-charcoal/50 font-heading">
                      {reel.stats}
                    </span>
                  </div>
                  <h3 className="font-serif font-bold text-lg text-forest group-hover:text-forest-light transition-colors">
                    {reel.title}
                  </h3>
                  <p className="text-xs text-charcoal/70 max-w-md font-normal leading-relaxed">
                    {reel.caption}
                  </p>
                </div>

                <div className="w-12 h-12 rounded-full bg-forest text-cream-soft flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                  <Play className="w-4 h-4 ml-0.5 text-gold" />
                </div>
              </a>
            ))}

            {/* Transparency Note */}
            <div className="p-4 rounded-xl bg-cream-soft/60 border border-cream-border/60 text-xs text-charcoal/65 font-normal">
              <strong>Editorial Transparency:</strong> We never manufacture synthetic testimonials or mock reviews. All footage, tasting feedback, and client demonstrations are broadcast openly on our verified Instagram page <a href="https://www.instagram.com/cup2eat/" target="_blank" rel="noopener noreferrer" className="text-forest font-semibold underline">@cup2eat</a>.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
