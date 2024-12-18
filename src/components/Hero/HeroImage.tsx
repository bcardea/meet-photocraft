import React from 'react';

export function HeroImage() {
  return (
    <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <img
        className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
        src="https://storage.googleapis.com/msgsndr/jI35EgXT0cs2YnriH7gl/media/67630336fb63bc41cf64b9d3.jpeg"
        alt="Luxurious modern living room"
      />
    </div>
  );
}