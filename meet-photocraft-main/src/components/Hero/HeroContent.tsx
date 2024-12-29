import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTA_URL = 'https://usephotocraft.com';

export function HeroContent() {
  return (
    <div className="sm:text-center lg:text-left">
      <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
        <span className="block">
          Ad-Ready <span className="bg-gradient-to-r from-brand-blue to-brand-amethyst inline-block text-transparent bg-clip-text">Images</span>
        </span>
        <span className="block text-brand-blue">Simplified</span>
      </h1>
      <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
        Professional-grade images for real estate, B2B marketing, and brand content—without the complexity of AI prompts or the cost of photographers.
      </p>
      <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
        <div className="rounded-md shadow">
          <a
            href={CTA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brand-blue hover:bg-brand-blue/90 md:py-4 md:text-lg md:px-10"
          >
            Start creating images today
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
}