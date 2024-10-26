"use client";
import React from "react";

import {  AiFillThunderbolt } from "react-icons/ai";
import Lottie from "lottie-react";
import whatwedo1 from '@/assets/animation/whatwedo1.json'
import whatwedo2 from '@/assets/animation/whatwedo2.json'
import whatwedo3 from '@/assets/animation/brashaIcon.json'
import whatwedo4 from '@/assets/animation/whatwedo4.json'
import Link from "next/link";
const WhatWeDo: React.FC = () => {
  return (
    <section className="bg-white sx:mt-16 sm:mt-16 ">
      <div className="flex justify-center items-center ">
        {" "}
        ____
        <AiFillThunderbolt className="size-7 gap-2" />
        What We Do ____
      </div>
      <div className="container mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          How does our <span className="text-blue-600">solution work?</span>
        </h2>
        <p className="text-gray-600 mb-12 max-w-xl mx-auto">
          Duis dapibus elit ut elit interdum, non tempus ipsum blandit. Ut
          malesuada lacus nibh, sit amet varius metus mattis nec.
        </p>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1 */}
          <div className="bg-[#201658] rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="text-blue-600 mb-4">
              {/* <Image
                src={cleaningImage}
                alt="Commercial Cleaning"
                width={400}
                height={400}
              /> */}
              <Lottie
                animationData={whatwedo1}
                className="w-full h-80 mx-auto"
              />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">
              COMMERCIAL CLEANING SERVICES
            </h3>
          </div>

          {/* Card 2 */}
          <div className="bg-[#201658] rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="text-blue-600 mb-4">
              {/* <Image
                src={cleaningImage}
                alt="Residential Cleaning"
                width={400}
                height={400}
              /> */}
              <Lottie
                animationData={whatwedo2}
                className="w-full h-80 mx-auto"
              />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">
              OFFICE CLEANING SERVICES
            </h3>
          </div>

          {/* Card 3 */}
          <div className="bg-[#201658] rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="text-blue-600 mb-4">
              {/* <Image
                src={cleaningImage}
                alt="Window Cleaning"
                width={400}
                height={400}
              /> */}
              <Lottie
                animationData={whatwedo3}
                className="w-full h-80 mx-auto"
              />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">
              JANITORIAL CLEANING SERVICES
            </h3>
          </div>

          {/* Card 4 */}
          <div className="bg-[#201658] rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="text-blue-600 mb-4">
              {/* <Image
                src={cleaningImage}
                alt="Kitchen Cleaning"
                width={400}
                height={400}
              /> */}
              <Lottie
                animationData={whatwedo4}
                className="w-full h-80 mx-auto"
              />
            </div>
            <h3 className="text-lg font-semibold text-white  mb-2">
              CARPET CLEANING SERVICES
            </h3>
          </div>
        </div>

        {/* Button Section */}
        <div className="mt-12 flex justify-center space-x-4">
          <Link href="/services">
            <button className="bg-green-500 text-white px-6 py-3 rounded-xl shadow-md hover:bg-green-600 transition">
              View All Services
            </button>
          </Link>
          <Link href="/services">
            <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-xl hover:bg-gray-100 transition">
              Quick View
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
