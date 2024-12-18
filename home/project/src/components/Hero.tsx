import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTA_URL = 'https://usephotocraft.com';
const CTA_TEXT = 'Craft stunning visuals instantly';

export default function Hero() {
  return (
    <div className="relative overflow-hidden min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          className="h-full w-full object-cover"
          src="https://storage.googleapis.com/msgsndr/jI35EgXT0cs2YnriH7gl/media/67631d84469351e1964dce2e.jpeg"
          alt="Luxurious modern living room"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative min-h-screen">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="sm:max-w-lg sm:mx-auto lg:mx-0 lg:max-w-xl">
                <div className="sm:text-center lg:text-left">
                  <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl text-white">
                    <span className="block">
                      Ad-Ready <span className="text-brand-blue">Images,</span>
                    </span>
                    <span className="block">Simplified</span>
                  </h1>
                  <p className="mt-3 text-base text-gray-200 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    Professional-grade images for real estate, B2B marketing, and brand content—without the complexity of AI prompts or the cost of photographers.
                  </p>
                  <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <div className="rounded-md shadow">
                      <a
                        href={CTA_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brand-blue hover:bg-brand-blue/90 md:py-4 md:text-lg md:px-10 transition-colors"
                      >
                        {CTA_TEXT}
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}