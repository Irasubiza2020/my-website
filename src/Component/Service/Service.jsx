import React from "react";
import serviceCards from "./ServiceCard"; 

const Service = () => {
  return (
    <div id="Services" className="px-4 md:px-16 lg:px-24">
      {/* Title for all cards */}
      <h1 className="font-bold text-center text-3xl sm:text-4xl lg:text-5xl text-secondary mt-16 mb-6">
        What can I do for you?
      </h1>

      {/* Service cards grid under the title */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 ml-[64px] mr-[64px] ">
        {serviceCards.map((service) => (
          <div
            key={service.id}
            id={service.id}
            className="h-[400px] w-full max-w-[600px] bg-tertiary shadow-xl m-8 flex flex-col justify-center items-center text-center"
          >
            {/* Icon at the top */}
            <service.icon size={70} className="text-primary mb-4 " />

            {/* Title and Description */}
            <h1 className="font-bold text-xl mb-2 text-secondary">{service.title}</h1>
            <p className="text-sm px-4 text-secondary">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
