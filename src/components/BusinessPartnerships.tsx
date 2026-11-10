import { useState } from 'react';
import { Send, CheckCircle2, Copy, Check, Sparkles } from 'lucide-react';
import { InstagramIcon } from './InstagramIcon';

export const BusinessPartnerships = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    email: '',
    phone: '',
    businessType: 'Specialty Café / Roastery',
    city: '',
    estimatedVolume: 'Initial Sample Box (50–100 units)',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Please enter your full name.';
    if (!formData.businessName.trim()) errs.businessName = 'Please enter your venue or company name.';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) errs.email = 'Please provide a valid email.';
    if (!formData.city.trim()) errs.city = 'Please specify your city.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  const copySummary = () => {
    const summary = `CUP2EAT Commercial Partnership Request:
Name: ${formData.fullName}
Business: ${formData.businessName} (${formData.businessType})
Location: ${formData.city}
Email: ${formData.email}
Phone: ${formData.phone || 'N/A'}
Volume: ${formData.estimatedVolume}
Notes: ${formData.message || 'Looking forward to discussing sample boxes & bulk pricing.'}`;

    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="business" className="py-24 sm:py-32 bg-cream-soft border-t border-cream-border relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Side: Editorial "From Nature to Table" Print Layout Frame */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-forest" />
              <span className="text-xs font-heading font-semibold tracking-[0.2em] uppercase text-forest/75">
                B2B Wholesale & Enquiries
              </span>
            </div>

            <h2 className="text-editorial-h2 font-serif font-normal text-forest leading-[1.08] tracking-tight">
              Let's put CUP2EAT <br />
              <span className="italic">on your menu.</span>
            </h2>

            <p className="text-base sm:text-lg text-charcoal/80 leading-relaxed font-normal">
              Planning something different for your café, restaurant, hotel, or upcoming event? We supply sample boxes and commercial bulk crates nationwide.
            </p>

            {/* Editorial Magazine Print Visual Frame */}
            <div className="rounded-3xl overflow-hidden editorial-frame border border-cream-border bg-cream relative">
              <img
                src="/images/editorial-table.jpg"
                alt="Editorial print layout: From Nature to Table"
                className="w-full h-[280px] sm:h-[320px] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep/70 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-5 left-5 right-5 text-cream-soft">
                <span className="text-[11px] font-heading font-bold uppercase tracking-widest text-gold-light">
                  Wholesale Standards
                </span>
                <p className="text-xs font-serif italic text-cream/90 mt-1">
                  Food safety verified · Moisture-barrier sealed crates · Nationwide courier
                </p>
              </div>
            </div>

            {/* Direct Instagram Communication Link */}
            <div className="p-5 rounded-2xl bg-cream border border-gold/30 shadow-warm-sm flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-forest text-gold flex items-center justify-center">
                  <InstagramIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-heading font-bold text-forest">Founder Direct Link</span>
                  <span className="text-[11px] text-charcoal/60">Message @cup2eat on Instagram</span>
                </div>
              </div>
              <a
                href="https://www.instagram.com/cup2eat/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-heading font-bold text-terracotta hover:text-forest transition-colors"
              >
                Open DM →
              </a>
            </div>

          </div>

          {/* Right Side: Elegant B2B Form */}
          <div className="lg:col-span-7">
            <div className="bg-cream rounded-3xl p-8 sm:p-12 border border-cream-border shadow-warm-md">
              
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="b2b-name" className="block text-xs font-heading font-semibold text-forest mb-1.5">
                        Your Full Name <span className="text-terracotta">*</span>
                      </label>
                      <input
                        type="text"
                        id="b2b-name"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Varun Sharma"
                        className={`w-full px-4 py-3 rounded-xl border bg-cream-soft text-charcoal text-sm focus:outline-none transition-colors ${
                          errors.fullName ? 'border-terracotta ring-1 ring-terracotta' : 'border-cream-border focus:border-forest'
                        }`}
                      />
                      {errors.fullName && <p className="text-[11px] text-terracotta mt-1">{errors.fullName}</p>}
                    </div>

                    <div>
                      <label htmlFor="b2b-company" className="block text-xs font-heading font-semibold text-forest mb-1.5">
                        Venue / Business Name <span className="text-terracotta">*</span>
                      </label>
                      <input
                        type="text"
                        id="b2b-company"
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        placeholder="The Artisanal Roastery"
                        className={`w-full px-4 py-3 rounded-xl border bg-cream-soft text-charcoal text-sm focus:outline-none transition-colors ${
                          errors.businessName ? 'border-terracotta ring-1 ring-terracotta' : 'border-cream-border focus:border-forest'
                        }`}
                      />
                      {errors.businessName && <p className="text-[11px] text-terracotta mt-1">{errors.businessName}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="b2b-email" className="block text-xs font-heading font-semibold text-forest mb-1.5">
                        Work Email Address <span className="text-terracotta">*</span>
                      </label>
                      <input
                        type="email"
                        id="b2b-email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="hello@roastery.com"
                        className={`w-full px-4 py-3 rounded-xl border bg-cream-soft text-charcoal text-sm focus:outline-none transition-colors ${
                          errors.email ? 'border-terracotta ring-1 ring-terracotta' : 'border-cream-border focus:border-forest'
                        }`}
                      />
                      {errors.email && <p className="text-[11px] text-terracotta mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label htmlFor="b2b-phone" className="block text-xs font-heading font-semibold text-forest mb-1.5">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        id="b2b-phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl border border-cream-border bg-cream-soft text-charcoal text-sm focus:outline-none focus:border-forest"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="b2b-type" className="block text-xs font-heading font-semibold text-forest mb-1.5">
                        Business Category
                      </label>
                      <select
                        id="b2b-type"
                        value={formData.businessType}
                        onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-cream-border bg-cream-soft text-charcoal text-sm focus:outline-none focus:border-forest"
                      >
                        <option>Specialty Café / Roastery</option>
                        <option>Restaurant / Fine Dining</option>
                        <option>Hotel / Resort</option>
                        <option>Event Planner / Festival</option>
                        <option>Catering / Corporate</option>
                        <option>Distributor / Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="b2b-city" className="block text-xs font-heading font-semibold text-forest mb-1.5">
                        City / Region <span className="text-terracotta">*</span>
                      </label>
                      <input
                        type="text"
                        id="b2b-city"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        placeholder="Mumbai, Bengaluru, Delhi..."
                        className={`w-full px-4 py-3 rounded-xl border bg-cream-soft text-charcoal text-sm focus:outline-none transition-colors ${
                          errors.city ? 'border-terracotta ring-1 ring-terracotta' : 'border-cream-border focus:border-forest'
                        }`}
                      />
                      {errors.city && <p className="text-[11px] text-terracotta mt-1">{errors.city}</p>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="b2b-volume" className="block text-xs font-heading font-semibold text-forest mb-1.5">
                      Estimated Volume
                    </label>
                    <select
                      id="b2b-volume"
                      value={formData.estimatedVolume}
                      onChange={(e) => setFormData({ ...formData, estimatedVolume: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-cream-border bg-cream-soft text-charcoal text-sm focus:outline-none focus:border-forest"
                    >
                      <option>Initial Sample Box (50–100 units)</option>
                      <option>Trial Batch (500–1,000 units)</option>
                      <option>Monthly Recurring Supply (2,500+ units)</option>
                      <option>Event Crate (One-Time Event)</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="b2b-message" className="block text-xs font-heading font-semibold text-forest mb-1.5">
                      Notes or Serving Details
                    </label>
                    <textarea
                      id="b2b-message"
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share your drink types (espresso, hot tea, cold desserts) or target launch date..."
                      className="w-full px-4 py-3 rounded-xl border border-cream-border bg-cream-soft text-charcoal text-sm focus:outline-none focus:border-forest"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-forest hover:bg-forest-light text-cream font-heading font-semibold text-sm py-4 px-8 rounded-full shadow-warm-md hover:shadow-warm-lg transition-all duration-300"
                  >
                    <span>Send Commercial Enquiry</span>
                    <Send className="w-4 h-4 text-gold" />
                  </button>

                  <p className="text-center text-[11px] text-charcoal/60">
                    Direct enquiry routed to CUP2EAT management · Strict privacy
                  </p>
                </form>
              ) : (
                <div className="text-center py-6 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-forest/10 border border-gold/40 text-forest mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-forest" />
                  </div>
                  <h3 className="font-serif font-bold text-2xl text-forest">
                    Enquiry Formatted
                  </h3>
                  <p className="text-sm text-charcoal/80 max-w-md mx-auto">
                    Thank you, <strong className="text-forest">{formData.fullName}</strong>. You can copy the structured summary below or paste it directly into an Instagram message to <a href="https://www.instagram.com/cup2eat/" target="_blank" rel="noopener noreferrer" className="text-forest font-bold underline">@cup2eat</a>.
                  </p>

                  <div className="p-4 bg-cream-soft rounded-2xl border border-cream-border text-left text-xs font-mono text-charcoal/80 space-y-1 my-4">
                    <p><strong>To:</strong> CUP2EAT Commercial Team</p>
                    <p><strong>Venue:</strong> {formData.businessName} ({formData.businessType})</p>
                    <p><strong>Location:</strong> {formData.city}</p>
                    <p><strong>Volume:</strong> {formData.estimatedVolume}</p>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={copySummary}
                      className="inline-flex items-center gap-2 bg-cream border border-forest/30 text-forest px-5 py-2.5 rounded-full text-xs font-heading font-semibold hover:bg-cream-muted"
                    >
                      {copied ? <Check className="w-4 h-4 text-forest" /> : <Copy className="w-4 h-4" />}
                      <span>{copied ? 'Summary Copied!' : 'Copy Enquiry Summary'}</span>
                    </button>
                    <a
                      href="https://www.instagram.com/cup2eat/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-forest text-cream px-6 py-2.5 rounded-full text-xs font-heading font-semibold hover:bg-forest-light"
                    >
                      <Sparkles className="w-4 h-4 text-gold" />
                      <span>Message Founder on Instagram</span>
                    </a>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-charcoal/60 underline hover:text-forest pt-2 block mx-auto"
                  >
                    Edit details or submit another enquiry
                  </button>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
