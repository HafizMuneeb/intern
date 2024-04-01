import React from "react";
import Cards from "./Cards";
import { Slide, Zoom } from "@mui/material";

const Card = () => {
  return (
    <section className="bg-[#2d2e32] p-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full relative">
          {/* Cards */}
          <Zoom in={true} timeout={1000}>
            <div className="flex flex-col md:flex-col gap-4 mt-6">
              <Cards
                logoSrc="image1.png"
                title="Product Design"
                description="The Technological revolution is changing aspect"
              />
              <Cards
                logoSrc="image1.png"
                title="Logo Design"
                description="The Technological revolution is changing aspect"
              />
            </div>
          </Zoom>
          <Zoom in={true} timeout={1200}>
            <div className="mt-4 md:mt-0 flex flex-col md:flex-col gap-4">
              <Cards
                logoSrc="image1.png"
                title="UI Design"
                description="The Technological revolution is changing aspect"
              />
              <Cards
                logoSrc="image1.png"
                title="Icon Design"
                description="The Technological revolution is changing aspect"
              />
            </div>
          </Zoom>
          {/* Text */}
          <div className="md:w-1/2 mt-4 md:mt-0">
            <Slide direction="left" in={true} timeout={1400}>
              <div className="hero-text text-left">
                <h1 className="text-4xl md:text-8xl font-bold text-white">
                  Hello <br />
                  I'm Jessy <br />
                  Walter
                </h1>
                <p className="text-base md:text-2xl mt-4 md:mt-8 text-white mb-4 md:w-[600px]">
                  Since beginning my journey as a freelance designer nearby 7
                  years ago, I've done remote work for agencies, consulted for
                  startups, and collaborated with talented people to create
                  digital products.
                </p>
                <button className="bg-[#ffaf29] hover:bg-[#ffaf29] text-black py-4 px-14 rounded-[14px] md:mr-2 shadow-md shadow-yellow-500">
                  Contact Us
                </button>
              </div>
            </Slide>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
