import React, { useState } from 'react';
import howToUseApp from '../../API/howToUseApp';
import './AboutUs.scss';

function AboutUs() {
  const [useApp, setUseApp] = useState(howToUseApp);
  console.log(setUseApp)
  return (
    <>
      <div id='aboutus' className='md:flex justify-between mb-10 snap-start'>
        {/* left Sides */}
        <div className='flex flex-col items-center justify-center md:w-1/2 md:my-0 my-10'>
          <img
            src='./img/hero3.jpg'
            loading='lazy'
            decoding='async'
            className='h-[350px] rounded-md shadow-2xl'
            alt='aboutus-images'
          />
        </div>
        {/* right Sides */}
        <div className='flex md:w-1/2 flex-col'>
          <h3 className='text-xs text-gray-500 mb-4 md:text-left text-center'>
            -- AVAILABLE @ GOOGLE AND IOS APP STORE ONLY
          </h3>
          <h1 className='sm:text-3xl text-2xl md:mb-5 mb-6 md:text-left text-center font-medium'>
            How to use the App?
          </h1>

          <div>
            {useApp.map((items) => {
              const { id, title, info } = items;

              return (
                <div key={id} className='flex gap-4 items-baseline mb-6'>
                  <span className='countesNumber text-xs'>{id}</span>
                  <div>
                    <h2 className='font-medium'>{title}</h2>
                    <p className='text-gray-500 text-sm md:w-9/12 sm:w-6/6 w-11/12 mt-1'>
                      {info}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* buttons */}
            <div className='mt-4'>
              <button className='outline outline-1 outline-[#6f5de7] py-1 p-6 text-[#6f5de7] rounded-2xl shadow-md hover:bg-violet-100'>
                Lern More
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* // Seconds Sections */}

      <div className='md:flex justify-between mb-10 max-w-[1000px] mx-auto'>
        {/* left Sides */}
        <div className='flex md:w-1/2 flex-col'>
          <h3 className='text-xs text-gray-500 mb-4 md:text-left text-center'>
            -- SUPPORT IN ANY LANGUAGES
          </h3>
          <h1 className='sm:text-3xl text-2xl md:mb-5 mb-6 md:text-left text-center font-medium'>
            World class support is <br /> available 24/7
          </h1>

          <div>
            {useApp.map((items) => {
              const { id, title, info } = items;

              return (
                <div key={id} className='flex gap-4 items-baseline mb-6'>
                  <span className='countesNumber text-xs'>{id}</span>
                  <div>
                    <h2 className='font-medium'>{title}</h2>
                    <p className='text-gray-500 text-sm md:w-9/12 sm:w-6/6 w-11/12 mt-1'>
                      {info}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* buttons */}
            <div className='mt-4'>
              <button className='outline outline-1 outline-[#6f5de7] py-1 p-6 text-[#6f5de7] rounded-2xl shadow-md hover:bg-violet-100'>
                Lern More
              </button>
            </div>
          </div>
        </div>
        {/* right Sides */}
        <div className='flex flex-col items-center justify-center md:w-1/2 md:my-0 my-10'>
          <img
            src='./img/callcenter.jpg'
            loading='lazy'
            decoding='async'
            className='h-[350px] rounded-md shadow-2xl'
            alt='aboutus-images'
          />
        </div>
      </div>
    </>
  );
}

export default AboutUs;
