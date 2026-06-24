import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import TargetAudience from './components/TargetAudience';
import WhyChooseUs from './components/WhyChooseUs';
import Values from './components/Values';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-brand-navy-deep text-slate-100 flex flex-col overflow-x-hidden">
      {/* Dynamic Backlights - Glow spheres */}
      <div className="absolute top-[10%] left-[5%] w-[600px] h-[600px] rounded-full bg-radial-glow opacity-30 blur-[120px] pointer-events-none" />
      <div className="absolute top-[40%] right-[5%] w-[500px] h-[500px] rounded-full bg-radial-glow opacity-25 blur-[120px] pointer-events-none" />
      <div className="absolute top-[75%] left-[8%] w-[600px] h-[600px] rounded-full bg-radial-glow opacity-20 blur-[120px] pointer-events-none" />

      {/* Navigation header */}
      <Navbar />

      {/* Main Content Areas */}
      <main className="flex-grow">
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
      </main>

      {/* Footer Capsule */}
      <Footer />
    </div>
  );
}
