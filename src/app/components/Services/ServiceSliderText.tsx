"use client";
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import { FaArrowUp } from "react-icons/fa";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

import carousel1_1 from "@/assets/services/carosel1-1.jpg";
import carousel1_2 from "@/assets/services/carosel1-2.jpg";
import carousel1_3 from "@/assets/services/carosel1-3.jpg";
import carousel2_1 from "@/assets/services/carosel2-1.jpg";
import carousel2_2 from "@/assets/services/carosel2-2.jpg";
import carousel2_3 from "@/assets/services/carosel2-3.jpg";
// import carousel3_1 from "@/assets/services/carosel3-1.jpg";
// import carousel3_2 from "@/assets/services/carosel3-2.jpg";
// import carousel3_3 from "@/assets/services/carosel3-3.jpg";
import carousel4_1 from "@/assets/services/carosel4-1.jpg";
import carousel4_2 from "@/assets/services/carosel4-2.jpg";
import carousel4_3 from "@/assets/services/carosel4-3.jpg";
import carousel5_1 from "@/assets/services/carosel5-1.jpg";
import carousel5_2 from "@/assets/services/carosel5-2.jpg";
import carousel5_3 from "@/assets/services/carosel5-3.jpg";
import carousel6_1 from "@/assets/services/carosel6-1.jpg";
import carousel6_2 from "@/assets/services/carosel6-2.jpg";
import carousel6_3 from "@/assets/services/carosel6-3.jpg";
import carousel7_1 from "@/assets/services/carosel7-1.jpg";
import carousel7_2 from "@/assets/services/carosel7-2.jpg";
import carousel7_3 from "@/assets/services/carosel7-3.jpg";
import carousel8_1 from "@/assets/services/carosel8-1.jpg";
import carousel8_2 from "@/assets/services/carosel8-2.jpg";
import carousel8_3 from "@/assets/services/carosel8-3.jpg";
import carousel9_1 from "@/assets/services/carosel9-1.jpg";
import carousel9_2 from "@/assets/services/carosel9-2.jpg";
import carousel9_3 from "@/assets/services/carosel9-3.jpg";
import carousel10_1 from "@/assets/services/carosel10-1.jpg";
import carousel10_2 from "@/assets/services/carosel10-2.jpg";
import carousel10_3 from "@/assets/services/carosel10-3.jpg";
import carousel11_1 from "@/assets/services/carousel11_1.jpg";
import carousel11_2 from "@/assets/services/carousel11_2.jpg";
import carousel11_3 from "@/assets/services/carousel11_3.jpg";
import Image from "next/image";
import { Card, CardContent } from "@/Components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/Components/ui/carousel";
import BackToTopButton from "../BackToTopButton/BackToTopButton";

const ServiceSlideText = () => {
  // Carousel autoplay setup
  const plugin1 = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  const plugin2 = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
//   const plugin3 = React.useRef(
//     Autoplay({ delay: 2000, stopOnInteraction: true })
//   );
  const plugin4 = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  const plugin5 = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  const plugin6 = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  const plugin7 = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  const plugin8 = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  const plugin9 = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  const plugin10 = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  const plugin11 = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <>
      {/* Section 1 */}
      <div id="01">
        <hr className="border-[1px] border-red-500 my-2 " />
        {/* ServiceSlide 01 */}
        <div
          className="lg:container md:container justify-center items-center lg:px-28 md:px-10 sm:px-8 sx:px-6 flex sx:flex-wrap sm:flex-wrap md:flex-wrap lg:flex-nowrap "
          id="1"
        >
          {/* Text Section */}
          <div className=" lg:px-8 md:px-8 sm:px-5 sx:px-2">
            <h4 className="text-4xl text-red-600 font-bold">01</h4>
            <h1 className="text-3xl font-bold text-[#32297C] my-2">
              COMMERCIAL CLEANING SERVICES
            </h1>
            <p className="text-base">
              <span className="text-[#32297C] font-bold"></span> NEW ECO
              provides
              <span className="text-[#32297C] font-bold mx-2">
                Premium Commercial cleaning services in Malaysia
              </span>
              for the commercial sector with competitive prices. We will provide
              you with trained reliable cleaners, who are supervised regularly
              and monitored by our managers. The smallest details make a huge
              difference to the service we provide, whether it is for reasons of
              <span className="text-[#32297C] font-bold mx-2">
                security, health and safety or mere convenience .
              </span>
              Our systems are designed to ensure that we get it right, all the
              time. By choosing NEW ECO you can be rest assured that your
              facility will be impeccably maintained and will reﬂect the
              professional image you wish to project to your clients and
              employees,
              <span className="text-[#32297C] font-bold mx-2">
                we believe that client satisfaction is the key to our success.
              </span>
              Your premises will be in safe hands with us as we understand your
              requirements and concerns, particularly with regards to security.
              We will arrange a survey of your premises free of charge and
              <span className="text-[#32297C] font-bold mx-2">
                provide you with a detailed speciﬁcation and quotation
              </span>
              for your individual site.
            </p>

            <h4 className="text-[#32297C] text-xl font-bold my-3">
              We offer a full range of commercial cleaning{" "}
            </h4>

            <ul className="list-disc pl-5 lg:flex  lg:gap-14 ">
              <div>
                <li>Offices</li>
                <li>Embassies and Consulates </li>
                <li>Estate agents</li>
                <li>Theatres / Cinemas</li>
                <li>Retail stores</li>
              </div>
              <div>
                <li>Schools / Universities</li>
                <li>Galleries / Venues</li>
                <li>Sport & Leisure Facilities</li>
                <li>Hospitals and Residential properties </li>
              </div>
            </ul>

            <button className="bg-[#32297C] text-white flex justify-center items-center gap-1 px-4 py-2 rounded-full text-base hover:bg-red-600 my-2">
              Commercial Cleaning <FaArrowUp />
            </button>
          </div>

          {/* Carousel Section */}
          <div>
            <div className="lg:w-[400px] md:w-[400px] sm:w-[400px] sx:w-[300px] lg:h-[550px] md:h-[550px] sm:h-[550px] sx:h-[450px] lg:my-12 md:my-12 sm:my-6 sx:my-4">
              <Carousel
                plugins={[plugin1.current]}
                className="relative"
                onMouseEnter={plugin1.current.stop}
                onMouseLeave={plugin1.current.reset}
              >
                <CarouselContent>
                  {[carousel1_1, carousel1_2, carousel1_3].map(
                    (singleImage, index) => (
                      <CarouselItem key={index}>
                        <div className="p-1">
                          <Card>
                            <CardContent className="flex items-center justify-center p-0">
                              <Image
                                src={singleImage}
                                alt={`Slide ${index + 1}`}
                                className="lg:w-[400px] md:w-[400px] sm:w-[400px] sx:w-[300px] lg:h-[550px] md:h-[550px] sm:h-[550px] sx:h-[450px]"
                              />
                            </CardContent>
                          </Card>
                        </div>
                      </CarouselItem>
                    )
                  )}
                </CarouselContent>

                {/* Position left arrow */}
                <CarouselPrevious className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-red-600 p-2 rounded-full hover:bg-red-600 hover:text-white">
                  <MdOutlineKeyboardArrowLeft />
                </CarouselPrevious>

                {/* Position right arrow */}
                <CarouselNext className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 hover:bg-red-600 hover:text-white text-red-600 p-2 rounded-full">
                  <MdOutlineKeyboardArrowRight />
                </CarouselNext>
              </Carousel>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div id="02">
        <hr className="border-[1px] border-red-500 my-2 " />
        {/* ServiceSlide 02 */}
        <div
          className="lg:container md:container justify-center items-center lg:px-28 md:px-10 sm:px-8 sx:px-6 flex sx:flex-wrap sm:flex-wrap md:flex-wrap lg:flex-nowrap "
          id="2"
        >
          {/* Carousel Section */}
          <div>
            <div className="lg:w-[400px] md:w-[400px] sm:w-[400px] sx:w-[300px] lg:h-[550px] md:h-[550px] sm:h-[550px] sx:h-[450px] lg:my-12 md:my-12 sm:my-6 sx:my-4">
              <Carousel
                plugins={[plugin2.current]}
                className="relative"
                onMouseEnter={plugin2.current.stop}
                onMouseLeave={plugin2.current.reset}
              >
                <CarouselContent>
                  {[carousel2_1, carousel2_2, carousel2_3].map(
                    (singleImage, index) => (
                      <CarouselItem key={index}>
                        <div className="p-1">
                          <Card>
                            <CardContent className="flex items-center justify-center p-0">
                              <Image
                                src={singleImage}
                                alt={`Slide ${index + 1}`}
                                className="lg:w-[400px] md:w-[400px] sm:w-[400px] sx:w-[300px] lg:h-[550px] md:h-[550px] sm:h-[550px] sx:h-[450px]"
                              />
                            </CardContent>
                          </Card>
                        </div>
                      </CarouselItem>
                    )
                  )}
                </CarouselContent>

                {/* Position left arrow */}
                <CarouselPrevious className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-red-600 p-2 rounded-full hover:bg-red-600 hover:text-white">
                  <MdOutlineKeyboardArrowLeft />
                </CarouselPrevious>

                {/* Position right arrow */}
                <CarouselNext className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 hover:bg-red-600 hover:text-white text-red-600 p-2 rounded-full">
                  <MdOutlineKeyboardArrowRight />
                </CarouselNext>
              </Carousel>
            </div>
          </div>
          {/* Text Section */}
          <div className=" lg:px-8 md:px-8 sm:px-5 sx:px-2">
            <h4 className="text-4xl text-red-600 font-bold">02</h4>
            <h1 className="text-3xl font-bold text-[#32297C] my-2">
              OFFICE CLEANING SERVICES
            </h1>
            <p className="text-base">
              NEW ECO Ofﬁce Cleaning Services offer a
              <span className="text-[#32297C] font-bold mx-2">
                complete Premium Ofﬁce Cleaning Services in Malaysia,
              </span>
              from smallest to the largest executive suite, all individually
              tailored to suit your speciﬁc requirements. NEW ECO Ofﬁce Cleaning
              Services provides an
              <span className="text-[#32297C] font-bold mx-2">
                unsurpassable level of personal care.
              </span>
              You will experience dramatic improvement in the appearance of your
              ofﬁce right from the start. At NEW ECO Ofﬁce Cleaning Services, we
              are committed to detail,
              <span className="text-[#32297C] font-bold mx-2">
                continuous research and development of cleaning techniques and
                competitive rates.
              </span>
              Whatever sizes your premises, when it comes to value, quality and
              responsiveness, you can count on us to exceed your expectations.
              First impressions matter, furthermore a clean working environment
              guarantees optimum productivity. NEW ECO Ofﬁce Cleaning Services
              will provide you with fully trained reliable cleaners, who are
              supervised regularly and monitored by our managers. The smallest
              details make a huge difference to the service we provide, whether
              it is for reasons of
              <span className="text-[#32297C] font-bold mx-2">
                security, health and safety or mere convenience, our systems are
                designed to ensure that we get it right all the time.
              </span>
              We manage a variety of sites from those requiring one cleaner up
              to those requiring 15 or many more cleaners.
            </p>

            {/* <h4 className="text-[#32297C] text-xl font-bold my-3">
              We offer a full range of commercial cleaning{" "}
            </h4>

            <ul className="list-disc pl-5 lg:flex  lg:gap-14 ">
              <div>
                <li>Offices</li>
                <li>Embassies and Consulates </li>
                <li>Estate agents</li>
                <li>Theatres / Cinemas</li>
                <li>Retail stores</li>
              </div>
              <div>
                <li>Schools / Universities</li>
                <li>Galleries / Venues</li>
                <li>Sport & Leisure Facilities</li>
                <li>Hospitals and Residential properties </li>
              </div>
            </ul> */}

            <button className="bg-[#32297C] text-white flex justify-center items-center gap-1 px-4 py-2 rounded-full text-base hover:bg-red-600 my-2">
              Office Cleaning <FaArrowUp />
            </button>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      {/* <div id="03">
        <hr className="border-[1px] border-red-500 my-2 " />
        
        <div
          className="lg:container md:container justify-center items-center lg:px-28 md:px-10 sm:px-8 sx:px-6 flex sx:flex-wrap sm:flex-wrap md:flex-wrap lg:flex-nowrap "
          id="3"
        >
      
          <div>
            <div className="lg:w-[400px] md:w-[400px] sm:w-[400px] sx:w-[300px] lg:h-[550px] md:h-[550px] sm:h-[550px] sx:h-[450px] lg:my-12 md:my-12 sm:my-6 sx:my-4">
              <Carousel
                plugins={[plugin3.current]}
                className="relative"
                onMouseEnter={plugin3.current.stop}
                onMouseLeave={plugin3.current.reset}
              >
                <CarouselContent>
                  {[carousel3_1, carousel3_2, carousel3_3].map(
                    (singleImage, index) => (
                      <CarouselItem key={index}>
                        <div className="p-1">
                          <Card>
                            <CardContent className="flex items-center justify-center p-0">
                              <Image
                                src={singleImage}
                                alt={`Slide ${index + 1}`}
                                className="lg:w-[400px] md:w-[400px] sm:w-[400px] sx:w-[300px] lg:h-[550px] md:h-[550px] sm:h-[550px] sx:h-[450px]"
                              />
                            </CardContent>
                          </Card>
                        </div>
                      </CarouselItem>
                    )
                  )}
                </CarouselContent>

                
                <CarouselPrevious className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-red-600 p-2 rounded-full hover:bg-red-600 hover:text-white">
                  <MdOutlineKeyboardArrowLeft />
                </CarouselPrevious>

                
                <CarouselNext className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 hover:bg-red-600 hover:text-white text-red-600 p-2 rounded-full">
                  <MdOutlineKeyboardArrowRight />
                </CarouselNext>
              </Carousel>
            </div>
          </div>

          
          <div className=" lg:px-8 md:px-8 sm:px-5 sx:px-2">
            <h4 className="text-4xl text-red-600 font-bold">03</h4>
            <h1 className="text-3xl font-bold text-[#32297C] my-2">
              WINDOW CLEANING SERVICES
            </h1>
            <p className="text-base">
              Using
              <span className="text-[#32297C] font-bold mx-2">
                highly trained window cleaners
              </span>
              we can offer
              <span className="text-[#32297C] font-bold mx-2">
                professional advice on the best method of cleaning your windows.
              </span>
              It may be that your building requires safety eye- bolt ﬁttings or
              that the roof could lend itself to a boatswain&apos;s chair.
              Whatever the circumstances we will be looking to ﬁnd you the most
              suitable, safe and cost effective method. At the end of each clean
              our
              <span className="text-[#32297C] font-bold mx-2">
                Supervisor will present you with a satisfaction note&apos; for
                signature.
              </span>
              This system allows you to check that the work has been completed
              to your satisfaction and also ensures that the cleans take place
              according to schedule.
            </p>

            <h4 className="text-[#32297C] text-xl font-bold my-3">
              Our Window Cleaning Services Methods
            </h4>

            <ul className="list-disc pl-5 lg:flex  lg:gap-14 ">
              <div>
                <li>Abseiling - Rope Access</li>
                <li>Harnesses & Eyebolts</li>
                <li>Ladders</li>
              </div>
              <div>
                <li>Reach and Wash pole cleaning system </li>
                <li>Hydraulic platforms</li>
                <li>Cradles </li>
              </div>
            </ul>

            <button className="bg-[#32297C] text-white flex justify-center items-center gap-1 px-4 py-2 rounded-full text-base hover:bg-red-600 my-2">
              Window Cleaning <FaArrowUp />
            </button>
          </div>
        </div>
      </div> */}

      {/* Section 4 */}
      <div id="04">
        <hr className="border-[1px] border-red-500 my-2 " />
        {/* ServiceSlide 04 */}
        <div
          className="lg:container md:container justify-center items-center lg:px-28 md:px-10 sm:px-8 sx:px-6 flex sx:flex-wrap sm:flex-wrap md:flex-wrap lg:flex-nowrap "
          id="4"
        >
          {/* Text Section */}
          <div className=" lg:px-8 md:px-8 sm:px-5 sx:px-2">
            <h4 className="text-4xl text-red-600 font-bold">03</h4>
            <h1 className="text-3xl font-bold text-[#32297C] my-2">
              CARPET CLEANING SERVICES
            </h1>
            <p className="text-base">
              NEW ECO uses the best carpet cleaning products. We are using the
              <span className="text-[#32297C] font-bold mx-2">
                latest technology to get the best results;
              </span>
              our carpet cleaning machines are very sophisticated. All our
              Professional Carpet Cleaners have received professional carpet and
              upholstery cleaning training. Your carpet will dry within 1 Hour.
              <span className="text-[#32297C] font-bold mx-2">
                100% Satisfaction guarantee-If you are not happy with the ﬁnal
                result, we will come back (15 days period) , and we will do it
                again at no extra charge.
              </span>
              We offer the most competitive prices on the market.
            </p>

            {/* <h4 className="text-[#32297C] text-xl font-bold my-3">
              We offer a full range of commercial cleaning{" "}
            </h4>

            <ul className="list-disc pl-5 lg:flex  lg:gap-14 ">
              <div>
                <li>Offices</li>
                <li>Embassies and Consulates </li>
                <li>Estate agents</li>
                <li>Theatres / Cinemas</li>
                <li>Retail stores</li>
              </div>
              <div>
                <li>Schools / Universities</li>
                <li>Galleries / Venues</li>
                <li>Sport & Leisure Facilities</li>
                <li>Hospitals and Residential properties </li>
              </div>
            </ul> */}

            <button className="bg-[#32297C] text-white flex justify-center items-center gap-1 px-4 py-2 rounded-full text-base hover:bg-red-600 my-2">
              Carpet Cleaning <FaArrowUp />
            </button>
          </div>

          {/* Carousel Section */}
          <div>
            <div className="lg:w-[400px] md:w-[400px] sm:w-[400px] sx:w-[300px] lg:h-[550px] md:h-[550px] sm:h-[550px] sx:h-[450px] lg:my-12 md:my-12 sm:my-6 sx:my-4">
              <Carousel
                plugins={[plugin4.current]}
                className="relative"
                onMouseEnter={plugin4.current.stop}
                onMouseLeave={plugin4.current.reset}
              >
                <CarouselContent>
                  {[carousel4_1, carousel4_2, carousel4_3].map(
                    (singleImage, index) => (
                      <CarouselItem key={index}>
                        <div className="p-1">
                          <Card>
                            <CardContent className="flex items-center justify-center p-0">
                              <Image
                                src={singleImage}
                                alt={`Slide ${index + 1}`}
                                className="lg:w-[400px] md:w-[400px] sm:w-[400px] sx:w-[300px] lg:h-[550px] md:h-[550px] sm:h-[550px] sx:h-[450px]"
                              />
                            </CardContent>
                          </Card>
                        </div>
                      </CarouselItem>
                    )
                  )}
                </CarouselContent>

                {/* Position left arrow */}
                <CarouselPrevious className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-red-600 p-2 rounded-full hover:bg-red-600 hover:text-white">
                  <MdOutlineKeyboardArrowLeft />
                </CarouselPrevious>

                {/* Position right arrow */}
                <CarouselNext className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 hover:bg-red-600 hover:text-white text-red-600 p-2 rounded-full">
                  <MdOutlineKeyboardArrowRight />
                </CarouselNext>
              </Carousel>
            </div>
          </div>
        </div>
      </div>

      {/* Section 5 */}
      <div id="05">
        <hr className="border-[1px] border-red-500 my-2 " />
        {/* ServiceSlide 05 */}
        <div
          className="lg:container md:container justify-center items-center lg:px-28 md:px-10 sm:px-8 sx:px-6 flex sx:flex-wrap sm:flex-wrap md:flex-wrap lg:flex-nowrap "
          id="5"
        >
          {/* Carousel Section */}
          <div>
            <div className="lg:w-[400px] md:w-[400px] sm:w-[400px] sx:w-[300px] lg:h-[550px] md:h-[550px] sm:h-[550px] sx:h-[450px] lg:my-12 md:my-12 sm:my-6 sx:my-4">
              <Carousel
                plugins={[plugin5.current]}
                className="relative"
                onMouseEnter={plugin5.current.stop}
                onMouseLeave={plugin5.current.reset}
              >
                <CarouselContent>
                  {[carousel5_1, carousel5_2, carousel5_3].map(
                    (singleImage, index) => (
                      <CarouselItem key={index}>
                        <div className="p-1">
                          <Card>
                            <CardContent className="flex items-center justify-center p-0">
                              <Image
                                src={singleImage}
                                alt={`Slide ${index + 1}`}
                                className="lg:w-[400px] md:w-[400px] sm:w-[400px] sx:w-[300px] lg:h-[550px] md:h-[550px] sm:h-[550px] sx:h-[450px]"
                              />
                            </CardContent>
                          </Card>
                        </div>
                      </CarouselItem>
                    )
                  )}
                </CarouselContent>

                {/* Position left arrow */}
                <CarouselPrevious className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-red-600 p-2 rounded-full hover:bg-red-600 hover:text-white">
                  <MdOutlineKeyboardArrowLeft />
                </CarouselPrevious>

                {/* Position right arrow */}
                <CarouselNext className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 hover:bg-red-600 hover:text-white text-red-600 p-2 rounded-full">
                  <MdOutlineKeyboardArrowRight />
                </CarouselNext>
              </Carousel>
            </div>
          </div>

          {/* Text Section */}
          <div className=" lg:px-8 md:px-8 sm:px-5 sx:px-2">
            <h4 className="text-4xl text-red-600 font-bold">04</h4>
            <h1 className="text-3xl font-bold text-[#32297C] my-2">
              JANITORIAL CLEANING SERVICES
            </h1>
            <p className="text-base">
              NEW ECO now offers a unique janitorial cleaning supplies service,{" "}
              <span className="text-[#32297C] font-bold mx-2">
                at very competitive rates.
              </span>
              We supply both commercial and domestic markets and aim to provide
              <span className="text-[#32297C] font-bold mx-2">
                our customers with top quality cleaning supplies at some of the
                best prices available.
              </span>
              We have a wide range of cleaning equipment, chemicals and a great
              selection of paper products in stock and ready for immediate
              delivery. We supply many of the major manufacturers such as
              <span className="text-[#32297C] font-bold mx-2">
                Karcher, Clover Chemicals, Prochem and Katrin.
              </span>
            </p>

            <h4 className="text-[#32297C] text-xl font-bold my-3">
              Our Janitorial Cleaning Services Methods
            </h4>

            <ul className="list-disc pl-5 lg:flex  lg:gap-14 ">
              <div>
                <li>Toilet paper</li>
                <li>Hand towels</li>
                <li>Kitchen Rolls</li>
                <li>Hand Soap</li>
                <li>Dishwashing tablets/salt/rinse aid</li>
              </div>
              <div>
                <li>Refuse sacks and bin liners</li>
                <li>Floor Cleaning </li>
                <li>Multi Surface Cleaning</li>
                {/* <li>Window Cleaning</li> */}
                <li>Brushes & Mops </li>
              </div>
            </ul>

            <button className="bg-[#32297C] text-white flex justify-center items-center gap-1 px-4 py-2 rounded-full text-base hover:bg-red-600 my-2">
              Janitorial Cleaning <FaArrowUp />
            </button>
          </div>
        </div>
      </div>

      {/* Section 6 */}
      <div id="06">
        <hr className="border-[1px] border-red-500 my-2 " />
        {/* ServiceSlide 06 */}
        <div
          className="lg:container md:container justify-center items-center lg:px-28 md:px-10 sm:px-8 sx:px-6 flex sx:flex-wrap sm:flex-wrap md:flex-wrap lg:flex-nowrap "
          id="6"
        >
          {/* Text Section */}
          <div className=" lg:px-8 md:px-8 sm:px-5 sx:px-2">
            <h4 className="text-4xl text-red-600 font-bold">05</h4>
            <h1 className="text-3xl font-bold text-[#32297C] my-2">
              WASHROOM CLEANING SERVICES
            </h1>
            <p className="text-base">
              If you &apos; ve got a
              <span className="text-[#32297C] font-bold mx-2">
                multistorey building with a number of cubicles, or unmanned
                toilets that you can &apos; t check personally,
              </span>
              how do you know that every item has been serviced as you would
              wish? With us, you can be completely conﬁdent, because our
              operators are very experience. All our clients are delighted with
              this system, they know that with this system there isn’t any
              possibility that our operators will miss any unit.
            </p>

            <h4 className="text-[#32297C] text-xl font-bold my-3">
              Our Washroom Cleaning Services Methods
            </h4>

            <ul className="list-disc pl-5 lg:flex  lg:gap-14 ">
              <div>
                <li>Feminine Hygiene Systems</li>
                <li>Vending Services</li>
                <li>Nappy Disposal Service</li>
                <li>Air Freshening</li>
              </div>
              <div>
                <li>Urinal Flush Control</li>
                <li>Soap Dispenser</li>
                <li>Automatic Ozone Generator</li>
              </div>
            </ul>

            <button className="bg-[#32297C] text-white flex justify-center items-center gap-1 px-4 py-2 rounded-full text-base hover:bg-red-600 my-2">
              Washroom Cleaning <FaArrowUp />
            </button>
          </div>

          {/* Carousel Section */}
          <div>
            <div className="lg:w-[400px] md:w-[400px] sm:w-[400px] sx:w-[300px] lg:h-[550px] md:h-[550px] sm:h-[550px] sx:h-[450px] lg:my-12 md:my-12 sm:my-6 sx:my-4">
              <Carousel
                plugins={[plugin6.current]}
                className="relative"
                onMouseEnter={plugin6.current.stop}
                onMouseLeave={plugin6.current.reset}
              >
                <CarouselContent>
                  {[carousel6_1, carousel6_2, carousel6_3].map(
                    (singleImage, index) => (
                      <CarouselItem key={index}>
                        <div className="p-1">
                          <Card>
                            <CardContent className="flex items-center justify-center p-0">
                              <Image
                                src={singleImage}
                                alt={`Slide ${index + 1}`}
                                className="lg:w-[400px] md:w-[400px] sm:w-[400px] sx:w-[300px] lg:h-[550px] md:h-[550px] sm:h-[550px] sx:h-[450px]"
                              />
                            </CardContent>
                          </Card>
                        </div>
                      </CarouselItem>
                    )
                  )}
                </CarouselContent>

                {/* Position left arrow */}
                <CarouselPrevious className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-red-600 p-2 rounded-full hover:bg-red-600 hover:text-white">
                  <MdOutlineKeyboardArrowLeft />
                </CarouselPrevious>

                {/* Position right arrow */}
                <CarouselNext className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 hover:bg-red-600 hover:text-white text-red-600 p-2 rounded-full">
                  <MdOutlineKeyboardArrowRight />
                </CarouselNext>
              </Carousel>
            </div>
          </div>
        </div>
      </div>

      {/* Section 7 */}
      <div id="07">
        <hr className="border-[1px] border-red-500 my-2 " />
        {/* ServiceSlide 07 */}
        <div
          className="lg:container md:container justify-center items-center lg:px-28 md:px-10 sm:px-8 sx:px-6 flex sx:flex-wrap sm:flex-wrap md:flex-wrap lg:flex-nowrap "
          id="7"
        >
          {/* Carousel Section */}
          <div>
            <div className="lg:w-[400px] md:w-[400px] sm:w-[400px] sx:w-[300px] lg:h-[550px] md:h-[550px] sm:h-[550px] sx:h-[450px] lg:my-12 md:my-12 sm:my-6 sx:my-4">
              <Carousel
                plugins={[plugin7.current]}
                className="relative"
                onMouseEnter={plugin7.current.stop}
                onMouseLeave={plugin7.current.reset}
              >
                <CarouselContent>
                  {[carousel7_1, carousel7_2, carousel7_3].map(
                    (singleImage, index) => (
                      <CarouselItem key={index}>
                        <div className="p-1">
                          <Card>
                            <CardContent className="flex items-center justify-center p-0">
                              <Image
                                src={singleImage}
                                alt={`Slide ${index + 1}`}
                                className="lg:w-[400px] md:w-[400px] sm:w-[400px] sx:w-[300px] lg:h-[550px] md:h-[550px] sm:h-[550px] sx:h-[450px]"
                              />
                            </CardContent>
                          </Card>
                        </div>
                      </CarouselItem>
                    )
                  )}
                </CarouselContent>

                {/* Position left arrow */}
                <CarouselPrevious className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-red-600 p-2 rounded-full hover:bg-red-600 hover:text-white">
                  <MdOutlineKeyboardArrowLeft />
                </CarouselPrevious>

                {/* Position right arrow */}
                <CarouselNext className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 hover:bg-red-600 hover:text-white text-red-600 p-2 rounded-full">
                  <MdOutlineKeyboardArrowRight />
                </CarouselNext>
              </Carousel>
            </div>
          </div>

          {/* Text Section */}
          <div className=" lg:px-8 md:px-8 sm:px-5 sx:px-2">
            <h4 className="text-4xl text-red-600 font-bold">06</h4>
            <h1 className="text-3xl font-bold text-[#32297C] my-2">
              PROPERTY MAINTENANCE SERVICES
            </h1>
            <p className="text-base">
              If your Property are in need a bit of up-dating, a fresh lick of
              paint or even a{" "}
              <span className="text-[#32297C] font-bold mx-2">
                full re-design, or full refurbishment you’ve come to the right
                place,
              </span>
              NEW ECO Support Services provides a single point of contact for
              all your maintenance requirements. We specialize in external and
              internal property renovation, refurbishment and repair. Every job
              we undertake, however big or small is professionally managed to a
              successful conclusion. As an independent company we tailor works
              to suit your needs. A few of our services are listed below but it
              all depends what you need. So, the{" "}
              <span className="text-[#32297C] font-bold mx-2">
                best next step is to give us a call and we’ll book an
                appointment free of charge
              </span>{" "}
              to see how we can help you.
            </p>

            <h4 className="text-[#32297C] text-xl font-bold my-3">
              Our Property Maintenance Methods
            </h4>

            <ul className="list-disc pl-5 lg:flex  lg:gap-14 ">
              <div>
                <li>Extensions / Conversions / Refurbishments</li>
                <li>Fitted Kitchens / Bathrooms / Bedrooms </li>
                <li>Plastering </li>
                <li>Floor and Wall Tiling </li>
                <li>Plumbing, Carpentry and Electrics </li>
              </div>
              <div>
                <li>External Landscaping </li>
                <li>Roof Repairs and Maintenance </li>
                <li>Decorating </li>
                <li>General Maintenance </li>
              </div>
            </ul>

            <button className="bg-[#32297C] text-white flex justify-center items-center gap-1 px-4 py-2 rounded-full text-base hover:bg-red-600 my-2">
              Property Maintenance <FaArrowUp />
            </button>
          </div>
        </div>
      </div>

      {/* Section 8 */}
      <div id="08">
        <hr className="border-[1px] border-red-500 my-2 " />
        {/* ServiceSlide 08 */}
        <div
          className="lg:container md:container justify-center items-center lg:px-28 md:px-10 sm:px-8 sx:px-6 flex sx:flex-wrap sm:flex-wrap md:flex-wrap lg:flex-nowrap "
          id="8"
        >
          {/* Text Section */}
          <div className=" lg:px-8 md:px-8 sm:px-5 sx:px-2">
            <h4 className="text-4xl text-red-600 font-bold">07</h4>
            <h1 className="text-3xl font-bold text-[#32297C] my-2">
              HARD FLOOR MAINTENANCE SERVICES
            </h1>
            <p className="text-base">
              Natural Stone, vinyl, linoleum and hardwood ﬂoors can be extremely
              durable, but they require proper maintenance to preserve their
              resilience and shine.
              <span className="text-[#32297C] font-bold mx-2">
                We offer Floor Maintenance services that rejuvenate and
                revitalize your hard ﬂoors.
              </span>
              These services include
              <span className="text-[#32297C] font-bold mx-2">
                ﬂoor stripping, reﬁnishing, sealing and polishing to restore the
                look of your ﬂoors surface and make them appear as good as new
                using only diamond pads.
              </span>
              <span className="text-[#32297C] font-bold mx-2">
                {" "}
                Natural Stone Floor
              </span>
              Preserve the beauty of your natural stone ﬂoors with our
              professional Floor Maintenance Services. Let our ﬂoor reﬁnishing
              <span className="text-[#32297C] font-bold mx-2">
                team grind your marble, limestone, granite and other natural
                stone ﬂoors to remove scratches and etches.
              </span>
              We &apos; ll seal the surface to restore its original lustre and
              to withstand penetration of liquid spills and dirt. Vinyl and
              Linoleum Floor Without proper maintenance, vinyl and linoleum
              ﬂoors lose their sheen. These types of ﬂoors can develop an
              unsightly yellow discoloration. This soiled ﬁlm together with deep
              scratches and abrasions acts like a magnet that attracts more dirt
              and grime.
              <span className="text-[#32297C] font-bold mx-2">
                We can remove your ﬂoors old polish and sealer, reseal it with a
                high-quality sealer and buff the surface.
              </span>
              This sealer and gloss ﬁnish will protect and extend the wear of
              your ﬂoor, reduce marks and scratches and guard against soil
              penetration and abrasion.
            </p>

            {/* <h4 className="text-[#32297C] text-xl font-bold my-3">
              We offer a full range of commercial cleaning{" "}
            </h4>

            <ul className="list-disc pl-5 lg:flex  lg:gap-14 ">
              <div>
                <li>Offices</li>
                <li>Embassies and Consulates </li>
                <li>Estate agents</li>
                <li>Theatres / Cinemas</li>
                <li>Retail stores</li>
              </div>
              <div>
                <li>Schools / Universities</li>
                <li>Galleries / Venues</li>
                <li>Sport & Leisure Facilities</li>
                <li>Hospitals and Residential properties </li>
              </div>
            </ul> */}

            <button className="bg-[#32297C] text-white flex justify-center items-center gap-1 px-4 py-2 rounded-full text-base hover:bg-red-600 my-2">
              Hard Floor Maintenance <FaArrowUp />
            </button>
          </div>

          {/* Carousel Section */}
          <div>
            <div className="lg:w-[400px] md:w-[400px] sm:w-[400px] sx:w-[300px] lg:h-[550px] md:h-[550px] sm:h-[550px] sx:h-[450px] lg:my-12 md:my-12 sm:my-6 sx:my-4">
              <Carousel
                plugins={[plugin8.current]}
                className="relative"
                onMouseEnter={plugin8.current.stop}
                onMouseLeave={plugin8.current.reset}
              >
                <CarouselContent>
                  {[carousel8_1, carousel8_2, carousel8_3].map(
                    (singleImage, index) => (
                      <CarouselItem key={index}>
                        <div className="p-1">
                          <Card>
                            <CardContent className="flex items-center justify-center p-0">
                              <Image
                                src={singleImage}
                                alt={`Slide ${index + 1}`}
                                className="lg:w-[400px] md:w-[400px] sm:w-[400px] sx:w-[300px] lg:h-[550px] md:h-[550px] sm:h-[550px] sx:h-[450px]"
                              />
                            </CardContent>
                          </Card>
                        </div>
                      </CarouselItem>
                    )
                  )}
                </CarouselContent>

                {/* Position left arrow */}
                <CarouselPrevious className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-red-600 p-2 rounded-full hover:bg-red-600 hover:text-white">
                  <MdOutlineKeyboardArrowLeft />
                </CarouselPrevious>

                {/* Position right arrow */}
                <CarouselNext className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 hover:bg-red-600 hover:text-white text-red-600 p-2 rounded-full">
                  <MdOutlineKeyboardArrowRight />
                </CarouselNext>
              </Carousel>
            </div>
          </div>
        </div>
      </div>

      {/* Section 9 */}
      <div id="09">
        <hr className="border-[1px] border-red-500 my-2 " />
        {/* ServiceSlide 09 */}
        <div
          className="lg:container md:container justify-center items-center lg:px-28 md:px-10 sm:px-8 sx:px-6 flex sx:flex-wrap sm:flex-wrap md:flex-wrap lg:flex-nowrap "
          id="9"
        >
          {/* Carousel Section */}
          <div>
            <div className="lg:w-[400px] md:w-[400px] sm:w-[400px] sx:w-[300px] lg:h-[550px] md:h-[550px] sm:h-[550px] sx:h-[450px] lg:my-12 md:my-12 sm:my-6 sx:my-4">
              <Carousel
                plugins={[plugin9.current]}
                className="relative"
                onMouseEnter={plugin9.current.stop}
                onMouseLeave={plugin9.current.reset}
              >
                <CarouselContent>
                  {[carousel9_1, carousel9_2, carousel9_3].map(
                    (singleImage, index) => (
                      <CarouselItem key={index}>
                        <div className="p-1">
                          <Card>
                            <CardContent className="flex items-center justify-center p-0">
                              <Image
                                src={singleImage}
                                alt={`Slide ${index + 1}`}
                                className="lg:w-[400px] md:w-[400px] sm:w-[400px] sx:w-[300px] lg:h-[550px] md:h-[550px] sm:h-[550px] sx:h-[450px]"
                              />
                            </CardContent>
                          </Card>
                        </div>
                      </CarouselItem>
                    )
                  )}
                </CarouselContent>

                {/* Position left arrow */}
                <CarouselPrevious className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-red-600 p-2 rounded-full hover:bg-red-600 hover:text-white">
                  <MdOutlineKeyboardArrowLeft />
                </CarouselPrevious>

                {/* Position right arrow */}
                <CarouselNext className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 hover:bg-red-600 hover:text-white text-red-600 p-2 rounded-full">
                  <MdOutlineKeyboardArrowRight />
                </CarouselNext>
              </Carousel>
            </div>
          </div>

          {/* Text Section */}
          <div className=" lg:px-8 md:px-8 sm:px-5 sx:px-2">
            <h4 className="text-4xl text-red-600 font-bold">08</h4>
            <h1 className="text-3xl font-bold text-[#32297C] my-2">
              GRASS CUTTING SERVCES
            </h1>
            <p className="text-base">
              NEW ECO provides
              <span className="text-[#32297C] font-bold mx-2">
                grass cutting/ Lawn Cutting services to people in your
                neighborhood with reliable and professional services at a
                reasonable rate.
              </span>
              Our clients enjoy returning home to the smell of freshly cut
              <span className="text-[#32297C] font-bold mx-2">
                grass, instead of an unruly yard that requires
              </span>
              you to get out the lawnmower at the end of your busy day. Time is
              so important these days, making it almost impossible to keep up
              with the grass cutting that is required to have great looking,
              healthy turf. When you get weekly grass cutting services from The
              Gardener, you will appreciate your great looking property, and
              enjoy more time to relax.
            </p>

            <h4 className="text-[#32297C] text-xl font-bold my-3">
              Our weekly maintenance includes:
            </h4>

            <ul className="list-disc pl-5 lg:flex  lg:gap-14 ">
              <div>
                <li>Professional grass cutting.</li>
                <li>Edging of walks and ﬂowerbeds. </li>
                <li>
                  Removal of all clippings from patios, walkways and driveways.{" "}
                </li>
                <li>Most important, you enjoy your yard not working in it! </li>
              </div>
            </ul>

            <button className="bg-[#32297C] text-white flex justify-center items-center gap-1 px-4 py-2 rounded-full text-base hover:bg-red-600 my-2">
              Grass Cutting Services <FaArrowUp />
            </button>
          </div>
        </div>
      </div>

      {/* Section 10 */}
      <div id="010">
        <hr className="border-[1px] border-red-500 my-2 " />
        {/* ServiceSlide 10 */}
        <div
          className="lg:container md:container justify-center items-center lg:px-28 md:px-10 sm:px-8 sx:px-6 flex sx:flex-wrap sm:flex-wrap md:flex-wrap lg:flex-nowrap "
          id="10"
        >
          {/* Text Section */}
          <div className=" lg:px-8 md:px-8 sm:px-5 sx:px-2">
            <h4 className="text-4xl text-red-600 font-bold">09</h4>
            <h1 className="text-3xl font-bold text-[#32297C] my-2">
              TREE & GARDEN MAINTENANCE SERVICES
            </h1>
            <p className="text-base">
              We offer a comprehensive
              <span className="text-[#32297C] font-bold mx-2">
                Hedge cutting, height reduction & hedge removal service.
              </span>
              We plant new hedges. We can tackle the super large jobs and those
              small jobs to help make your garden
              <span className="text-[#32297C] font-bold mx-2">
                brighter, tidier and well-maintained. We also provide a ran ge
                of Tree Surgery, Tree Dismantling and Tree Felling services.
              </span>
              We offer a
              <span className="text-[#32297C] font-bold mx-2">
                Stump grinding service including narrow access stump grinding.
              </span>
              We like to plant Trees too and help you make your outdoor space a
              brighter and more enjoyable place to be.
            </p>

            {/* <h4 className="text-[#32297C] text-xl font-bold my-3">
              We offer a full range of commercial cleaning{" "}
            </h4>

            <ul className="list-disc pl-5 lg:flex  lg:gap-14 ">
              <div>
                <li>Offices</li>
                <li>Embassies and Consulates </li>
                <li>Estate agents</li>
                <li>Theatres / Cinemas</li>
                <li>Retail stores</li>
              </div>
              <div>
                <li>Schools / Universities</li>
                <li>Galleries / Venues</li>
                <li>Sport & Leisure Facilities</li>
                <li>Hospitals and Residential properties </li>
              </div>
            </ul> */}

            <button className="bg-[#32297C] text-white flex justify-center items-center gap-1 px-4 py-2 rounded-full text-base hover:bg-red-600 my-2">
              Tree & Garden Maintenance <FaArrowUp />
            </button>
          </div>

          {/* Carousel Section */}
          <div>
            <div className="lg:w-[400px] md:w-[400px] sm:w-[400px] sx:w-[300px] lg:h-[550px] md:h-[550px] sm:h-[550px] sx:h-[450px] lg:my-12 md:my-12 sm:my-6 sx:my-4">
              <Carousel
                plugins={[plugin10.current]}
                className="relative"
                onMouseEnter={plugin10.current.stop}
                onMouseLeave={plugin10.current.reset}
              >
                <CarouselContent>
                  {[carousel10_1, carousel10_2, carousel10_3].map(
                    (singleImage, index) => (
                      <CarouselItem key={index}>
                        <div className="p-1">
                          <Card>
                            <CardContent className="flex items-center justify-center p-0">
                              <Image
                                src={singleImage}
                                alt={`Slide ${index + 1}`}
                                className="lg:w-[400px] md:w-[400px] sm:w-[400px] sx:w-[300px] lg:h-[550px] md:h-[550px] sm:h-[550px] sx:h-[450px]"
                              />
                            </CardContent>
                          </Card>
                        </div>
                      </CarouselItem>
                    )
                  )}
                </CarouselContent>

                {/* Position left arrow */}
                <CarouselPrevious className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-red-600 p-2 rounded-full hover:bg-red-600 hover:text-white">
                  <MdOutlineKeyboardArrowLeft />
                </CarouselPrevious>

                {/* Position right arrow */}
                <CarouselNext className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 hover:bg-red-600 hover:text-white text-red-600 p-2 rounded-full">
                  <MdOutlineKeyboardArrowRight />
                </CarouselNext>
              </Carousel>
            </div>
          </div>
        </div>
      </div>


      {/* Section 11 */}
      <div id="011">
        <hr className="border-[1px] border-red-500 my-2 " />
        {/* ServiceSlide 10 */}
        <div
          className="lg:container md:container justify-center items-center lg:px-28 md:px-10 sm:px-8 sx:px-6 flex sx:flex-wrap sm:flex-wrap md:flex-wrap lg:flex-nowrap "
          id="11"
        >


 {/* Carousel Section */}
 <div>
            <div className="lg:w-[400px] md:w-[400px] sm:w-[400px] sx:w-[300px] lg:h-[550px] md:h-[550px] sm:h-[550px] sx:h-[450px] lg:my-12 md:my-12 sm:my-6 sx:my-4">
              <Carousel
                plugins={[plugin11.current]}
                className="relative"
                onMouseEnter={plugin11.current.stop}
                onMouseLeave={plugin11.current.reset}
              >
                <CarouselContent>
                  {[carousel11_1, carousel11_2, carousel11_3].map(
                    (singleImage, index) => (
                      <CarouselItem key={index}>
                        <div className="p-1">
                          <Card>
                            <CardContent className="flex items-center justify-center p-0">
                              <Image
                                src={singleImage}
                                alt={`Slide ${index + 1}`}
                                className="lg:w-[400px] md:w-[400px] sm:w-[400px] sx:w-[300px] lg:h-[550px] md:h-[550px] sm:h-[550px] sx:h-[450px]"
                              />
                            </CardContent>
                          </Card>
                        </div>
                      </CarouselItem>
                    )
                  )}
                </CarouselContent>

                {/* Position left arrow */}
                <CarouselPrevious className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-red-600 p-2 rounded-full hover:bg-red-600 hover:text-white">
                  <MdOutlineKeyboardArrowLeft />
                </CarouselPrevious>

                {/* Position right arrow */}
                <CarouselNext className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 hover:bg-red-600 hover:text-white text-red-600 p-2 rounded-full">
                  <MdOutlineKeyboardArrowRight />
                </CarouselNext>
              </Carousel>
            </div>
          </div>

          {/* Text Section */}
          <div className=" lg:px-8 md:px-8 sm:px-5 sx:px-2">
            <h4 className="text-4xl text-red-600 font-bold">10</h4>
            <h1 className="text-3xl font-bold text-[#32297C] my-2">
            HOTEL HOUSEKEEPING SERVICES
            </h1>
            <p className="text-base">
            NEW ECO provides
            
            <span className="text-[#32297C] font-bold mx-2">
            Premium hotel housekeeping services across Malaysia,
              </span>
             designed to meet the unique needs of the hospitality industry. With competitive pricing, we ensure that your hotel is kept in pristine condition, offering a comfortable and welcoming environment for your guests.
             
             <span className="text-[#32297C] font-bold mx-2">
              Our team of trained, reliable housekeepers
              </span>
              is supervised regularly by our managers to maintain high standards of cleanliness. Whether it&apos;s for safety, hygiene, or convenience, every detail is meticulously handled. Our systems are optimized to ensure consistency, quality, and efficiency in every service we provide.

              By choosing NEW ECO, you can rest assured that your hotel will be impeccably maintained, helping you project a professional and inviting image to your guests. We understand the importance of client satisfaction and prioritize your hotel&apos;s reputation for cleanliness and care.
              
          
        
            </p>

            <h4 className="text-[#32297C] text-xl font-bold my-3">
            Our housekeeping services include:
            </h4>

            <ul className="list-disc pl-5 lg:flex  lg:gap-14 ">
              <div>
                <li>Guestroom Cleaning and Turnover</li>
                <li>Public Area Maintenance </li>
                <li>Linen and Laundry Services</li>
                <li>Bathroom Sanitation</li>
                <li>Window and Glass Cleaning</li>
              </div>
              {/* <div>
                <li>Schools / Universities</li>
                <li>Galleries / Venues</li>
                <li>Sport & Leisure Facilities</li>
                <li>Hospitals and Residential properties </li>
              </div> */}
            </ul>

            <button className="bg-[#32297C] text-white flex justify-center items-center gap-1 px-4 py-2 rounded-full text-base hover:bg-red-600 my-2">
            Hotel Housekeeping Services <FaArrowUp />
            </button>
          </div>

         
        </div>
      </div>
      <BackToTopButton />
    </>
  );
};

export default ServiceSlideText;
