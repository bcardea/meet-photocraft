import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';

interface ImagePromptProps {
  prompt: string;
  image: string;
}

export function ImagePrompt({ prompt, image }: ImagePromptProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-[1.02]">
      <div className="relative aspect-w-16 aspect-h-9">
        <img
          src={image}
          alt="Generated image"
          className="w-full h-full object-cover"
        />
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`absolute bottom-4 right-4 flex items-center gap-2 px-4 py-2 rounded-full 
            ${isExpanded 
              ? 'bg-gradient-to-r from-brand-blue to-brand-amethyst text-white' 
              : 'bg-white/90 backdrop-blur-sm text-brand-blue'} 
            shadow-lg transition-all duration-300 hover:scale-105 group`}
        >
          <Sparkles 
            className={`w-4 h-4 ${isExpanded ? 'animate-sparkle text-white' : 'text-brand-blue'}`} 
          />
          <span className="font-medium">View Prompt</span>
        </button>
      </div>
      
      <div 
        className="transition-all duration-300 ease-in-out"
        style={{ 
          maxHeight: isExpanded ? '200px' : '0',
          opacity: isExpanded ? 1 : 0,
          overflow: 'hidden'
        }}
      >
        <div className="p-6 bg-gradient-to-r from-brand-blue/5 to-brand-amethyst/5">
          <div className="relative">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
              <div className="w-12 h-1 bg-gradient-to-r from-brand-blue to-brand-amethyst rounded-full" />
            </div>
            <p className="text-gray-700 leading-relaxed">{prompt}</p>
          </div>
        </div>
      </div>
    </div>
  );
}