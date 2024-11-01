import React from 'react'

const TopHeader = () => {
  return (
    <div>
      <div className="bg-[#CBDCEB] text-white px-6 py-2 flex items-center justify-center gap-8">
        <p className="text-md text-[#133E87] md:text-base">
          Excellent Cleaning Operation Service, Always make new
        </p>
        <a
          href="https://www.newecocleaning.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm md:text-base text-[#133E87]  border border-blue-700 px-4 py-1 rounded hover:bg-[#133E87] hover:text-white transition
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
