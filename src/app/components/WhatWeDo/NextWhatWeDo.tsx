"use client";

import React from "react";

import Lottie from "lottie-react";
import nextwhatwedo from "@/assets/animation/nextwhatwedo.json";
import { MdOutlineContentCut } from "react-icons/md";
import { BsFillHouseCheckFill } from "react-icons/bs";
import { FaBath, FaCommentAlt } from "react-icons/fa";
import { GiWindow } from "react-icons/gi";
import { RiHomeOfficeFill } from "react-icons/ri";
import Link from "next/link";

const NextWhatWeDo = () => {
  return (
    <section className="py-16 bg-white">
      <hr className="border-0.5 py-10" />
      <div className="lg:container md:container  mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 px-6">
          <h2 className="text-3xl lg:text-5xl sx:text-2xl sm:text-3xl  font-bold mb-4 text-gray-800">
            Whether you require a complete office clean-up or thorough carpet
            care,
            <span className="text-blue-600">
              our team is equipped to handle it all efficiently and
              professionally.
            </span>
          </h2>
          <p className="text-gray-600 mb-8">
            We ensure your space remains spotless and inviting with our range of
            services, including Commercial Cleaning, Office Cleaning, and Carpet
            Cleaning. Leave the details to us while you focus on what truly
            matters.
          </p>

          {/* Services Section */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            <div className="flex items-center space-x-2">
              <span className="bg-teal-200 p-2 rounded-full">
                <RiHomeOfficeFill />
              </span>
              <p className="text-gray-700">OFFICE</p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="bg-teal-200 p-2 rounded-full">
                <GiWindow />
              </span>
              <p className="text-gray-700"> JANITORIAL </p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="bg-teal-200 p-2 rounded-full">
                <FaCommentAlt />
              </span>
              <p className="text-gray-700">CARPET</p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="bg-teal-200 p-2 rounded-full">
                <FaBath />
              </span>
              <p className="text-gray-700">WASHROOM</p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="bg-teal-200 p-2 rounded-full">
                <BsFillHouseCheckFill />
              </span>
              <p className="text-gray-700">PROPERTY</p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="bg-teal-200 p-2 rounded-full">
                <MdOutlineContentCut />
              </span>
              <p className="text-gray-700">GRASS CUTTING</p>
            </div>
          </div>
          <Link href="/services">
            <button className="bg-[#23C55E] text-white px-6 py-3 rounded-xl text-lg shadow-lg hover:bg-blue-700 transition-all">
              View Our More Services
            </button>
          </Link>
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
