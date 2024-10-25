import Image from "next/image";
import React from "react";
import clearManWorker from "@/assets/clener-man-worker.png";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { GiLoveMystery } from "react-icons/gi";

const statsData = [
  {
    icon: (
      <GiLoveMystery className="text-green-500 text-4xl lg:text-6xl ring-1 p-2 lg:p-4 rounded-full ring-[#23C55E] bg-[#23C55E] bg-opacity-20" />
    ),
    number: "2000+",
    label: "Clients",
  },
  {
    icon: (
      <IoCheckmarkDoneSharp className="text-green-500 text-4xl lg:text-6xl ring-1 p-2 lg:p-4 rounded-full ring-[#23C55E] bg-[#23C55E] bg-opacity-20" />
    ),
    number: "100+",
    label: "Jobs Done",
  },
  {
    icon: (
      <FaPeopleGroup className="text-green-500 text-4xl lg:text-6xl ring-1 p-2 lg:p-4 rounded-full ring-[#23C55E] bg-[#23C55E] bg-opacity-20" />
    ),
    number: "800+",
    label: "Employees",
  },
];

const WhatMakesUsDifferent: React.FC = () => {
  return (
    <div className="bg-white container my-20 md:my-40">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Left Section: Illustration */}
        <div className="flex justify-center lg:justify-start">
          <Image
            src={clearManWorker}
            alt="Cleaning team illustration"
            className="w-full max-w-xs md:max-w-md lg:max-w-lg"
            width={800}
            height={800}
          />
        </div>

        {/* Right Section: Text and Stats */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 md:mb-5 font-bitter">
            What makes us <span className="text-blue-500">different?</span>
          </h2>
          <p className="text-gray-600 leading-relaxed text-sm md:text-base">
            At New Eco, we deliver eco-friendly cleaning with non-toxic
            products, ensuring a safe and spotless environment. Our professional
            team offers tailored services for businesses, homes, and carpets.
            Quality and sustainability define everything we do.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-2">
            {statsData.map((stat, index) => (
              <div key={index} className="flex items-center gap-4">
                {stat.icon}
                <div>
                  <div className="text-start text-xl font-semibold text-blue-600">
                    {stat.number}
                  </div>
                  <div className="text-start text-gray-500 text-lg font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Button */}
          <div>
            <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded transition flex justify-center items-center gap-2">
              Quick Contact <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatMakesUsDifferent;
