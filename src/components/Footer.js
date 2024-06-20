import React from "react";
import FooterMainBlock from "./FooterMainBlock";
import icon15 from "../assets/icon-15.svg";
import icon16 from "../assets/icon-16.svg";
import icon17 from "../assets/icon-17.svg";
import LinearHundered from '../components/LinearHundered';

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-start py-8 px-5 max-w-full text-left text-lg text-grey-90 font-barlow border-t border-solid border-grey-200">
      {/* Footer Main Block */}
      <FooterMainBlock className="mb-8" />

      {/* Footer Sections */}
      <div className="flex flex-col md:flex-row md:justify-between w-full ml-1 max-w-7xl mx-auto">

        {/* Footer Section 1 */}
        <div className="flex flex-col md:flex-row md:items-start md:gap-8 md:max-w-[1596px] mb-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-10">
            <div className="flex items-center gap-2 border-b mt-2 border-solid border-grey-200 pb-4">
              <a href="mailto:hello@100studios.com">
                <img className="h-6 w-6" alt="Email" src={icon15} />
              </a>
              <span>hello@100studios.com</span>
            </div>
            <div className="flex items-center mt-2 gap-2 border-b border-solid border-grey-200 pb-4">
              <a href="tel:+9779869226586">
                <img className="h-6 w-6" alt="Phone" src={icon16} />
              </a>
              <span>+977-9869226586</span>
            </div>
            <div className="flex items-center mt-2 border-b border-solid border-grey-200 gap-2 pb-4">
              <a href="https://www.google.com/maps/search/?api=1&query=Kathmandu,Nepal" target="_blank" rel="noopener noreferrer">
                <img className="h-6 w-6" alt="Location" src={icon17} />
              </a>
              <span>Kathmandu, Nepal</span>
            </div>
          </div>
        </div>

        {/* Footer Section 2 */}
        <div className="flex flex-col ml-2 md:flex-row md:items-start md:max-w-[1596px] gap-8">
          <div className="w-full md:w-[402px] gap-3 border-solid border-grey-200 pb-4">
            <div className="flex gap-7">
              <a href="mailto:hello@100studios.com">
                <button className="cursor-pointer py-2 px-2 bg-transparent rounded-lg border border-solid border-darkslategray flex items-center justify-center">
                  <img className="w-6 h-6" alt="Email" src={icon15} />
                </button>
              </a>
              <a href="tel:+9779869226586">
                <div className="rounded-lg py-2 px-2 border border-solid border-darkslategray flex items-center justify-center">
                  <img className="w-6 h-6" alt="Phone" src={icon16} />
                </div>
              </a>
              <a href="https://www.google.com/maps/search/?api=1&query=Kathmandu,Nepal" target="_blank" rel="noopener noreferrer">
                <button className="cursor-pointer py-2 px-2 bg-transparent rounded-lg border border-solid border-darkslategray flex items-center justify-center">
                  <img className="w-6 h-6" alt="Location" src={icon17} />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* linearhundred Images */}
  {/* Background Images */}
  <LinearHundered className="my-10" style={{ marginBottom: '0' }} />

{/* Copyright Statement */}
<div className="text-grey-60 mt-1 md:mt-0 text-sm md:text-base flex-grow">
  © 2024 100 Studios. All rights reserved.
</div>
    </footer>
  );
};

export default Footer;
