import React, { useState } from 'react';
import './HowItWorks.scss';
import workapi from '../../API/WorkApi';

function HowItWorks() {
  const [workData, setWorkData] = useState(workapi);

  return (
    <div className='lg:max-w-[1100px] w-auto mx-auto bg-white rounded-md py-8 px-7 shadow-lg mb-10 WorksBoxs relative -top-20'>
      <h1 className='sm:text-3xl text-2xl text-center font-medium'>
        How does it Work
      </h1>
      {/* Heading End */}
      <div className='grid md:grid-flow-col grid-flow-row gap-4 lg:mt-4 mt-10'>
        {workData.map((items) => {
          const { id, title, logo, info } = items;
          return (
            <div
              key={id}
              className='h-[200px] w-auto flex flex-col items-center justify-center p-1'
            >
              <i
                className={` ${logo} text-[#6f5de7] bg-violet-100 rounded-full p-3 shadow-sm`}
              ></i>
              {/* icons End */}
              <h2 className='text-md mb-4 mt-3 font-medium'>{title}</h2>
              {/* title End */}
              <p className='text-gray-500 leading-6 text-center text-sm'>
                {info}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HowItWorks;
