import { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const TheExperience = () => {
  const [activeStage, setActiveStage] = useState<number>(0);

  const stages = [
    {
      num: '01',
      title: 'Pour',
      headline: 'Fill with your favourite brew.',
      description: 'Whether it is a rich double espresso, a creamy oat cortado, or an herbal tea, pour directly into the edible cup. The heat-resistant food lining maintains vessel structure immediately upon contact.',
      image: '/images/experience-pour.jpg',
      alt: 'Hand pouring hot espresso from a glass pitcher into the CUP2EAT edible cup',
      caption: 'Stage 01 · Counter Service',
    },
    {
      num: '02',
      title: 'Sip',
      headline: 'Savor every sip at your pace.',
      description: 'Take your time. The cup remains crisp, cool to the touch, and leak-free for up to 40 minutes, ensuring your beverage tastes exactly as the barista crafted it without cardboard aftertaste.',
      image: '/images/experience-sip.jpg',
      alt: 'Guest enjoying a warm sip from the CUP2EAT edible cup in a sunlit café',
      caption: 'Stage 02 · Beverage Leisure',
    },
    {
      num: '03',
      title: 'Eat',
      headline: 'Enjoy the crispy wafer finish.',
      description: 'Once you take your last sip, your cup transforms into a snack. Enjoy the crunchy, lightly toasted grain wafer and chocolate rim. No bin required. No single-use packaging left behind.',
      image: '/images/experience-eat.jpg',
      alt: 'Clean bite taken out of the chocolate-lined edible cup rim, revealing the delicious crispy baked biscuit layers',
      caption: 'Stage 03 · The Delicious Ending',
    },
  ];

  const current = stages[activeStage];

  return (
    <section id="experience" className="py-24 sm:py-32 bg-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-cream-border">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-forest" />
              <span className="text-xs font-heading font-semibold tracking-[0.2em] uppercase text-forest/75">
                The Three-Step Ritual
              </span>
            </div>
            <h2 className="text-editorial-h2 font-serif font-normal text-forest tracking-tight">
              Three steps. <br className="hidden sm:inline" />
              <span className="italic">One delicious ending.</span>
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm sm:text-base text-charcoal/70 max-w-md font-normal">
            A cohesive journey from the espresso grinder to the final bite. Simple, hygienic, and entirely zero-waste.
          </p>
        </div>

        {/* Interactive Visual Journey: Timeline Stage Selector */}
        <div className="grid grid-cols-3 gap-4 mb-10 pb-6 border-b border-cream-border/60">
          {stages.map((st, idx) => (
            <button
              key={st.num}
              type="button"
              onClick={() => setActiveStage(idx)}
              className={`text-left pb-3 transition-all duration-300 relative group ${
                activeStage === idx
                  ? 'opacity-100'
                  : 'opacity-50 hover:opacity-80'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="font-serif font-bold text-2xl sm:text-3xl text-forest">
                  {st.num}
                </span>
                <div>
                  <span className="block font-heading font-bold text-sm sm:text-base text-forest">
                    {st.title}
                  </span>
                  <span className="hidden sm:block text-xs text-charcoal/60">
                    Step {idx + 1}
                  </span>
                </div>
              </div>
              {/* Active Underline Indicator */}
              <div
                className={`absolute bottom-0 left-0 right-0 h-[2.5px] transition-all duration-300 ${
                  activeStage === idx ? 'bg-forest' : 'bg-transparent group-hover:bg-cream-border'
                }`}
              />
            </button>
          ))}
        </div>

        {/* Visual Journey Feature Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center bg-cream-soft rounded-3xl p-8 sm:p-12 border border-cream-border shadow-warm-md">
          
          {/* Real Photography for Active Stage */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden editorial-frame bg-cream border border-cream-border aspect-[4/3] sm:aspect-[16/10]">
              <img
                src={current.image}
                alt={current.alt}
                className="w-full h-full object-cover object-center transition-all duration-500 hover:scale-[1.02]"
              />
              <div className="absolute bottom-4 left-4 bg-forest/85 backdrop-blur-md text-cream-soft px-3.5 py-1 rounded-full text-xs font-heading font-medium">
                {current.caption}
              </div>
            </div>
          </div>

          {/* Active Stage Details */}
          <div className="lg:col-span-5 space-y-5">
            <span className="text-xs font-heading font-bold tracking-widest text-gold-dark uppercase">
              Phase {current.num} · {current.title}
            </span>

            <h3 className="text-2xl sm:text-3xl font-serif font-normal text-forest leading-tight">
              {current.headline}
            </h3>

            <p className="text-sm sm:text-base text-charcoal/75 leading-relaxed font-normal">
              {current.description}
            </p>

            <div className="pt-4 border-t border-cream-border/70 flex items-center gap-3 text-xs font-heading text-forest font-semibold">
              <CheckCircle2 className="w-4 h-4 text-forest" />
              <span>Tested for commercial café & event operations</span>
            </div>

            {/* Next stage quick button */}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => setActiveStage((activeStage + 1) % stages.length)}
                className="inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-wider text-terracotta hover:text-forest transition-colors"
              >
                <span>Proceed to next stage</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
