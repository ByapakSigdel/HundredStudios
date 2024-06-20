import React from 'react';

const Textbox = ({ imageUrl, heading, subtext, height = '300px' }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div
        className="w-4/5 bg-cover bg-center relative"
        style={{ 
          backgroundImage: `url(${imageUrl})`,
          height: height,
          backgroundSize: 'cover',
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="text-white text-center p-10">
            <h1 className="text-4xl font-bold mb-4">{heading}</h1>
            <p className="text-lg">{subtext}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Textbox;
