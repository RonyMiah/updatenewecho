"use client";
import React from "react";
import logo2 from "@/assets/company/p-2.jpeg";
import logo3 from "@/assets/company/p-3.jpeg";
import logo4 from "@/assets/company/p-4.jpeg";
import Image from "next/image";
import { Slider } from "./Slider";
import Link from "next/link";

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-[#201658] overflow-hidden py-16">
      <div className=" sm:container mx-auto   flex flex-col-reverse lg:flex-row items-center justify-between">
        {/* Left Side: Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left mt-8 lg:mt-0 mx-auto  ">
          <h1 className="text-4xl md:text-5xl lg:text-6xl  leading-tight">
            <span
              className="lg:text-7xl font-semibold
             text-white 
             "
            >
              Professional,
            </span>{" "}
            <span className="text-blue-600 lg:text-7xl font-semibold ">
              Trusted
            </span>
            <span className="text-green-500 underline decoration-wavy lg:text-7xl font-extrabold ms-4">
              Solutions
            </span>
          </h1>
          <p className="mt-4 text-white max-w-md mx-auto lg:mx-0">
            Driven by a commitment to excellence, we ensure every corner gleams
            with perfection. We go beyond expectations to deliver results with
            unmatched dedication, leaving no space untouched. Your satisfaction
            is our priority, transforming every environment into a pristine
            oasis .
          </p>
          <div className="mt-6 flex justify-center lg:justify-start">
            <Link href="/contacts">
              <button className="inline-block bg-green-500 text-white px-6 py-3 rounded-xl shadow-md hover:bg-green-600 transition">
                Get In Touch
              </button>
            </Link>
          </div>
          <div className="mt-6 flex justify-center lg:justify-start items-center space-x-3">
            <div className="flex -space-x-2">
              <Image
                src={logo2}
                alt="Client"
                width={800}
                height={800}
                className="w-8 h-8 rounded-full border-2 border-white"
              />
              <Image
                src={logo3}
                alt="Client"
                width={800}
                height={800}
                className="w-8 h-8 rounded-full border-2 border-white"
              />
              <Image
                src={logo4}
                alt="Client"
                width={800}
                height={800}
                className="w-8 h-8 rounded-full border-2 border-white"
              />
            </div>
            <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs">
              12+
            </span>
            <span className="text-white">Happy Clients</span>
          </div>
          <div className="pt-5">
            <span className="text-white">NEW ECO RESOURCES BM SDN BHD</span>
          </div>
        </div>

        {/* Right Side: Illustration */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          {/* <Image
            src={bannerImage}
            alt="Cleaning Service"
            width={800}
            height={800}
            className="w-64 md:w-96 lg:w-auto"
          /> */}

          {/* <Lottie animationData={banner} width={600} height={600}/> */}
          <Slider />
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
