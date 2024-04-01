import React from "react";
import { FaArrowRight } from "react-icons/fa";

const ImageWithText = ({ imageUrl, altText, title, description }) => {
  return (
    <div className="bg-[#2d2e32] p-4">
      <div className="container mx-auto  flex-col sm:flex justify-between items-center mt-12 mb-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Image div */}

          {/* Text div */}
          <div className="w-[800px] pr-12 items-end">
            <div className="flex items-center gap-1 mb-5">
              <div className="w-[20px] h-[3px] bg-green-700" />
              <p className="text-green-300 text-lg">Project 2</p>
            </div>
            <h3 className="text-6xl font-bold mb-2 text-white">{title}</h3>
            <p className="w-[550px] text-white text-lg pt-8">{description}</p>
            <div className="flex items-center gap-4 pt-5">
              <i>
                <FaArrowRight className="text-orange-400 text-lg" />
              </i>
              <p className="text-orange-400 text-xl">Read More</p>
            </div>
          </div>
            <div className="md:w-1/3 md:mr-4 relative">
              <div className="w-full h-full bg-white opacity-10 rounded-lg absolute top-0 left-0 transform rotate-[17deg]"></div>
              <img
                src={imageUrl}
                alt={altText}
                className="w-full rounded-lg transform mr-5"
              />
            </div>
        </div>
      </div>
    </div>
  );
};

export default ImageWithText;
