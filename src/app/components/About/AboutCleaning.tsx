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
          Learn More About Our Company
        </h1>
        <p>
          NEW ECO is setting new standards in cleaning services and is
          maintaining these standards through hard work and professionalism to
          create and strengthen our relationships with our customers. NEW ECO
          has one of the largest full-time staffs in the region and all are
          regularly and fully trained to meet high standards of quality and
          cleaning performance, as well as specialty services certification. We
          are ready to fulfill your office and facilities cleaning needs.
        </p>
        <p className="my-4">
          We understand that a clean working environment enhances the
          productivity, health and work experience of your employees, improving
          morale and increasing efficiency. We work hard to earn your trust and
          confidence, going beyond just meeting your business’s daily cleaning
          needs.
        </p>
        <p className="mb-4">
          NEW ECO comprehensive range of cleaning services includes: Interior
          Maintenance, Exterior Maintenance, Special Services, Value Added
          Services, Post construction cleaning, Spring cleaning, Carpet and
          upholstery cleaning, External facade cleaning, Mattress & Sofa
          Cleaning, External Glass Windows Cleaning, Maintenance cleaning,
          General, cleaning or Deep cleaning, Disinfecting service, Air
          conditioning service, Export Import service and Manpower service.
        </p>
        {/* <h4 className="text-xl font-bold text-[#2563EB]">
          At New Eco, cleaning is our passion, and excellence is our standard.
          It’s more than just a job – it’s what we do best!
        </h4> */}
      </div>
    </div>
  );
};

export default AboutCleaning;
