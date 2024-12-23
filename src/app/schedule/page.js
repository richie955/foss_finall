import React from "react";

const Schedule = () => {
  const scheduleData = [
    {
      day: "Day 1",
      events: [
        { time: "09:00 AM", title: "Opening Ceremony" },
        { time: "10:30 AM", title: "Keynote: The Future of FOSS" },
        { time: "12:00 PM", title: "Networking Lunch" },
        { time: "02:00 PM", title: "Workshop: Contributing to Open Source" },
        { time: "04:00 PM", title: "Panel: Women in Open Source" },
        { time: "06:00 PM", title: "Closing for Day 1" },
      ],
    },
    {
      day: "Day 2",
      events: [
        { time: "09:00 AM", title: "Morning Meetup & Coffee" },
        { time: "10:00 AM", title: "Talk: Building with FOSS" },
        { time: "11:30 AM", title: "Hackathon Begins" },
        { time: "02:00 PM", title: "Workshop: Advanced Git Techniques" },
        { time: "05:00 PM", title: "Hackathon Presentations" },
        { time: "07:00 PM", title: "Closing Ceremony" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-black text-orange-200 py-8 px-4">
      <h1 className="text-left text-5xl font-extrabold text-orange-600 uppercase md:ml-36 border-b border-orange-700 pb-4 mb-10">
        Schedule
      </h1>
      <div className="relative max-w-5xl mx-auto">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-[1px] bg-orange-500 h-full"></div>

        {/* Day 1 */}
        <div className="mb-16">
          <h2 className="absolute text-7xl left-[5vw] sm:left-[22vw] top-[49vh] rotate-[270deg]  uppercase font-bold text-orange-600  bg-black ">
           Day 1
          </h2>
          {scheduleData[0].events.map((event, index) => (
            <div key={index} className="flex items-center mb-8 relative">
              <div className="w-4 h-4 border border-orange-600 bg-black rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
              <div className="w-1/2 text-right pr-8">
               
              </div>
              <div className="w-1/2 text-left pl-8">
              <span className="text-lg font-bold">{event.time}</span>
                <p className="text-lg text-orange-600 font-semibold">
                  {event.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Day 2 */}
        <div>
        <h2 className="absolute text-7xl right-[5vw] sm:right-[22vw] bottom-[47vh] rotate-[90deg]  uppercase font-bold text-orange-600  bg-black ">
           Day 2
          </h2>
          {scheduleData[1].events.map((event, index) => (
            <div key={index} className="flex items-center mb-8 relative">
              <div className="w-1/2 text-right pr-8">
                <span className="text-lg font-bold">{event.time}</span>
                <p className="text-lg text-orange-600 font-semibold">
                  {event.title}
                </p>
              </div>
              <div className="w-4 h-4 border border-orange-600 bg-black rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
              <div className="w-1/2 text-left pl-8">
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Schedule;
