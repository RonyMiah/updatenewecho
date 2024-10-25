"use client";

import Lottie from "lottie-react";
import React from "react";
import aboutBannerImage from "@/assets/animation/aboutBannerImage.json";
import Image from "next/image";
import aboutBannerShape from "@/assets/bg-slider-shape-2.png"

const AboutUs: React.FC = () => {
  return (
    <div className="bg-[#F2F5F7] ">
      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row items-center">
        {/* Left text Section */}
        <div className="lg:w-1/2 text-center lg:text-left mx-auto">
          <h1 className="text-6xl font-bold text-[#2563EB] mb-8">About Us</h1>
          <p className="text-gray-700 mb-6 text-xl ">
            At, NEW ECO, we understand that establishing positive and effective
            leadership is a key factor in providing our customers with excellent
            services. We also implement Health & Safety and Recycling Policies
            that have been through both experience and knowledge and are in line
            with the best practice management.
          </p>
        </div>

        {/* Right Image Section */}

        <div className="lg:w-1/2">
          <Lottie
            animationData={aboutBannerImage}
            width={800}
            height={800}
            className="lg:w-[500px] lg:h-[500px] mx-auto"
          />
        </div>
      </div>

      {/* Additional Design Elements (Optional) */}
      <div className="relative overflow-hidden">
        <div className="absolute bottom-0 w-full bg-white h-16 rounded-t-full"></div>
      </div>

      <Image
        src={aboutBannerShape}
        alt="Cleaning Service"
        width={900}
        height={900}
        className="w-full h-auto object-cover lg:-mt-40 md:-mt-24"
      />
    </div>
  );
};

export default AboutUs;
