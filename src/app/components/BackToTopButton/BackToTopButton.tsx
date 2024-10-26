"use client";
import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const BackToTopButton = () => {
  const [backToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);

  const scrollup = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {backToTopButton && (
        <button
          className="bg-red-500 rounded-full text-white p-3 text-xl fixed bottom-[50px] right-[50px] size-12 flex justify-center items-center"
          onClick={scrollup}
        >
          {" "}
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default BackToTopButton;
