import React from "react";

const OpenSourceOrganizations = () => {
  const organizations = [
    {
      name: "Apache Software Foundation",
      image: "/apache.png",
      description:
        "Driving open collaboration with projects like Apache HTTP Server, Spark, and Hadoop.",
    },
    {
      name: "Linux Foundation",
      image: "/linux.jpg",
      description:
        "Empowering open-source innovation, hosting projects like Kubernetes and Hyperledger.",
    },
    {
      name: "Mozilla",
      image: "/mozilla.webp",
      description:
        "Focusing on a free and open internet with projects like Firefox and Rust.",
    },
    {
      name: "Free Software Foundation",
      image: "/fsf-logo.jpg",
      description:
        "Advocating for software freedom and developing tools like GNU software.",
    },
  ];

  return (
    <div className="container p-6 px-8 flex flex-col bg-black mx-auto">
         <section className="mb-16 ">

         <h1 className="text-left text-4xl sm:text-5xl font-extrabold text-orange-600 uppercase md:ml-36 border-b border-orange-700 pb-4 mb-10">
        Why FOSS?
      </h1>
      <div className="max-w-7xl mx-auto">
      <p className="mt-4 text-lg text-orange-200 max-w-4xl mb-10 ">
          Free and Open Source Software (FOSS) is critical in fostering
          innovation, collaboration, and accessibility in the tech industry. It
          provides developers with the freedom to use, modify, and distribute
          software without restrictions, encouraging the creation of a more
          inclusive and diverse digital ecosystem.
        </p>

        <p className="mt-4 text-lg text-orange-200 max-w-4xl ml-auto text-right">
         
        By enabling transparency and
          peer review, FOSS ensures that software is free from proprietary
          control, empowering users and developers alike to contribute, improve,
          and build on existing work. This approach not only benefits the
          community but also accelerates technological advancements, as seen with
          the success of widely-used projects like Linux, Firefox, and Kubernetes.
        </p>
      </div>
       

      </section>

      
   

      <h1 className="text-left text-4xl  sm:text-5xl font-extrabold text-orange-600 uppercase md:ml-36 border-b border-orange-700 pb-4 mb-10">
        Prominnet FOSS Organizations
      </h1>
      <div className="max-w-[76rem] mx-auto">
      <div className="grid md:grid-cols-2 gap-8  mx-auto">
        {organizations.map((org, index) => (
          <div
            key={index}
            className="bg-gray-900 shadow-lg overflow-hidden group transition-transform transform hover:scale-105"
          >
            <img
              src={org.image}
              alt={org.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold text-orange-500 group-hover:text-orange-400 transition-colors duration-300">
                {org.name}
              </h2>
              <p className="mt-2 text-orange-200">{org.description}</p>
            </div>
          </div>
        ))}
      </div>
      </div>

     
    </div>
  );
};

export default OpenSourceOrganizations;
