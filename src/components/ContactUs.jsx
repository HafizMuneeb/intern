import React from "react";
import { FaArrowRight, FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import Button from "./Button";

const ContactUs = () => {
  return (
    <div className="bg-gray-800 p-4">
      <div className="container mx-auto flex-col sm:flex justify-between items-center mt-12 mb-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Image div */}
          <div className="md:w-1/3 md:ml-4 relative">
            <form action="" className="">
              <div className="flex gap-6 mb-5">
                <input
                  type="text"
                  name=""
                  id=""
                  className="py-2 px-4 rounded-lg border-2 bg-gray-950 border-green-300 focus:outline-none focus:border-blue-500"
                  placeholder="Your name"
                />
                <input
                  type="text"
                  name=""
                  id=""
                  className="py-2 px-4 rounded-lg border-2 bg-gray-950 border-green-300 focus:outline-none focus:border-blue-500"
                  placeholder="Your email"
                />
              </div>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                className="w-full rounded-xl bg-gray-950 border-2 border-green-300"
                placeholder="Your message"
              ></textarea>
              <button className="bg-[#ffaf29] hover:bg-[#ffaf29] text-black py-4 px-14 rounded-[14px] mr-2 mt-5">
                Contact Us
              </button>
            </form>
          </div>
          {/* Text div */}
          <div className="w-full md:w-2/3 px-4 md:px-0">
            <div className="flex items-center gap-1 mb-5">
              <div className="w-[20px] h-[3px] bg-green-700" />
              <p className="text-green-300 text-lg">Contact ME</p>
            </div>
            <h3 className="text-6xl font-bold mb-2 text-white">
              Get In Touch With me
            </h3>
            <p className="text-white text-lg pt-8">
              The technological revolution is changing aspect of our lives, and
              the fabric of society itself. it's also changing the way we learn
              and what we learn. Factual knowledge is less prized when
              everything you ever need to know can be found on your phone.
              There's no imperative to be an expert Factual knowledge is less
              prized when everything you ever need to know can be found at doing
              everything.
            </p>
            <div className="flex flex-wrap gap-5 mt-5">
              <div className="w-[100px] h-[100px] bg-green-950 rounded-full flex items-center justify-center">
                <i>
                  <FaPhoneAlt className="text-4xl text-green-400" />
                </i>
              </div>
              <div>
                <p className="text-xl font-bold text-white">Phone Number</p>
                <p className="text-white">00000000</p>
                <p className="text-white">00000000</p>
              </div>
              <div className="w-[100px] h-[100px] bg-green-950 rounded-full flex items-center justify-center">
                <i>
                  <MdOutlineMail className="text-4xl text-green-400" />
                </i>
              </div>
              <div>
                <p className="text-xl font-bold text-white">Email</p>
                <p className="text-white">example@email.com</p>
                <p className="text-white">example@email.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4 pt-5">
              <i>
                <FaArrowRight className="text-orange-400 text-lg" />
              </i>
              <p className="text-orange-400 text-xl">Read More</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
