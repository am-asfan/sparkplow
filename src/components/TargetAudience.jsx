import {
  Rocket,
  Building2,
  GraduationCap,
  Users2,
  Lightbulb,
  UserCog
} from 'lucide-react';

export default function TargetAudience() {
  const audienceList = [
    {
      title: 'Startups',
      description: 'Accelerate early-stage growth with creative launch campaigns, content strategies, and strategic brand positioning.',
      icon: Rocket,
    },
    {
      title: 'Businesses',
      description: 'Scale your market presence, streamline customer acquisition, and maintain consistent brand communications.',
      icon: Building2,
    },
    {
      title: 'Educational Institutions',
      description: 'Engage students, promote courses, and coordinate high-impact academic seminars and digital campaigns.',
      icon: GraduationCap,
    },
    {
      title: 'Organizations',
      description: 'Structure communications, run public campaigns, and coordinate events with professional execution and tracking.',
      icon: Users2,
    },
    {
      title: 'Entrepreneurs',
      description: 'Transform raw ideas into viable digital models, establishing market visibility and commercial opportunities.',
      icon: Lightbulb,
    },
    {
      title: 'Personal Brands',
      description: 'Optimize your professional presence, build LinkedIn authority, and position yourself as a trusted industry leader.',
      icon: UserCog,
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
            Who We <span className="text-brand-orange">Work With</span>
          </h2>
          <div className="h-1.5 w-16 bg-brand-orange mx-auto rounded-full mb-6" />
          <p className="text-slate-300 text-lg leading-relaxed">
            We deliver tailored solutions across a diverse network, bridging the gap between ambitious ideas and commercial reality.
          </p>
        </div>

        {/* 6-Card Grid Layout (3 columns on desktop, centered) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 max-w-6xl mx-auto">
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

