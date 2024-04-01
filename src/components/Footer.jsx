import React from "react";
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { SiIndeed } from "react-icons/si";

const Footer = () => {
  return (
    <div className="bg-gray-800 p-4">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <img
            className="h-8 w-auto mr-2"
            src="https://demo.phlox.pro/freelancer/wp-content/uploads/sites/272/2021/02/logo-header.svg"
            alt=""
            loading="lazy"
          />
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-[150px] space-y-4 lg:space-y-0 lg:space-x-4 text-white text-sm lg:text-base">
          <p className="lg:text-lg">
            © 2024 Freelancer - Phlox Elementor WordPress Theme. All rights
            reserved.
          </p>
          <div className="flex items-center space-x-4 mb-5">
            <button className="bg-[#2d2e32] text-[#ffaf29] hover:bg-[#ffaf29] hover:text-[#2d2e32] text-lg font-bold py-4 px-4 rounded-[14px] transition duration-300 ease-in-out transform hover:scale-105">
              <FaInstagram />
            </button>
            <button className="bg-[#2d2e32] text-[#ffaf29] hover:bg-[#ffaf29] hover:text-[#2d2e32] text-lg font-bold py-4 px-4 rounded-[14px] transition duration-300 ease-in-out transform hover:scale-105">
              <FaTwitter />
            </button>
            <button className="bg-[#2d2e32] text-[#ffaf29] hover:bg-[#ffaf29] hover:text-[#2d2e32] text-lg font-bold py-4 px-4 rounded-[14px] transition duration-300 ease-in-out transform hover:scale-105">
              <FaLinkedin />
            </button>
            <button className="bg-[#2d2e32] text-[#ffaf29] hover:bg-[#ffaf29] hover:text-[#2d2e32] text-lg font-bold py-4 px-4 rounded-[14px] transition duration-300 ease-in-out transform hover:scale-105">
              <SiIndeed />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
