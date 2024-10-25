import Lottie from 'lottie-react';
import Image from 'next/image';
import React from 'react'
import projectServices from '@/assets/project-banner.png'
import servicesBannerShape from '@/assets/bg-slider-shape-2.png'
const ProjectBanner = () => {
  return (
    <>
      <div className="bg-[#F2F5F7] ">
        {/* Main Content */}
        <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row items-center">
          {/* Left text Section */}
          <div className="lg:w-1/2 text-center lg:text-left mx-auto">
            <h1 className="text-6xl font-bold text-[#2563EB] mb-8">
              {" "}
              Projects{" "}
            </h1>
            <p className="text-gray-700 mb-6 text-xl ">
              Our projects focus on delivering eco-friendly cleaning solutions
              tailored to various industries. We manage complex cleaning
              projects with a commitment to environmental sustainability,
              ensuring each site is left spotless, safe, and healthier. From
              residential to commercial spaces, we implement innovative
              techniques to achieve exceptional, eco-conscious results.
            </p>
          </div>

          {/* Right Image Section */}

          <div className="lg:w-1/2">
            {/* <Lottie
              animationData={serviceBannerImage}
              width={800}
              height={800}
              className="lg:w-[500px] lg:h-[500px] mx-auto"
            /> */}

            <Image
              src={projectServices}
              alt="Cleaning Service"
              width={900}
              height={900}
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
}

export default ProjectBanner
