import React from 'react';
import textbox from '../assets/why100.png';
import TextBox from './TextBox'; // Assuming this is the correct path to TextBox component and file
import Card from './Card'; // Assuming this is the correct path to Card component and file
import expIcon from '../assets/expIcon.svg';
import clientIcon from '../assets/clientIcon.svg'; // Dummy client icon
import resultsIcon from '../assets/resultsIcon.svg'; // Dummy results icon
import partnershipIcon from '../assets/partnershipIcon.svg'; // Dummy partnership icon

const Why100 = () => {
  return (
    <div className="flex flex-col items-center w-full"> {/* Center the entire container */}
      <div className="w-full mb-8"> {/* Full width on mobile, auto width on desktop */}
        <TextBox
          imageUrl={textbox}
          heading="Why 100 Studios?"
          subtext="Experience excellence in digital craftsmanship with our team of skilled professionals dedicated to delivering exceptional results."
          height="350px"
        />
      </div>
      {/* Grid container for cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-4xl gap-0 border border-gray-300"> {/* 1 column on mobile, 2 columns on desktop, no gap between items, and a border */}
        <Card
          icon={expIcon}
          heading="Expertise"
          paragraph="Our team consists of highly skilled professionals who have a deep understanding of the digital landscape. We stay updated with the latest industry trends and best practices to deliver cutting-edge solutions."
          className="border border-gray-300" // Apply border to all sides
        />
        <Card
          icon={clientIcon}
          heading="Client-Centric Approach"
          paragraph="We prioritize our clients and their unique needs. We listen to your ideas, challenges, and goals, and tailor our services to meet your specific requirements. Your success is our success."
          className="border border-gray-300" // Apply border to all sides
        />
        <Card
          icon={resultsIcon}
          heading="Results-Driven Solutions"
          paragraph="Our primary focus is on delivering results. We combine creativity and technical expertise to create digital products that drive business growth, enhance user experiences, and provide a competitive advantage."
          className="border border-gray-300" // Apply border to all sides
        />
        <Card
          icon={partnershipIcon}
          heading="Collaborative Partnership"
          paragraph="We value long-term relationships with our clients. We see ourselves as your digital partner, providing ongoing support, maintenance, and updates to ensure your digital products continue to thrive."
          className="border border-gray-300" // Apply border to all sides
        />
      </div>
    </div>
  );
};

export default Why100;
