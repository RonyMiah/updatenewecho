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

const AboutCard = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  const plugin1 = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <div className="mt-16">
      {/* <hr className="border-[1px] border-red-500  " /> */}
      {/* Section 1 */}
      <div className=" py-8 ">
        <div className="lg:container md:container justify-center items-center lg:px-28 md:px-10 sm:px-8 sx:px-6 flex sx:flex-wrap sm:flex-wrap md:flex-wrap lg:flex-nowrap ">
          {/* text Section  */}
          <div className="lg:w-[50%] bg-[#2563EB] rounded-lg p-12 mx-auto">
            <div className="my-3">
              <p className="flex justify-start gap-2 items-center  text-xl text-white">
                We understand that a clean working environment enhances the
                productivity, health and work experience of your employees,
                improving morale and increasing efﬁciency. We work hard to earn
                your trust and conﬁdence, going beyond just meeting your
                business’s daily cleaning needs. NEW ECO comprehensive range of
                cleaning services includes: Interior Maintenance, Exterior
                Maintenance, Special Services, Value Added Services, Post
                construction cleaning, Spring cleaning, Carpet and upholstery
                cleaning, External facade cleaning, Mattress & Sofa Cleaning,
                External Glass Windows Cleaning, Maintenance cleaning, General,
                cleaning or Deep cleaning, Disinfecting service, Air
                conditioning service, Export Import service and Manpower
                service.
              </p>
            </div>
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
        <div className="pt-16">
          <div className="lg:container md:container justify-center items-center lg:px-28 md:px-10 sm:px-8 sx:px-6 flex sx:flex-wrap sm:flex-wrap md:flex-wrap lg:flex-nowrap ">
            {/* text Section  */}
            <div className="lg:w-[100%]  rounded-lg p-12 mx-auto">
              <div className="my-3">
                <div
                  className="container mx-auto px-4 lg:px-8 
                "
                >
                  {/* Management Functions Section */}
                  <section className="mb-12">
                    <h1 className="text-4xl lg:text-5xl font-bold text-center mb-8 text-[#2563EB]">
                      Management Functions
                    </h1>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      {/* Planning */}
                      <div className="bg-white shadow-lg p-6 rounded-lg">
                        <h3 className="text-xl font-bold text-[#2563EB] mb-3">
                          Planning
                        </h3>
                        <p className="text-gray-700">
                          Deﬁning goals, establishing strategy, and developing
                          sub-plans to coordinate activities through a ﬂexible
                          management approach.
                        </p>
                      </div>

                      {/* Organizing */}
                      <div className="bg-white shadow-lg p-6 rounded-lg">
                        <h3 className="text-xl font-bold text-[#2563EB] mb-3">
                          Organizing
                        </h3>
                        <p className="text-gray-700">
                          Determining what needs to be done, how it will be
                          done, and who is to do it.
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
        <button className="bg-lime-600 text-white px-6 py-3 rounded-lg flex items-center space-x-2 hover:bg-lime-700 transition duration-300">
          <span>Quick Contact</span>
          <FiArrowRight className="text-white" />
        </button>

        {/* Explore Services Button */}
        <button className="border border-gray-300 px-6 py-3 rounded-lg flex items-center space-x-2 hover:bg-lime-700 hover:text-white transition duration-300">
          <span>Explore services</span>
          <FiArrowRight />
        </button>
      </div>
    </div>
  );
};

export default AboutCard;
