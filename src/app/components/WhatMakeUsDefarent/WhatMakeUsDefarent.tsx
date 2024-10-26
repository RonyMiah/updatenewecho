import Image from "next/image";
import React from "react";
import clearManWorker from "@/assets/clener-man-worker.png";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { GiLoveMystery } from "react-icons/gi";
import Link from "next/link";


const WhatMakesUsDifferent: React.FC = () => {
  return (
    <div className="bg-white px-4 md:px-8 container my-20 md:my-40">
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 md:mb-5">
            What makes us <p className="text-blue-500">different?</p>
          </h2>
          <p className="text-gray-600 leading-relaxed text-sm md:text-base">
            At New Eco, we deliver eco-friendly cleaning with non-toxic
            products, ensuring a safe and spotless environment. Our professional
            team offers tailored services for businesses, homes, and carpets.
            Quality and sustainability define everything we do.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-2">
            <div className="flex items-center gap-4">
              <GiLoveMystery className="text-green-500 text-4xl lg:text-6xl ring-1 p-2 lg:p-4 rounded-full" />
              <div>
                <div className="text-start text-xl md:text-2xl font-bold text-blue-600">
                  2000+
                </div>
                <div className="text-start text-gray-500 text-lg md:text-xl font-bold">
                  Clients
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <IoCheckmarkDoneSharp className="text-green-500 text-4xl lg:text-6xl ring-1 p-2 lg:p-4 rounded-full" />
              <div>
                <div className="text-start text-xl md:text-2xl font-bold text-blue-600">
                  100+
                </div>
                <div className="text-start text-gray-500 text-lg md:text-xl font-bold">
                  Jobs Done
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaPeopleGroup className="text-green-500 text-4xl lg:text-6xl ring-1 p-2 lg:p-4 rounded-full" />
              <div>
                <div className="text-start text-xl md:text-2xl font-bold text-blue-600">
                  800+
                </div>
                <div className="text-start text-gray-500 text-lg md:text-xl font-bold">
                  Employees
                </div>
              </div>
            </div>
          </div>

          {/* Button */}
          <div>
            <Link href="/contacts">
              <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded transition flex justify-center items-center gap-2">
                Quick Contact <FaArrowRight />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatMakesUsDifferent;
