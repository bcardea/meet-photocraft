import React from 'react';
import { Stars } from 'lucide-react';

interface PromptIndicatorProps {
  prompt: string;
}

export function PromptIndicator({ prompt }: PromptIndicatorProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <div className="bg-gradient-to-r from-brand-blue to-brand-amethyst p-0.5 rounded-md">
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
  );
}