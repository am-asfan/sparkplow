import React from 'react';
import { Megaphone, CalendarRange, ListChecks, UserCog, CheckCircle2 } from 'lucide-react';

export default function Services() {
  const serviceList = [
    {
      title: 'Marketing Services',
      description: 'Expand your reach and drive meaningful interactions with custom digital strategies.',
      icon: Megaphone,
      features: [
        'Social Media Marketing',
        'Content Creation',
        'Digital Marketing Support',
        'Brand Promotion',
        'Marketing Campaign Planning',
        'Audience Engagement Strategies'
      ],
      benefit: 'Drive traffic, build brand equity, and generate high-intent leads.'
    },
    {
      title: 'Event Management',
      description: 'End-to-end management for seamless execution of both virtual and physical events.',
      icon: CalendarRange,
      features: [
        'Corporate Events',
        'Educational Events',
        'Workshops',
        'Seminars',
        'Product Launches',
        'Event Planning and Coordination'
      ],
      benefit: 'Flawless execution, high attendance rates, and memorable attendee experiences.'
    },
    {
      title: 'Project Coordination',
      description: 'Ensure smooth operations, remove friction, and keep projects perfectly aligned with deadlines.',
      icon: ListChecks,
      features: [
        'Project Planning',
        'Team Coordination',
        'Timeline Management',
        'Task Monitoring',
        'Progress Tracking',
        'Project Support'
      ],
      benefit: 'Keep deliverables on time, optimize resource usage, and remove bottlenecks.'
    },
    {
      title: 'Personal Branding',
      description: 'Optimize your professional profile and position yourself as a thought leader.',
      icon: UserCog,
      features: [
        'LinkedIn Profile Optimization',
        'Personal Brand Development',
        'Portfolio Guidance',
        'Content Planning',
        'Professional Profile Enhancement'
      ],
      benefit: 'Position yourself as an authority, unlock opportunities, and build influence.'
    }
  ];

  return (
    <section
      id="services"
      className="relative py-24 bg-brand-navy-deep overflow-hidden border-t border-brand-navy-border/30"
    >
      {/* Background Radial Glow */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-radial-glow opacity-30 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-semibold uppercase tracking-wider mb-4">
            <span>What We Do</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-6">
            Services We <span className="text-brand-orange">Provide</span>
          </h2>
          <div className="h-1.5 w-16 bg-brand-orange mx-auto rounded-full mb-6" />
          <p className="text-slate-300 text-lg leading-relaxed">
            We provide custom, high-impact strategies across marketing, events, project coordination, and brand positioning to help you grow.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {serviceList.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="glass-panel glass-card-hover rounded-2xl p-6 sm:p-8 flex flex-col justify-between text-left group relative overflow-hidden"
              >
                {/* Subtle backlight */}
                <div className="absolute -top-10 -right-10 w-28 h-28 bg-brand-orange/5 rounded-full blur-2xl group-hover:bg-brand-orange/10 transition duration-300" />
                
                <div>
                  {/* Card Header with Icon */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3.5 rounded-xl bg-brand-orange/10 text-brand-orange border border-brand-orange/20 group-hover:scale-110 transition duration-300 shadow-[0_0_15px_rgba(255,87,34,0.1)]">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Feature Bullets */}
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-2 text-xs text-slate-400">
                        <CheckCircle2 className="h-4 w-4 text-brand-orange/80 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Key Benefit Section */}
                <div className="mt-auto pt-4 border-t border-brand-navy-border/40 bg-brand-navy-deep/40 rounded-xl p-4 flex flex-col gap-1 border border-brand-navy-border/20">
                  <span className="text-[10px] font-bold text-brand-orange uppercase tracking-wider">Key Benefit:</span>
                  <span className="text-xs text-slate-300 font-medium leading-relaxed">{service.benefit}</span>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
