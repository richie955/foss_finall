import React from "react";

const EventCard = ({ title, date, description, link, image }) => {
  return (
    <div className="bg-gray-900 text-orange-200  shadow-lg  max-w-sm">
      {/* Image at the top of the card */}
      <img
        src="/1 (2).avif"
        alt={title}
        className="w-full h-44 object-cover  mb-4"
      />

      <div className="flex flex-col p-6 ">
      <h2 className="text-2xl font-extrabold mb-3">{title}</h2>
      <p className="text-lg mb-4">{date}</p>
      <p className="text-base leading-relaxed mb-4 flex-grow">{description}</p>

      {/* Learn More button at the bottom */}
      <a
        href={link}
        className="bg-orange-600 text-black px-6 py-2 text-lg hover:bg-orange-500 transition mt-auto"
      >
        Learn More
      </a></div>

    </div>
  );
};

export default EventCard;
