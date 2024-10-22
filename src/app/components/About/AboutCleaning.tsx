import Image from "next/image";
import React from "react";

const AboutCleaning = () => {
  return (
    <div className="lg:container  justify-center items-center lg:px-28 md:px-4 sm:px-4 sx:px-2 flex sx:flex-wrap sm:flex-wrap md:flex-wrap lg:flex-nowrap lg:gap-2 md:gap-4 sm:gap-6 sx:gap-6 my-16">
      <div className="lg:w-[50%]">
        <Image
          src={
            "https://ecoglowcleaning.com/wp-content/uploads/2022/11/Cleaning-service-employees-wit.jpg"
          }
          alt="about image"
          height={1200}
          width={1200}
          className="rounded-3xl lg:h-[500px] lg:w-[600px] md:h-[450px] md:w-[800px] sm:h-[350px] sm:w-[800px] sx:h-[300px] sx:w-[800px] mx-auto "
        />
      </div>

      {/* text Section  */}
      <div className="lg:w-[50%] bg-[#F2F5F7] rounded-lg p-8 mx-auto">
        <h1 className="text-3xl font-bold mb-4">
          About NEW ECO Cleaning Services
        </h1>
        <p>
          New Eco Resources BM Sdn. Bhd. (NEW ECO) was incorporated in Year 2023
          providing cleaning, maintenance services, Import Export Services and
          Manpower supply businesses mainly in Kuala Lumpur Area, Malaysia.
        </p>
        <p className="my-4">
          NEW ECO was launched with an aim to be honest, trustworthy, trained
          and knowledgeable company that provides high quality cleaning and
          janitorial services in commercial and residential building that are
          dependable and professional in Peninsula Malaysia.
        </p>
        <p className="mb-4">
          NEW ECO is setting new standards in cleaning services and is
          maintaining these standards through hard work and professionalism to
          create and strengthen our relationships with our customers. NEW ECO
          has one of the largest full-time staffs in the region and all are
          regularly and fully trained to meet high standards of quality and
          cleaning performance, as well as specialty services certiﬁcation. We
          are ready to fulﬁll your ofﬁce and facilities cleaning needs.
        </p>
        <h4 className="text-xl font-bold text-[#2563EB]">
          At New Eco, cleaning is our passion, and excellence is our standard.
          It’s more than just a job – it’s what we do best!
        </h4>
      </div>
    </div>
  );
};

export default AboutCleaning;
