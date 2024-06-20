import React from "react";

const Card = ({ icon, heading, paragraph }) => {
  return (
    <div className="max-w-md rounded-lg overflow-hidden shadow-lg bg-transparent">
      <div className="p-6 bg-white bg-opacity-0"> {/* Use a semi-transparent white background */}
        <div className="flex items-center justify-start gap-4">
          <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
            <img className="w-8 h-8" alt="" src={icon} />
          </div>
          <h3 className="text-2xl font-bold text-white">{heading}</h3> {/* Set text color to white */}
        </div>
        <p className="text-base text-white mt-4">{paragraph}</p> {/* Set text color to white */}
      </div>
    </div>
  );
};

export default Card;
