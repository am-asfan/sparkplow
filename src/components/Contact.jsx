import React, { useState } from 'react';
import { Mail, MessageCircle, Send, CheckCircle2 } from 'lucide-react';

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
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
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
    if (!formState.subject.trim()) newErrors.subject = 'Subject is required.';
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
      
      // Simulate API submit delay
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormState({ name: '', email: '', subject: '', message: '' });
        
        // Reset success state after 4 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 4000);
      }, 1500);
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
            <span>Connect With Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-6">
            Get in <span className="text-brand-orange">Touch</span>
          </h2>
          <div className="h-1.5 w-16 bg-brand-orange mx-auto rounded-full mb-6" />
          <p className="text-slate-300 text-lg leading-relaxed">
            Ready to turn your spark of inspiration into a commercial success? Send us a message or contact us directly.
          </p>
        </div>

        {/* Form Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Direct channels & links */}
          <div className="lg:col-span-5 text-left flex flex-col justify-between lg:h-full">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Let's start your journey</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-8">
                Have an event to plan, a brand to promote, a team to coordinate, or a personal LinkedIn profile to optimize? Choose your preferred channel and let's coordinate.
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
                  <div className="p-3 rounded-lg bg-green-500/10 text-green-400 group-hover:scale-110 transition duration-200">
                    <MessageCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-400">Quick WhatsApp Chat</div>
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
                  <h4 className="text-xl font-bold text-white mb-2">Message Sent!</h4>
                  <p className="text-xs text-slate-300 max-w-xs leading-relaxed">
                    Thank you for contacting SparkPlow. Our coordination team will review your inquiry and reach out within 24 hours.
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
              </div>

              {/* Subject */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="subject" className="text-xs font-semibold text-slate-300 pl-0.5">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleInputChange}
                  placeholder="Marketing, Event Planning, Coordinating..."
                  className={`px-4 py-3 rounded-xl bg-brand-navy-deep/80 border text-slate-100 text-sm focus:outline-none focus:border-brand-orange transition duration-200 ${
                    errors.subject ? 'border-red-500/80' : 'border-brand-navy-border/70'
                  }`}
                />
                {errors.subject && <span className="text-[10px] text-red-400 pl-0.5">{errors.subject}</span>}
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-xs font-semibold text-slate-300 pl-0.5">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formState.message}
                  onChange={handleInputChange}
                  placeholder="Describe your project, timeline, or objectives..."
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
                className="w-full mt-2 py-3.5 rounded-xl font-bold bg-brand-orange hover:bg-brand-orange-dark text-white flex items-center justify-center gap-2.5 transition duration-300 glow-orange disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Submitting Message...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-4.5 w-4.5" />
                    <span>Send Message</span>
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
