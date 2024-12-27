"use client";
import React, { useState } from "react";

const FAQ = () => {
  const [open, setOpen] = useState(null);

  const faqs = [
    {
      question: "What is FOSSMEET?",
      answer:
        "FOSSMEET is an annual event dedicated to promoting Free and Open Source Software (FOSS). It includes workshops, talks, and collaboration opportunities for open-source enthusiasts.",
    },
    {
      question: "Who can attend FOSSMEET?",
      answer:
        "FOSSMEET is open to everyone! Whether you're a developer, student, or just curious about open-source, you'll find sessions and activities tailored for all levels of expertise.",
    },
    {
      question: "Are there any registration fees?",
      answer:
        "FOSSMEET is a free event. However, some workshops may require prior registration due to limited slots.",
    },
    {
      question: "Will there be networking opportunities?",
      answer:
        "Absolutely! FOSSMEET provides ample opportunities to connect with industry experts, open-source contributors, and fellow attendees.",
    },
    {
      question: "How do I submit a proposal for a talk or workshop?",
      answer:
        "You can submit your proposals via the official FOSSMEET website. Look for the 'Call for Proposals' section.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpen(open === index ? null : index);
  };

  return (
    <div className="container p-6 mx-auto flex flex-col bg-black text-orange-600 justify-end">
       <h1 className="text-left text-5xl font-extrabold text-orange-600 uppercase md:ml-36 border-b border-orange-700 pb-4 mb-10">
       FAQS
      </h1>
      <div className="w-[60vw] mx-auto ">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="mb-4 border-b border-orange-700 "
          >
            <div
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center cursor-pointer px-6 py-4 hover:bg-gray-900 "
            >
              <h2 className="text-lg font-semibold">{faq.question}</h2>
              <span className="text-xl">
                {open === index ? "-" : "+"}
              </span>
            </div>
            {open === index && (
              <div className="px-6 py-4 bg-gray-900 text-orange-100">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
