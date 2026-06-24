import { useState } from 'react';
import { Target, Eye, Sparkles } from 'lucide-react';
import Modal from './Modal';

export default function AboutUs() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      id="about"
      className="relative py-24 bg-brand-navy-deep overflow-hidden border-t border-brand-navy-border/30"
    >
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] bg-radial-glow opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="h-3 w-3" />
            <span>Who We Are</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-6">
            Who <span className="text-brand-orange">We Are</span>
          </h2>
          <div className="h-1.5 w-16 bg-brand-orange mx-auto rounded-full mb-6" />
          <p className="text-slate-300 text-lg leading-relaxed mb-6">
            SparkPlow is a content creation and marketing agency helping brands build visibility, engage audiences, and grow faster through creative and strategic solutions.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-full font-semibold text-xs tracking-wider uppercase border border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white hover:shadow-[0_0_15px_rgba(255,87,34,0.3)] transition-all duration-300 cursor-pointer"
          >
            Read Our Story
          </button>
        </div>

        {/* Mission and Vision Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-12">
          
          {/* Mission Card */}
          <div className="glass-panel glass-card-hover rounded-2xl p-8 sm:p-10 text-left flex flex-col items-start relative overflow-hidden group">
            {/* Card backlight */}
            <div className="absolute -top-10 -right-10 w-24 h-24 bg-brand-orange/10 rounded-full blur-2xl group-hover:bg-brand-orange/20 transition-all duration-300" />
            
            <div className="p-4 rounded-xl bg-brand-orange/15 text-brand-orange mb-6 border border-brand-orange/20 group-hover:scale-110 transition-transform duration-300">
              <Target className="h-7 w-7" />
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
            <p className="text-slate-300 leading-relaxed text-sm">
              To empower brands and businesses to scale through creative storytelling, strategic content, and results-driven marketing.
            </p>
          </div>

          {/* Vision Card */}
          <div className="glass-panel glass-card-hover rounded-2xl p-8 sm:p-10 text-left flex flex-col items-start relative overflow-hidden group">
            {/* Card backlight */}
            <div className="absolute -top-10 -right-10 w-24 h-24 bg-brand-orange/10 rounded-full blur-2xl group-hover:bg-brand-orange/20 transition-all duration-300" />
            
            <div className="p-4 rounded-xl bg-brand-orange/15 text-brand-orange mb-6 border border-brand-orange/20 group-hover:scale-110 transition-transform duration-300">
              <Eye className="h-7 w-7" />
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
            <p className="text-slate-300 leading-relaxed text-sm">
              To be the leading growth partner that sparks innovation, builds lasting digital presence, and transforms ideas into success.
            </p>
          </div>

        </div>

      </div>

      {/* About Us Popup Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Our Story"
        description="We believe every successful brand starts with a spark. Our team combines creativity, strategy, and innovation to help businesses create meaningful connections and achieve long-term growth."
        icon={Sparkles}
      />
    </section>
  );
}

