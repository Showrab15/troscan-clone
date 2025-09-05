"use client";

import { useState } from "react";
import ServiceItem from "./ServiceItem";

const services = [
  "Custom Furniture Design",
  "Room Decoration & Styling",
  "Space Planning & Interior Layout",
  "Home Renovations & Remodeling",
  "Lighting Design",
  "Virtual Interior Design Consultations",
];

const ServiceList = ({ activeIndex }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleHover = (index) => {
    setHoveredIndex(index);
  };

  return (
    <div className="flex flex-col gap-6 w-full">
      {services.map((service, index) => (
        <ServiceItem
          key={index}
          active={index === activeIndex}
          handleHover={() => handleHover(index)} // Pass the function and the index
        >
          {service}
        </ServiceItem>
      ))}
    </div>
  );
};

export default ServiceList;