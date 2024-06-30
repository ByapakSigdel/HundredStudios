import React from 'react';
import TextBox from './TextBox';
import aboutUsTextbox from '../assets/AboutUs.png'; // Import your image for the TextBox
import dummyImage from '../assets/dummyImage.png'; // Import a dummy image
import dummyLogo from '../assets/dummyLogo.png'; // Import a dummy logo

export default function AboutUs() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full">
        <TextBox
          imageUrl={aboutUsTextbox}
          heading="About Us"
          subtext="Learn more about our mission, vision, and values."
          className="h-[350px] bg-cover bg-center flex flex-col justify-center items-center text-center px-4"
          headingClass="text-4xl font-bold mb-4"
          subtextClass="text-lg max-w-2xl"
        />
      </div>
      <div className="w-4/5 border border-gray-300 p-8 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 p-4 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">About 100Studios</h2>
          <p className="text-sm mb-4">100 Studios is a startup company founded in 2023. 100 Studios mainly focuses on game development still providing services to clients all over the world. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
        </div>
        <div className="md:w-1/2 p-4 flex justify-center items-center relative">
          <img src={dummyImage} alt="About Us" className="w-2/3 h-auto" />
          <img src={dummyLogo} alt="Logo" className="absolute w-1/4 h-auto" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
        </div>
      </div>
    </div>
  );
}
