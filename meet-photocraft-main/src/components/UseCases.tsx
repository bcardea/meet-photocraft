import React from 'react';
import { useCases } from './UseCases/useCasesData';

export default function UseCases() {
  return (
    <div className="bg-gray-50 py-16 sm:py-24" id="use-cases">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-[#FFB800] font-semibold tracking-wide uppercase">Use Cases</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Built for professionals like you
          </p>
        </div>

        <div className="mt-12">
          <div className="space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
            {useCases.map((useCase) => (
              <div key={useCase.title} className="relative">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1 lg:aspect-h-1">
                  <img
                    src={useCase.image}
                    alt={useCase.title}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-6 text-2xl font-bold text-gray-900">
                  <span className="absolute inset-0" />
                  {useCase.title}
                </h3>
                <p className="text-base font-semibold text-[#1A2B4A]">{useCase.subtitle}</p>
                <ul className="mt-4 space-y-2">
                  {useCase.features.map((feature, index) => (
                    <li key={index} className="text-base text-gray-500">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}