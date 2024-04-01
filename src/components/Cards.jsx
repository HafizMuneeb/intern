import React from 'react';
import { FaCoffee, FaCode, FaBook } from 'react-icons/fa';

const Cards = ({ title, description }) => {
  let iconComponent;
  switch (title) {
    case 'Title 1':
      iconComponent = <FaCoffee size={50} />;
      break;
    case 'Title 2':
      iconComponent = <FaCode size={50} />;
      break;
    case 'Title 3':
      iconComponent = <FaBook size={50} />;
      break;
    // Add more cases for other titles and corresponding icons
    default:
      iconComponent = <FaCoffee size={50} />; // Default icon
  }

  return (
    <div className="m-4 flex flex-col w-full md:w-[300px] h-[350px] rounded-xl items-center justify-center gap-5 bg-[#0c0c0ea1] hover:shadow-2xl hover:shadow-green-500 transition duration-300 ease-in-out hover:bg-green-400 hover:text-white">
      <div className="flex flex-col items-center justify-center text-white text-center">
        <div className='text-[#64f4ab] rounded-full bg-[#17171a] px-6 py-6  border-2 border-[#327a56] mb-5 hover:text-white'>
        {iconComponent}
        </div>
        <h3 className="text-2xl md:text-2xl font-bold mb-5">{title}</h3>
        <p className="text-base md:text-lg">{description}</p>
      </div>
    </div>
  );
};

export default Cards;
