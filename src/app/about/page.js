"use client";

import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="bg-black min-h-screen text-orange-700">
      {/* Header Section */}
      <div className="text-center py-20 bg-gray-950">
        <h1 className="text-4xl font-bold mb-4 font-instSansB">FOSSMeet'24</h1>
        <p className="text-lg font-medium max-w-3xl mx-auto text-orange-300">
          Join us for NIT Calicut's flagship Free and Open Source Software event! Collaborate, innovate, and contribute to the FOSS community.
        </p>
      </div>

      {/* About Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-8">
            <div>
              <h3 className="text-3xl font-bold text-orange-700 mb-4 font-instSansB">
                Who We Are
              </h3>
              <p className="text-orange-300">
                FOSSMeet is the annual Free and Open Source Software event hosted by NIT Calicut. It's a melting pot for developers, enthusiasts, and students passionate about open technologies. Since its inception, FOSSMeet has empowered individuals to embrace open standards and contribute to a thriving global community.
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-orange-700 mb-4 font-instSansB">
                Our Vision
              </h3>
              <p className="text-orange-300">
                Our vision is to create a collaborative space where ideas on open source development can flourish. We aim to inspire individuals to explore, contribute, and adopt FOSS principles, driving innovation and inclusivity across the tech world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex mb-8 gap-6 items-center">
            <div className="flex-1 h-[1px] bg-orange-700 rounded-full"></div>
            <h2 className="text-3xl font-bold font-instSansB">What We Offer</h2>
            <div className="flex-1 h-[1px] bg-orange-700 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              {
                image: "/collaborate.svg",
                title: "Collaborative Workshops",
                description:
                  "Engage in hands-on workshops led by open source experts. Explore a variety of technologies, tools, and frameworks in an interactive environment.",
              },
              {
                image: "/hackathon.svg",
                title: "Hackathons & Competitions",
                description:
                  "Participate in hackathons to solve real-world challenges using FOSS tools. Showcase your skills and win exciting prizes while learning collaboratively.",
              },
              {
                image: "/talks.svg",
                title: "Insightful Talks",
                description:
                  "Gain insights from industry leaders and open source contributors. Learn about cutting-edge technologies and the future of FOSS.",
              },
            ].map((feature, index) => (
              <div key={index} className="text-justify">
                <h3 className="text-xl font-bold text-orange-700 mb-4 font-instSansB">
                  {feature.title}
                </h3>
                <p className="text-orange-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex mb-8 gap-6 items-center">
            <h2 className="text-3xl font-bold font-instSansB">How It Works</h2>
            <div className="flex-1 h-[1px] bg-orange-700 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              {
                image: "/register.svg",
                title: "Register",
                description:
                  "Sign up for FOSSMeet'24 to unlock access to events, workshops, and competitions.",
              },
              {
                image: "/participate.svg",
                title: "Participate",
                description:
                  "Dive into workshops, collaborate with peers, and compete in hackathons.",
              },
              {
                image: "/contribute.svg",
                title: "Contribute",
                description:
                  "Join the FOSS movement by contributing to open source projects and discussions.",
              },
            ].map((step, index) => (
              <div key={index} className="text-justify">
                <h3 className="text-xl font-bold text-orange-700 mb-4 font-instSansB">
                  {step.title}
                </h3>
                <p className="text-orange-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
    
    </div>
  );
};

export default AboutPage;
