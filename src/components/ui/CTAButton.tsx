import React from 'react';
import { ArrowRight } from 'lucide-react';
import { CTA } from '../../constants/cta';
import { openExternalLink } from '../../utils/openExternalLink';

interface CTAButtonProps {
  className?: string;
  showArrow?: boolean;
}

export function CTAButton({ className = '', showArrow = true }: CTAButtonProps) {
  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    await openExternalLink(CTA.URL);
  };

  return (
    <button
      onClick={handleClick}
      className={`inline-flex items-center justify-center rounded-xl text-white bg-gradient-to-r from-brand-blue to-brand-amethyst hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl font-medium ${className}`}
    >
      {CTA.TEXT}
      {showArrow && <ArrowRight className="ml-2 h-5 w-5" />}
    </button>
  );
}