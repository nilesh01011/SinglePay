import React from 'react';
import './Banner.scss';
import { AiOutlineSearch } from 'react-icons/ai';

function Banner() {
  return (
    <div id='#' className='max-w-[1640px] mx-auto lg:px-10 sm:px-6 px-2'>
      <div className='flex md:justify-between items-center md:h-[600px] h-[450px]'>
        {/* left sides */}
        <div className='xl:w-1/2 lg:w-[550px] sm:w-7/12'>
          <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold'>
            Online Payment Made <br /> Easy For You.
          </h1>
          <p className='text-sm md:py-10 py-5 text-gray-500 leading-6 md:w-11/12 sm:w-6/6 w-11/12'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, quia
            quis? Ipsa officia ad deserunt voluptate quam, nisi odio officiis
            tempora recusandae voluptate quam, nisi odio officiis tempora
            recusandae.
          </p>
          {/* Search Input */}
          <div className='bg-white rounded-full flex grow relative items-center shadow-md px-2 w-[300px] sm:w-[400px]'>
            <AiOutlineSearch className='grow' size={30} />
            <input
              className='bg-transparent p-2 w-full grow focus:outline-none'
              type='text'
              placeholder='Enter Your Email'
            />
            <button
              type='button'
              className='p-2 getButtons absolute top-1 right-1 text-white text-sm bg-[#6f5de7] rounded-full shadow-md outline outline-4 outline-white'
            >
              Get It Now!
            </button>
          </div>
        </div>
        {/* right sides */}
        <div className='md:flex hidden xl:justify-center items-center xl:w-1/2 lg:w-[420px] w-5/12 relative'>
          <img
            className='lg:h-96 md:h-80 rounded-lg shadow-2xl xl:ml-20'
            src='./img/hero1.jpg'
            alt='banner-images'
            loading='lazy'
            decoding='async'
          />
          <img
            className='lg:h-40 md:h-36 rounded-lg shadow-2xl absolute right-4 -top-20'
            src='./img/hero4.jpg'
            alt='banner-images2'
            loading='lazy'
            decoding='async'
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;
