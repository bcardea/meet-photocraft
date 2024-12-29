import React from 'react';

interface LegalContentProps {
  content: string;
}

export function LegalContent({ content }: LegalContentProps) {
  return (
    <div className="prose prose-blue max-w-none">
      {content.split('\n').map((paragraph, index) => (
        <p key={index} className="mb-4 text-gray-700 leading-relaxed">
          {paragraph}
        </p>
      ))}
    </div>
  );
}