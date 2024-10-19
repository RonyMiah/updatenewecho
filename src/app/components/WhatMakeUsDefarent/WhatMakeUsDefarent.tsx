// src/components/WhatMakesUsDifferent.tsx

import Image from "next/image";
import React from "react";
import clearManWorker from '@/assets/clener-man-worker.png'
import { FaPeopleGroup } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { GiLoveMystery } from "react-icons/gi";

const WhatMakesUsDifferent: React.FC = () => {
  return (
    <div className="bg-white py-20 px-8  container">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Section: Illustration */}
        <div className="flex justify-center lg:justify-start">
          <Image
            src={clearManWorker}
            alt="Cleaning team illustration"
            className="w-full max-w-md"
            width={800}
            height={800}
          />
        </div>

        {/* Right Section: Text and Stats */}
        <div className="space-y-6">
          <h2 className="text-5xl font-bold text-gray-800 mb-5">
            What makes us <p className="text-blue-500">different?</p>
          </h2>
          <p className="text-gray-600 leading-relaxed ">
            At New Eco, we deliver eco-friendly cleaning with non-toxic
            products, ensuring a safe and spotless environment. Our professional
            team offers tailored services for businesses, homes, and carpets.
            Quality and sustainability define everything we do.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 py-2">
            <div className="text-center flex justify-center items-center gap-4">
              <GiLoveMystery className="  text-green-500 size-14 ring-1 p-4 rounded-full" />
              <div>
                <div className=" text-start text-2xl font-bold text-blue-600">
                  2000+
                </div>
                <div className=" text-start text-gray-500 text-2xl font-bold">
                  Clients
                </div>
              </div>
            </div>
            <div className="text-center flex justify-center items-center gap-4">
              <IoCheckmarkDoneSharp className=" text-green-500 size-14 ring-1 p-4 rounded-full" />
              <div>
                <div className=" text-start text-2xl font-bold text-blue-600">
                  100+
                </div>
                <div className=" text-start text-gray-500 text-2xl font-bold">
                  Jobs Done
                </div>
              </div>
            </div>
            <div className="text-center flex justify-center items-center gap-4">
              <FaPeopleGroup className="  text-green-500 size-14 ring-1 p-4 rounded-full" />
              <div>
                <div className="text-start text-2xl font-bold text-blue-600">
                  800+
                </div>
                <div className="text-gray-500  text-2xl font-bold text-start">
                  Employees
                </div>
              </div>
            </div>
          </div>

          {/* Button */}
          <div>
            <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-6 rounded transition flex justify-center items-center gap-2">
              Quick Contact <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatMakesUsDifferent;
