"use client"; // Ensure this is at the top in Next.js

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// ✅ Correct Image Imports
import image1 from "../images/1.png";
import image2 from "../images/2.png";
import image3 from "../images/3.png";
import image4 from "../images/4.png";
import image5 from "../images/5.png";
import image6 from "../images/6.png";

const services = [
  {
    title: "International and Domestic Air Tickets",
    description: "We provide flight bookings to major international destinations and trips within India at the best possible fares.",
    image: image1,
  },
  {
    title: "Hotel Booking & Visa",
    description: "Seamless hotel bookings at top destinations and assistance with visa documentation.",
    image: image2,
  },
  {
    title: "Passport & Tour Packages",
    description: "From passport guidance to full tour packages, we handle it all.",
    image: image3,
  },
  {
    title: "Eurail Pass",
    description: "Travel across Europe with a single pass—we’ll help you set it up.",
    image: image4,
  },
  {
    title: "Travel Insurance",
    description: "Get peace of mind with our comprehensive travel insurance plans.",
    image: image5,
  },
  {
    title: "Forex Money Ex-changer",
    description: "Manage currency exchange effortlessly with our forex services.",
    image: image6,
  },
];

function Projects({ id }) {
  return (
    <div className="py-16 px-6 md:px-24 bg-white text-gray-900">
      {/* Section Title */}
      <h1 className="text-5xl font-bold text-center">Our Services</h1>
  
      {/* Swiper Carousel */}
      <div className="mt-12 max-w-4xl mx-auto relative overflow-hidden">
        <Swiper
          modules={[Navigation, Pagination, Keyboard, Mousewheel]}
          slidesPerView={1} // ✅ Ensures full slide per swipe
          spaceBetween={0} // ✅ No extra spacing
          navigation={{
            nextEl: ".custom-swiper-next",
            prevEl: ".custom-swiper-prev",
          }}
          pagination={{ clickable: true }}
          keyboard={{ enabled: true, onlyInViewport: true }}
          mousewheel={{
            forceToAxis: true,
            sensitivity: 2, // ✅ Smooth scrolling
            releaseOnEdges: true, // ✅ Enables smooth transitions
          }}
          speed={500} // ✅ Smooth transitions
          className="pb-10"
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="w-full max-w-2xl mx-auto text-center"> 
                {/* ✅ Smaller Image Size with Fixed Width & Height */}
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-[70%] md:w-[60%] h-auto max-h-72 mx-auto object-contain rounded-lg shadow-lg"
                />

                {/* ✅ Ensure Text is Centered */}
                <div className="p-6 text-center">
                  <h2 className="text-2xl font-semibold">{service.title}</h2>
                  <p className="text-gray-600 mt-2 text-lg">{service.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Black Navigation Arrows */}
        <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10">
          <button className="custom-swiper-prev text-black text-4xl font-bold px-4 transition hover:scale-110 ease-in-out">
            &#10094;
          </button>
        </div>
        <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10">
          <button className="custom-swiper-next text-black text-4xl font-bold px-4 transition hover:scale-110 ease-in-out">
            &#10095;
          </button>
        </div>
      </div>
    </div>
  );
}

export default Projects;
