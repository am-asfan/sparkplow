import { useState } from 'react';
import { Palette, CalendarRange, Sparkles, CheckCircle2 } from 'lucide-react';
import Modal from './Modal';

export default function Services() {
  const [activeService, setActiveService] = useState(null);

  const serviceList = [
    {
      title: 'Content Creation',
      description: 'Engaging social media graphics, high-impact video reels, motion animation, copy, campaigns, and creative content that captivates your audience.',
      icon: Palette,
      features: [
        'Creative Design & Graphics',
        'Video Production & Reels',
        'Video Editing & Motion',
        'Copywriting & Scripts',
        'Campaign Content Assets'
      ],
      benefit: 'Capture undivided attention and build a visually stunning brand narrative.',
      popupDescription: 'We provide full-scale content creation services to build your brand identity and engagement online.',
      deliverables: [
        {
          category: 'Creative Design',
          items: [
            'Social Media Graphics',
            'Carousel Posts',
            'Story Designs',
            'Banner Designs',
            'Promotional Creatives',
            'Infographics',
            'Motion Graphics',
            'Custom Illustrations'
          ]
        },
        {
          category: 'Video Production',
          items: [
            'Short-Form Videos',
            'Social Media Reels',
            'Promotional Videos',
            'Product Videos',
            'Corporate Videos',
            'Event Highlight Videos',
            'YouTube Shorts',
            'TikTok Videos'
          ]
        },
        {
          category: 'Video Editing',
          items: [
            'Motion Animation',
            'Subtitle & Caption Editing'
          ]
        },
        {
          category: 'Content Writing',
          items: [
            'Social Media Copywriting',
            'Caption Writing',
            'Storytelling',
            'Marketing Copy',
            'Promotional Content',
            'Website Content',
            'Blog Writing',
            'Call-to-Action Writing',
            'Script Writing'
          ]
        },
        {
          category: 'Campaign Content',
          items: [
            'Product Launch Campaigns',
            'Brand Awareness Campaigns',
            'Seasonal Campaigns',
            'Promotional Campaigns',
            'Event Campaigns',
            'Creative Campaign Assets'
          ]
        }
      ]
    },
    {
      title: 'Social Media Management',
      description: 'End-to-end content scheduling, page management, community engagement, and analytics tracking to keep your brand consistently active.',
      icon: CalendarRange,
      features: [
        'Strategy & Content Planning',
        'Active Platform Management',
        'Community & Message Response',
        'Consistent Content Scheduling',
        'Analytics & Monthly Reports',
        'Profile & Performance Audits'
      ],
      benefit: 'Maintain consistency across all channels without spending your own hours.',
      popupDescription: 'We handle your entire social media lifecycle to ensure your channels stay fresh, active, and growing.',
      deliverables: [
        {
          category: 'Strategy & Planning',
          items: [
            'Social Media Strategy',
            'Content Planning',
            'Monthly Content Calendar',
            'Campaign Planning',
            'Content Scheduling'
          ]
        },
        {
          category: 'Platform Management',
          items: [
            'Facebook Management',
            'Instagram Management',
            'LinkedIn Management',
            'TikTok Management',
            'YouTube Management'
          ]
        },
        {
          category: 'Community Management',
          items: [
            'Comment Management',
            'Message Management',
            'Audience Engagement',
            'Customer Interaction',
            'Community Building'
          ]
        },
        {
          category: 'Content Publishing',
          items: [
            'Multi-Platform Scheduling',
            'Daily Posting',
            'Weekly Posting',
            'Platform Optimization',
            'Publishing Management'
          ]
        },
        {
          category: 'Analytics & Reporting',
          items: [
            'Performance Analytics',
            'Monthly Reports',
            'Audience Insights',
            'Reach & Engagement Analysis',
            'Competitor Monitoring',
            'KPI Tracking'
          ]
        },
        {
          category: 'Social Media Audits',
          items: [
            'Profile Audit',
            'Brand Consistency Audit',
            'Content Performance Audit',
            'Competitor Audit',
            'Growth Recommendations'
          ]
        }
      ]
    },
    {
      title: 'Branding',
      description: 'Cohesive brand identities, logo design, visual style guides, and communication strategies that make your business unforgettable.',
      icon: Sparkles,
      features: [
        'Logo & Visual Identity Design',
        'Brand Strategy & Positioning',
        'Brand Guidelines & Style Guides',
        'Tone of Voice & Messaging',
        'Business Collateral Assets',
        'Brand Research & Analysis'
      ],
      benefit: 'Establish a distinct market presence that builds instant trust and authority.',
      popupDescription: 'We craft comprehensive branding frameworks that shape how the world perceives and trusts your brand.',
      deliverables: [
        {
          category: 'Brand Identity',
          items: [
            'Logo Design',
            'Logo Redesign',
            'Visual Identity Design',
            'Brand Identity System',
            'Brand Refresh'
          ]
        },
        {
          category: 'Brand Strategy',
          items: [
            'Brand Positioning',
            'Brand Strategy Development',
            'Market Positioning',
            'Value Proposition',
            'Target Audience Research'
          ]
        },
        {
          category: 'Brand Guidelines',
          items: [
            'Brand Style Guide',
            'Color Palette',
            'Typography Guidelines',
            'Logo Usage Guidelines',
            'Visual Standards'
          ]
        },
        {
          category: 'Brand Communication',
          items: [
            'Brand Voice Development',
            'Messaging Framework',
            'Communication Strategy',
            'Tone of Voice',
            'Brand Story'
          ]
        },
        {
          category: 'Marketing Assets',
          items: [
            'Business Card Design',
            'Letterhead Design',
            'Email Signature Design',
            'Company Profile Design',
            'Presentation Design',
            'Brochure Design',
            'Flyer Design',
            'Poster Design',
            'Social Media Templates'
          ]
        },
        {
          category: 'Brand Research',
          items: [
            'Competitive Analysis',
            'Industry Research',
            'Brand Audit',
            'Market Research',
            'SWOT Analysis'
          ]
        }
      ]
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
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
                  <ul className="grid grid-cols-1 gap-2.5 mb-8">
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
        size="lg"
      >
        {activeService?.deliverables && (
          <div className="w-full mt-6">
            <h4 className="text-xs font-bold text-brand-orange uppercase tracking-wider mb-4 pb-2 border-b border-brand-navy-border/40">
              What We Actually Deliver:
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {activeService.deliverables.map((del, dIndex) => (
                <div 
                  key={dIndex} 
                  className="p-5 rounded-2xl glass-panel hover:border-brand-orange/20 transition-all duration-300 relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-brand-orange to-yellow-500" />
                  <h5 className="text-base font-bold text-white mb-3 pl-2 flex items-center gap-1.5">
                    {del.category}
                  </h5>
                  <ul className="flex flex-col gap-2 pl-2">
                    {del.items.map((item, iIndex) => (
                      <li key={iIndex} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-brand-orange/80 flex-shrink-0 mt-0.5 animate-pulse" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}

