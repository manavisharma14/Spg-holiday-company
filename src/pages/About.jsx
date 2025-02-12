import React from 'react';
import aboutUsImage from './aboutus.png'; // Ensure the image path is correct

function About({ id }) {
  return (
    <section
      id={id}
      className="bg-white relative min-h-screen flex items-center justify-center px-8 "
    >
      {/* Content Section */}
      <div className="relative z-10 flex flex-col md:flex-row items-center max-w-6xl w-full gap-8">
        {/* Left Text Content */}
        <div className="text-left text-[#4A4A4A] flex-1">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-md">
            About Us
          </h2>
          <p className="text-lg md:text-xl mb-4 leading-relaxed">
            SPG Holiday Company is a <i>Faridabad-based travel house</i> committed to
            providing hassle-free travel solutions. Our team of experts is
            dedicated to ensuring your journey is safe, comfortable, and memorable.
          </p>
          <p className="text-lg md:text-xl mb-8 leading-relaxed">
            Whether it's an international vacation or a domestic getaway, we handle
            everything from flight tickets, hotel bookings, and visa assistance to
            comprehensive tour packages. We look forward to serving you.
          </p>
          
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center items-center">
          <img
            src={aboutUsImage}
            alt="About Us"
            className="max-w-full h-auto object-contain drop-shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
