"use client";

import React from "react";

import Lottie from "lottie-react";
import nextwhatwedo from "@/assets/animation/nextwhatwedo.json";
import { MdOutlineContentCut } from "react-icons/md";
import { BsFillHouseCheckFill } from "react-icons/bs";
import { FaBath, FaCommentAlt } from "react-icons/fa";
import { GiWindow } from "react-icons/gi";
import { RiHomeOfficeFill } from "react-icons/ri";

const servicesData = [
  {
    name: "Office",
    icon: <RiHomeOfficeFill />,
  },
  {
    name: "Window",
    icon: <GiWindow />,
  },
  {
    name: "Carpet",
    icon: <FaCommentAlt />,
  },
  {
    name: "Washroom",
    icon: <FaBath />,
  },
  {
    name: "Property",
    icon: <BsFillHouseCheckFill />,
  },
  {
    name: "Grass Cutting",
    icon: <MdOutlineContentCut />,
  },
];

const NextWhatWeDo = () => {
  return (
    <section className="py-16 bg-white">
      <hr className="border-0.5 py-10" />
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Text Section */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl lg:text-5xl sx:text-2xl sm:text-3xl  font-bold mb-4 font-bitter">
            From office clean-ups to window and carpet care,
            <span className="text-blue-600">
              our strong team handles everything efficiently.
            </span>
          </h2>
          <p className="text-gray-600 mb-8">
            We ensure your space remains spotless and inviting with our range of
            services, including Commercial Cleaning, Office Cleaning, Window
            Cleaning, and Carpet Cleaning. Leave the details to us while you
            focus on what truly matters.
          </p>

          {/* Services Section */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {servicesData.map((service, index) => (
              <div key={index} className="flex items-center space-x-2">
                <span className="bg-[#23C55E] p-2 rounded-full text-[#23C55E] bg-opacity-20">
                  {service.icon}
                </span>
                <p className="text-gray-700">{service.name}</p>
              </div>
            ))}
          </div>

          <button className="bg-[#23C55E] text-white px-6 py-3 text-lg rounded-md hover:bg-blue-700 transition-all">
            View Our More Services
          </button>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2  lg:mt-0">
          <Lottie
            animationData={nextwhatwedo}
            className="w-full h-[600px] mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default NextWhatWeDo;
