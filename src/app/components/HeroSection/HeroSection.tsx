"use client";
import React from "react";
import bannerImage from "@/assets/home_man.png";
import Image from "next/image";

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-slate-50 overflow-hidden pt-10">
      <div className=" md:container flex flex-col lg:flex-row items-center justify-between">
        {/* Left Side: Text Content */}
        <div className="w-10/12 text-center lg:text-left mt-8 lg:mt-0 mx-auto  ">
          <h1 className="text-4xl md:text-5xl lg:text-7xl  leading-tight font-bitter text-left">
            <span className="block">Professional, </span>
            <span className="text-blue-600">Trusted</span>
            <span className="text-green-500 underline decoration-clonefont-medium ms-4">
              Solutions
            </span>
          </h1>
          <p className="mt-4 text-gray-600 text-left lg:mx-0 text-sm w-10/12">
            Driven by a commitment to excellence, we ensure every corner gleams
            with perfection, going beyond expectations to deliver unmatched
            results. Your satisfaction is our priority as we transform every
            environment into a pristine oasis, leaving no space untouched.
          </p>
          <div className="mt-6 flex justify-start">
            <a
              href="#contact"
              className="inline-block bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition"
            >
              Get In Touch
            </a>
          </div>
          <div className="mt-6 flex justify-start items-center space-x-3 pb-5 md:pb-0">
            <div className="flex -space-x-2">
              <Image
                src={bannerImage}
                alt="Client"
                width={800}
                height={800}
                className="w-8 h-8 rounded-full border-2 border-white"
              />
              <Image
                src={bannerImage}
                alt="Client"
                width={800}
                height={800}
                className="w-8 h-8 rounded-full border-2 border-white"
              />
              <Image
                src={bannerImage}
                alt="Client"
                width={800}
                height={800}
                className="w-8 h-8 rounded-full border-2 border-white"
              />
              {/* <img
                src="/assets/avatar2.jpg"
                alt="Client"
                className="w-8 h-8 rounded-full border-2 border-white"
              />
              <img
                src="/assets/avatar3.jpg"
                alt="Client"
                className="w-8 h-8 rounded-full border-2 border-white"
              /> */}
            </div>
            <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs">
              12+
            </span>
            <span className="text-gray-700">Happy Clients</span>
          </div>
        </div>

        {/* Right Side: Illustration */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end max-w-96">
          <Image
            src={bannerImage}
            alt="Cleaning Service"
            width={800}
            height={800}
            className="w-full lg:w-auto"
          />

          {/* <Lottie animationData={banner} width={600} height={600} /> */}
        </div>
      </div>

      {/* Decorative wave */}
      {/* <div className="absolute top-0 left-0 right-0 overflow-hidden">
        <svg
          viewBox="0 0 1440 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#e0f4ff"
            fillOpacity="1"
            d="M0,256L1440,160L1440,320L0,320Z"
          ></path>
        </svg>
      </div> */}
    </section>
  );
};

export default HeroSection;
