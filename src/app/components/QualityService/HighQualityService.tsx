// "use client"
import Image from "next/image";
import React from "react";
// import Lottie from 'lottie-react';
// import highClean from '@/assets/animation/highclean.json'
import highCleaning from "@/assets/vacuum-cleaner.png";
import Link from "next/link";

const HighQualityService = () => {
  return (
    <div className="container mx-auto py-20">
      <div className="rounded-md bg-[#23C55E] mb-[152px] pb-[75px]">
        <div className="flex flex-col lg:flex-row items-center clearfix">
          {/* Left Column: Image */}
          <div className="lg:w-5/12 md:w-5/12 sm:w-full">
            <div className="-mt-[147px]">
              <Image
                src={highCleaning}
                alt="Vacuum Cleaner"
                layout="responsive"
                width={500} // Adjust based on your image size
                height={500} // Adjust based on your image size
              />
            </div>
          </div>

          {/* Right Column: Text */}
          <div className="lg:ml-8 mt-8 lg:mt-0 lg:w-5/12 md:w-5/12 sm:w-full">
            <div className="mt-[81px] font-bitter font-semibold leading-tight tracking-widest text-white">
              Affordable Repair Solutions
            </div>
            <h2 className="text-white font-bitter text-2xl md:text-3xl lg:text-4xl font-bold my-4">
              High-Quality and Friendly <br />
              Services at Fair Prices
            </h2>
            <div className="quality-sec-btn">
              <Link
                className="px-6 py-3 bg-white text-[#23C55E] rounded-md hover:bg-blue-700 hover:text-white transition-all font-bold mt-3"
                href="#contact"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div className="container">
    //   <div className=" bg-green-500 container w-full md:h-[300px] rounded-xl mx-auto flex flex-col lg:flex-row items-center lg:justify-between p-10 lg:p-16 shadow-md my-20">
    //     <div className="w-full md:hidden lg:flex  lg:w-1/2 justify-center lg:justify-start container">
    //       <Image
    //         src={highCleaning}
    //         alt="Vacuum Cleaner"
    //         className="w-96 h-96 max-w-xs lg:max-w-sm -mt-40"
    //         width={600}
    //         height={600}
    //       />
    //     </div>
    //     <div className="w-full lg:w-1/2 mt-8 lg:mt-0 text-white text-center lg:text-left">
    //       <p className="uppercase text-xs md:text-sm font-medium">
    //         Affordable Repair Solutions
    //       </p>
    //       <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold my-4 font-bitter">
    //         High-Quality and Friendly Services at Fair Prices
    //       </h2>
    //       <button className="px-6 py-3 bg-white text-[#23C55E] rounded-md hover:bg-blue-700 hover:text-white transition-all font-bold ">
    //         Contact Us
    //       </button>
    //     </div>
    //   </div>
    // </div>
  );
};

export default HighQualityService;
