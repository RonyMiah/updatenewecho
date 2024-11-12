/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";
import React, { useState } from "react";
import { FaQrcode } from "react-icons/fa";

import Link from "next/link";
// import Image from "next/image";
// import ProjectCard from "./ProjectCard";
import BackToTopButton from "../BackToTopButton/BackToTopButton";

//Project Data Json File

// const data = [
//   {
//     id: 1,
//     title: "Damansara Business Center",
//     image:
//       "https://plus.unsplash.com/premium_photo-1681338224373-9669c2497c05?q=80&w=2007&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     category: "Commercial Developments",
//     description:
//       "A vibrant commercial center in Damansara Heights, designed to accommodate businesses of all sizes with modern amenities.",
//   },

//   {
//     id: 2,
//     title: "Bukit Jalil Pavilion Mall",
//     image:
//       "https://images.unsplash.com/photo-1481437156560-3205f6a55735?q=80&w=2095&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     description:
//       "A bustling retail destination offering world-class shopping and entertainment in the heart of Bukit Jalil.",
//   },
//   {
//     id: 3,
//     title: "Ampang Global Bank Center",
//     image:
//       "https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     description:
//       "A modern banking hub in Ampang, designed to support financial institutions with innovative office spaces.",
//   },
//   {
//     id: 4,
//     title: "Elmina Corporate Plaza",
//     image:
//       "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     description:
//       "A state-of-the-art commercial complex offering premium office spaces in the serene Elmina Lakeside area.",
//   },
//   {
//     id: 5,
//     title: "NextGen Adventure Park",
//     image:
//       "https://images.unsplash.com/photo-1564409972016-2825589beaed?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     description:
//       "A cutting-edge entertainment facility at 1 Utama featuring thrilling rides and attractions for all ages.",
//   },
//   {
//     id: 6,
//     title: "Tzu Chi International School",
//     image:
//       "https://plus.unsplash.com/premium_photo-1697729419943-30521d527501?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     category: "Others",
//     description:
//       "An elite international school in Kuala Lumpur focused on holistic education and community development.",
//   },
//   {
//     id: 7,
//     title: "Damansara Lakeside Residences",
//     image:
//       "https://plus.unsplash.com/premium_photo-1724701624517-22953482ce56?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     description:
//       "A mixed-use development combining luxurious living spaces with prime retail outlets in Damansara Heights.",
//   },
//   {
//     id: 8,
//     title: "Bukit Jalil Cinema Complex",
//     image:
//       "https://plus.unsplash.com/premium_photo-1709594070896-fc3869d4dcd6?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     category: "Cinema",
//     description:
//       "A premier cinema complex in Bukit Jalil offering the latest in film technology for an immersive movie experience.",
//   },
//   {
//     id: 9,
//     title: "Ampang Luxury Apartments",
//     image:
//       "https://plus.unsplash.com/premium_photo-1661962459469-27479898b31e?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     category: "Residential Developments",
//     description:
//       "Luxurious apartment living in the heart of Ampang, offering state-of-the-art facilities and modern design.",
//   },
//   {
//     id: 10,
//     title: "NextGen Residences at 1 Utama",
//     image:
//       "https://plus.unsplash.com/premium_photo-1694475731860-1fe1cb7a1897?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     category: "Residential Developments",
//     description:
//       "High-end residential units located within 1 Utama, combining the comfort of home with convenient access to shopping and entertainment.",
//   },
  
// ];


//Project Single Card Modal

const ProjectFilterButton = () => {
  // State to manage which button is active
  const [activeButton, setActiveButton] = useState<string>("all-projects");

  // State for selected project in the modal
//   const [ setSelectedProjectIndex]: any = useState(null);

  // Dummy Data - Replace with your actual project data

  // Function to handle button click and set active button
  const handleClick = (value: string) => {
    setActiveButton(value);
  };

  // Handle card click for modal
//   const handleCardClick = (index: number) => {
//     setSelectedProjectIndex(index);
//   };

  // Close modal
//   const closeModal = () => {
//     setSelectedProjectIndex(null);
//   };

  // Navigate to the next project in the modal
//   const nextProject = () => {
//     setSelectedProjectIndex(
//       (prevIndex: number) => (prevIndex + 1) % filteredData.length
//     );
//   };

  // Navigate to the previous project in the modal
//   const prevProject = () => {
//     setSelectedProjectIndex(
//       (prevIndex: number) =>
//         (prevIndex - 1 + filteredData.length) % filteredData.length
//     );
//   };

  // Filter projects based on the selected category
//   const filteredData =
//     activeButton === "all-projects"
//       ? data
//       : data.filter((project) => project.category === activeButton);

  return (
    <div className="my-16">
      {/* Red Button */}
      <div className="flex justify-end container px-4 md:px-28  ">
        <Link
          href="https://drive.google.com/file/d/1enid1xnSWphNmUsbL8aigZbCoZPd8-r0/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            className={`
            bg-[#2563EB] flex justify-center items-center gap-1
            hover:bg-[#23C55E] hover:scale-105
            text-white font-semibold py-2 px-3 md:px-4 text-sm md:text-base
            rounded-full shadow-md transition-transform duration-300 ease-in-out
            focus:outline-none focus:ring-2 focus:ring-[#23C55E]
            w-full md:w-auto 
          `}
            // onClick={() => handleClick("profile")}
          >
            <FaQrcode />
            <span className="hidden sm:inline">
              View Our Company Profile To Explore All Of Our Projects
            </span>
            <span className="sm:hidden">Explore Projects</span>
          </button>
        </Link>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center items-center gap-4 p-4">
        <button
          className={`${
            activeButton === "all-projects"
              ? "bg-[#2563EB]"
              : "bg-blue-900 hover:bg-[#23C55E]"
          } text-white py-2 px-6 rounded-full shadow-md transition duration-300 ease-in-out`}
          onClick={() => handleClick("all-projects")}
        >
          All Projects
        </button>
        <button
          className={`${
            activeButton === "Cinema"
              ? "bg-[#2563EB]"
              : "bg-blue-900 hover:bg-[#23C55E]"
          } text-white py-2 px-6 rounded-full shadow-md transition duration-300 ease-in-out`}
          onClick={() => handleClick("Cinema")}
        >
          Cinema
        </button>
        <button
          className={`${
            activeButton === "Commercial Developments"
              ? "bg-[#2563EB]"
              : "bg-blue-900 hover:bg-[#23C55E]"
          } text-white py-2 px-6 rounded-full shadow-md transition duration-300 ease-in-out`}
          onClick={() => handleClick("Commercial Developments")}
        >
          Commercial Developments
        </button>
        <button
          className={`${
            activeButton === "Mixed Use Developments"
              ? "bg-[#2563EB]"
              : "bg-blue-900 hover:bg-[#23C55E]"
          } text-white py-2 px-6 rounded-full shadow-md transition duration-300 ease-in-out`}
          onClick={() => handleClick("Mixed Use Developments")}
        >
          Mixed Use Developments
        </button>
        <button
          className={`${
            activeButton === "Others"
              ? "bg-[#2563EB]"
              : "bg-blue-900 hover:bg-[#23C55E]"
          } text-white py-2 px-6 rounded-full shadow-md transition duration-300 ease-in-out`}
          onClick={() => handleClick("Others")}
        >
          Others
        </button>
        <button
          className={`${
            activeButton === "Residential Developments"
              ? "bg-[#2563EB]"
              : "bg-blue-900 hover:bg-[#23C55E]"
          } text-white py-2 px-6 rounded-full shadow-md transition duration-300 ease-in-out`}
          onClick={() => handleClick("Residential Developments")}
        >
          Residential Developments
        </button>
      </div>

      <h3 className="text-center font-bold text-4xl my-10 ">
        Projects Comming Soon ...{" "}
      </h3>

      <BackToTopButton />
    </div>
  );
};

export default ProjectFilterButton;
