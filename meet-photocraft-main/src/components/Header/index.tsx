import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink } from '../ui/NavLink';
import { CTAButton } from '../ui/CTAButton';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <img
                className="h-8"
                src="https://storage.googleapis.com/msgsndr/jI35EgXT0cs2YnriH7gl/media/675e2619fb63bc85e65df2a2.png"
                alt="Photocraft"
              />
            </a>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink href="#features">Features</NavLink>
            <NavLink href="#showcase">Showcase</NavLink>
            <NavLink href="#use-cases">Use Cases</NavLink>
            <NavLink href="#pricing">Pricing</NavLink>
            <CTAButton className="px-6 py-2.5 text-sm" showArrow={false} />
          </nav>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-100 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-sm border-t border-gray-800">
          <div className="px-4 pt-2 pb-3 space-y-3">
            <NavLink href="#features" mobile>Features</NavLink>
            <NavLink href="#showcase" mobile>Showcase</NavLink>
            <NavLink href="#use-cases" mobile>Use Cases</NavLink>
            <NavLink href="#pricing" mobile>Pricing</NavLink>
            <div className="pt-2">
              <CTAButton className="w-full px-4 py-2.5 text-base" showArrow={false} />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}