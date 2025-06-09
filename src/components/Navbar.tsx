import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navItems = [
    { name: 'Home', section: 'home' },
    { name: 'Services', section: 'services' },
    { name: 'About', section: 'about' },
    { name: 'Contact', section: 'contact' },
  ];

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-gradient-to-r from-emerald-600/95 via-teal-600/95 to-slate-700/95 backdrop-blur-xl shadow-2xl border-b border-white/20' 
        : 'bg-gradient-to-r from-emerald-500/90 via-teal-500/90 to-slate-600/90 backdrop-blur-lg shadow-lg border-b border-white/10'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('home')} 
            className="flex items-center space-x-3 group transition-all duration-300 hover:scale-105"
          >
            <div className="w-12 h-12 rounded-xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:rotate-3 bg-white/95 p-1">
              <img 
                src="/lovable-uploads/logo.jpg" 
                alt="Trendify Logo" 
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
            <span className="text-3xl font-bold bg-gradient-to-r from-white to-emerald-100 bg-clip-text text-transparent drop-shadow-lg">
              Trendify
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.section)}
                className="relative px-4 py-2 text-lg font-medium transition-all duration-300 text-white/90 hover:text-white group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-white to-emerald-200 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            <Button 
              className="bg-white/90 hover:bg-white text-emerald-700 hover:text-emerald-800 px-8 py-3 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 transform font-semibold border-0"
              onClick={() => scrollToSection('contact')}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white/90 hover:text-white focus:outline-none transition-all duration-300 p-2 rounded-lg hover:bg-white/10"
            >
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-6 border-t border-white/20 bg-gradient-to-b from-emerald-600/95 to-teal-700/95 backdrop-blur-xl rounded-b-3xl shadow-2xl">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.section)}
                className="block w-full text-left px-6 py-4 text-lg font-medium text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 rounded-xl mx-2"
              >
                {item.name}
              </button>
            ))}
            <div className="px-6 py-4">
              <Button 
                className="w-full bg-white/90 hover:bg-white text-emerald-700 hover:text-emerald-800 py-4 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 font-semibold border-0"
                onClick={() => scrollToSection('contact')}
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
