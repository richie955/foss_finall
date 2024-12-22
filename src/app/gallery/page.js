import React from "react";

const Gallery = () => {
  // Array of image data for the gallery
  const images = [
    "/1 (1).avif",
    "/1 (2).avif",
    "/1 (3).avif",
    "/1 (4).avif",
    "/1 (5).avif",
    "/1 (6).avif",
    "/1 (7).avif",
    "/1 (8).avif",
    "/1 (9).avif",

    "/1 (11).avif",
    "/1 (6).avif",
    "/1 (7).avif",
    "/1 (8).avif",
    "/1 (9).avif",
    "/1 (10).avif",
    "/1 (11).avif",
    "/1 (12).avif",
    "/1 (12).avif",
  ];
  

  return (
    <div className="bg-black min-h-screen py-12 px-6">
      <h1 className="text-4xl text-orange-600 font-extrabold text-center mb-8 uppercase">
        FOSSCELL Memories
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div key={index} className="w-full">
            <img
              src={image}
              alt={`FOSSCELL Memory ${index + 1}`}
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
