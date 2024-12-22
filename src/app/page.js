"use client";
import React from "react";
import FAQ from "./components/FAQ";
import Hero from "./components/Hero";
import UpcomingEvents from "./components/UpcomingEvents";


const HomePage = () => {

  return (
    <div className="main">

      <Hero />
      <UpcomingEvents />

      <div id={"FAQ"}>
      <FAQ/>
      </div>
   
      <main></main>
      
    </div>
  );
};

export default HomePage;
