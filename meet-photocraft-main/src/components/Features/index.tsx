import React from 'react';
import { FeatureHeader } from './FeatureHeader';
import { FeatureCard } from './FeatureCard';
import { features } from './featuresData';

export default function Features() {
  return (
    <div className="py-12 bg-white" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FeatureHeader />

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <FeatureCard
                key={feature.name}
                name={feature.name}
                description={feature.description}
                icon={feature.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}