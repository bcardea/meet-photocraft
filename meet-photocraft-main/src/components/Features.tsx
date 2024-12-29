import React from 'react';
import { Zap, Clock, PaintBucket, Building } from 'lucide-react';

const features = [
  {
    name: 'Instant Excellence',
    description: 'From property listings that make buyers swoon to social media content that stops the scroll, Photocraft delivers magazine-quality visuals in 25 seconds flat.',
    icon: Zap,
  },
  {
    name: 'Professional-Grade, Every Time',
    description: 'Every image has that premium, filmic quality that commands attention and builds trust, whether for real estate, B2B marketing, or brand content.',
    icon: PaintBucket,
  },
  {
    name: 'Built for Business',
    description: 'Unlike generic AI tools, Photocraft understands what professionals need - from warm real estate interiors to B2B visuals that convey trust.',
    icon: Building,
  },
  {
    name: 'Save Time & Resources',
    description: 'No complex prompts. No learning curve. Just professional results in seconds, whenever you need them.',
    icon: Clock,
  },
];

export default function Features() {
  return (
    <div className="py-12 bg-white" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-brand-amethyst font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need for professional visuals
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-brand-blue text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                <p className="mt-2 ml-16 text-base text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}