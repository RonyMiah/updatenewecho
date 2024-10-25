import React from "react";
import Image from "next/image";

import logo1 from "@/assets/company/p-1.jpeg";
import logo2 from "@/assets/company/p-2.jpeg";
import logo3 from "@/assets/company/p-3.jpeg";
import logo4 from "@/assets/company/p-4.jpeg";
import logo5 from "@/assets/company/p-5.jpeg";
import logo6 from "@/assets/company/p-6.jpg";
import logo7 from "@/assets/company/p-7.jpg";

const OurClient = () => {
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];

  return (
    <div className="my-6 container">
      <h2 className="text-center font-bitter font-bold text-4xl mx-auto my-6">
        Our Clients
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 justify-center items-center gap-6">
        {logos.map((logo, index) => (
          <div key={index} className="flex justify-center items-center">
            <Image
              src={logo}
              alt={`Logo ${index + 1}`}
              className="rounded-xl border-0.5 border hover:scale-105 transform transition-transform duration-300 w-60 h-48"
              width={250}
              height={120}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurClient;
