import React from 'react';
import {
  GraduationCap,
  Briefcase,
  Lightbulb,
  Rocket,
  Store,
  School,
  Building2,
  TrendingUp
} from 'lucide-react';

export default function TargetAudience() {
  const audienceList = [
    {
      title: 'Students',
      description: 'Unlock career opportunities, build a strong personal brand, and find portfolio guidance.',
      icon: GraduationCap,
    },
    {
      title: 'Professionals',
      description: 'Optimize your LinkedIn presence, expand your network, and position yourself as an authority.',
      icon: Briefcase,
    },
    {
      title: 'Entrepreneurs',
      description: 'Turn your sparks of ideas into viable business models and market opportunities.',
      icon: Lightbulb,
    },
    {
      title: 'Startup Founders',
      description: 'Get support for early-stage planning, campaign execution, and product launches.',
      icon: Rocket,
    },
    {
      title: 'Small Businesses',
      description: 'Build local presence, scale customer engagement, and streamline operational tasks.',
      icon: Store,
    },
    {
      title: 'Educational Institutions',
      description: 'Plan educational summits, coordinate student workshops, and enhance engagement.',
      icon: School,
    },
    {
      title: 'Organizations',
      description: 'Execute high-impact seminars, corporate conferences, and structured project timelines.',
      icon: Building2,
    },
    {
      title: 'Growing Brands',
      description: 'Execute targeted digital marketing support and run strategic brand promotions.',
      icon: TrendingUp,
    },
  ];

  return (
    <section
      id="who-we-serve"
      className="relative py-24 bg-brand-navy-deep overflow-hidden border-t border-brand-navy-border/30"
    >
      {/* Background Radial Glow */}
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-radial-glow opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-semibold uppercase tracking-wider mb-4">
            <span>Our Ecosystem</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-6">
            Who We <span className="text-brand-orange">Serve</span>
          </h2>
          <div className="h-1.5 w-16 bg-brand-orange mx-auto rounded-full mb-6" />
          <p className="text-slate-300 text-lg leading-relaxed">
            We deliver tailored solutions across a diverse network, bridging the gap between ambitious ideas and commercial reality.
          </p>
        </div>

        {/* 8-Card Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {audienceList.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="glass-panel glass-card-hover rounded-2xl p-6 text-left flex flex-col justify-between group relative overflow-hidden min-h-[200px] h-full"
              >
                {/* Micro card backlight on hover */}
                <div className="absolute -top-10 -right-10 w-20 h-20 bg-brand-orange/5 rounded-full blur-xl group-hover:bg-brand-orange/15 transition-all duration-300" />
                
                <div>
                  {/* Icon */}
                  <div className="p-3 rounded-xl bg-brand-navy-deep border border-brand-navy-border group-hover:border-brand-orange/40 text-brand-orange w-fit mb-5 transition duration-300">
                    <Icon className="h-5.5 w-5.5" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-brand-orange transition duration-200">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-400 text-xs leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
