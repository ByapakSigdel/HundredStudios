import React from "react";
import LogoBox from './LogoBox';
const Card = ({ icon, heading, paragraph }) => {
  return (
    <div className="max-w-md rounded-lg overflow-hidden shadow-lg bg-transparent">
      <div className="p-6 bg-white bg-opacity-0"> {/* Use a semi-transparent white background */}
        <div className="flex items-center justify-start gap-4">
          <LogoBox icon = {icon} />
          <h3 className="text-2xl font-bold text-white">{heading}</h3> {/* Set text color to white */}
        </div>
        <p className="text-base text-white mt-4">{paragraph}</p> {/* Set text color to white */}
      </div>
    </div>
  );
};

export default Card;
