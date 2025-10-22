"use client";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";

const faqs = [
  {
    question: "What do I need to get started?",
    answer:
      "To get started, simply share your project details and goals with us. We'll guide you through the process and provide the tools and support needed to bring your vision to life.",
  },
  {
    question: "What kind of customization is available?",
    answer:
      "We offer full customization options, including layout changes, color schemes, typography, and content sections to align with your brand. ",
  },
  {
    question: "How easy is it to edit for beginners?",
    answer:
      "Our platform is designed with beginners in mind, offering an intuitive drag-and-drop interface that makes editing simple and straightforward. No coding skills required—just customize and go!",
  },
  {
    question: "Do I need to know how to code?",
    answer:
      "No, you don’t need to know how to code. Our platform offers intuitive tools and templates that allow you to create and manage your website with ease.",
  },
  {
    question: "How easy is it to edit for beginners?",
    answer:
      "Our platform is designed with beginners in mind, offering an intuitive drag-and-drop interface that makes editing simple and straightforward. No coding skills required—just customize and go!",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-16">
      <div className="max-w-4xl mx-auto px-6 space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-[#080808] border border-gray-500/20 rounded-xl shadow-sm overflow-hidden "
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center p-5 text-left cursor-pointer"
            >
              <span className="text-lg text-white font-light">
                {faq.question}
              </span>
              <FaPlus
                className={`text-white transition-transform duration-300 ${
                  openIndex === index ? "rotate-45" : ""
                }`}
              />
            </button>

            <div
              className={`px-5 text-gray-400 transition-all duration-500 ease-in-out overflow-hidden ${
                openIndex === index ? "max-h-40 opacity-100 pb-5" : "max-h-0 opacity-0 pb-0"
              }`}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
