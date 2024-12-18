import React from 'react';

interface UseCaseCardProps {
  title: string;
  subtitle: string;
  features: string[];
  image: string;
}

export function UseCaseCard({ title, subtitle, features, image }: UseCaseCardProps) {
  return (
    <div className="relative">
      <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1 lg:aspect-h-1">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover object-center"
        />
      </div>
      <h3 className="mt-6 text-2xl font-bold text-gray-900">
        <span className="absolute inset-0" />
        {title}
      </h3>
      <p className="text-base font-semibold text-brand-blue">{subtitle}</p>
      <ul className="mt-4 space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="text-base text-gray-500">
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}