import React from 'react';

function Services({ id }) {
  const servicesData = [
    {
      title: 'International Air Tickets',
      description:
        'We provide flight bookings to major international destinations at the best possible fares.',
    },
    {
      title: 'Domestic Air Tickets',
      description:
        'Plan your trips within India with convenient and affordable domestic flights.',
    },
    {
      title: 'Hotel Booking & Visa',
      description:
        'Seamless hotel bookings at top destinations and assistance with visa documentation.',
    },
    {
      title: 'Passport & Tour Packages',
      description:
        'From passport guidance to full tour packages, we handle it all.',
    },
    {
      title: 'Eurail Pass',
      description:
        'Travel across Europe with a single pass—we’ll help you set it up.',
    },
    {
      title: 'Travel Insurance',
      description:
        'Get peace of mind with our comprehensive travel insurance plans.',
    },
    {
      title: 'Forex Money Ex-changer',
      description:
        'Manage currency exchange effortlessly with our forex services.',
    },
  ];

  return (
    <section id={id} className="py-16 px-4 bg-[#EAE7DD]">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Our Services</h2>
          <p className="mt-2 text-gray-600 max-w-xl mx-auto">
            Explore our range of offerings designed to make your travel seamless and unforgettable.
          </p>
        </div>

        {/* First Row (4 Boxes) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-25">
          {servicesData.slice(0, 4).map((service, index) => (
            <div
              key={index}
              className="bg-white  shadow transition transform hover:-translate-y-2 hover:scale-105 hover:shadow-2xl hover:bg-gray-100 w-64 h-64 flex flex-col justify-between p-6 text-center mx-auto"
            >
              <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Second Row (3 Boxes, Center-Aligned) */}
        <div className="flex justify-center gap-8 mt-12">
          {servicesData.slice(4).map((service, index) => (
            <div
              key={index}
              className="bg-white  shadow transition transform hover:-translate-y-2 hover:scale-105 hover:shadow-2xl hover:bg-gray-100 w-64 h-64 flex flex-col justify-between p-6 text-center"
            >
              <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
