import React from 'react';

export function ShowcaseHeader() {
  return (
    <div className="text-center">
      <h2 className="text-base text-brand-amethyst font-semibold tracking-wide uppercase">
        Showcase
      </h2>
      <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
        From Prompt to{' '}
        <span className="bg-gradient-to-r from-brand-blue to-brand-amethyst inline-block text-transparent bg-clip-text">
          Professional Images
        </span>
      </p>
      <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
        See how Photocraft transforms simple text prompts into stunning, professional visuals in seconds.
      </p>
    </div>
  );
}