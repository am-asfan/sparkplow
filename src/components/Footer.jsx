import Logo from './Logo';

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

export default function Footer({ onNavigate }) {
  const currentYear = new Date().getFullYear();

  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(targetId);
    } else {
      const element = document.getElementById(targetId);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 80,
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <footer className="relative bg-brand-navy-deep pb-12 pt-6 px-4">
      {/* Capsule container matching SAS styling */}
      <div className="max-w-7xl mx-auto rounded-3xl bg-brand-navy-card/90 border border-brand-navy-border/60 p-8 md:p-10 shadow-2xl relative overflow-hidden">
        {/* Subtle glow layer */}
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-orange/5 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-brand-navy-border/50">
          
          {/* Logo & Slogan */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <Logo lightText={true} />
            <p className="text-xs font-semibold text-brand-orange uppercase tracking-wider pl-1">
              From Spark to Success
            </p>
            <p className="text-[11px] text-slate-400 font-medium pl-1">
              Creative Content • Smart Marketing • Real Growth
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-slate-400">
            <a href="#home" onClick={(e) => handleScrollTo(e, 'home')} className="hover:text-brand-orange transition">Home</a>
            <a href="#about" onClick={(e) => handleScrollTo(e, 'about')} className="hover:text-brand-orange transition">About</a>
            <a href="#services" onClick={(e) => handleScrollTo(e, 'services')} className="hover:text-brand-orange transition">Services</a>
            <a href="#works" onClick={(e) => handleScrollTo(e, 'works')} className="hover:text-brand-orange transition">Our Works</a>
            <a href="#who-we-serve" onClick={(e) => handleScrollTo(e, 'who-we-serve')} className="hover:text-brand-orange transition">Who We Serve</a>
            <a href="#why-choose-us" onClick={(e) => handleScrollTo(e, 'why-choose-us')} className="hover:text-brand-orange transition">Why Us</a>
            <a href="#process" onClick={(e) => handleScrollTo(e, 'process')} className="hover:text-brand-orange transition">Process</a>
            <a href="#contact" onClick={(e) => handleScrollTo(e, 'contact')} className="hover:text-brand-orange transition">Contact</a>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-3">
            <a
              href="https://facebook.com/sparkplow"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-brand-orange/15 border border-brand-orange/20 text-brand-orange hover:bg-brand-orange hover:text-white transition duration-300 shadow-[0_0_10px_rgba(255,87,34,0.15)]"
              aria-label="Facebook"
            >
              <FacebookIcon className="h-4.5 w-4.5" />
            </a>
            <a
              href="https://twitter.com/sparkplow"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-brand-orange/15 border border-brand-orange/20 text-brand-orange hover:bg-brand-orange hover:text-white transition duration-300 shadow-[0_0_10px_rgba(255,87,34,0.15)]"
              aria-label="Twitter/X"
            >
              <TwitterIcon className="h-4.5 w-4.5" />
            </a>
            <a
              href="https://instagram.com/sparkplow"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-brand-orange/15 border border-brand-orange/20 text-brand-orange hover:bg-brand-orange hover:text-white transition duration-300 shadow-[0_0_10px_rgba(255,87,34,0.15)]"
              aria-label="Instagram"
            >
              <InstagramIcon className="h-4.5 w-4.5" />
            </a>
            <a
              href="https://linkedin.com/company/sparkplow"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-brand-orange/15 border border-brand-orange/20 text-brand-orange hover:bg-brand-orange hover:text-white transition duration-300 shadow-[0_0_10px_rgba(255,87,34,0.15)]"
              aria-label="LinkedIn"
            >
              <LinkedInIcon className="h-4.5 w-4.5" />
            </a>
          </div>

        </div>

        {/* Copyright and Trademark subtext */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 text-[11px] text-slate-500 font-medium">
          <div>
            <span>SparkPlow Consulting & Management, Inc.</span>
          </div>
          <div>
            <span>&copy; {currentYear} SparkPlow. All rights reserved.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
