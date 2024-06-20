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
    <div className="flex flex-col"> {/* Flex container for columns */}
      <div className="w-full mb-8 md:mb-0"> {/* Full width on mobile, half width on desktop */}
        <TextBox
          imageUrl={textbox}
          heading="Why 100 Studios?"
          subtext="Experience excellence in digital craftsmanship with our team of skilled professionals dedicated to delivering exceptional results."
          height="350px"
        />
      </div>
      {/* Cards in two columns on larger screens, one column on smaller screens */}
      <div className="flex flex-wrap justify-center ml-40">
        <div className="w-full md:w-1/2 p-2"> {/* Full width on mobile, half width on desktop */}
          <Card
            icon={expIcon}
            heading="Expertise"
            paragraph="Our team consists of highly skilled professionals who have a deep understanding of the digital landscape. We stay updated with the latest industry trends and best practices to deliver cutting-edge solutions."
          />
        </div>
        <div className="w-full md:w-1/2 p-2"> {/* Full width on mobile, half width on desktop */}
          <Card
            icon={clientIcon}
            heading="Client-Centric Approach"
            paragraph="We prioritize our clients and their unique needs. We listen to your ideas, challenges, and goals, and tailor our services to meet your specific requirements. Your success is our success."
          />
        </div>
        <div className="w-full md:w-1/2 p-2"> {/* Full width on mobile, half width on desktop */}
          <Card
            icon={resultsIcon}
            heading="Results-Driven Solutions"
            paragraph="Our primary focus is on delivering results. We combine creativity and technical expertise to create digital products that drive business growth, enhance user experiences, and provide a competitive advantage."
          />
        </div>
        <div className="w-full md:w-1/2 p-2"> {/* Full width on mobile, half width on desktop */}
          <Card
            icon={partnershipIcon}
            heading="Collaborative Partnership"
            paragraph="We value long-term relationships with our clients. We see ourselves as your digital partner, providing ongoing support, maintenance, and updates to ensure your digital products continue to thrive."
          />
        </div>
      </div>
    </div>
  );
};

export default Why100;
