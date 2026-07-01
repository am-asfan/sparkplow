import { useState } from 'react';
import { Mail, CheckCircle2 } from 'lucide-react';

const WhatsAppIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
);

const LinkedInIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TwitterIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
  </svg>
);

const FacebookIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formState.name.trim()) newErrors.name = 'Full Name is required.';
    if (!formState.email.trim()) {
      newErrors.email = 'Email Address is required.';
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      newErrors.email = 'Invalid email address syntax.';
    }
    if (!formState.phone.trim()) {
      newErrors.phone = 'Phone Number is required.';
    } else if (!/^\+?[0-9\s\-()]{7,20}$/.test(formState.phone)) {
      newErrors.phone = 'Invalid phone number format.';
    }
    if (!formState.service.trim()) newErrors.service = 'Service is required.';
    if (!formState.message.trim()) newErrors.message = 'Message content is required.';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
    // Clear error dynamically when typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      
      const text = `New Contact Request\n\nName: ${formState.name}\nEmail: ${formState.email}\nPhone: ${formState.phone}\nService: ${formState.service}\n\nMessage:\n${formState.message}`;
      
      const encodedText = encodeURIComponent(text);
      const whatsappNumber = '94705666420';
      const url = `https://wa.me/${whatsappNumber}?text=${encodedText}`;

      // Show submitting state briefly for better UX, then open WhatsApp
      setTimeout(() => {
        window.open(url, '_blank');
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormState({ name: '', email: '', phone: '', service: '', message: '' });
        
        // Reset success state after 4 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 4000);
      }, 1000);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 bg-brand-navy-deep overflow-hidden border-t border-brand-navy-border/30"
    >
      {/* Background radial highlight */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-radial-glow opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-semibold uppercase tracking-wider mb-4">
            <span>Get a Free Consultation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-6">
<<<<<<< HEAD
            How Can We Help Your <span className="text-brand-orange">Business Grow?</span>
          </h2>
          <div className="h-1.5 w-16 bg-brand-orange mx-auto rounded-full mb-6" />
          <p className="text-slate-300 text-lg leading-relaxed">
            Select the services you're interested in, and our team will create a customized solution tailored to your business goals.
=======
            Ready to Grow Your <span className="text-brand-orange">Brand?</span>
          </h2>
          <div className="h-1.5 w-16 bg-brand-orange mx-auto rounded-full mb-6" />
          <p className="text-slate-300 text-lg leading-relaxed">
            Let's create, manage, and market your brand for long-term success.
>>>>>>> 6770feb (Updated website)
          </p>
        </div>

        {/* Form Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Direct channels & links */}
          <div className="lg:col-span-5 text-left flex flex-col justify-between lg:h-full">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Start Growing Your Business Today</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-8">
                Whether you need expert content creation, a full digital marketing strategy, social media management, or branding services — SparkPlow delivers results. Tell us your goals and we'll get back to you instantly on WhatsApp.
              </p>

              {/* Direct Link blocks */}
              <div className="flex flex-col gap-4 mb-8">
                {/* WhatsApp Chat link */}
                <a
                  href="https://wa.me/94705666420?text=Hi%20SparkPlow,%20I%20would%20like%20to%20know%20more%20about%20your%20services!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl glass-panel border-brand-navy-border/40 hover:border-brand-orange/40 transition duration-300 group"
                >
                  <div className="p-3 rounded-lg bg-brand-orange/10 text-brand-orange group-hover:scale-110 transition duration-200">
                    <WhatsAppIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-400">Direct WhatsApp</div>
                    <div className="text-sm font-bold text-white group-hover:text-brand-orange transition">+94 70 566 6420</div>
                  </div>
                </a>

                {/* Email link */}
                <a
                  href="mailto:info.sparkplow@gmail.com?subject=Inquiry%20from%20SparkPlow%20Website"
                  className="flex items-center gap-4 p-4 rounded-xl glass-panel border-brand-navy-border/40 hover:border-brand-orange/40 transition duration-300 group"
                >
                  <div className="p-3 rounded-lg bg-brand-orange/10 text-brand-orange group-hover:scale-110 transition duration-200">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-400">Official Email Support</div>
                    <div className="text-sm font-bold text-white group-hover:text-brand-orange transition">info.sparkplow@gmail.com</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Social profiles links */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4 pl-1">Follow Our Journey</h4>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.linkedin.com/company/sparkplow"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-brand-navy-card/80 border border-brand-navy-border text-slate-400 hover:text-white hover:border-brand-orange hover:shadow-[0_0_15px_rgba(255,87,34,0.3)] transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon className="h-5 w-5" />
                </a>
                <a
                  href="https://twitter.com/sparkplow"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-brand-navy-card/80 border border-brand-navy-border text-slate-400 hover:text-white hover:border-brand-orange hover:shadow-[0_0_15px_rgba(255,87,34,0.3)] transition-all duration-300"
                  aria-label="Twitter/X"
                >
                  <TwitterIcon className="h-5 w-5" />
                </a>
                <a
                  href="https://www.facebook.com/sparkplow"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-brand-navy-card/80 border border-brand-navy-border text-slate-400 hover:text-white hover:border-brand-orange hover:shadow-[0_0_15px_rgba(255,87,34,0.3)] transition-all duration-300"
                  aria-label="Facebook"
                >
                  <FacebookIcon className="h-5 w-5" />
                </a>
                <a
                  href="https://www.instagram.com/sparkplow"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-brand-navy-card/80 border border-brand-navy-border text-slate-400 hover:text-white hover:border-brand-orange hover:shadow-[0_0_15px_rgba(255,87,34,0.3)] transition-all duration-300"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive glass form */}
          <div className="lg:col-span-7 w-full relative">
            
            {/* Form glass box */}
            <form
              onSubmit={handleSubmit}
              className="w-full rounded-2xl glass-panel border-brand-navy-border/60 p-6 sm:p-8 flex flex-col gap-5 text-left relative overflow-hidden"
              noValidate
            >
              {/* Success Message Card layer */}
              {submitSuccess && (
                <div className="absolute inset-0 bg-brand-navy-dark/95 backdrop-blur-md z-20 flex flex-col items-center justify-center p-6 text-center animate-fade-in">
                  <div className="p-4 rounded-full bg-green-500/10 text-green-400 mb-4 border border-green-500/20">
                    <CheckCircle2 className="h-10 w-10 animate-bounce" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">Message Prepared!</h4>
                  <p className="text-xs text-slate-300 max-w-xs leading-relaxed">
                    If WhatsApp didn't open automatically, please check your popup blocker. Thank you for contacting SparkPlow!
                  </p>
                </div>
              )}

              {/* Form fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Full name */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-xs font-semibold text-slate-300 pl-0.5">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleInputChange}
                    placeholder="Enter name"
                    className={`px-4 py-3 rounded-xl bg-brand-navy-deep/80 border text-slate-100 text-sm focus:outline-none focus:border-brand-orange transition duration-200 ${
                      errors.name ? 'border-red-500/80' : 'border-brand-navy-border/70'
                    }`}
                  />
                  {errors.name && <span className="text-[10px] text-red-400 pl-0.5">{errors.name}</span>}
                </div>

                {/* Email address */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-xs font-semibold text-slate-300 pl-0.5">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleInputChange}
                    placeholder="Enter email"
                    className={`px-4 py-3 rounded-xl bg-brand-navy-deep/80 border text-slate-100 text-sm focus:outline-none focus:border-brand-orange transition duration-200 ${
                      errors.email ? 'border-red-500/80' : 'border-brand-navy-border/70'
                    }`}
                  />
                  {errors.email && <span className="text-[10px] text-red-400 pl-0.5">{errors.email}</span>}
                </div>

                {/* Phone Number */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="phone" className="text-xs font-semibold text-slate-300 pl-0.5">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formState.phone}
                    onChange={handleInputChange}
                    placeholder="Enter phone number"
                    className={`px-4 py-3 rounded-xl bg-brand-navy-deep/80 border text-slate-100 text-sm focus:outline-none focus:border-brand-orange transition duration-200 ${
                      errors.phone ? 'border-red-500/80' : 'border-brand-navy-border/70'
                    }`}
                  />
                  {errors.phone && <span className="text-[10px] text-red-400 pl-0.5">{errors.phone}</span>}
                </div>

                {/* Service Required – SEO/AEO Optimized */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="service" className="text-xs font-semibold text-slate-300 pl-0.5">How Can We Help Your Business?</label>
                  <select
                    id="service"
                    name="service"
                    value={formState.service}
                    onChange={handleInputChange}
                    className={`px-4 py-3 rounded-xl bg-brand-navy-deep/80 border text-slate-100 text-sm focus:outline-none focus:border-brand-orange transition duration-200 appearance-none ${
                      errors.service ? 'border-red-500/80' : 'border-brand-navy-border/70'
                    }`}
                  >
<<<<<<< HEAD
                    <option value="" disabled>Choose a service to get started</option>
                    <option value="Content Creation Services">Content Creation Services</option>
                    <option value="Social Media Management">Social Media Management</option>
                    <option value="Digital Marketing Services">Digital Marketing Services</option>
                    <option value="Branding & Brand Development">Branding &amp; Brand Development</option>
                    <option value="Content Management Services">Content Management Services</option>
                    <option value="Graphic Design">Graphic Design</option>
                    <option value="Video Production & Editing">Video Production &amp; Editing</option>
                    <option value="Content Marketing">Content Marketing</option>
                    <option value="Marketing Strategy">Marketing Strategy</option>
                    <option value="Lead Generation Services">Lead Generation Services</option>
                    <option value="Website Content Development">Website Content Development</option>
                    <option value="Marketing Consultation">Marketing Consultation</option>
=======
                    <option value="" disabled>Select a service</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="Social Media Management">Social Media Management</option>
                    <option value="Branding & Brand Development">Branding &amp; Brand Development</option>
                    <option value="Website Design & Development">Website Design &amp; Development</option>
                    <option value="Content Creation & Graphic Design">Content Creation &amp; Graphic Design</option>
                    <option value="Event Management">Event Management</option>
                    <option value="Corporate Event Planning">Corporate Event Planning</option>
                    <option value="Project Management">Project Management</option>
                    <option value="Business Consulting">Business Consulting</option>
                    <option value="Lead Generation & Growth Strategy">Lead Generation &amp; Growth Strategy</option>
>>>>>>> 6770feb (Updated website)
                    <option value="Other">Other</option>
                  </select>
                  {errors.service && <span className="text-[10px] text-red-400 pl-0.5">{errors.service}</span>}
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-xs font-semibold text-slate-300 pl-0.5">Tell Us About Your Business Goals</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formState.message}
                  onChange={handleInputChange}
                  placeholder="Describe your business goals, project scope, or any specific services you're looking for. The more detail you share, the better we can tailor a solution for you."
                  className={`px-4 py-3 rounded-xl bg-brand-navy-deep/80 border text-slate-100 text-sm focus:outline-none focus:border-brand-orange transition duration-200 resize-none ${
                    errors.message ? 'border-red-500/80' : 'border-brand-navy-border/70'
                  }`}
                />
                {errors.message && <span className="text-[10px] text-red-400 pl-0.5">{errors.message}</span>}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-2 py-3.5 rounded-xl font-bold bg-brand-orange hover:bg-brand-orange-dark text-white flex items-center justify-center gap-2.5 transition duration-300 glow-orange disabled:opacity-50 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Redirecting to WhatsApp...</span>
                  </>
                ) : (
                  <>
                    <WhatsAppIcon className="h-5 w-5" />
<<<<<<< HEAD
                    <span>Get My Free Strategy Session</span>
=======
                    <span>Contact Us Today</span>
>>>>>>> 6770feb (Updated website)
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
