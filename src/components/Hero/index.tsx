import React from 'react';
import { ImageGrid } from './ImageGrid';
import { CTAButton } from '../ui/CTAButton';

export default function Hero() {
  return (
    <div className="relative overflow-hidden min-h-screen bg-gray-900">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800/95 to-brand-blue/20" />

      {/* Content */}
      <div className="relative min-h-screen flex items-center pt-24 md:pt-32">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight">
              <span className="block">
                Stunning AI Photography
              </span>
              <span className="block">
               <span className="bg-gradient-to-r from-brand-blue to-brand-amethyst text-transparent bg-clip-text">Zero Learning Curve</span>
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Professional, ad-ready images in seconds. No experience needed, just bring a great idea.
            </p>

            <div className="flex justify-center">
              <CTAButton className="text-lg px-8 py-4" />
            </div>

            <ImageGrid />
          </div>
        </div>
      </div>
    </div>
  );
}