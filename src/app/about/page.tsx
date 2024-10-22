import React from "react";
import AboutUs from "../components/About/About";
import AboutCard from "../components/About/AboutCard";
import AboutCleaning from "../components/About/AboutCleaning";
import WhatWeDo from "../components/WhatWeDo/WhatWeDo";

const page = () => {
  return <>
       <AboutUs/>
       <AboutCleaning/>
       <WhatWeDo/>
       <AboutCard/>
  </>;
};

export default page;
