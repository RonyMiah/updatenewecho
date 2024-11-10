import React from "react";
import Marquee from "react-fast-marquee";

const TopHeader = () => {
  return (
    <div className="overflow-hidden bg-gray-200 text-white  py-3">
      <div className="flex items-center justify-center whitespace-nowrap">
  
          <Marquee speed={90} className="text-orange-600 text-base font-bold">
            When Your Environment is Clean, You Feel Happy, Motivated, and
            Healthy
          </Marquee>
        
      </div>
    </div>
  );
};

export default TopHeader;
