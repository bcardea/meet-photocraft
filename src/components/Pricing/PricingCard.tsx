import React from 'react';
import { PricingFeatures } from './PricingFeatures';

interface PricingPlan {
  name: string;
  price: string;
  period: string;
  savings?: string;
}

interface PricingCardProps {
  plan: PricingPlan;
}

export function PricingCard({ plan }: PricingCardProps) {
  return (
    <div className="relative bg-white border border-gray-200 rounded-lg shadow-sm flex flex-col">
      <div className="p-6">
        <h3 className="text-lg font-medium text-gray-900">{plan.name}</h3>
        <div className="mt-8 flex items-baseline">
          <span className="text-4xl font-extrabold text-gray-900">{plan.price}</span>
          <span className="ml-1 text-base font-medium text-gray-500">{plan.period}</span>
        </div>
        {plan.savings && (
          <p className="mt-2 text-sm text-brand-amethyst font-semibold">{plan.savings}</p>
        )}
        <PricingFeatures />
      </div>
    </div>
  );
}