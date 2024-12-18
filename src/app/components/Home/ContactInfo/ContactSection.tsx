// src/components/ContactSection.tsx

import Link from "next/link";
import React from "react";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaMobileScreen } from "react-icons/fa6";
import { MdLocationOn, MdCall, MdEmail } from "react-icons/md"; // Icons from react-icons

const ContactSection: React.FC = () => {
  return (
    <div className="bg-white pt-16 px-8 md:px-16 lg:px-32 my-20">
      <div className="max-w-6xl mx-auto text-center space-y-6">
        {/* Title Section */}
        <div className="">
          <h2 className="text-5xl font-bold text-gray-800 py-4">
            Here &apos; s How To Find
            <p className="text-blue-500 mt-6"> Us Easily!</p>
          </h2>
          <p className="text-gray-600 mt-4 py-3">
            Locate us effortlessly with our shared location information. Whether
            you &apos; re visiting our office or scheduling a service,
            <br />
            our location details are readily available to guide you. Reach out
            to us for easy directions and quick access!.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {/* Office Address Card */}
          <div className="flex items-center p-10 border rounded-xl shadow-sm">
            <MdLocationOn className="text-blue-500 size-36  mr-4" />
            <div>
              <h3 className="font-semibold text-2xl">Office Address</h3>
              <p className="text-gray-500">
                Lot 568-03-91, Kompleks Mutiara, Batu 3 ½ , Jalam Lpoh, 51200,
                Kuala Lampur, Malaysia
              </p>
            </div>
          </div>

          {/* Telephone Number Card */}
          <div className="flex items-center p-10 border rounded-xl shadow-sm">
            <MdCall className="text-blue-500 text-6xl mr-4" />
            <div>
              <h3 className="font-semibold text-2xl">Contact Number</h3>
              <p className="text-blue-500">
                <div className="flex justify-center items-center gap-1 py-2">
                  <FaMobileScreen className="text-red-500 size-6" />
                  +60330053856,
                </div>
                <div className="">
                  <Link
                    href="https://wa.me/60162606040"
                    className="text-green-500 flex justify-center items-center gap-2  hover:underline "
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaWhatsappSquare className="text-green-500 size-6" />
                    +60162606040
                  </Link>
                </div>
              </p>
            </div>
          </div>

          {/* Mail Address Card */}
          <div className="flex items-center p-10 border rounded-xl shadow-sm">
            <MdEmail className="text-blue-500 text-6xl mr-4" />
            <div>
              <h3 className="font-semibold text-lg"> Mail Address </h3>
              <p className="text-gray-500">1ecoresources@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
