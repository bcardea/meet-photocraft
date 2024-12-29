import React, { useState } from 'react';
import { ImagePreview } from './ImagePreview';
import { ImageModal } from './ImageModal';
import { showcaseItems } from '../Showcase/showcaseData';

interface SelectedImage {
  src: string;
  prompt: string;
}

export function ImageGrid() {
  const [selectedImage, setSelectedImage] = useState<SelectedImage | null>(null);

  // Flatten all images from showcase items
  const allImages = showcaseItems.flatMap(category => 
    category.items.map(item => ({
      src: item.image,
      prompt: item.prompt
    }))
  );

  return (
    <>
      <div className="flex gap-4 mt-12 flex-wrap justify-center max-w-3xl mx-auto">
        {allImages.map((image, index) => (
          <ImagePreview
            key={index}
            src={image.src}
            alt={image.prompt}
            onClick={() => setSelectedImage(image)}
          />
        ))}
      </div>

      {selectedImage && (
        <ImageModal
          src={selectedImage.src}
          prompt={selectedImage.prompt}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </>
  );
}