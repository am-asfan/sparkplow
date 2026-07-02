import { useState } from 'react';
import { Sparkles, CheckCircle2, Award, ExternalLink, Quote, Briefcase, Film } from 'lucide-react';
import nibtLogo from '../assets/images/NIBT.jpeg';
import zestroLogo from '../assets/images/Zestro cafe.jpeg';

export default function ClientsAndWorks() {
  const [selectedClient, setSelectedClient] = useState(null);

  const clientsList = [
    {
      id: 'nibt',
      name: 'NIBT Campus',
      service: 'Content Creation',
      logo: nibtLogo,
      url: 'https://nibt.lk/',
      reelUrl: 'https://www.instagram.com/reel/DZ7Jm6LlUh2/?igsh=Z2gyNDZicjlpbHN6',
      metric: 'Boosted Intakes',
      title: 'Social Media Reels Campaign',
      summary: 'We create high-impact, engaging short-form content and video reels for NIBT Campus, tailored specifically to build digital presence and drive student enrollment across major platforms.',
      platforms: [
        'Facebook Reels',
        'Instagram Reels',
        'TikTok Videos'
      ],
      results: [
        'High-retention reel visual layouts and typography overlays',
        'Increased engagement rates and academic course inquiries',
        'Consistent, professional brand messaging on active platforms'
      ],
      testimonial: {
        text: "SparkPlow has been instrumental in upgrading our social media presence. Their creative content captures our courses perfectly and has significantly improved our engagement with prospective students.",
        author: "Marketing & Admissions Division",
        organization: "NIBT Campus"
      }
    },
    {
      id: 'zestro',
      name: 'Zestro Cafe',
      service: 'Content Creation, Social Media Management',
      logo: zestroLogo,
      url: '',
      reelUrl: '',
      metric: 'Boosted Customer Reach',
      title: 'Digital Branding & Content Management',
      summary: 'We produce mouth-watering culinary content and run daily page operations for Zestro Cafe, creating a cohesive, high-engagement feed aesthetic that attracts local food enthusiasts.',
      platforms: [
        'Instagram Feed & Stories',
        'Facebook Content & Management'
      ],
      results: [
        'High-end food and beverage photography styling',
        'Consistent publishing calendar and audience responses',
        'Increased daily profile visits and direct customer interactions'
      ],
      testimonial: {
        text: "SparkPlow completely transformed how we look online. Our feed is now mouth-watering, consistent, and actively attracting new customers to our doors every day.",
        author: "Management Team",
        organization: "Zestro Cafe"
      }
    }
  ];

  const handleClientToggle = (clientId) => {
    setSelectedClient(prev => (prev === clientId ? null : clientId));
  };

  const handleScrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  const currentClient = clientsList.find(c => c.id === selectedClient);

  return (
    <section id="works" className="relative py-24 bg-brand-navy-deep overflow-hidden border-t border-brand-navy-border/30">
      
      {/* Background Radial Glow sphere */}
      <div className="absolute top-[10%] right-[10%] w-[500px] h-[500px] rounded-full bg-radial-glow opacity-25 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[5%] w-[600px] h-[600px] rounded-full bg-radial-glow opacity-15 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="h-3 w-3" />
            <span>Our Works</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-6 animate-scale-in">
            Featured <span className="text-brand-orange">Partners</span>
          </h1>
          <div className="h-1.5 w-16 bg-brand-orange mx-auto rounded-full mb-6" />
          <p className="inline-block text-base sm:text-lg font-black uppercase tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-brand-orange to-yellow-500 animate-float-slow">
            SparkPlow &mdash; From Spark to Success
          </p>
        </div>

        {/* Dynamic Partner Grid (Side-by-side flex layout) */}
        <div className="flex flex-wrap justify-center items-center gap-6 mb-12 animate-scale-in">
          
          {clientsList.map(client => (
            <div
              key={client.id}
              onClick={() => handleClientToggle(client.id)}
              className={`glass-panel w-64 h-64 rounded-3xl flex flex-col items-center justify-center p-6 transition-all duration-300 cursor-pointer relative ${
                selectedClient === client.id 
                  ? 'border-brand-orange bg-brand-navy-card/90 shadow-[0_0_20px_rgba(255,87,34,0.15)] scale-[1.02]'
                  : 'border-brand-navy-border/60 bg-brand-navy-card/45 hover:border-brand-orange/45 hover:bg-brand-navy-card/75'
              }`}
            >
              {/* Logo wrapper */}
              <div className="w-full flex items-center justify-center flex-grow bg-white rounded-2xl p-4 shadow-sm overflow-hidden">
                <img src={client.logo} alt={`${client.name} Logo`} className="h-16 w-auto object-contain" />
              </div>
              
              {/* Partner Name & Tag */}
              <span className={`text-xs font-bold tracking-wide mt-3 block ${
                selectedClient === client.id ? 'text-brand-orange' : 'text-slate-300'
              }`}>
                {client.name}
              </span>
              <span className="text-[10px] text-slate-500 mt-1 uppercase font-semibold text-center max-w-[200px] truncate">
                {client.service}
              </span>

              {/* Active Indicator dot */}
              <span className="absolute top-4 right-4 flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
            </div>
          ))}

          {/* Become Partner CTA Card */}
          <div
            onClick={handleScrollToContact}
            className="glass-panel w-64 h-64 rounded-3xl flex flex-col items-center justify-center p-6 border-dashed border-brand-navy-border/80 bg-transparent hover:border-brand-orange/60 hover:bg-brand-navy-card/20 transition-all duration-300 cursor-pointer text-slate-500 hover:text-brand-orange group"
          >
            <Briefcase className="h-8 w-8 mb-3 text-slate-600 group-hover:text-brand-orange transition-colors" />
            <span className="text-xs font-black tracking-widest uppercase text-slate-400 group-hover:text-white">Your Logo</span>
            <span className="text-[10px] text-slate-500 mt-1 group-hover:text-brand-orange">Let's grow together</span>
          </div>

        </div>

        {/* Selected Partner Details Panel - Only renders when active */}
        {selectedClient && currentClient && (
          <div className="glass-panel border border-brand-navy-border/70 rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-brand-navy-card/90 to-brand-navy-deep/90 text-left relative overflow-hidden transition-all duration-500 animate-scale-in">
            {/* Subtle backlight */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-orange/5 rounded-full blur-[80px] pointer-events-none" />

            {/* Heading Details */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-brand-navy-border/40 pb-6 mb-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-2xl border bg-white border-white/20 flex items-center justify-center shadow-sm">
                  <img src={currentClient.logo} alt={`${currentClient.name} Logo`} className="h-14 w-auto object-contain" />
                </div>
                <div>
                  <span className="text-[9px] uppercase tracking-widest font-black text-brand-orange">Partner Case Study</span>
                  <h3 className="text-xl sm:text-2xl font-black text-white leading-tight mt-0.5">
                    {currentClient.title}
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-3 flex-wrap">
                <span className="px-3 py-1 rounded-full bg-brand-orange/15 text-brand-orange border border-brand-orange/20 text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                  {currentClient.name}
                </span>
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] sm:text-xs font-bold flex items-center gap-1">
                  <Award className="h-3.5 w-3.5" /> {currentClient.metric}
                </span>
              </div>
            </div>

            {/* Content Sections */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Summary and Testimonial */}
              <div className="lg:col-span-7 space-y-6">
                <p className="text-slate-300 text-sm leading-relaxed">
                  {currentClient.summary}
                </p>

                {/* Quote Testimony */}
                <div className="border-l-3 border-brand-orange bg-brand-orange/5 p-4 rounded-r-xl">
                  <Quote className="h-5 w-5 text-brand-orange/20 mb-1" />
                  <p className="text-slate-300 text-xs italic leading-relaxed mb-2">
                    "{currentClient.testimonial.text}"
                  </p>
                  <span className="text-[10px] font-bold text-brand-orange uppercase tracking-wider block">
                    &mdash; {currentClient.testimonial.author}, {currentClient.testimonial.organization}
                  </span>
                </div>
              </div>

              {/* Right Column: Platforms & Outcomes */}
              <div className="lg:col-span-5 space-y-6 bg-brand-navy-deep/50 rounded-2xl p-5 border border-brand-navy-border/50">
                
                {/* Social Media Platforms */}
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-3 pb-2 border-b border-brand-navy-border/30 flex items-center gap-1.5">
                    <Film className="h-4 w-4 text-brand-orange" /> Social Media Coverage
                  </h4>
                  <ul className="space-y-2">
                    {currentClient.platforms.map((platform, index) => (
                      <li key={index} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="h-3.5 w-3.5 text-brand-orange flex-shrink-0" />
                        {platform}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Proven Outcomes */}
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-3 pb-2 border-b border-brand-navy-border/30">
                    Proven Outcomes
                  </h4>
                  <ul className="space-y-2">
                    {currentClient.results.map((item, index) => (
                      <li key={index} className="flex items-center gap-2 text-xs text-slate-300">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Video & External Links */}
                {(currentClient.reelUrl || currentClient.url) && (
                  <div className="pt-2 space-y-2.5">
                    {currentClient.reelUrl && (
                      <a
                        href={currentClient.reelUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 w-full py-2.5 rounded-xl bg-brand-orange hover:bg-brand-orange-bright text-white font-bold text-xs transition duration-300 shadow-[0_4px_12px_rgba(255,87,34,0.15)] hover:scale-[1.01]"
                      >
                        Watch Featured Reel <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    )}

                    {currentClient.url && (
                      <a
                        href={currentClient.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 w-full py-2.5 rounded-xl border border-brand-navy-border hover:border-brand-orange text-slate-300 hover:text-white font-bold text-xs transition duration-300 hover:scale-[1.01]"
                      >
                        Visit Website <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>
                )}

              </div>

            </div>

          </div>
        )}

        {/* Single Scrolling Partner Logos (No Duplicates) */}
        <div className="mt-20 w-full overflow-hidden relative py-4 border-y border-brand-navy-border/30 bg-brand-navy-card/10 h-20 flex items-center">
          {/* Edge gradients to fade logo in and out */}
          <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-brand-navy-deep to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-brand-navy-deep to-transparent z-10 pointer-events-none" />
          
          <div className="w-full relative flex items-center h-12">
            <div className="animate-marquee-single flex items-center gap-12">
              <div className="bg-white rounded-xl px-5 py-2 flex items-center justify-center h-11 w-34 shadow-sm border border-white/5">
                <img src={nibtLogo} alt="NIBT Campus" className="h-7 w-auto object-contain" />
              </div>
              <div className="bg-white rounded-xl px-5 py-2 flex items-center justify-center h-11 w-34 shadow-sm border border-white/5">
                <img src={zestroLogo} alt="Zestro Cafe" className="h-7 w-auto object-contain" />
              </div>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}
