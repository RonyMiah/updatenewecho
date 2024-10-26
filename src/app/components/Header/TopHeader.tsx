import React from 'react'

const TopHeader = () => {
  return (
    <div>
      <div className="bg-[#339FCF] text-white px-6 py-2 flex items-center justify-center gap-8">
        <p className="text-sm md:text-base">
          Excellent Cleaning Operation Service, Always make new
        </p>
        <a
          href="https://www.newecobm.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm md:text-base border border-white px-4 py-1 rounded hover:bg-white hover:text-blue-500 transition"
        >
          www.newecobm.com
        </a>
      </div>
    </div>
  );
}

export default TopHeader
