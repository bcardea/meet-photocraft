import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

interface LinkProps {
  href: string;
  children: React.ReactNode;
}

export function Link({ href, children }: LinkProps) {
  const isExternal = href.startsWith('http');
  const className = "text-gray-300 hover:text-white transition-colors duration-200";

  if (isExternal) {
    return (
      <a
        href={href}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <RouterLink to={href} className={className}>
      {children}
    </RouterLink>
  );
}