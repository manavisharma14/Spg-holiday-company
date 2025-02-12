import React from "react";
import { TypeAnimation } from "react-type-animation"; // Typing effect library
import backgroundImage from "./img.jpg"; // Adjust path if needed

function Home({ id }) {
  return (
    <section
      id={id}
      className="
        relative
        min-h-screen
        flex flex-col
        items-center
        justify-center
        px-4
        bg-cover
        bg-center
      "
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Dark Overlay for Better Readability */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.6)", // Adjust opacity (0.6 for 60%)
        }}
      ></div>

      {/* Main content container */}
      <div className="text-center max-w-2xl text-white relative z-10">
        {/* ✅ Typing Animation */}
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 drop-shadow-md">
          <TypeAnimation
            sequence={[
              "The only way to travel!", // Text to type
              2000, // Pause for 2 seconds
              "", // Erase text
              500, // Pause for 0.5 seconds
              "The only way to travel!", // Retype text
              2000, // Pause for 2 seconds
            ]}
            speed={100} // Typing speed
            deletionSpeed={80} // Erasing speed
            repeat={Infinity} // Infinite loop
          />
        </h1>

        <p className="text-lg md:text-2xl mb-4 drop-shadow-md">
          Your one-stop solution for all travel needs. We specialize in
          providing Visa Assistance, alongside International and Domestic
          Air Tickets, Hotel Bookings, Passport & Tour Packages, and more.
        </p>

        <p className="text-lg md:text-2xl mb-8 drop-shadow-md">
          Let us help you plan your next dream vacation or business trip
          with seamless visa processing, the best deals, and top-notch support!
        </p>
      </div>
    </section>
  );
}

export default Home;
