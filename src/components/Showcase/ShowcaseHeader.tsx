import React from 'react';

export function ShowcaseHeader() {
  return (
    <div className="text-center">
      <h2 className="text-base text-brand-amethyst font-semibold tracking-wide uppercase">
        Showcase
      </h2>
      <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
        From a simple input to{' '}
        <span className="bg-gradient-to-r from-brand-blue to-brand-amethyst inline-block text-transparent bg-clip-text">
          a Professional Image.
        </span>
      </p>
      <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
        Checkout how Photocraft can take a specific idea and bring it to life, or keep it simple and leave the creativity to us.
      </p>
    </div>
  );
}