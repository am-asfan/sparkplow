import { useEffect } from 'react';
import { X } from 'lucide-react';

export default function Modal({ isOpen, onClose, title, description, icon: Icon, size, children }) {
  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop overlay */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300 animate-fade-in"
      />
      
      {/* Modal Container */}
<<<<<<< HEAD
<<<<<<< HEAD
      <div className="relative w-full max-w-lg rounded-2xl glass-panel border border-brand-orange/30 p-6 sm:p-8 text-center shadow-2xl overflow-hidden z-10 transition-all transform scale-100 duration-300 animate-scale-in">
=======
      <div className="relative w-full max-w-lg rounded-2xl glass-panel border border-brand-orange/30 p-6 sm:p-8 text-left shadow-2xl overflow-hidden z-10 transition-all transform scale-100 duration-300 animate-scale-in">
>>>>>>> 6770feb (Updated website)
=======
      <div className={`relative w-full ${size === 'lg' ? 'max-w-3xl' : 'max-w-lg'} rounded-2xl glass-panel border border-brand-orange/30 p-6 sm:p-8 text-left shadow-2xl overflow-hidden z-10 transition-all transform scale-100 duration-300 animate-scale-in flex flex-col max-h-[90vh]`}>
>>>>>>> 0517d66 (Update Sparkplow content content)
        {/* Soft backlight */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none" />
        
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-brand-navy-deep border border-brand-navy-border/50 text-slate-400 hover:text-white hover:border-brand-orange/50 transition-colors duration-200 cursor-pointer z-20"
          aria-label="Close Modal"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Content */}
<<<<<<< HEAD
<<<<<<< HEAD
        <div className="flex flex-col items-center gap-4">
          {Icon && (
            <div className="p-4 rounded-2xl bg-brand-orange/15 text-brand-orange border border-brand-orange/20 shadow-[0_0_20px_rgba(255,111,0,0.15)]">
              <Icon className="h-7 w-7" />
            </div>
          )}
          
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-2 text-center">
            {title}
          </h3>
          
          <div className="h-1 w-16 bg-gradient-to-r from-transparent via-brand-orange to-transparent rounded-full opacity-80" />
          
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mt-2 whitespace-pre-line text-center">
=======
        <div className="flex flex-col items-start gap-4">
=======
        <div className="flex flex-col items-start gap-4 overflow-y-auto pr-2 custom-scrollbar w-full mt-2">
>>>>>>> 0517d66 (Update Sparkplow content content)
          {Icon && (
            <div className="p-3.5 rounded-xl bg-brand-orange/15 text-brand-orange border border-brand-orange/20 w-fit">
              <Icon className="h-6 w-6" />
            </div>
          )}
          
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-2">
            {title}
          </h3>
          
          <div className="h-1.5 w-12 bg-brand-orange rounded-full" />
          
<<<<<<< HEAD
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mt-2 whitespace-pre-line">
>>>>>>> 6770feb (Updated website)
            {description}
          </p>
=======
          {description && (
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mt-2 whitespace-pre-line w-full">
              {description}
            </p>
          )}

          {children}
>>>>>>> 0517d66 (Update Sparkplow content content)
        </div>
      </div>
    </div>
  );
}
