import { useState } from 'react';
import { Palette, CalendarRange, Megaphone, Sparkles, CheckCircle2 } from 'lucide-react';
import Modal from './Modal';

export default function Services() {
  const [activeService, setActiveService] = useState(null);

  const serviceList = [
    {
      title: 'Content Creation',
      description: 'Engaging social media graphics, high-impact video reels, and copywriting designed to captivate your audience.',
      icon: Palette,
      features: [
        'Social Media Graphics',
        'High-Impact Video & Reels',
        'Copywriting & Storytelling',
        'Professional Photography',
        'Custom Branding Assets',
        'Branded Content Campaigns'
      ],
      benefit: 'Capture undivided attention and build a visually stunning brand narrative.',
      popupDescription: 'Professional social media content, graphic design, videos, reels, photography, copywriting, and branded content that captures attention.'
    },
    {
      title: 'Content Management',
      description: 'End-to-end content scheduling, page management, and audience engagement to keep your brand consistently active.',
      icon: CalendarRange,
      features: [
        'Content Planning & Calendars',
        'Active Page Management',
        'Community & Audience Engagement',
        'Performance & Analytics Tracking',
        'Multi-Channel Scheduling',
        'Brand Consistency Audits'
      ],
      benefit: 'Maintain consistency across all channels without spending your own hours.',
      popupDescription: 'Content planning, scheduling, page management, audience engagement, and performance tracking to keep your brand active and organized.'
    },
    {
      title: 'Digital Marketing',
      description: 'Result-driven marketing campaigns, lead generation, and growth strategies to scale your digital presence.',
      icon: Megaphone,
      features: [
        'Targeted Paid Campaigns',
        'Social Media Marketing',
        'Lead Generation Funnels',
        'Brand Awareness Strategies',
        'Performance Marketing',
        'Growth Analytics'
      ],
      benefit: 'Convert passive impressions into loyal customers and drive growth.',
      popupDescription: 'Social media marketing, paid campaigns, brand awareness strategies, lead generation, and growth-focused marketing solutions.'
    },
    {
      title: 'Branding',
      description: 'Cohesive brand identities, visual style guides, and communication strategies that make your business unforgettable.',
      icon: Sparkles,
      features: [
        'Logo & Visual Identity Design',
        'Brand Positioning',
        'Style Guides & Typographies',
        'Communication Strategies',
        'Brand Voice Development',
        'Competitive Analysis'
      ],
      benefit: 'Establish a distinct market presence that builds instant trust and authority.',
      popupDescription: 'Brand identity, visual branding, brand positioning, and communication strategies that make your business memorable.'
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
            What <span className="text-brand-orange">We Do</span>
          </h2>
          <div className="h-1.5 w-16 bg-brand-orange mx-auto rounded-full mb-6" />
          <p className="text-slate-300 text-lg leading-relaxed">
            Everything your brand needs to grow.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {serviceList.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                onClick={() => setActiveService(service)}
                className="glass-panel glass-card-hover rounded-2xl p-6 sm:p-8 flex flex-col justify-between text-left group relative overflow-hidden cursor-pointer"
              >
                {/* Subtle backlight */}
                <div className="absolute -top-10 -right-10 w-28 h-28 bg-brand-orange/5 rounded-full blur-2xl group-hover:bg-brand-orange/10 transition duration-300" />
                
                <div>
                  {/* Card Header with Icon */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3.5 rounded-xl bg-brand-orange/10 text-brand-orange border border-brand-orange/20 group-hover:scale-110 transition duration-300 shadow-[0_0_15px_rgba(255,87,34,0.1)]">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-brand-orange transition duration-200">
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

      {/* Service Popup Modal */}
      <Modal
        isOpen={activeService !== null}
        onClose={() => setActiveService(null)}
        title={activeService?.title}
        description={activeService?.popupDescription}
        icon={activeService?.icon}
      />
    </section>
  );
}

