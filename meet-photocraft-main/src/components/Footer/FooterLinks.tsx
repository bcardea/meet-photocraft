import React from 'react';
import { Link } from './Link';

export function FooterLinks() {
  return (
    <nav className="flex flex-wrap justify-center gap-6">
      <Link href="/privacy">Privacy Policy</Link>
      <Link href="/terms">Terms & Conditions</Link>
    </nav>
  );
}