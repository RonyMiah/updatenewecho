// "use client"
import Image from 'next/image';
import React from 'react'
// import Lottie from 'lottie-react';
// import highClean from '@/assets/animation/highclean.json'
import highCleaning from '@/assets/highclean.png'

const HighQualityService = () => {
  return (
    <div className="container">
      <div className=" bg-green-500 container h-[300px] rounded-xl mx-auto flex flex-col lg:flex-row items-center lg:justify-between p-10 lg:p-16 shadow-md my-20">
        {/* Image Section */}
        <div className="w-full  lg:w-1/2 flex justify-center lg:justify-start container">
          <Image
            src={highCleaning}
            alt="Vacuum Cleaner"
            className="w-80 h-96 max-w-xs lg:max-w-sm -mt-40"
            width={600}
            height={600}
          />
          {/* <Lottie animationData={highClean} width={600} height={600} /> */}
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0 text-white text-center lg:text-left">
          <p className="uppercase text-sm font-semibold">
            Affordable Repair Solutions
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold mt-2">
            High-Quality and Friendly Services at Fair Prices
          </h2>
          <button className="mt-6 px-6 py-3 bg-white text-[#81C123] rounded-xl hover:bg-blue-700 hover:text-white transition-all font-bold ">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}

export default HighQualityService
