import React from 'react';
import dotPattern from '../assets/hero-section@3x.png';
import mountainGraph from '../assets/abstract-design.svg';

const HeroSection = () => {
  return (
    <div className="relative flex flex-col items-center justify-start min-h-screen text-center text-white overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${dotPattern})` }}
      ></div>
      <div className="relative z-0 flex flex-col items-center justify-center flex-grow">
        <h1 className="flex flex-wrap justify-start text-4xl md:text-6xl lg:text-7xl font-semibold mb-8">100 STUDIOS</h1>
        <div className="flex flex-wrap justify-content-center items-center bg-black bg-opacity-30 p-4 rounded-lg mb-8 ml-8 mr-8">
         
         <span className="text-xl m-2">For</span>
          <button className="m-2 py-2 px-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">Games</button>
          <button className="m-2 py-2 px-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">Lorem Ipsum</button>
          <button className="m-2 py-2 px-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">Media & Publishers</button>
          <span className="text-xl m-2">and</span>
          <button className="m-2 py-2 px-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">Social Good</button>
        
        </div>
        <div className="flex justify-center mt-4 space-x-5 mb-8">
          <button className="py-2 px-6 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">Our Works</button>
          <button className="py-2 px-6 bg-blue-600 rounded-lg hover:bg-blue-500 transition-colors">Contact Us</button>
        </div>
        <img
          className="self-stretch relative max-w-full overflow-hidden max-h-full z-[-2] mt-[-174px]"
          src={mountainGraph}
          alt="Mountain Graph"
        />
      </div>
    </div>
  );
};

export default HeroSection;
