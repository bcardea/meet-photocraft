import React from 'react';
import { FooterLinks } from './FooterLinks';
import { FooterCopyright } from './FooterCopyright';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-4">
          <FooterLinks />
          <FooterCopyright />
        </div>
      </div>
    </footer>
  );
}