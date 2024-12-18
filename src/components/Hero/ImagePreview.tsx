import React from 'react';

interface ImagePreviewProps {
  src: string;
  alt: string;
  onClick: () => void;
}

export function ImagePreview({ src, alt, onClick }: ImagePreviewProps) {
  return (
    <button
      onClick={onClick}
      className="transform transition-all duration-300 hover:scale-105 focus:outline-none"
    >
      <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-lg ring-2 ring-white/10 hover:ring-brand-blue/50">
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
        />
      </div>
    </button>
  );
}