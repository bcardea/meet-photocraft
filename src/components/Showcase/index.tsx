import React from 'react';
import { ShowcaseHeader } from './ShowcaseHeader';
import { ShowcaseSection } from './ShowcaseSection';
import { showcaseItems } from './showcaseData';

export default function Showcase() {
  return (
    <div className="bg-gray-50 py-16 sm:py-24" id="showcase">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ShowcaseHeader />
        <div className="mt-16 space-y-20">
          {showcaseItems.map((category) => (
            <ShowcaseSection
              key={category.category}
              category={category.category}
              items={category.items}
            />
          ))}
        </div>
      </div>
    </div>
  );
}