import React from 'react';
import { useState } from 'react';
import serviceApi from '../../API/serviceApi';
import './ServicePage.scss';

function ServicePage() {
  const [service, setService] = useState(serviceApi);
  console.log(setService);
  return (
    <div id='services' className='max-w-[1640px] mx-auto mb-10 snap-start'>
      <h1 className='sm:text-3xl text-2xl mb-7 text-center font-medium'>
        How to send money
      </h1>

      {/* heading End */}

      {/* services Cards */}

      <div className='flex md:gap-6 gap-4 flex-wrap items-center justify-center'>
        {service.map((items) => {
          const { id, title, logo, info } = items;
          return (
            <div
              key={id}
              className='servicesCards max-h-max md:w-[350px] sm:w-[300px] w-full transition-all flex flex-col items-start justify-start py-4 px-10 shadow-md border border-[#6C62E2] rounded-md'
            >
              <i
                className={`${logo} text-[#6f5de7] bg-violet-100 rounded-full p-3 shadow-sm`}
              ></i>
              <h2 className='text-md mb-4 mt-3 font-medium transition-all'>
                {title}
              </h2>
              <p className='text-gray-500 leading-6 text-left sm:text-sm text-xs'>
                {info}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ServicePage;
