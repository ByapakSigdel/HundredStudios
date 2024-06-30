import React from 'react';
import TextBox from './TextBox';
import worksTextbox from '../assets/OurWorks.png'; // Import your image for the TextBox

const data = [
  {
    name: 'Project One',
    link: 'https://projectone.com',
    image: 'https://via.placeholder.com/150', // Placeholder image URL
    class: 'Web Development',
    description: 'A web development project focused on creating a responsive and interactive website.'
  },
  {
    name: 'Project Two',
    link: 'https://projecttwo.com',
    image: 'https://via.placeholder.com/150',
    class: 'Game Development',
    description: 'A game development project creating a fun and engaging mobile game.'
  },
  {
    name: 'Project Three',
    link: 'https://projectthree.com',
    image: 'https://via.placeholder.com/150',
    class: 'Digital Marketing',
    description: 'A digital marketing project aimed at increasing online presence and engagement.'
  },

];

export default function OurWorks() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full">
        <TextBox
          imageUrl={worksTextbox}
          heading="Our Works"
          subtext="Discover a portfolio of visually stunning and strategically crafted digital projects that showcase our creativity and expertise."
          className="h-[350px] bg-cover bg-center flex flex-col justify-center items-center text-center px-4"
          headingClass="text-4xl font-bold mb-4"
          subtextClass="text-lg max-w-2xl"
        />
      </div>
      <div className="w-4/5 border border-gray-300 p-4">
        <h2 className="text-2xl font-bold mb-4">Our Recent Projects</h2>
        <p className="text-lg">Explore some of our latest and greatest projects. We take pride in delivering high-quality results that exceed our clients' expectations.</p>
      </div>
      <div className="w-4/5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {data.map((project, index) => (
          <div key={index} className="flex flex-col items-center border border-gray-300">
            <div className="w-full border border-gray-300 p-2 text-center">
              <p className="text-gray-700">{project.class}</p>
            </div>
            <div className="w-full border border-gray-300 p-4">
              <img src={project.image} alt={project.name} className="w-full h-32 object-contain mb-4" />
              <h2 className="text-xl font-bold mb-2">{project.name}</h2>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <a href={project.link} className="text-blue-500 underline">Learn more</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
