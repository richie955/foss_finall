import React from "react";
import EventCard from "../components/eventcard";

const UpcomingEvents = () => {
  // Data for the three most anticipated events
  const events = [
    {
      title: "FOSSMEET 2024",
      date: "March 5, 2024",
      description:
        "Join us at FOSSMEET 2024 to explore the latest trends in open-source software. Register now!",
      link: "/#fossmeet",
      image: "/1 (3).avif",
    },
    {
      title: "Open Source Hackathon",
      date: "April 10, 2024",
      description:
        "A thrilling hackathon for developers to showcase their skills and collaborate on open-source projects.",
      link: "/#hackathon",
      image: "/1 (1).avif", // Example image for the event
    },
    {
      title: "Tech Talks with Experts",
      date: "May 15, 2024",
      description:
        "Join industry leaders as they share insights into the world of open-source technology and innovation.",
      link: "/#techtalks",
      image: "/1 (2).avif", // Example image for the event
    },
  ];

  return (
    <div className="container p-6 flex flex-col bg-black">
      <h1 className="text-left text-5xl font-extrabold text-orange-600 uppercase md:ml-36 border-b border-orange-700 pb-4 mb-10">
        Most Anticipated Events
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
        {events.map((event, index) => (
          <EventCard
            key={index}
            title={event.title}
            date={event.date}
            description={event.description}
            link={event.link}
            image={event.image}
          />
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
