import React from 'react';
import { Check } from 'lucide-react';

const features = [
  "Unlimited Professional-Grade Images",
  "Commercial Usage Rights",
  "Priority Support",
  "Regular Style Updates",
  "Training & Resources"
];

export function PricingFeatures() {
  return (
    <ul className="mt-6 space-y-4">
      {features.map((feature) => (
        <li key={feature} className="flex items-start">
          <Check className="flex-shrink-0 h-5 w-5 text-brand-blue" aria-hidden="true" />
          <span className="ml-3 text-sm text-gray-500">{feature}</span>
        </li>
      ))}
    </ul>
  );
}