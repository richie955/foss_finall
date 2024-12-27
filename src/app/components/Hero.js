import React, { useState, useEffect } from "react";
import "./Hero.css";

const Hero = () => {
  const images = [
    "/1 (2).avif", // Replace with your image URLs
    "/1 (2).avif"
    ,"/1 (2).avif",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // Automatically change image every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [images.length]);

  // Hero content data
  const heroData = {
    Offer: "Join Us at FOSSMEET 2024!",
    MainText: "Embrace Open Source Innovation.",
    SubHeading: "Collaborate, Learn, and Contribute.",
    Description:
      "Discover the power of FOSS and engage with the open-source community. Join us for inspiring talks, hands-on workshops, and networking opportunities.",
  };

  return (
    <div
      className="mt-[5vh] sm:mt-0 max-w-7xl  mx-auto hero-section relative "
    
    >

    
      <div className="hero-overlay   w-full h-fit md:h-[80vh] flex flex-col items-center justify-center text-center">
        <a
          href="/events"
          className="bg-orange-500 text-black font-bold border-black p-3 px-6  text-lg mb-8 flex items-center justify-center gap-3 max-w-md"
        >
          {heroData.Offer}
        </a>

        <h1 className="px-4 text-5xl sm:text-7xl font-bold text-orange-200 mb-6">
          {heroData.MainText}
        </h1>

        <p className="px-4 text-2xl text-orange-100 mb-8">{heroData.SubHeading}</p>

        <p className="px-4 text-xl text-orange-200 max-w-3xl mb-10 leading-relaxed">
          {heroData.Description}
        </p>

        <div className="flex gap-6 px-6 ">
          <a
            href="/schedule"
            className="bg-orange-600 font-bold  text-orange-200 px-6 sm:px-8 py-4 text-sm sm:text-lg hover:bg-orange-500 transition"
          >
            View Schedule
          </a>
          <a
            href="/register"
            className="bg-orange-200 font-bold text-black px-6 sm:px-8 py-4  text-sm sm:text-lg hover:bg-gray-300 transition"
          >
            Register Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
