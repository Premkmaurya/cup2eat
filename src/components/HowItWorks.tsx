import { useState } from 'react';
import { Coffee, Smile, Sparkles, ArrowRight } from 'lucide-react';

export const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState<number>(1);

  const steps = [
    {
      num: '01',
      title: 'Pour',
      short: 'Fill the cup with your beverage.',
      detail: 'Serve hot espresso, filter coffee, artisan tea, or chilled pours directly into the edible cup just as you would any standard cup.',
      icon: Coffee,
      accent: 'bg-forest text-cream',
    },
    {
      num: '02',
      title: 'Sip',
      short: 'Enjoy your drink using the edible cup.',
      detail: 'Savor your beverage comfortably. The resilient natural edible barrier prevents seepage, keeping both your hands clean and the cup crisp.',
      icon: Smile,
      accent: 'bg-gold-dark text-cream',
    },
    {
      num: '03',
      title: 'Eat',
      short: 'Enjoy the cup itself, as intended.',
      detail: 'Finish your drink and bite into the wholesome, crispy wafer cup. Zero waste left behind—just a satisfying biscuit snack to end on.',
      icon: Sparkles,
      accent: 'bg-terracotta text-cream',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-cream-soft border-y border-cream-border/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-forest" />
            <span className="text-xs font-heading font-semibold uppercase tracking-widest text-forest">
              The Experience Ritual
            </span>
          </div>
          <h2 className="text-fluid-h2 font-heading font-bold text-forest">
            Three steps. One delicious ending.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-charcoal/70 max-w-xl mx-auto">
            From the barista’s counter to the very last bite, here is how CUP2EAT transforms a daily habit into a zero-waste celebration.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="relative">
          
          {/* Subtle horizontal connecting line on desktop */}
          <div className="hidden lg:block absolute top-1/2 left-[15%] right-[15%] h-[1.5px] bg-gradient-to-r from-forest/20 via-gold/40 to-terracotta/30 -translate-y-8 z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isSelected = activeStep === idx + 1;

              return (
                <div
                  key={step.num}
                  onClick={() => setActiveStep(idx + 1)}
                  className={`bg-cream rounded-2xl p-8 border transition-all duration-300 text-left relative cursor-pointer group ${
                    isSelected
                      ? 'border-forest/40 shadow-warm-lg -translate-y-1'
                      : 'border-cream-border/90 hover:border-forest/20 hover:shadow-warm-md'
                  }`}
                >
                  {/* Step Number & Icon Header */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-heading font-extrabold text-3xl sm:text-4xl text-forest/20 group-hover:text-forest/40 transition-colors">
                      {step.num}
                    </span>
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${step.accent} shadow-sm group-hover:scale-105 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Step Title & Content */}
                  <h3 className="font-heading font-bold text-2xl text-forest mb-2">
                    {step.title}
                  </h3>
                  <p className="font-heading font-medium text-sm text-forest-light mb-3">
                    {step.short}
                  </p>
                  <p className="text-xs sm:text-sm text-charcoal/75 leading-relaxed">
                    {step.detail}
                  </p>

                  {/* Bottom indicator cue */}
                  <div className="mt-6 pt-4 border-t border-cream-border/60 flex items-center justify-between text-xs font-heading font-medium text-forest/70">
                    <span>Phase {idx + 1} of 3</span>
                    <ArrowRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? 'translate-x-1 text-forest' : 'text-charcoal/40'}`} />
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Sensory Tagline Callout */}
        <div className="mt-16 text-center">
          <p className="inline-flex items-center gap-2 bg-cream px-5 py-2 rounded-full border border-forest/10 text-xs font-heading font-semibold text-forest uppercase tracking-wider">
            <span className="text-gold">★</span> No soggy cups · No chemical coatings · Pure edible grain joy
          </p>
        </div>

      </div>
    </section>
  );
};
