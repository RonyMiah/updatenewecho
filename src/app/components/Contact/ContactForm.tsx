/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { MdOutlineMailOutline } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import { IoMdPhonePortrait } from "react-icons/io";
import Link from "next/link";
import { FaWhatsappSquare } from "react-icons/fa";
import BackToTopButton from "../BackToTopButton/BackToTopButton";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  }: any = useForm();

  const form: any = useRef(null); // Use a reference for the form element

  const onSubmit = () => {
    // Send the form using the form reference
    emailjs
      .sendForm(
        "service_w1fmmg8", // Replace with your EmailJS service ID
        "template_dy6uyqv", // Replace with your EmailJS template ID
        form.current, // Pass the form reference here
        "4eJfF53tNgCCSsR-q" // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Email sent successfully!");
          reset(); // Reset the form after submission
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send email.");
        }
      );
  };

  return (
    <div>
      {/* className="bg-gray-100" */}
      <div className="flex flex-col lg:flex-row justify-center items-center  min-h-screen p-4 gap-2  lg:p-10 lg:container md:container">
        {/* Contact Form Section */}
        <div className="lg:w-1/2 w-full bg-white p-8 h-[800px] rounded-lg shadow-md mb-8 lg:mb-0">
          <h2 className="text-2xl font-bold mb-6 text-blue-900">Contact</h2>

          {/* Reference the form element using ref */}
          <form
            ref={form}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4"
          >
            {/* Name */}
            <div>
              <label className="block text-blue-900">Your Name:</label>
              <input
                type="text"
                placeholder="Name*"
                className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500 placeholder-red-300"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <span className="text-red-600">{errors.name.message}</span>
              )}
            </div>

            {/* Company Name */}
            <div>
              <label className="block text-blue-900">Your Company Name:</label>
              <input
                type="text"
                placeholder="Company Name (optional)"
                className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500 placeholder-red-300"
                {...register("companyName")}
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-blue-900">Your Email:</label>
              <input
                type="email"
                placeholder="Email*"
                className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500 placeholder-red-300"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <span className="text-red-600">{errors.email.message}</span>
              )}
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-blue-900">Your Phone Number:</label>
              <input
                type="tel"
                placeholder="Phone Number*"
                className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500 placeholder-red-300"
                {...register("phoneNumber", {
                  required: "Phone number is required",
                  minLength: {
                    value: 8,
                    message: "Phone number must be at least 8 digits",
                  },
                })}
              />
              {errors.phoneNumber && (
                <span className="text-red-600">
                  {errors.phoneNumber.message}
                </span>
              )}
            </div>

            {/* Select Option */}
            <div>
              <label className="block text-blue-900">
                What Is It That You Seek?
              </label>
              <select
                className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500 text-red-400"
                {...register("option", { required: "Please select an option" })}
              >
                <option className="placeholder-red-300" value="">
                  —Please choose an option—
                </option>
                <option value="Service">Service Inquiry</option>
                <option value="Product">Product Information</option>
                <option value="Other">Other</option>
              </select>
              {errors.option && (
                <span className="text-red-600">{errors.option.message}</span>
              )}
            </div>

            {/* Message */}
            <div>
              <label className="block text-blue-900">Your Message:</label>
              <textarea
                placeholder="Message: (Please provide your details, company name, project's location, and etc to facilitate the process.) (Please note that our cleaning services are only available in Malaysia)"
                className="w-full p-4 border rounded-md min-h-36 focus:outline-none focus:border-blue-500 placeholder-red-300"
                {...register("message", { required: "Message is required" })}
              />
              {errors.message && (
                <span className="text-red-600">{errors.message.message}</span>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-[80px] p-2 bg-[#2563EB] text-white font-bold rounded-md hover:bg-[#23C55E] transition duration-200 "
            >
              Submit
            </button>
          </form>
        </div>

        {/* Address Section */}
        <div className="lg:w-1/2 w-full bg-[#33297C] h-[800px] text-white p-8 rounded-lg shadow-md ">
          <h2 className="text-[#23C55E] text-3xl font-bold mb-6">Address</h2>
          <div className="space-y-2">
            <p>Lot 568-03-91, Kompleks Mutiara, </p>
            <p>Batu 3 ½ , Jalam Lpoh,</p>
            <p>51200, Kuala Lampur, Malaysia</p>
            <p className="pt-6 flex justify-start items-center gap-2">
              <MdOutlineMailOutline className="text-red-500 text-2xl" />
              1ecoresources@gmail.com
            </p>
            <p className="flex justify-start items-center gap-2">
              <CgWebsite className="text-red-500 text-2xl" />
              <a href="https://www.newecocleaning.com" className="underline">
                https://www.newecocleaning.com
              </a>
            </p>
            <p className="flex justify-start items-center gap-2">
              <IoMdPhonePortrait className="text-red-500 text-2xl" />
              +60330053856
            </p>
            <p className="flex justify-start items-center gap-2">
              <div className="flex justify-center items-center gap-1">
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

          {/* Google Map */}
          <div className="mt-6 ">
            <iframe
              //   width="500"
              //   height="300"
              frameBorder="0"
              scrolling="no"
              marginHeight={0}
              marginWidth={0}
              src="https://maps.google.com/maps?width=500&height=350&hl=en&q=Lot%20568-03-91,%20Kompleks%20Mutiara,Batu%203%20%C2%BD%20,%20Jalam%20Lpoh,%2051200,%20Kuala%20Lampur+(NEW%20ECO%20CLEANING%20SERVICE)&t=&z=14&ie=UTF8&iwloc=B&output=embed"
              allowFullScreen
              aria-hidden="false"
              tabIndex={0}
              title="Google Map"
              className="rounded-2xl lg:w-[450px] md:w-[400px] sm:w-[500px] sx:w-[280px] lg:h-[300px] md:h-[300px] sm:h-[300px] sx:h-[200px]"
            ></iframe>
          </div>

          {/* Company Profile Button */}
          <div className="flex justify-start mt-6">
            <Link
              href="https://drive.google.com/file/d/1enid1xnSWphNmUsbL8aigZbCoZPd8-r0/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className={`
                bg-[#2563EB] flex justify-center items-center gap-1
                hover:bg-[#23C55E] hover:scale-105
                text-white font-semibold py-2 px-4 text-base
                rounded-full shadow-md transition-transform duration-300 ease-in-out
                focus:outline-none focus:ring-2 focus:ring-[#23C55E]
              `}
              >
                Get Our Company Profile
              </button>
            </Link>
          </div>
        </div>
      </div>
      <BackToTopButton />
    </div>
  );
};

export default ContactForm;
