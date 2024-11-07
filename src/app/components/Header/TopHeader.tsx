import React from 'react'

const TopHeader = () => {
  return (
    <div>
      <div className="bg-gray-700 text-white px-8 py-2 flex items-center justify-between gap-8">
        <p className="text-md text-white md:text-base font-monoton  font-semi not-italic lg:text-2xl sm:text-base sx:text-base sx:mx-auto md:mx-0 lg:mx-0">
          NEW  ECO CLEANING SERVICES
        </p>
        <p className="text-md text-[#FF5733] md:text-base sx:hidden sm:hidden md:block lg:block">
          when your environment is clean you fell happy, motevated and healthy
        </p>
        <a
          href="https://www.newecocleaning.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm md:text-base text-[#FF5733]  border border-[#FF5733] px-4 py-1 rounded hover:bg-[#FF5733] hover:text-white transition
          sx:hidden sm:block md:block lg:block
          "
        >
          www.newecocleaning.com
        </a>
      </div>
    </div>
  );
}

export default TopHeader
