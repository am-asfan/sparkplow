import React from 'react';
import { Sparkles, ArrowRight, Activity, Calendar, Award, CheckCircle } from 'lucide-react';

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

          {/* Right Showcase Column (SaaS Mock Dashboard) */}
          <div className="lg:col-span-6 relative flex justify-center w-full">
            {/* Soft backdrop glow behind mock */}
            <div className="absolute inset-0 bg-brand-orange/10 blur-[80px] rounded-full scale-75" />

            {/* Dashboard Container (Glassmorphic Mockup) */}
            <div className="w-full max-w-[520px] rounded-2xl glass-panel border-brand-navy-border/60 shadow-2xl overflow-hidden animate-float-slow select-none">
              
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-brand-navy-deep/90 border-b border-brand-navy-border/40">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="text-xs font-semibold tracking-wider text-slate-400">SparkPlow Hub</div>
                <div className="w-12" /> {/* Spacer */}
              </div>

              {/* Window Content */}
              <div className="p-4 sm:p-5 flex flex-col gap-4 sm:gap-5 bg-brand-navy-card/40">
                
                {/* Stats Summary Grid */}
                <div className="grid grid-cols-3 gap-1.5 sm:gap-3">
                  <div className="p-1.5 sm:p-3.5 rounded-xl bg-brand-navy-deep/80 border border-brand-navy-border/30 flex flex-col items-start gap-1">
                    <span className="text-[8px] sm:text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Reach</span>
                    <span className="text-xs sm:text-sm md:text-base font-bold text-white">142.8k</span>
                    <span className="text-[7px] sm:text-[9px] font-bold text-green-400">+18.4%</span>
                  </div>
                  <div className="p-1.5 sm:p-3.5 rounded-xl bg-brand-navy-deep/80 border border-brand-navy-border/30 flex flex-col items-start gap-1">
                    <span className="text-[8px] sm:text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Events</span>
                    <span className="text-xs sm:text-sm md:text-base font-bold text-white">12 Active</span>
                    <span className="text-[7px] sm:text-[9px] font-bold text-brand-orange flex items-center gap-1">
                      <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-brand-orange animate-ping" />
                      Live Now
                    </span>
                  </div>
                  <div className="p-1.5 sm:p-3.5 rounded-xl bg-brand-navy-deep/80 border border-brand-navy-border/30 flex flex-col items-start gap-1">
                    <span className="text-[8px] sm:text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Progress</span>
                    <span className="text-xs sm:text-sm md:text-base font-bold text-white">94.2%</span>
                    <span className="text-[7px] sm:text-[9px] font-bold text-brand-orange">Ahead</span>
                  </div>
                </div>

                {/* Analytical Graph Mock */}
                <div className="p-4 rounded-xl bg-brand-navy-deep/85 border border-brand-navy-border/40 relative">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-semibold text-slate-300">Campaign Traffic</span>
                    <Activity className="h-4 w-4 text-brand-orange" />
                  </div>
                  <div className="h-28 w-full flex items-end">
                    {/* SVG Chart line */}
                    <svg className="w-full h-full overflow-visible" viewBox="0 0 100 40" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="chartGlow" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#FF5722" stopOpacity="0.4" />
                          <stop offset="100%" stopColor="#FF5722" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>
                      {/* Glow path */}
                      <path
                        d="M0,40 Q15,10 30,22 T60,8 T90,25 L100,20 L100,40 L0,40 Z"
                        fill="url(#chartGlow)"
                      />
                      {/* Stroke path */}
                      <path
                        d="M0,40 Q15,10 30,22 T60,8 T90,25 L100,20"
                        fill="none"
                        stroke="#FF5722"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      {/* Active point marker */}
                      <circle cx="60" cy="8" r="3" fill="#FF5722" className="animate-ping" />
                      <circle cx="60" cy="8" r="2" fill="#fff" />
                    </svg>
                  </div>
                  <div className="flex justify-between items-center text-[8px] text-slate-400 mt-2 font-medium">
                    <span>Mon</span>
                    <span>Wed</span>
                    <span>Fri</span>
                    <span>Sun</span>
                  </div>
                </div>

                {/* Task Monitor & Branding Updates list */}
                <div className="flex flex-col gap-2">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider text-left pl-1">Ongoing Coordination</span>
                  
                  {/* Task 1 */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between p-2.5 sm:p-3 rounded-lg bg-brand-navy-deep/60 border border-brand-navy-border/20 text-left hover:border-brand-orange/30 transition duration-200 gap-2 sm:gap-0">
                    <div className="flex items-center gap-2.5">
                      <div className="p-1.5 rounded-md bg-brand-orange/10 text-brand-orange">
                        <Award className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="text-[10px] sm:text-[11px] font-semibold text-white">LinkedIn Brand Optimization</div>
                        <div className="text-[8px] sm:text-[9px] text-slate-400">Personal Branding</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 self-end sm:self-auto">
                      <span className="text-[8px] sm:text-[9px] font-semibold text-slate-300">85%</span>
                      <div className="w-12 h-1.5 bg-brand-navy-border rounded-full overflow-hidden">
                        <div className="h-full bg-brand-orange rounded-full" style={{ width: '85%' }} />
                      </div>
                    </div>
                  </div>

                  {/* Task 2 */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between p-2.5 sm:p-3 rounded-lg bg-brand-navy-deep/60 border border-brand-navy-border/20 text-left hover:border-brand-orange/30 transition duration-200 gap-2 sm:gap-0">
                    <div className="flex items-center gap-2.5">
                      <div className="p-1.5 rounded-md bg-brand-orange/10 text-brand-orange">
                        <Calendar className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="text-[10px] sm:text-[11px] font-semibold text-white">Corporate Workshop Launch</div>
                        <div className="text-[8px] sm:text-[9px] text-slate-400">Event Coordination</div>
                      </div>
                    </div>
                    <span className="text-[8px] font-bold px-2 py-0.5 rounded bg-brand-orange/20 text-brand-orange border border-brand-orange/30 self-end sm:self-auto">In 2 Days</span>
                  </div>
                  
                  {/* Task 3 */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between p-2.5 sm:p-3 rounded-lg bg-brand-navy-deep/60 border border-brand-navy-border/20 text-left hover:border-brand-orange/30 transition duration-200 gap-2 sm:gap-0">
                    <div className="flex items-center gap-2.5">
                      <div className="p-1.5 rounded-md bg-brand-orange/10 text-brand-orange">
                        <CheckCircle className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="text-[10px] sm:text-[11px] font-semibold text-white">Social Campaign Strategy</div>
                        <div className="text-[8px] sm:text-[9px] text-slate-400">Marketing Services</div>
                      </div>
                    </div>
                    <span className="text-[8px] font-bold px-2 py-0.5 rounded bg-green-500/20 text-green-400 border border-green-500/30 self-end sm:self-auto">Completed</span>
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
