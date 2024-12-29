import React from 'react';
import { LegalHeader } from './LegalHeader';
import { LegalContent } from './LegalContent';

interface LegalPageProps {
  title: string;
  lastUpdated: string;
  content: string;
}

export function LegalPage({ title, lastUpdated, content }: LegalPageProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <LegalHeader title={title} lastUpdated={lastUpdated} />
        <LegalContent content={content} />
      </div>
    </div>
  );
}