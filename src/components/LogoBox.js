import React from 'react';

const Logobox = ({ icon }) => {
  return (
    <div className="w-16 h-16 bg-gradient-to-br from-black to-green-900 rounded-lg flex items-center justify-center">
      <img className="w-8 h-8" alt="icon" src={icon} />
    </div>
  );
};

export default Logobox;
