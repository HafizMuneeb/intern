import React from 'react'
import { FaDribbble } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Offer = () => {
  return (
    <div className='bg-[#2d2e32] p-4'>
      <div className="container mx-auto flex justify-center items-center">
        <div className='w-[800px] h-[300px] bg-gray-800 rounded-2xl'>
          <div className='flex flex-col items-center justify-center mt-5 gap-2 sm:gap-5'>
            <div 
              className='w-[80px] h-[2px] bg-green-500 flex items-center justify-center'
            />
            <h1 className='text-white font-medium text-xl sm:text-4xl'>Let's Work Together </h1>
            <p className='flex justify-center items-center text-center w-1/2 text-white'>
            The technological revolution is changing aspect of our lives, and the fabric of society itself. it's also changing the way we learn and what we learn
            </p>
            <button href="/contact-us" className="bg-[#ffaf29] hover:bg-[#ffaf29] text-black  py-4 px-10 sm:px-14 rounded-[14px] mr-2">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Offer