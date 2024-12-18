import React from 'react';
import { X, Stars } from 'lucide-react';

interface ImageModalProps {
  src: string;
  prompt: string;
  onClose: () => void;
}

export function ImageModal({ src, prompt, onClose }: ImageModalProps) {
  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="relative max-w-4xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors z-10"
        >
          <X className="w-5 h-5 text-gray-700" />
        </button>

        {/* Image */}
        <div className="relative aspect-video">
          <img
            src={src}
            alt={prompt}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Prompt section */}
        <div className="p-6 bg-white">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="bg-gradient-to-r from-brand-blue to-brand-amethyst p-1 rounded-md">
                <Stars className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm text-gray-500 font-medium">
                Actual prompt used to create this image in Photocraft
              </span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              {prompt}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}