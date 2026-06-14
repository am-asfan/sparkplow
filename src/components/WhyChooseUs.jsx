import React from 'react';
import { HeartHandshake, Sparkles, ShieldCheck, LineChart, MessageSquare } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    {
      title: 'Personalized Support',
      description: 'We do not believe in cookie-cutter models. Every client receives custom roadmap strategies tailored to their unique market conditions.',
      icon: HeartHandshake,
    },
    {
      title: 'Creative Solutions',
      description: 'We merge artistic design with digital tools to produce unique campaigns and content that stands out.',
      icon: Sparkles,
    },
    {
      title: 'Professional Approach',
      description: 'We execute project boards, timeline sheets, and event schedules with strict professional discipline and tracking.',
      icon: ShieldCheck,
    },
    {
      title: 'Growth-Focused Mindset',
      description: 'Our campaigns and profiles are optimized for conversions, reach, visibility, and commercial scalability.',
      icon: LineChart,
    },
    {
      title: 'Strong Communication',
      description: 'We establish seamless loops, transparent reports, and clear expectations throughout the execution process.',
      icon: MessageSquare,
    },
  ];

  return (
    <section
      id="why-choose-us"
      className="relative py-24 bg-brand-navy-deep overflow-hidden border-t border-brand-navy-border/30"
    >
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[400px] bg-radial-glow opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-semibold uppercase tracking-wider mb-4">
            <span>Our Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-6">
            Why Choose <span className="text-brand-orange">SparkPlow</span>
          </h2>
          <div className="h-1.5 w-16 bg-brand-orange mx-auto rounded-full mb-6" />
          <p className="text-slate-300 text-lg leading-relaxed">
            We combine personal attention with agency-grade professionalism to deliver results that help you succeed.
          </p>
        </div>

        {/* Reasons Grid (Consolidated flex-wrap for perfect centering on all devices) */}
        <div className="flex flex-wrap justify-center gap-8 mt-12 max-w-6xl mx-auto">
          {reasons.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="glass-panel glass-card-hover rounded-2xl p-8 text-left flex flex-col items-start relative overflow-hidden group w-full md:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)]"
              >
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-brand-orange/5 rounded-full blur-xl group-hover:bg-brand-orange/15 transition-all duration-300" />
                
                <div className="p-3.5 rounded-xl bg-brand-orange/10 text-brand-orange border border-brand-orange/20 mb-6 group-hover:scale-110 transition duration-300">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-orange transition duration-200">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
