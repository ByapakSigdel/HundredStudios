import React, { useState } from 'react';
import TextBox from './TextBox';
import textbox from '../assets/FAQ.png';

const FAQ = () => {
  const [openAnswers, setOpenAnswers] = useState(Array(8).fill(false));

  const toggleAnswer = (index) => {
    setOpenAnswers((prev) => {
      const newAnswers = [...prev];
      newAnswers[index] = !newAnswers[index];
      return newAnswers;
    });
  };

  const faqs = [
    { number: 1, question: "What services do you offer?", answer: "We offer web design, game development, project management, and digital marketing services." },
    { number: 2, question: "How can I contact you?", answer: "You can contact us via email at hello@hundred.com.np." },
    { number: 3, question: "What is your pricing model?", answer: "Our pricing model is flexible and depends on the scope of the project. Contact us for a detailed quote." },
    { number: 4, question: "Do you offer support after project completion?", answer: "Yes, we provide ongoing support and maintenance for all our projects." },
    { number: 5, question: "Can you help with SEO?", answer: "Absolutely! Our digital marketing services include SEO to improve your website's visibility." },
    { number: 6, question: "What is your project turnaround time?", answer: "Turnaround time varies based on the project scope. We'll provide a timeline during the proposal stage." },
    { number: 7, question: "Do you work with international clients?", answer: "Yes, we work with clients from all over the world." },
    { number: 8, question: "How do I start a project?", answer: "Contact us via email to discuss your project requirements and get started." },
  ];

  return (
    <div>
      <TextBox
        imageUrl={textbox}
        heading="Frequently Asked Questions"
        subtext="Still have any questions? Contact our team via hello@hundred.com.np"
        className="h-[350px] bg-cover bg-center flex flex-col justify-center items-center text-center px-4"
        headingClass="text-4xl font-bold mb-4"
        subtextClass="text-lg max-w-2xl"
      />
      <div className="w-full flex justify-center">
        <div className="w-4/5 border border-gray-300">
          <div className="grid grid-cols-2">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-r border-gray-300 p-4 last:border-b-0 last:border-r-0">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-xl font-bold">{faq.number}</div>
                    <div className="text-lg">{faq.question}</div>
                  </div>
                  <button
                    className="text-2xl font-bold"
                    onClick={() => toggleAnswer(index)}
                  >
                    {openAnswers[index] ? '-' : '+'}
                  </button>
                </div>
                {openAnswers[index] && (
                  <div className="mt-4 text-sm text-gray-700">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
