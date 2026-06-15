import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import Logo from './Logo';

const InstagramIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const FacebookIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const LinkedinIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const YoutubeIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const MediumIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42c1.87 0 3.38 2.88 3.38 6.42M24 12c0 3.11-.53 5.62-1.18 5.62-.66 0-1.18-2.51-1.18-5.62 0-3.11.53-5.62 1.18-5.62.66 0 1.18 2.51 1.18 5.62"/>
  </svg>
);

const GoogleAdsIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M21.35 11.1h-9.17v2.73h5.24c-.23 1.16-.88 2.15-1.84 2.8v2.3h2.98c1.74-1.6 2.74-3.96 2.74-6.64 0-.41-.04-.81-.11-1.19z" />
    <path d="M12.18 21.6c2.58 0 4.74-.85 6.32-2.31l-2.98-2.3c-.85.57-1.95.91-3.34.91-2.57 0-4.74-1.74-5.51-4.08H3.59v2.38c1.58 3.14 4.8 5.4 8.59 5.4z" />
    <path d="M6.67 13.82c-.19-.57-.3-1.18-.3-1.82s.11-1.25.3-1.82V7.8H3.59C2.93 9.1 2.56 10.51 2.56 12s.37 2.9 1.03 4.2l3.08-2.38z" />
    <path d="M12.18 5.2c1.4 0 2.66.48 3.65 1.42l2.74-2.74C16.92 2.33 14.76 1.42 12.18 1.42 8.39 1.42 5.17 3.68 3.59 6.82l3.08 2.38c.77-2.34 2.94-4 5.51-4z" />
  </svg>
);

const TikTokIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const MetaIcon = ({ className }) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="metaGrad1" x1="0%" y1="50%" x2="100%" y2="50%">
        <stop offset="0%" stopColor="#0082FB" />
        <stop offset="100%" stopColor="#0064E1" />
      </linearGradient>
      <linearGradient id="metaGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0082FB" />
        <stop offset="50%" stopColor="#A033FF" />
        <stop offset="100%" stopColor="#FF5C83" />
      </linearGradient>
    </defs>
    {/* Meta (new) logo – lemniscate / infinity shape */}
    <path
      d="M6.5 24c0-3.5 2.1-7.5 5.2-7.5 1.6 0 3 .9 4.8 3.4l.5.7.5-.7c1.7-2.4 3.4-4 5.8-4 4.3 0 7.2 5.2 7.2 11 0 2.3-.6 4.1-1.8 5.2-.9.8-2 1.1-3.1.9-1.6-.3-2.8-1.6-4.3-4.2l-1.4-2.5-.7 1.1c-1.9 3-3.5 4.4-5.6 4.5-1.5.1-2.8-.5-3.8-1.8C6.9 28.5 6.5 26.5 6.5 24z"
      fill="url(#metaGrad1)"
    />
    <path
      d="M24 20.6c-1.3-1.8-2.6-2.8-4-2.8-2.4 0-4.2 3.2-4.2 6.2 0 1.8.4 3.2 1.2 4.1.6.7 1.4 1 2.2.9 1.4-.1 2.6-1.2 4.1-3.7l.7-1.2-.7-1.2C23.4 22.3 23.3 21.5 24 20.6z"
      fill="url(#metaGrad2)"
      opacity="0.6"
    />
    <path
      d="M30.8 16.6c-2 0-3.6 1.3-5.1 3.4l-.7 1 .7 1.3c1.6 2.8 2.8 4 4.3 4.3.9.2 1.8-.1 2.5-.8.9-.9 1.5-2.5 1.5-4.5 0-4.3-1.6-6.7-3.2-6.7z"
      fill="url(#metaGrad1)"
      opacity="0.85"
    />
  </svg>
);

export default function Hero() {
  const handleScrollTo = (targetId) => {
    const element = document.getElementById(targetId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 flex items-center justify-center overflow-hidden bg-brand-navy-deep"
    >
      {/* Background Radial Backlights */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-radial-glow opacity-60 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-radial-glow opacity-30 pointer-events-none" />
      
      {/* Grid Pattern Background overlay */}
      <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border-brand-orange/20 text-brand-orange text-xs font-semibold tracking-wider uppercase mb-6 animate-pulse-slow">
              <Sparkles className="h-3.5 w-3.5" />
              <span>From Spark to Success</span>
            </div>

            {/* Title / Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
              Turn Your Spark <br />
              <span className="text-gradient-orange">Into Success</span>
            </h1>

            {/* Subheading */}
            <p className="text-slate-300 text-base sm:text-lg md:text-xl font-normal leading-relaxed mb-8 max-w-xl">
              Creative marketing, professional events, and organized project coordination for students, startups, and businesses.
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-4 w-full sm:w-auto">
              <button
                onClick={() => handleScrollTo('contact')}
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-white bg-brand-orange hover:bg-brand-orange-dark transition-all duration-300 glow-orange hover:scale-[1.02] active:scale-[0.98]"
              >
                Get Started
                <ArrowRight className="ml-2.5 h-5 w-5" />
              </button>
              
              <button
                onClick={() => handleScrollTo('services')}
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-slate-300 hover:text-white transition-all duration-200 border border-brand-navy-border hover:border-brand-orange/50 hover:bg-brand-navy-card/30 relative group"
              >
                <span>Explore Services</span>
                <span className="absolute bottom-3 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-brand-orange transition-all duration-300 group-hover:w-[60%]" />
              </button>
            </div>
          </div>

          {/* Right Showcase Column (Animated Social Orbit) */}
          <div className="lg:col-span-6 relative flex justify-center items-center w-full min-h-[400px] lg:min-h-[500px]">
            {/* Soft backdrop glow */}
            <div className="absolute inset-0 bg-brand-orange/20 blur-[100px] rounded-full scale-75 animate-pulse-slow" />

            {/* Orbit Container */}
            <div className="relative w-full max-w-[400px] aspect-square flex items-center justify-center">
              
              {/* Center Logo */}
              <div className="absolute z-20 flex items-center justify-center w-28 h-28 sm:w-32 sm:h-32 rounded-full glass-panel border-brand-orange/40 glow-orange animate-float-slow bg-brand-navy-deep/90 shadow-[0_0_40px_rgba(255,87,34,0.3)]">
                <Logo iconOnly={true} className="w-16 h-16 sm:w-20 sm:h-20" />
              </div>

              {/* Outer Orbit 1 */}
              <div className="absolute inset-4 sm:inset-0 rounded-full border border-brand-navy-border/40 border-dashed animate-orbit" />
              
              {/* Outer Orbit 2 (Reverse) */}
              <div className="absolute inset-12 sm:inset-10 rounded-full border border-brand-orange/10 animate-orbit-reverse" />
              
              {/* Social Icons floating around */}
              <div className="absolute inset-0 sm:-inset-4 animate-orbit">
                {/* Instagram */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl glass-panel flex items-center justify-center bg-gradient-to-tr from-pink-500/20 to-orange-400/20 border-pink-500/30 text-pink-400 animate-orbit-reverse shadow-[0_0_20px_rgba(236,72,153,0.2)]">
                    <InstagramIcon className="w-7 h-7 sm:w-8 sm:h-8" />
                  </div>
                </div>
                
                {/* Facebook */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl glass-panel flex items-center justify-center bg-blue-500/20 border-blue-500/30 text-blue-400 animate-orbit-reverse shadow-[0_0_20px_rgba(59,130,246,0.2)]">
                    <FacebookIcon className="w-7 h-7 sm:w-8 sm:h-8" />
                  </div>
                </div>

                {/* YouTube */}
                <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl glass-panel flex items-center justify-center bg-red-500/20 border-red-500/30 text-red-500 animate-orbit-reverse shadow-[0_0_20px_rgba(239,68,68,0.2)]">
                    <YoutubeIcon className="w-7 h-7 sm:w-8 sm:h-8" />
                  </div>
                </div>

                {/* Google Ads */}
                <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl glass-panel flex items-center justify-center bg-yellow-500/20 border-yellow-500/30 text-yellow-400 animate-orbit-reverse shadow-[0_0_20px_rgba(234,179,8,0.2)]">
                    <GoogleAdsIcon className="w-7 h-7 sm:w-8 sm:h-8" />
                  </div>
                </div>
              </div>

              <div className="absolute inset-6 sm:inset-4 animate-orbit-reverse">
                {/* LinkedIn */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl glass-panel flex items-center justify-center bg-blue-600/20 border-blue-600/30 text-blue-500 animate-orbit shadow-[0_0_20px_rgba(37,99,235,0.2)]">
                    <LinkedinIcon className="w-7 h-7 sm:w-8 sm:h-8" />
                  </div>
                </div>

                {/* TikTok */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl glass-panel flex items-center justify-center bg-slate-800/60 border-slate-700/50 text-white animate-orbit shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                    <TikTokIcon className="w-7 h-7 sm:w-8 sm:h-8" />
                  </div>
                </div>

                {/* Medium */}
                <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl glass-panel flex items-center justify-center bg-zinc-900/40 border-zinc-500/30 text-white animate-orbit shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                    <MediumIcon className="w-7 h-7 sm:w-8 sm:h-8" />
                  </div>
                </div>

                {/* Meta Suite */}
                <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl glass-panel flex items-center justify-center bg-blue-500/10 border-blue-400/30 text-blue-400 animate-orbit shadow-[0_0_20px_rgba(59,130,246,0.15)]">
                    <MetaIcon className="w-7 h-7 sm:w-8 sm:h-8" />
                  </div>
                </div>
              </div>

            </div>

            {/* Subtle decorative dot grid graphics */}
            <div className="absolute -top-6 -left-6 w-20 h-20 bg-[radial-gradient(#ffffff0a_2px,transparent_2px)] [background-size:10px_10px]" />
            <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-[radial-gradient(#ffffff0a_2px,transparent_2px)] [background-size:10px_10px]" />
          </div>

        </div>
      </div>
    </section>
  );
}
