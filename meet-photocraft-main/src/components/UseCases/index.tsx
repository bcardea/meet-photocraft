import React from 'react';
import { UseCaseHeader } from './UseCaseHeader';
import { UseCaseCard } from './UseCaseCard';
import { useCases } from './useCasesData';

export default function UseCases() {
  return (
    <div className="bg-gray-50 py-16 sm:py-24" id="use-cases">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <UseCaseHeader />

        <div className="mt-12">
          <div className="space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
            {useCases.map((useCase) => (
              <UseCaseCard
                key={useCase.title}
                title={useCase.title}
                subtitle={useCase.subtitle}
                features={useCase.features}
                image={useCase.image}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}