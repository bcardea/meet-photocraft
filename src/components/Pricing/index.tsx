import React from 'react';
import { PricingHeader } from './PricingHeader';
import { PricingCard } from './PricingCard';
import { plans } from './pricingData';
import { CTAButton } from '../ui/CTAButton';

export default function Pricing() {
  return (
    <div className="bg-white py-16 sm:py-24" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PricingHeader />

        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto">
          {plans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>

        {/* Single gradient CTA below pricing cards */}
        <div className="mt-16 text-center space-y-6">
          <CTAButton className="text-lg px-8 py-4" />
          <p className="text-base text-gray-500">Stop waiting for amazing images.</p>
        </div>
      </div>
    </div>
  );
}