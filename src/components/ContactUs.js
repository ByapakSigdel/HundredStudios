import React from 'react';
import TextBox from './TextBox';
import textbox from '../assets/ContactUs.png';
import mailIcon from '../assets/mailIcon.svg';  // Import your mail icon
import phoneIcon from '../assets/phoneIcon.svg'; // Import your phone icon
import locationIcon from '../assets/locationIcon.svg'; // Import your location icon

export default function ContactUs() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full">
        <TextBox
          imageUrl={textbox}
          heading="Contact Us"
          subtext="Get in touch with us today and let us help you with any questions or inquiries you may have."
          className="h-[350px] bg-cover bg-center flex flex-col justify-center items-center text-center px-4"
          headingClass="text-4xl font-bold mb-4"
          subtextClass="text-lg max-w-2xl"
        />
      </div>
      <div className="w-full flex justify-center">
        <div className="w-4/5 border border-gray-300 p-4 flex justify-around">
          <div className="flex items-center">
            <img src={mailIcon} alt="Mail Icon" className="w-6 h-6 mr-2" />
            <span>hello@hundred.com.np</span>
          </div>
          <div className="flex items-center">
            <img src={phoneIcon} alt="Phone Icon" className="w-6 h-6 mr-2" />
            <span>+123-456-7890</span>
          </div>
          <div className="flex items-center">
            <img src={locationIcon} alt="Location Icon" className="w-6 h-6 mr-2" />
            <span>123 Main Street, City, Country</span>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="w-4/5 border border-gray-300 flex justify-center">
          <div className="w-2/3 border border-gray-300 p-4">
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="message"
                  placeholder="Your Message"
                  rows="4"
                ></textarea>
              </div>
              <div className="flex justify-center">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="w-4/5 border border-gray-300 flex">
          <div className="w-1/2 p-4 border-r border-gray-300">
            <h2 className="text-xl font-bold mb-4">Operating Days</h2>
            <p className="text-gray-700">Monday - Friday: 9 AM - 5 PM</p>
            <p className="text-gray-700">Saturday: 10 AM - 4 PM</p>
            <p className="text-gray-700">Sunday: Closed</p>
          </div>
          <div className="w-1/2 p-4">
            <h2 className="text-xl font-bold mb-4">Stay Connected</h2>
            <p className="text-gray-700">Follow us on social media for the latest updates.</p>
            <p className="text-gray-700">Facebook: @hundredstudios</p>
            <p className="text-gray-700">Twitter: @hundredstudios</p>
            <p className="text-gray-700">LinkedIn: Hundred Studios</p>
          </div>
        </div>
      </div>
    </div>
  );
}
