import { useState } from 'react';
import { Send, CheckCircle2, Copy, Check } from 'lucide-react';
import { InstagramIcon } from './InstagramIcon';

interface BusinessEnquiryProps {
  initialProductName?: string;
}

export const BusinessEnquiry: React.FC<BusinessEnquiryProps> = ({ initialProductName = '' }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    email: '',
    phone: '',
    businessType: 'Café / Coffee Roaster',
    city: '',
    estimatedQuantity: '500 – 1,000 units',
    message: initialProductName ? `Interested in bulk pricing for ${initialProductName}.` : '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedStatus, setSubmittedStatus] = useState<boolean>(false);
  const [copiedPayload, setCopiedPayload] = useState<boolean>(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Please enter your full name.';
    if (!formData.businessName.trim()) errs.businessName = 'Please enter your business or venue name.';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) errs.email = 'Please provide a valid email address.';
    if (!formData.city.trim()) errs.city = 'Please specify your city or region.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmittedStatus(true);
  };

  const copyInquiryText = () => {
    const text = `CUP2EAT Commercial Enquiry:
Name: ${formData.fullName}
Business: ${formData.businessName} (${formData.businessType})
Location: ${formData.city}
Email: ${formData.email}
Phone: ${formData.phone || 'N/A'}
Estimated Quantity: ${formData.estimatedQuantity}
Notes: ${formData.message || 'Looking forward to product details & bulk quote.'}`;

    navigator.clipboard.writeText(text);
    setCopiedPayload(true);
    setTimeout(() => setCopiedPayload(false), 3000);
  };

  return (
    <section id="business-enquiry" className="py-20 sm:py-28 relative bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Context & Direct Contact Links */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-forest" />
                <span className="text-xs font-heading font-semibold uppercase tracking-widest text-forest">
                  Commercial Partnerships
                </span>
              </div>
              <h2 className="text-fluid-h2 font-heading font-bold text-forest">
                Want CUP2EAT for your business?
              </h2>
              <p className="mt-4 text-base text-charcoal/80 leading-relaxed font-normal">
                Planning something different for your café, restaurant or next event? Let's talk about bringing edible cups to your customers.
              </p>
            </div>

            {/* Direct Instagram Contact Option */}
            <div className="bg-cream-soft rounded-2xl p-6 border border-gold/30 shadow-warm-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-forest flex items-center justify-center text-gold shrink-0">
                  <InstagramIcon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-base text-forest">
                    Direct Instagram Enquiries
                  </h3>
                  <p className="text-xs text-charcoal/70 mt-1">
                    For direct founder messages, order status, and instant previews, reach out on the verified brand account:
                  </p>
                  <a
                    href="https://www.instagram.com/cup2eat/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-3 text-xs font-heading font-bold text-terracotta hover:text-forest transition-colors"
                  >
                    <span>DM @cup2eat on Instagram</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Commercial Highlights */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-xs sm:text-sm text-charcoal/80">
                <CheckCircle2 className="w-4 h-4 text-forest shrink-0" />
                <span>Custom batch sampling available for verified cafés and roasters</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-charcoal/80">
                <CheckCircle2 className="w-4 h-4 text-forest shrink-0" />
                <span>Wholesale volume tiers for event organizers and caterers</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-charcoal/80">
                <CheckCircle2 className="w-4 h-4 text-forest shrink-0" />
                <span>Nationwide delivery across India with moisture-safe packaging</span>
              </div>
            </div>

          </div>

          {/* Right Column: Clean Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-cream-soft rounded-2xl p-8 sm:p-10 border border-cream-border shadow-warm-lg">
              
              {!submittedStatus ? (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div>
                      <label htmlFor="fullName" className="block text-xs font-heading font-semibold text-forest mb-1.5">
                        Your Full Name <span className="text-terracotta">*</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Varun Sharma"
                        className={`w-full px-4 py-2.5 rounded-xl border bg-cream text-charcoal text-sm focus:outline-none transition-colors ${
                          errors.fullName ? 'border-terracotta ring-1 ring-terracotta' : 'border-cream-border focus:border-forest'
                        }`}
                      />
                      {errors.fullName && <p className="text-[11px] text-terracotta mt-1">{errors.fullName}</p>}
                    </div>

                    {/* Business Name */}
                    <div>
                      <label htmlFor="businessName" className="block text-xs font-heading font-semibold text-forest mb-1.5">
                        Business / Venue Name <span className="text-terracotta">*</span>
                      </label>
                      <input
                        type="text"
                        id="businessName"
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        placeholder="Brew & Bite Café"
                        className={`w-full px-4 py-2.5 rounded-xl border bg-cream text-charcoal text-sm focus:outline-none transition-colors ${
                          errors.businessName ? 'border-terracotta ring-1 ring-terracotta' : 'border-cream-border focus:border-forest'
                        }`}
                      />
                      {errors.businessName && <p className="text-[11px] text-terracotta mt-1">{errors.businessName}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-heading font-semibold text-forest mb-1.5">
                        Work Email Address <span className="text-terracotta">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="hello@yourbusiness.com"
                        className={`w-full px-4 py-2.5 rounded-xl border bg-cream text-charcoal text-sm focus:outline-none transition-colors ${
                          errors.email ? 'border-terracotta ring-1 ring-terracotta' : 'border-cream-border focus:border-forest'
                        }`}
                      />
                      {errors.email && <p className="text-[11px] text-terracotta mt-1">{errors.email}</p>}
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label htmlFor="phone" className="block text-xs font-heading font-semibold text-forest mb-1.5">
                        Phone / Mobile
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-2.5 rounded-xl border border-cream-border bg-cream text-charcoal text-sm focus:outline-none focus:border-forest"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Business Type */}
                    <div>
                      <label htmlFor="businessType" className="block text-xs font-heading font-semibold text-forest mb-1.5">
                        Business Type
                      </label>
                      <select
                        id="businessType"
                        value={formData.businessType}
                        onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-cream-border bg-cream text-charcoal text-sm focus:outline-none focus:border-forest"
                      >
                        <option>Café / Specialty Coffee Roaster</option>
                        <option>Restaurant / Bistro</option>
                        <option>Hotel / Luxury Hospitality</option>
                        <option>Event Organizer / Brand Pop-up</option>
                        <option>Catering / Corporate Dining</option>
                        <option>Distributor / Wholesaler</option>
                      </select>
                    </div>

                    {/* City */}
                    <div>
                      <label htmlFor="city" className="block text-xs font-heading font-semibold text-forest mb-1.5">
                        City / Location <span className="text-terracotta">*</span>
                      </label>
                      <input
                        type="text"
                        id="city"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        placeholder="Mumbai, Delhi, Bengaluru..."
                        className={`w-full px-4 py-2.5 rounded-xl border bg-cream text-charcoal text-sm focus:outline-none transition-colors ${
                          errors.city ? 'border-terracotta ring-1 ring-terracotta' : 'border-cream-border focus:border-forest'
                        }`}
                      />
                      {errors.city && <p className="text-[11px] text-terracotta mt-1">{errors.city}</p>}
                    </div>
                  </div>

                  {/* Estimated Quantity */}
                  <div>
                    <label htmlFor="estimatedQuantity" className="block text-xs font-heading font-semibold text-forest mb-1.5">
                      Estimated Order Volume
                    </label>
                    <select
                      id="estimatedQuantity"
                      value={formData.estimatedQuantity}
                      onChange={(e) => setFormData({ ...formData, estimatedQuantity: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-cream-border bg-cream text-charcoal text-sm focus:outline-none focus:border-forest"
                    >
                      <option>Sample Box (50 – 100 units)</option>
                      <option>Initial Trial (500 – 1,000 units)</option>
                      <option>Monthly Recurring (2,500 – 5,000 units)</option>
                      <option>Bulk Commercial (10,000+ units)</option>
                    </select>
                  </div>

                  {/* Additional Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-heading font-semibold text-forest mb-1.5">
                      Specific Requirements or Target Launch Date
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your serving setup, preferred cup sizes, or event date..."
                      className="w-full px-4 py-2.5 rounded-xl border border-cream-border bg-cream text-charcoal text-sm focus:outline-none focus:border-forest"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-forest hover:bg-forest-light text-cream font-heading font-semibold text-sm py-3.5 px-6 rounded-xl shadow-warm-md hover:shadow-warm-lg transition-all duration-300"
                  >
                    <span>Send Business Enquiry</span>
                    <Send className="w-4 h-4 text-gold-light" />
                  </button>

                  <p className="text-center text-[11px] text-charcoal/60">
                    Direct verified contact with CUP2EAT management · No spam guaranteed
                  </p>
                </form>
              ) : (
                <div className="text-center py-8 space-y-4 animate-fadeIn">
                  <div className="w-14 h-14 rounded-full bg-forest/10 border border-gold/40 text-forest mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-forest" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-forest">
                    Enquiry Prepared!
                  </h3>
                  <p className="text-sm text-charcoal/80 max-w-md mx-auto">
                    Thank you, <strong className="text-forest">{formData.fullName}</strong>. Since this is an interactive client demo interface, you can copy your formatted inquiry details below or send them directly via Instagram DM.
                  </p>

                  <div className="p-4 bg-cream rounded-xl border border-cream-border text-left text-xs font-mono text-charcoal/80 space-y-1 my-4">
                    <p><strong>To:</strong> CUP2EAT Commercial Team</p>
                    <p><strong>Business:</strong> {formData.businessName} ({formData.businessType})</p>
                    <p><strong>Volume:</strong> {formData.estimatedQuantity}</p>
                    <p><strong>City:</strong> {formData.city}</p>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={copyInquiryText}
                      className="inline-flex items-center gap-2 bg-cream border border-forest/30 text-forest px-4 py-2.5 rounded-full text-xs font-heading font-semibold hover:bg-cream-muted"
                    >
                      {copiedPayload ? <Check className="w-4 h-4 text-forest" /> : <Copy className="w-4 h-4" />}
                      <span>{copiedPayload ? 'Details Copied!' : 'Copy Enquiry Summary'}</span>
                    </button>
                    <a
                      href="https://www.instagram.com/cup2eat/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-forest text-cream px-5 py-2.5 rounded-full text-xs font-heading font-semibold hover:bg-forest-light"
                    >
                      <InstagramIcon className="w-4 h-4 text-gold" />
                      <span>Message @cup2eat on Instagram</span>
                    </a>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSubmittedStatus(false)}
                    className="text-xs text-charcoal/60 underline hover:text-forest pt-2 block mx-auto"
                  >
                    Edit details or submit another inquiry
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
