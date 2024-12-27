"use client";

const Footer = () => {
  return (
    <footer className="bg-black text-orange-200 py-10">
      <div className="container mx-auto flex flex-col justify-center items-center px-4">
        {/* Logo and Description */}
        <div className="flex flex-col items-center mb-6">
          <h1 className="text-3xl md:text-5xl font-extrabold text-orange-500 mb-6 text-center">
            FOSSMEET'24 
          </h1>
          <p className="text-md md:text-lg text-orange-300 text-center">
            Embracing open-source innovation. Join us to connect, learn, and
            build a better future.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex  sm:flex-row gap-4 sm:gap-6 text-md md:text-lg text-orange-300 mb-6 text-center">
          <a
            href="/about"
            className="hover:text-orange-500 transition duration-300"
          >
            About
          </a>
          <a
            href="/events"
            className="hover:text-orange-500 transition duration-300"
          >
            Events
          </a>
          <a
            href="/schedule"
            className="hover:text-orange-500 transition duration-300"
          >
            Schedule
          </a>
          <a
            href="/register"
            className="hover:text-orange-500 transition duration-300"
          >
          Register
          </a>
        </div>

        {/* Social Media Links */}
        <div className="flex gap-4 justify-center">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-400 hover:text-orange-500 transition duration-300"
          >
            <svg
              className="w-8 h-8 md:w-10 md:h-10"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M22.46 6c-.77.35-1.59.58-2.46.69a4.27 4.27 0 0 0 1.88-2.36 8.51 8.51 0 0 1-2.7 1.04 4.24 4.24 0 0 0-7.23 3.87A12 12 0 0 1 3.67 4.9a4.23 4.23 0 0 0 1.31 5.66 4.2 4.2 0 0 1-1.92-.54v.06a4.25 4.25 0 0 0 3.4 4.17 4.18 4.18 0 0 1-1.91.07 4.24 4.24 0 0 0 3.96 2.94A8.5 8.5 0 0 1 2 18.57 12 12 0 0 0 8.29 20c7.6 0 11.75-6.29 11.75-11.75l-.01-.54A8.47 8.47 0 0 0 22.46 6z" />
            </svg>
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-400 hover:text-orange-500 transition duration-300"
          >
            <svg
              className="w-8 h-8 md:w-10 md:h-10"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.12 8.43 9.88v-6.99H8.35v-2.89h2.08V9.89c0-2.07 1.25-3.22 3.15-3.22.91 0 1.85.16 1.85.16v2.03h-1.04c-1.03 0-1.35.64-1.35 1.29v1.55h2.3l-.37 2.89h-1.93V21.9C18.34 21.12 22 16.99 22 12z" />
            </svg>
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-400 hover:text-orange-500 transition duration-300"
          >
            <svg
              className="w-8 h-8 md:w-10 md:h-10"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 .5C5.73.5.5 5.74.5 12c0 5.09 3.29 9.39 7.87 10.91.58.1.79-.25.79-.56v-2.01c-3.2.7-3.87-1.56-3.87-1.56-.53-1.35-1.3-1.71-1.3-1.71-1.07-.73.08-.72.08-.72 1.18.08 1.81 1.2 1.81 1.2 1.05 1.8 2.75 1.28 3.42.98.1-.76.41-1.28.75-1.57-2.55-.29-5.24-1.27-5.24-5.65 0-1.25.45-2.26 1.2-3.05-.13-.3-.52-1.52.11-3.17 0 0 .97-.31 3.17 1.18a10.8 10.8 0 0 1 2.88-.39c.98 0 1.97.13 2.88.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.65.24 2.87.11 3.17.75.79 1.2 1.8 1.2 3.05 0 4.39-2.7 5.36-5.27 5.65.42.36.8 1.08.8 2.18v3.24c0 .32.21.67.8.56A10.5 10.5 0 0 0 23.5 12c0-6.26-5.24-11.5-11.5-11.5z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-8 border-t border-orange-700 pt-4 text-center text-orange-300 text-md md:text-lg">
        © richiejames955 | All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
