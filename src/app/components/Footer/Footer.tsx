// src/components/Footer.tsx

import Link from "next/link";
import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight,
  FaTree,
  FaWhatsappSquare,
} from "react-icons/fa";
import {  MdOutlineCleanHands } from "react-icons/md";


const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-gray-300 pt-20 pb-10 px-8 md:px-20 lg:px-32">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white">New Eco Cleaning </h2>
          {/* <p>Cleaning Services</p> */}
          <p>
            New Eco Cleaning—dedicated to delivering spotless, professional
            cleaning services for homes and businesses. Let us keep your spaces
            pristine.
          </p>
          {/* Badges */}
          <div className="flex space-x-4 mt-4">
            <AiFillCheckCircle className="size-10 text-green-500" />
            <FaTree className="size-10 text-green-500" />
            <MdOutlineCleanHands className="size-10 text-green-500" />
          </div>
        </div>

        {/* Services */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Services</h3>
          <ul className="space-y-2">
            {[
              "Construction Places",
              "Commercial Spaces",
              "Residential Areas",
              "Laundry Service",
              "Carpet Cleaning",
            ].map((service, idx) => (
              <li key={idx} className="flex items-center space-x-2">
                <FaArrowRight className="text-green-500" />
                <span>{service}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Information */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Information</h3>
          <ul className="space-y-2">
            {["Services", "Blog", "Contacts", "Site Map", "Privacy Policy"].map(
              (info, idx) => (
                <li key={idx} className="flex items-center space-x-2">
                  <FaArrowRight className="text-green-500" />

                  {info === "Contacts" ? (
                    <Link href="/contacts">{info}</Link>
                  ) : info === "Services" ? (
                    <Link href="/services">{info}</Link>
                  ) : info === "Privacy Policy" ? (
                    <Link href="/policy">{info}</Link>
                  ) : (
                    <span>{info}</span>
                  )}
                </li>
              )
            )}
          </ul>
        </div>

        {/* Contact Us */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Contact us</h3>
          <div className="flex items-center space-x-2">
            <FaMapMarkerAlt className="text-green-500" />
            <p>
              Lot 568-03-91, Kompleks Mutiara, Batu 3 ½ , Jalam Lpoh, 51200,
              Kuala Lampur, Malaysia
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <FaPhone className="text-green-500" />
            <p> +60330053856 , </p>
          </div>
          <div className="flex items-center space-x-2 gap-2">
            <Link
              href="https://wa.me/60162606040"
              className="text-green-500 flex justify-center items-center gap-1  hover:underline "
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsappSquare className="text-green-500 size-6" />
              +60162606040
            </Link>
          </div>
          <div className="flex items-center space-x-2">
            <FaEnvelope className="text-green-500" />
            <p>contact@newecocleaning.com</p>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-12 text-center text-gray-500">
        <p>
          Copyright By ©{" "}
          <span className="text-green-500">New Eco Cleaning Services </span> -
          2024
        </p>
      </div>
    </footer>
  );
};

export default Footer;
