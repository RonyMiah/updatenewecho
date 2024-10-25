"use client";
import React from "react";
import { Link } from "react-scroll";

const ServiceCard = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center gap-4 p-4">
        {/* Card 1 */}
        <Link to="1" spy={true} smooth={true} offset={-100} duration={500}>
          <div className="bg-indigo-900 text-white rounded-2xl p-6 w-full sm:w-48 md:w-60 lg:w-64 hover:bg-red-600">
            <span className="text-red-500 font-semibold hover:text-white">
              01
            </span>
            <h3 className="text-lg font-bold mt-2">
              COMMERCIAL CLEANING SERVICES
            </h3>
          </div>
        </Link>
        {/* Card 2 */}
        <Link to="2" spy={true} smooth={true} offset={-100} duration={500}>
          <div className="bg-indigo-900 text-white rounded-2xl p-6 w-full sm:w-48 md:w-60 lg:w-64  hover:bg-red-600">
            <span className="text-red-500 font-semibold hover:text-white">
              02
            </span>
            <h3 className="text-lg font-bold mt-2">OFFICE CLEANING SERVICES</h3>
          </div>
        </Link>
        {/* Card 3 */}
        <Link to="3" spy={true} smooth={true} offset={-100} duration={500}>
          <div className="bg-indigo-900 text-white rounded-2xl p-6 w-full sm:w-48 md:w-60 lg:w-64  hover:bg-red-600">
            <span className="text-red-500 font-semibold hover:text-white">
              03
            </span>
            <h3 className="text-lg font-bold mt-2">WINDOW CLEANING SERVICES</h3>
          </div>
        </Link>

        {/* Card 4 */}
        <Link to="4" spy={true} smooth={true} offset={-100} duration={500}>
          <div className="bg-indigo-900 text-white rounded-2xl p-6 w-full sm:w-48 md:w-60 lg:w-64  hover:bg-red-600">
            <span className="text-red-500 font-semibold hover:text-white">
              04
            </span>
            <h3 className="text-lg font-bold mt-2">CARPET CLEANING SERVICES</h3>
          </div>
        </Link>
        {/* Card 5 */}
        <Link to="5" spy={true} smooth={true} offset={-100} duration={500}>
          <div className="bg-indigo-900 text-white rounded-2xl p-6 w-full sm:w-48 md:w-60 lg:w-64  hover:bg-red-600">
            <span className="text-red-500 font-semibold hover:text-white">
              05
            </span>
            <h3 className="text-lg font-bold mt-2">
              JANITORIAL CLEANING SERVICES
            </h3>
          </div>
        </Link>
        {/* Card 6 */}
        <Link to="6" spy={true} smooth={true} offset={-100} duration={500}>
          <div className="bg-indigo-900 text-white rounded-2xl p-6 w-full sm:w-48 md:w-60 lg:w-64  hover:bg-red-600">
            <span className="text-red-500 font-semibold hover:text-white">
              06
            </span>
            <h3 className="text-lg font-bold mt-2">
              WASHROOM CLEANING SERVICES
            </h3>
          </div>
        </Link>
        {/* Card 7 */}
        <Link to="7" spy={true} smooth={true} offset={-100} duration={500}>
          <div className="bg-indigo-900 text-white rounded-2xl p-6 w-full sm:w-48 md:w-60 lg:w-64  hover:bg-red-600">
            <span className="text-red-500 font-semibold hover:text-white">
              07
            </span>
            <h3 className="text-lg font-bold mt-2">PROPERTY MAINTENANCE</h3>
          </div>
        </Link>
        {/* Card 8 */}
        <Link to="8" spy={true} smooth={true} offset={-100} duration={500}>
          <div className="bg-indigo-900 text-white rounded-2xl p-6 w-full sm:w-48 md:w-60 lg:w-64  hover:bg-red-600">
            <span className="text-red-500 font-semibold hover:text-white">
              08
            </span>
            <h3 className="text-lg font-bold mt-2">HARD FLOOR MAINTENANCE</h3>
          </div>
        </Link>
        {/* Card 9 */}
        <Link to="9" spy={true} smooth={true} offset={-100} duration={500}>
          <div className="bg-indigo-900 text-white rounded-2xl p-6 w-full sm:w-48 md:w-60 lg:w-64  hover:bg-red-600">
            <span className="text-red-500 font-semibold hover:text-white">
              09
            </span>
            <h3 className="text-lg font-bold mt-2">GRASS CUTTING SERVCES</h3>
          </div>
        </Link>
        {/* Card 10 */}
        <Link to="10" spy={true} smooth={true} offset={-150} duration={500}>
          <div className="bg-indigo-900 text-white rounded-2xl p-6 w-full sm:w-48 md:w-60 lg:w-64  hover:bg-red-600">
            <span className="text-red-500 font-semibold hover:text-white">
              10
            </span>
            <h3 className="text-lg font-bold mt-2">
              TREE & GARDEN MAINTENANCE
            </h3>
          </div>
        </Link>

        {/* Card Last */}
        {/* <div className="bg-red-600 text-white rounded-2xl p-6 w-full sm:w-48 md:w-60 lg:w-64 hover:bg-indigo-900 hover:text-white ">
          <span className="text-indigo-900 font-semibold hover:text-white">
            Emergency
          </span>
          <h3 className="text-2xl font-bold mt-2">Mobile Team Standby 24/7</h3>
        </div> */}
      </div>
    </>
  );
};

export default ServiceCard;
