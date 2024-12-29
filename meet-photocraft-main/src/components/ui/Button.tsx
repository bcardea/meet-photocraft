import React from 'react';
import { cn } from '../../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2',
        {
          'bg-[#2188C7] text-white hover:bg-[#1a6b9e] focus:ring-[#2188C7]': variant === 'primary',
          'bg-white text-[#2188C7] hover:bg-gray-50 focus:ring-[#2188C7]': variant === 'secondary',
          'border border-[#2188C7] text-[#2188C7] hover:bg-[#2188C7] hover:text-white': variant === 'outline',
          'px-3 py-2 text-sm': size === 'sm',
          'px-4 py-2 text-base': size === 'md',
          'px-6 py-3 text-lg': size === 'lg',
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}