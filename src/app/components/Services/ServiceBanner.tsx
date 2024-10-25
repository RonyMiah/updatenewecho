"use client";


import Image from "next/image";
import serviceBannerImage from "@/assets/animation/serviceanimationbanner.json";
import servicesBannerShape from "@/assets/bg-slider-shape-2.png";
import Lottie from "lottie-react";


const ServiceBanner = () => {
  return (
    <>
      <div className="bg-[#F2F5F7] ">
        {/* Main Content */}
        <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row items-center">
          {/* Left text Section */}
          <div className="lg:w-1/2 text-center lg:text-left mx-auto">
            <h1 className="text-6xl font-bold text-gray-800 mb-8">Services</h1>
            <p className="text-gray-700 mb-6 text-xl ">
              At New Eco Cleaning Services, we specialize in eco-friendly
              cleaning for homes, offices, and carpets. Using non-toxic
              products, our professional team ensures a spotless, safe, and
              sustainable environment tailored to your specific needs. Quality
              and sustainability are at the heart of everything we do
            </p>
          </div>

          {/* Right Image Section */}

          <div className="lg:w-1/2">
            <Lottie
              animationData={serviceBannerImage}
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
          src={servicesBannerShape}
          alt="Cleaning Service"
          width={900}
          height={900}
          className="w-full h-auto object-cover lg:-mt-40 md:-mt-24"
        />
      </div>
    </>
  );
};

export default ServiceBanner;
