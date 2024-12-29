import React from 'react';
import type { ShowcaseItem } from './types';
import { PromptIndicator } from './PromptIndicator';

interface ShowcaseSectionProps {
  category: string;
  items: ShowcaseItem[];
}

export function ShowcaseSection({ category, items }: ShowcaseSectionProps) {
  return (
    <section className="space-y-8">
      <h3 className="text-2xl font-bold text-brand-blue">{category}</h3>
      <div className="grid gap-8 lg:grid-cols-2">
        {items.map((item, index) => (
          <div key={index} className="space-y-4">
            <PromptIndicator prompt={item.prompt} />
            <div className="overflow-hidden rounded-lg">
              <img
                src={item.image}
                alt={item.prompt}
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}