import { useState } from 'react';
import { Brain, Compass, Palette, Settings, TrendingUp } from 'lucide-react';
import Modal from './Modal';

export default function Values() {
  const [activeStep, setActiveStep] = useState(null);

  const steps = [
    {
      stepNumber: '01',
      title: 'Understand',
      description: 'We learn about your business, audience, and goals.',
      popupDescription: 'We learn about your business, audience, and goals. By conducting deep research into your market, competitors, and target demographics, we lay a solid foundation for all future marketing and content efforts.',
      icon: Brain,
    },
    {
      stepNumber: '02',
      title: 'Plan',
      description: 'We create a customized strategy for your brand.',
      popupDescription: 'We create a customized strategy for your brand. We outline a clear, actionable roadmap with timelines, content topics, and campaign directions tailored to your business objectives.',
      icon: Compass,
    },
    {
      stepNumber: '03',
      title: 'Create',
      description: 'We produce content that represents your business professionally.',
      popupDescription: 'We produce content that represents your business professionally. Our creative team designs high-quality visuals, videos, and copywriting that reflect your brand\'s unique identity and values.',
      icon: Palette,
    },
    {
      stepNumber: '04',
      title: 'Manage',
      description: 'We organize, schedule, and manage your content efficiently.',
      popupDescription: 'We organize, schedule, and manage your content efficiently. We take care of publishing schedules, post optimization, and initial audience engagement so your brand remains active and organized.',
      icon: Settings,
    },
    {
      stepNumber: '05',
      title: 'Grow',
      description: 'We measure results and continuously improve performance.',
      popupDescription: 'We measure results and continuously improve performance. Through regular analytics reviews, performance tracking, and conversion optimization, we scale what works to drive sustainable success.',
      icon: TrendingUp,
    },
  ];

  return (
    <section
      id="process"
      className="relative py-24 bg-brand-navy-deep overflow-hidden border-t border-brand-navy-border/30"
    >
      {/* Background Radial Glow */}
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-radial-glow opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-semibold uppercase tracking-wider mb-4">
            <span>Our Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-6">
            How <span className="text-brand-orange">We Work</span>
          </h2>
          <div className="h-1.5 w-16 bg-brand-orange mx-auto rounded-full mb-6" />
          <p className="text-slate-300 text-lg leading-relaxed">
            A structured, results-driven methodology to take your brand from a spark of an idea to sustainable success.
          </p>
        </div>

        {/* 5 Card layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6 mt-12 max-w-7xl mx-auto">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                onClick={() => setActiveStep(item)}
                className="glass-panel glass-card-hover rounded-2xl p-6 text-left flex flex-col justify-between group relative overflow-hidden min-h-[250px] h-full cursor-pointer"
              >
                {/* Backlight on hover */}
                <div className="absolute -top-10 -right-10 w-20 h-20 bg-brand-orange/5 rounded-full blur-xl group-hover:bg-brand-orange/15 transition-all duration-300" />
                
                <div>
                  {/* Step badge & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 rounded-xl bg-brand-navy-deep border border-brand-navy-border group-hover:border-brand-orange/40 text-brand-orange transition duration-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-2xl font-black text-brand-navy-border group-hover:text-brand-orange/20 transition duration-300">
                      {item.stepNumber}
                    </span>
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

      {/* Process Popup Modal */}
      <Modal
        isOpen={activeStep !== null}
        onClose={() => setActiveStep(null)}
        title={`Step ${activeStep?.stepNumber}: ${activeStep?.title}`}
        description={activeStep?.popupDescription}
        icon={activeStep?.icon}
      />
    </section>
  );
}

