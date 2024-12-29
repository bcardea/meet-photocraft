import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  mobile?: boolean;
}

export function NavLink({ href, children, mobile }: NavLinkProps) {
  const baseStyles = "font-medium transition-all duration-200";
  const mobileStyles = "block px-4 py-2 text-base text-gray-300 hover:text-white";
  const desktopStyles = "text-gray-300 hover:text-white px-3 py-2 text-sm";

  return (
    <a 
      href={href} 
      className={`${baseStyles} ${mobile ? mobileStyles : desktopStyles}`}
    >
      {children}
    </a>
  );
}