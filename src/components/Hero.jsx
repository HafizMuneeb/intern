import React from "react";
import { Slide } from "@mui/material";

const Hero = () => {
  return (
    <section className="bg-gray-800 p-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Text */}
        <div className="hero-text text-center md:text-left md:w-1/2">
          <Slide direction="left" in={true} timeout={1000}>
            <h1 className="text-8xl font-bold text-white">Hello <br></br>I'm Jessy <br></br>Walter</h1>
          </Slide>
          <Slide direction="left" in={true} timeout={1200}>
            <p className="text-2xl mt-4 text-white md:w-[600px] mb-4">Since beginning my journey as a freelance designer nearby 7 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products.</p>
          </Slide>
          <Slide direction="left" in={true} timeout={1400}>
            <button className="bg-[#ffaf29] hover:bg-[#ffaf29] text-black py-4 px-14 rounded-[14px] shadow-md shadow-yellow-500">
              Contact Us
            </button>
          </Slide>
        </div>
        {/* Image */}
        <div className="relative flex h-full w-full md:w-1/2 items-center justify-center mt-8 md:mt-0">
          <Slide direction="up" in={true} timeout={1000}>
            <img
              className="z-10 w-full md:max-w-[600px] mx-auto"
              src="https://demo.phlox.pro/freelancer/wp-content/uploads/sites/272/2021/02/hero-img.png"
              alt=""
            />
          </Slide>
          <div className="absolute z-20 w-[100px] h-[100px] rounded-full bg-gray-800 top-1/4 left-1/4 animate-circle flex justify-center">
            <h1 className="text-green-500 font-bold flex justify-center items-center text-center text-6xl">
              Id
            </h1>
          </div>
          <div className="absolute z-20 w-[100px] h-[100px] rounded-full bg-gray-800 top-1/4 right-1/4 animate-circle flex justify-center">
            <h1 className="text-green-500 font-bold flex justify-center items-center text-center text-6xl">
              Id
            </h1>
          </div>
          <div className="absolute z-20 w-[100px] h-[100px] rounded-full bg-gray-800 bottom-1/4 left-1/4 animate-circle flex justify-center">
            <h1 className="text-green-500 font-bold flex justify-center items-center text-center text-6xl">
              Id
            </h1>
          </div>
          <div className="absolute z-20 w-[100px] h-[100px] rounded-full bg-gray-800 bottom-1/4 right-1/4 animate-circle flex justify-center">
            <h1 className="text-green-500 font-bold flex justify-center items-center text-center text-6xl">
              Id
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
