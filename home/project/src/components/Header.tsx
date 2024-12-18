import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink } from './ui/NavLink';

const CTA_URL = 'https://usephotocraft.com';
const CTA_TEXT = 'Craft stunning visuals instantly';

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
        isScrolled ? 'bg-brand-blue shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <img
                className="h-8"
                src="https://storage.googleapis.com/msgsndr/jI35EgXT0cs2YnriH7gl/media/675e2619fb63bc85e65df2a2.png"
                alt="Photocraft"
              />
            </a>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <NavLink href="#features">Features</NavLink>
            <NavLink href="#showcase">Showcase</NavLink>
            <NavLink href="#use-cases">Use Cases</NavLink>
            <NavLink href="#pricing">Pricing</NavLink>
          </nav>

          <div className="hidden md:flex items-center">
            <a
              href={CTA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center px-4 py-2 border text-sm font-medium rounded-md transition-colors ${
                isScrolled
                  ? 'border-transparent text-brand-blue bg-white hover:bg-gray-50'
                  : 'border-white text-white hover:bg-white/10'
              } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-blue focus:ring-white`}
            >
              {CTA_TEXT}
            </a>
          </div>

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

      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <NavLink href="#features" mobile>Features</NavLink>
            <NavLink href="#showcase" mobile>Showcase</NavLink>
            <NavLink href="#use-cases" mobile>Use Cases</NavLink>
            <NavLink href="#pricing" mobile>Pricing</NavLink>
            <a
              href={CTA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-3 py-2 text-base font-medium text-white bg-brand-blue rounded-md hover:bg-brand-blue/90 transition-colors"
            >
              {CTA_TEXT}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}