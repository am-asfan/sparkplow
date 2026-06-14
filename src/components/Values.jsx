import React from 'react';
import { Palette, Crown, Scale, Users2, TrendingUp } from 'lucide-react';

export default function Values() {
  const values = [
    {
      title: 'Creativity',
      description: 'We approach every challenge with fresh perspectives, crafting unique campaigns and out-of-the-box brand ideas.',
      icon: Palette,
    },
    {
      title: 'Excellence',
      description: 'We hold ourselves to the highest standards, ensuring premium delivery across all marketing and coordinate channels.',
      icon: Crown,
    },
    {
      title: 'Integrity',
      description: 'Transparency is our foundation. We commit to honest data reports, clear timelines, and genuine professional ethics.',
      icon: Scale,
    },
    {
      title: 'Collaboration',
      description: 'We function as an integrated extension of your brand, co-building solutions that achieve aligned project goals.',
      icon: Users2,
    },
    {
      title: 'Growth',
      description: 'Our ultimate target. We measure our achievements by the height of your commercial success and professional expansion.',
      icon: TrendingUp,
    },
  ];

  return (
    <section
      id="values"
      className="relative py-24 bg-brand-navy-deep overflow-hidden border-t border-brand-navy-border/30"
    >
      {/* Background Radial Glow */}
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-radial-glow opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-semibold uppercase tracking-wider mb-4">
            <span>What Guides Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-6">
            Our Core <span className="text-brand-orange">Values</span>
          </h2>
          <div className="h-1.5 w-16 bg-brand-orange mx-auto rounded-full mb-6" />
          <p className="text-slate-300 text-lg leading-relaxed">
            The fundamental standards that drive our execution, support model, and client partnerships.
          </p>
        </div>

        {/* 5 Card layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6 mt-12 max-w-7xl mx-auto">
          {values.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="glass-panel glass-card-hover rounded-2xl p-6 text-left flex flex-col justify-between group relative overflow-hidden min-h-[250px] h-full"
              >
                {/* Backlight on hover */}
                <div className="absolute -top-10 -right-10 w-20 h-20 bg-brand-orange/5 rounded-full blur-xl group-hover:bg-brand-orange/15 transition-all duration-300" />
                
                <div>
                  {/* Icon */}
                  <div className="p-3.5 rounded-xl bg-brand-navy-deep border border-brand-navy-border group-hover:border-brand-orange/40 text-brand-orange w-fit mb-6 transition duration-300">
                    <Icon className="h-6 w-6" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-brand-orange transition duration-200">
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
