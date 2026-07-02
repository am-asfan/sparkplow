import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import TargetAudience from './components/TargetAudience';
import WhyChooseUs from './components/WhyChooseUs';
import Values from './components/Values';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ClientsAndWorks from './components/ClientsAndWorks';

export default function App() {
  const [view, setView] = useState(() => {
    return window.location.hash === '#works' ? 'works' : 'home';
  });

  // Listen to manual URL hash changes (like browser back/forward or direct links)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#works') {
        setView('works');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setView('home');
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const onNavigate = (targetId) => {
    if (targetId === 'works') {
      setView('works');
      window.location.hash = 'works';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setView('home');
      window.location.hash = targetId === 'home' ? '' : targetId;
      // Delay scrolling slightly to allow React to render the Home sections
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 80,
            behavior: 'smooth',
          });
        }
      }, 120);
    }
  };

  return (
    <div className="relative min-h-screen bg-brand-navy-deep text-slate-100 flex flex-col overflow-x-hidden">
      {/* Dynamic Backlights - Glow spheres */}
      <div className="absolute top-[10%] left-[5%] w-[600px] h-[600px] rounded-full bg-radial-glow opacity-30 blur-[120px] pointer-events-none" />
      <div className="absolute top-[40%] right-[5%] w-[500px] h-[500px] rounded-full bg-radial-glow opacity-25 blur-[120px] pointer-events-none" />
      <div className="absolute top-[75%] left-[8%] w-[600px] h-[600px] rounded-full bg-radial-glow opacity-20 blur-[120px] pointer-events-none" />

      {/* Navigation header */}
      <Navbar view={view} onNavigate={onNavigate} />

      {/* Main Content Areas */}
      <main className="flex-grow">
        {view === 'home' ? (
          <>
            {/* Hero Landing */}
            <Hero />

            {/* About Us (Mission/Vision) */}
            <AboutUs />

            {/* Services (Marketing, Events, Coordination, Branding) */}
            <Services />

            {/* Who We Serve */}
            <TargetAudience />

            {/* Why Choose Us */}
            <WhyChooseUs />

            {/* Core Values */}
            <Values />

            {/* Contact Form & Actions */}
            <Contact />
          </>
        ) : (
          <ClientsAndWorks onNavigate={onNavigate} />
        )}
      </main>

      {/* Footer Capsule */}
      <Footer onNavigate={onNavigate} />
    </div>
  );
}
