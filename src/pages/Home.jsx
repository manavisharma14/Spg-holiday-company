import React from 'react';
import backgroundImage from './img.jpg'; // Adjust the path if your image is in a subfolder

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
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.6)', // Adjust opacity here (0.3 for 30%)
        }}
      ></div>

      {/* Main content container */}
      <div className="text-center max-w-2xl text-white relative z-10">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 drop-shadow-md">
          The only way to travel!
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
