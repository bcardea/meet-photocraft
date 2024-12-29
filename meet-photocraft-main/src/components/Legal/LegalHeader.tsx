import React from 'react';

interface LegalHeaderProps {
  title: string;
  lastUpdated: string;
}

export function LegalHeader({ title, lastUpdated }: LegalHeaderProps) {
  return (
    <div className="mb-8">
      <h1 className="text-4xl font-bold text-gray-900">{title}</h1>
      <p className="mt-2 text-sm text-gray-600">Last Updated: {lastUpdated}</p>
    </div>
  );
}