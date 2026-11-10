import { ShieldCheck, Package, ThermometerSun, FileText, CheckCircle2 } from 'lucide-react';

export const QualitySection = () => {
  return (
    <section className="py-20 sm:py-28 bg-cream-soft border-t border-cream-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-forest" />
            <span className="text-xs font-heading font-semibold uppercase tracking-widest text-forest">
              Food Safety & Assurance
            </span>
          </div>
          <h2 className="text-fluid-h2 font-heading font-bold text-forest">
            Quality matters.
          </h2>
          <p className="mt-3 text-base text-charcoal/75 leading-relaxed font-normal">
            Because CUP2EAT is an edible food product, our manufacturing, storage, and handling standards adhere strictly to food safety guidelines.
          </p>
        </div>

        {/* 4 Pillars Grid: FSSAI Compliance, Storage, Handling, Batch Integrity */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          
          {/* FSSAI Standards Card */}
          <div className="bg-cream p-7 rounded-2xl border border-cream-border shadow-warm-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-forest/10 flex items-center justify-center text-forest mb-5">
                <ShieldCheck className="w-6 h-6 text-forest" />
              </div>
              <h3 className="font-heading font-bold text-lg text-forest mb-2">
                FSSAI Compliance
              </h3>
              <p className="text-xs sm:text-sm text-charcoal/75 leading-relaxed">
                Manufactured under food safety standards verified with Food Safety and Standards Authority of India (FSSAI) guidelines.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-cream-border/60">
              <span className="text-[11px] font-heading font-medium text-forest/70 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-forest" />
                <span>Verified highlight on @cup2eat</span>
              </span>
            </div>
          </div>

          {/* Safe Food Grade Ingredients */}
          <div className="bg-cream p-7 rounded-2xl border border-cream-border shadow-warm-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-gold/15 flex items-center justify-center text-gold-dark mb-5">
                <FileText className="w-6 h-6 text-gold-dark" />
              </div>
              <h3 className="font-heading font-bold text-lg text-forest mb-2">
                Edible Ingredients
              </h3>
              <p className="text-xs sm:text-sm text-charcoal/75 leading-relaxed">
                Formulated using natural grains, wholesome flours, and food-grade barriers. Zero synthetic coatings or artificial waxes.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-cream-border/60">
              <span className="text-[11px] font-heading font-medium text-forest/70 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-forest" />
                <span>Food Safety Certified</span>
              </span>
            </div>
          </div>

          {/* Proper Storage Guidance */}
          <div className="bg-cream p-7 rounded-2xl border border-cream-border shadow-warm-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-terracotta/15 flex items-center justify-center text-terracotta mb-5">
                <ThermometerSun className="w-6 h-6 text-terracotta" />
              </div>
              <h3 className="font-heading font-bold text-lg text-forest mb-2">
                Storage & Shelf Life
              </h3>
              <p className="text-xs sm:text-sm text-charcoal/75 leading-relaxed">
                Store in a cool, dry place away from direct humidity. Sealed packaging preserves wafer crispness for commercial shelf stability.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-cream-border/60">
              <span className="text-[11px] font-heading font-medium text-forest/70 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-forest" />
                <span>Moisture-Barrier Packaging</span>
              </span>
            </div>
          </div>

          {/* Barista & Service Handling */}
          <div className="bg-cream p-7 rounded-2xl border border-cream-border shadow-warm-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-forest/10 flex items-center justify-center text-forest mb-5">
                <Package className="w-6 h-6 text-forest" />
              </div>
              <h3 className="font-heading font-bold text-lg text-forest mb-2">
                Hygienic Handling
              </h3>
              <p className="text-xs sm:text-sm text-charcoal/75 leading-relaxed">
                Supplied with protective serving sleeves and commercial packing protocols so baristas dispense cups with complete hygiene.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-cream-border/60">
              <span className="text-[11px] font-heading font-medium text-forest/70 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-forest" />
                <span>Commercial Dispensary Ready</span>
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
