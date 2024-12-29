import React from "react";
import serviceCards from "./ServiceCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Service = () => {
  return (
    <div id="Services" className="px-6 md:px-16 lg:px-24 py-16 bg-gray-50">
      {/* Title for all cards */}
      <h1 className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary mb-12">
        What Can I Do for You?
      </h1>

      {/* Service cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {serviceCards.map((service) => (
          <div
            key={service.id}
            id={service.id}
            className="h-auto bg-white shadow-lg rounded-lg p-8 flex flex-col justify-start items-center text-center transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            {/* Icon at the top */}
            <service.icon
              size={70}
              className="text-primary mb-6 transform transition duration-300 group-hover:scale-110"
            />

            {/* Title and Description */}
            <h1 className="font-semibold text-xl mb-4 text-secondary">
              {service.title}
            </h1>
            <p className="text-sm leading-relaxed text-secondary">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
