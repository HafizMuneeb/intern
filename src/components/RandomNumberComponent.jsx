import React from "react";

const RandomNumberComponent = () => {
  return (
    <div className="bg-[#2d2e32] p-4 relative">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center mt-12">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full relative">
          {/* Cards */}
          <div className="flex flex-col md:flex-row gap-5">
            {/* Card 1 */}
            <div className="p-4 rounded-l-xl w-full md:w-[350px] h-[300px] flex flex-col items-center justify-center bg-gray-700 relative overflow-hidden">
              <h3 className="text-8xl font-semibold mb-2 text-green-600">98</h3>
              <p className="text-white text-2xl font-bold">Happy Clients</p>
              <img
                src="green.png"
                alt=""
                className="w-[100px] absolute left-[-20px] top-[240px] object-fit"
                style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 50%)" }}
              />
            </div>
            {/* Card 2 */}
            <div className="p-4 rounded-xl w-full md:w-[350px] h-[300px] flex flex-col items-center justify-center bg-gray-700">
              <h3 className="text-8xl font-semibold mb-2 text-green-600">87</h3>
              <p className="text-white text-2xl font-bold">Projects Done</p>
            </div>
            {/* Card 3 */}
            <div className="p-4 rounded-xl w-full md:w-[350px] h-[300px] flex flex-col items-center justify-center bg-gray-700">
              <h3 className="text-8xl font-semibold mb-2 text-green-600">16</h3>
              <p className="text-white text-2xl font-bold">Award Winnings</p>
            </div>
            {/* Card 4 */}
            <div className="p-4 rounded-r-xl w-full md:w-[310px] h-[300px] flex flex-col items-center justify-center bg-gray-700 z-10 relative overflow-hidden">
              <h3 className="text-8xl font-semibold mb-2 text-green-600">7</h3>
              <p className="text-white text-2xl font-bold">Years Experience</p>
              <img
                src="vert.png"
                alt=""
                className="w-[100px] absolute right-[-20px] top-[-20px] object-fit"
                style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
              />
            </div>
          </div>
          {/* Circle */}
        </div>
      </div>
    </div>
  );
};

export default RandomNumberComponent;
