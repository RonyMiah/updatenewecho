"use client";

import React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import clean1 from "@/assets/about/about-1.jpg";
import clean2 from "@/assets/about/about-2.jpg";
import clean3 from "@/assets/about/about-3.jpg";
// import clean4 from "@/assets/about/about-4.jpg";
// import clean5 from "@/assets/about/about-5.jpeg";
// import clean6 from "@/assets/about/about-6.jpg";
import { Carousel, CarouselContent, CarouselItem } from "@/Components/ui/carousel";
import { Card, CardContent } from "@/Components/ui/card";
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";
import BackToTopButton from "../BackToTopButton/BackToTopButton";
import CoreValue from "./CoreValue";

const AboutCard = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );


  return (
    <div className="mt-16">
      {/* <hr className="border-[1px] border-red-500  " /> */}
      {/* Section 1 */}
      <div className=" py-8 ">
        <div className="lg:container md:container justify-center items-center lg:px-28 md:px-10 sm:px-8 sx:px-6 flex sx:flex-wrap sm:flex-wrap md:flex-wrap lg:flex-nowrap ">
          {/* text Section  */}
          <div className="lg:w-[50%] bg-[#2563EB] rounded-lg lg:p-12 p-6 mx-auto">
            <div className="my-3">
              <p className="flex justify-start gap-2 items-center  text-xl text-white">
                At, NEW ECO, we understand that establishing positive and
                effective leadership is a key factor in providing our customers
                with excellent services. We also implement Health & Safety and
                Recycling Policies that have been through both experience and
                knowledge and are in line with the best practice manageme .
              </p>
            </div>
            <section className="bg-gray-100 py-6 px-6 md:px-10 lg:px-10 rounded-md">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-800 md:text-4xl">
                  Our Vision
                </h2>
                <p className="mt-6 text-gray-600 leading-relaxed text-lg md:text-xl ">
                  We are constantly working to be recognized by our clients,
                  employees, and the industry as the most respected and leading
                  provider of contract cleaning services and facilities support
                  services in Malaysia.
                </p>
              </div>
            </section>
          </div>
          {/* Carousel Section */}
          <div className="text-center sx:mt-10 sm:sx:mt-10 md:sx:mt-0 lg:sx:mt-0 ">
            <Carousel
              plugins={[plugin.current]}
              className="lg:w-[530px] md:w-[380px] sm:w-[430px]  sx:w-[320px] "
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
            >
              <CarouselContent className="">
                {/* Manually adding static content for each carousel item */}
                <CarouselItem className="">
                  <Card className="">
                    <CardContent className="flex lg:h-[400px] md:h-[350px]  items-center justify-center  p-0 sm:h-[250px] sx:h-[180px] ">
                      <Image
                        src={clean1}
                        alt="Image 1"
                        className="w-full h-full object-fill rounded-xl  "
                      />
                    </CardContent>
                  </Card>
                </CarouselItem>

                <CarouselItem className="">
                  <Card className="">
                    <CardContent className="flex lg:h-[400px] md:h-[350px]  items-center justify-center  p-0 sm:h-[250px] sx:h-[180px] ">
                      <Image
                        src={clean2}
                        alt="Image 2"
                        className="w-full h-full object-fill rounded-xl "
                      />
                    </CardContent>
                  </Card>
                </CarouselItem>

                <CarouselItem className="">
                  <Card className="">
                    <CardContent className="flex lg:h-[400px] md:h-[350px]  items-center justify-center  p-0 sm:h-[250px] sx:h-[180px]  ">
                      <Image
                        src={clean3}
                        alt="Image 3"
                        className="w-full h-full object-fill rounded-xl "
                      />
                    </CardContent>
                  </Card>
                </CarouselItem>
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div>
        {/* <hr className="border-[1px] border-red-500 " /> */}
        <div className="pt-4">
          <div className="lg:container md:container justify-center items-center lg:px-28 md:px-10 sm:px-8 sx:px-6 flex sx:flex-wrap sm:flex-wrap md:flex-wrap lg:flex-nowrap ">
            {/* text Section  */}
            <div className="lg:w-[100%]  rounded-lg lg:p-12 mx-auto">
              <div className="my-3">
                {/* Our Mission  */}
                <section className="bg-white pb-16 pt-6 px-6 md:px-12 lg:px-24  ">
                  <div className="max-w-4xl mx-auto text-center shadow-lg p-6 rounded-lg">
                    <h2 className="text-3xl font-extrabold text-[#2563EB]  md:text-4xl">
                      Our Mission
                    </h2>
                    <p className="mt-6 text-gray-600 leading-relaxed text-lg sx:text-start sm:text-start  md:text-xl">
                      We are committed to providing the highest quality
                      commercial cleaning service available by exceeding the
                      expectations of our clients, as well as their employees
                      and visitors to their premises or facilities through
                      continuous improvements in Quality, Services, and
                      Productivity.
                    </p>
                  </div>
                </section>

                <div
                  className="container mx-auto px-4 lg:px-8 
                "
                >
                  {/* Management Functions Section */}
                  <section className="mb-12">
                    {/* <h1 className="text-4xl lg:text-5xl font-bold text-center mb-8 text-[#2563EB]">
                      Management Functions
                    </h1> */}

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      {/* Management Functions */}
                      <div className="bg-white shadow-lg p-6 rounded-lg">
                        <h3 className="text-xl font-bold text-[#2563EB] mb-3">
                          Management Functions
                        </h3>
                        <p className="text-gray-700">
                          Our internal online management system, ensures that
                          our team adheres to the following four major
                          management functions.
                        </p>
                      </div>
                      {/* Planning */}
                      <div className="bg-white shadow-lg p-6 rounded-lg">
                        <h3 className="text-xl font-bold text-[#2563EB] mb-3">
                          Planning
                        </h3>
                        <p className="text-gray-700">
                          Defining goals, establishing strategy and developing
                          sub-plans to coordinate activities through a flexible
                          management approach.
                        </p>
                      </div>

                      {/* Organizing */}
                      <div className="bg-white shadow-lg p-6 rounded-lg">
                        <h3 className="text-xl font-bold text-[#2563EB] mb-3">
                          Organizing
                        </h3>
                        <p className="text-gray-700">
                          Determining what needs to be done, how it will be done
                          and who is to do it.
                        </p>
                      </div>

                      {/* Leading */}
                      <div className="bg-white shadow-lg p-6 rounded-lg">
                        <h3 className="text-xl font-bold text-[#2563EB] mb-3">
                          Leading
                        </h3>
                        <p className="text-gray-700">
                          Directing and motivating all relevant stakeholders
                          through in-house and on-site training, employee
                          suggestions, and conﬂict resolution.
                        </p>
                      </div>

                      {/* Controlling */}
                      <div className="bg-white shadow-lg p-6 rounded-lg">
                        <h3 className="text-xl font-bold text-[#2563EB] mb-3">
                          Controlling
                        </h3>
                        <p className="text-gray-700">
                          Regular audits and maintenance activities are executed
                          to ensure that tasks are accomplished as planned, with
                          outcomes reviewed and evaluated with the aim of
                          continuous improvement.
                        </p>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <hr className="border-[1px] border-red-500 my-6 " /> */}
      </div>

      {/* Section 3 Contact  */}

      <div className=" container flex space-x-4 justify-center items-center my-8">
        {/* Quick Contact Button */}
        <Link href="/contacts">
          <button className="bg-lime-600 text-white px-6 py-3 rounded-lg flex items-center space-x-2 hover:bg-lime-700 transition duration-300">
            <span>Quick Contact</span>
            <FiArrowRight className="text-white" />
          </button>
        </Link>
        {/* Explore Services Button */}
        <Link href="/services">
          <button className="border border-gray-300 px-6 py-3 rounded-lg flex items-center space-x-2 hover:bg-lime-700 hover:text-white transition duration-300">
            <span>Explore services</span>
            <FiArrowRight />
          </button>
        </Link>
      </div>
      <CoreValue/>
      <BackToTopButton />
    </div>
  );
};

export default AboutCard;
