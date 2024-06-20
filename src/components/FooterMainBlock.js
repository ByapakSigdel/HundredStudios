import React from "react";
import icon12 from "../assets/icon-12.svg";
import icon13 from "../assets/icon-13.svg";
import icon14 from "../assets/icon-14.svg";
import hundred1 from "../assets/hunderd--1@2x.png";

const FooterMainBlock = ({ className = "" }) => {
  return (
    <div className={`w-full max-w-[1596px] px-4 py-6 relative text-left text-lg text-grey-90 font-barlow ${className}`}>
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4">
        <img className="h-14 w-[149px] object-cover" alt="Hundred1" src={hundred1} />
        <div className="w-full md:w-[402px] rounded-xl box-border flex flex-col md:flex-row items-center justify-start py-3.5 pr-4 pl-6 gap-6 md:gap-4 border-[1px] border-solid border-grey-15">
          <div className="relative leading-[150%] font-medium">Stay Connected</div>
          <div className="flex flex-row items-center justify-start gap-4">
            <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
              <button className="flex items-center justify-center w-10 h-10 bg-transparent rounded-lg border border-darkslategray hover:bg-gray-800">
                <img className="w-6 h-6" alt="Facebook" src={icon12} />
              </button>
            </a>
            <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
              <button className="flex items-center justify-center w-10 h-10 bg-transparent rounded-lg border border-darkslategray hover:bg-gray-800">
                <img className="w-6 h-6" alt="Instagram" src={icon13} />
              </button>
            </a>
            <a href="https://www.linkedin.com/yourprofile" target="_blank" rel="noopener noreferrer">
              <button className="flex items-center justify-center w-10 h-10 bg-transparent rounded-lg border border-darkslategray hover:bg-gray-800">
                <img className="w-6 h-6" alt="LinkedIn" src={icon14} />
              </button>
            </a>
          </div>
        </div>
        <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-start gap-6 md:gap-4 text-center md:text-left">
          <a href="/" className="relative leading-[150%] font-medium min-w-[45px] hover:text-blue-800">Home</a>
          <a href="/services" className="relative leading-[150%] font-medium min-w-[45px] hover:text-blue-800">Services</a>
          <a href="/works" className="relative leading-[150%] font-medium min-w-[41px] hover:text-blue-800">Work</a>
          <a href="/about" className="relative leading-[150%] font-medium min-w-[48px] hover:text-blue-800">About</a>
          <a href="/contact" className="relative leading-[150%] font-medium min-w-[42px] hover:text-blue-800">Contact</a>
        </div>
      </div>
      <div className="w-full mt-4 border-t-[1px] border-solid border-grey-15" />
    </div>
  );
};

export default FooterMainBlock;
