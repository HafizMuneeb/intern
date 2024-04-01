import React from "react";
import { Slide } from "@mui/material";
import { FaArrowRight } from "react-icons/fa";

const ImageWithTextThree = ({ imageUrl, altText, title, description }) => {
  return (
    <div className="bg-gray-600 p-4">
      <div className="container mx-auto flex-col sm:flex justify-between items-center mt-12 mb-12">
        <Slide direction="right" in={true} timeout={1000}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            {/* Image div */}
            <div className="w-full md:w-1/3 md:mr-4 relative">
              <div className="w-full h-full bg-white opacity-10 rounded-lg absolute top-0 left-0 transform rotate-[17deg]"></div>
              <img src={imageUrl} alt={altText} className="w-full rounded-t-xl transform mr-5" />
            </div>
            {/* Text div */}
            <div className="w-full md:w-[50%] pr-12">
              <h1 className="text-green-500 text-8xl md:text-9xl mb-4 md:mb-8">
                <span>&#x275E;</span>
              </h1>
              <h3 className="text-4xl md:text-6xl font-bold mb-2 text-white">{title}</h3>
            </div>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default ImageWithTextThree;
