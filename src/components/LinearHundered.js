import React from 'react';
import Linear from '../assets/hundred-text.png';

export default function LinearHundred() {
  const totalImages = 20; // Adjust the number of images as needed

  return (
    <div className="w-full h-48 flex overflow-hidden">
      {[...Array(totalImages)].map((_, index) => (
        <div 
          key={index} 
          className={`flex-shrink-0 ${index === 0 ? '-ml-4' : index === totalImages - 1 ? '-mr-4' : 'mx-2'}`} // Apply negative margin to the first and last image
        >
          <img src={Linear} alt="Linear Strip" className="h-48 w-auto"/>
        </div>
      ))}
    </div>
  );
}
