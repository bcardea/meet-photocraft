import React from 'react';

export function FooterCopyright() {
  return (
    <p className="text-gray-400 text-sm">
      © {new Date().getFullYear()} Photocraft. All rights reserved.
    </p>
  );
}