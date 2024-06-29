import React from 'react';
import textbox from '../assets/why100.png';
import TextBox from './TextBox';
import Card from './Card';
import expIcon from '../assets/expIcon.svg';
import clientIcon from '../assets/clientIcon.svg';
import resultsIcon from '../assets/resultsIcon.svg';
import partnershipIcon from '../assets/partnershipIcon.svg';

const Why100 = () => {
  return (
    <div className="flex flex-col items-center w-full mt-20">
      <div className="w-full">
        <TextBox
          imageUrl={textbox}
          heading="Why 100 Studios?"
          subtext="Experience excellence in digital craftsmanship with our team of skilled professionals dedicated to delivering exceptional results."
          className="h-[350px] bg-cover bg-center flex flex-col justify-center items-center text-center px-4"
          headingClass="text-4xl font-bold mb-4"
          subtextClass="text-lg max-w-2xl"
        />
      </div>
      <div className="w-full flex justify-center">
        <div className="w-4/5">
          <div className="grid grid-cols-2 w-full border border-gray-300">
            <div className="border-r border-b border-gray-300">
              <Card
                icon={expIcon}
                heading="Expertise"
                paragraph="Our team consists of highly skilled professionals who have a deep understanding of the digital landscape. We stay updated with the latest industry trends and best practices to deliver cutting-edge solutions."
                className="h-full p-6"
                iconClass="w-12 h-12 mb-4"
                headingClass="text-xl font-semibold mb-4"
                paragraphClass="text-sm"
              />
            </div>
            <div className="border-b border-gray-300">
              <Card
                icon={clientIcon}
                heading="Client-Centric Approach"
                paragraph="We prioritize our clients and their unique needs. We listen to your ideas, challenges, and goals, and tailor our services to meet your specific requirements. Your success is our success."
                className="h-full p-6"
                iconClass="w-12 h-12 mb-4"
                headingClass="text-xl font-semibold mb-4"
                paragraphClass="text-sm"
              />
            </div>
            <div className="border-r border-gray-300">
              <Card
                icon={resultsIcon}
                heading="Results-Driven Solutions"
                paragraph="Our primary focus is on delivering results. We combine creativity and technical expertise to create digital products that drive business growth, enhance user experiences, and provide a competitive advantage."
                className="h-full p-6"
                iconClass="w-12 h-12 mb-4"
                headingClass="text-xl font-semibold mb-4"
                paragraphClass="text-sm"
              />
            </div>
            <div>
              <Card
                icon={partnershipIcon}
                heading="Collaborative Partnership"
                paragraph="We value long-term relationships with our clients. We see ourselves as your digital partner, providing ongoing support, maintenance, and updates to ensure your digital products continue to thrive."
                className="h-full p-6"
                iconClass="w-12 h-12 mb-4"
                headingClass="text-xl font-semibold mb-4"
                paragraphClass="text-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why100;