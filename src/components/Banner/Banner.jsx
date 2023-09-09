import React from 'react';
import './Banner.scss';
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom';

function Banner() {
  return (
    <div id='home' className='max-w-[1640px] mx-auto pt-14 pb-4 lg:px-10 sm:px-6 px-2 snap-start bg-[#0f1621] text-white xl:mb-10'>
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
          <div>
            <Link to="blogs" className='signUpBtn py-[0.6rem] px-[1rem] md:px-[1.6rem] bg-[#6C62E2] rounded-md md:text-[1rem] text-[0.8rem] text-white cursor-pointer shadow-lg flex items-center w-max'>Go to blog <BsArrowRight className='ml-[10px]' /> </Link>
          </div>
        </div>
        {/* right sides */}
        <div className='md:flex hidden justify-end xl:justify-center items-center xl:w-1/2 lg:w-[420px] w-5/12 relative'>
          <img
            className='max-h-[360px] lg:max-h-[400px] rounded-lg shadow-2xl xl:ml-20'
            src='./img/hero.png'
            alt='banner-images'
            loading='lazy'
            decoding='async'
          />
          {/* <img
            className='lg:h-38 md:h-36 rounded-lg shadow-2xl absolute right-4 -top-20'
            src='./img/hero4.jpg'
            alt='banner-images2'
            loading='lazy'
            decoding='async'
          /> */}
        </div>
      </div>
    </div>
  );
}

export default Banner;
