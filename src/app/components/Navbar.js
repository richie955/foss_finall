import React, { useState } from "react";
import Modal from "./model" // Import the Modal component
import "./Navbar.css";

export default function DropdownAnimation() {
  const [isMenuOpen, setisMenuOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false); // State to manage modal visibility

  const toggleMenu = () => {
    setisMenuOpen(!isMenuOpen);
  };

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="hamburger -ml-4" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>


<div className="w-full flex items-end justify-end sm:justify-between">
<div className="navbar-logo ">
          <a href="/">FOSSMEET'24</a>
        </div>

        <ul className="navbar-links font-extrabold uppercase ">
          <li><a href="/">Home</a></li>
          <li><a href="/gallery">GAllery</a></li>
          <li><a href="/events">Events</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/#FAQ">FAQs</a></li>
          <li> <a href="/login">Register</a></li>

        </ul>
</div>
       

   

        <div className="navbar-actions-mob">
        <a href="/login">Register</a>
        </div>
      </nav>

      {/* Modal Component */}
      <Modal isOpen={isModalOpen} onClose={toggleModal} />

      <div className="bg-black">
        <div
          className={`transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-[250px] opacity-100" : "max-h-0 py-0 opacity-0"
          }`}
        >
          <div className="bg-black pt-2 text-orange-600">
            <ul className="flex flex-col text-xl pl-6 uppercase font-extrabold">
              <li className="border-b mb-4 py-1 border-yellow-700"><a href="/">Home.</a></li>
              <li className="border-b mb-4 py-1 border-yellow-700"><a href="/events">Events.</a></li>
              <li className="border-b mb-4 py-1 border-yellow-700"><a href="/#FAQ">FAQ.</a></li>
              <li className="border-b mb-4 py-1 border-yellow-700"><a href="/about">About Us.</a></li>
              <li className="border-b pb-2 border-yellow-700"><a href="/gallery">Gallery</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
