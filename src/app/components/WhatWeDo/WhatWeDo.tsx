"use client";
import React from "react";

import { AiFillThunderbolt } from "react-icons/ai";
import Lottie from "lottie-react";
import whatwedo1 from "@/assets/animation/whatwedo1.json";
import whatwedo2 from "@/assets/animation/whatwedo2.json";
import whatwedo3 from "@/assets/animation/whatwedo3.json";
import whatwedo4 from "@/assets/animation/whatwedo4.json";
import img1 from "@/assets/service_icon1.png";
import img5 from "@/assets/service_icon5.png";
import img3 from "@/assets/service_icon3.png";
import img4 from "@/assets/service_icon4.png";
import Image from "next/image";

const data = [
  {
    name: "Commercial Cleaning",
    img: img1,
    description:
      "Tailored cleaning solutions ensuring a pristine environment for businesses",
  },
  {
    name: "Office Cleaning",
    img: img3,
    description:
      "Custom office cleaning to maintain tidiness and enhance productivity",
  },
  {
    name: "Window Cleaning",
    img: img4,
    description:
      "Professional window cleaning for sparkling glass and improved views",
  },
  {
    name: "Carpet Cleaning",
    img: img5,
    description:
      "Deep cleaning services that remove stains and odors effectively",
  },
];
const WhatWeDo: React.FC = () => {
  return (
    <section className="bg-white sx:mt-16 sm:mt-16 container">
      <div className="flex justify-center items-center">
        {" "}
        ____
        <AiFillThunderbolt className="size-7 gap-2" />
        What We Do ____
      </div>
      <div className="mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-gray-900 mb-6 mt-3 font-bitter">
          How does our <span className="text-blue-600">solution work?</span>
        </h2>
        <p className="text-gray-600 mb-12 max-w-lg mx-auto text-sm">
          Duis dapibus elit ut elit interdum, non tempus ipsum blandit. Ut
          malesuada lacus nibh, sit amet varius metus mattis nec.
        </p>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.map((item) => {
            return (
              <div
                key={item.name}
                className="bg-white rounded-lg border p-6 hover:shadow-lg transition-shadow duration-300 py-10"
              >
                <div className="text-blue-600 mb-4">
                  <Image
                    src={item.img}
                    alt="Commercial Cleaning"
                    width={70}
                    height={70}
                    className="mx-auto"
                  />
                  {/* <Lottie
                animationData={whatwedo1}
                className="w-full h-80 mx-auto"
              /> */}
                </div>
                <h3 className="text-xl font-bold mb-2 font-bitter">
                  {item.name}
                </h3>
                <p className="text-muted-foreground text-sm text-center">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Button Section */}
        <div className="mt-12 flex justify-center space-x-4">
          <button className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition">
            View All Services
          </button>
          {/* <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-md hover:bg-gray-100 transition">
            Quick View
          </button> */}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
