import React from 'react';
import { useNavigate  } from "react-router-dom";

function ContactUs() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/blogs')
  }
  return (
    <div
      id='contact'
      className='flex lg:flex-row flex-col justify-between mt-20 lg:w-10/12 md:w-11/12 w-full mx-auto gap-10 pb-16 snap-start'
    >
      {/* left side */}
      <div className='w-auto flex flex-col lg:items-start items-center lg:justify-left justify-center md:text-left text-center'>
        <h1 className='sm:text-3xl text-2xl md:mb-5 mb-6 font-medium lg:text-left text-center'>
          Connect With Our <br /> Sales Team.
        </h1>
        <p className='text-gray-500 leading-6 text-sm mb-6 lg:w-11/12'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          eaque alias similique.
        </p>

        <figure>
          <img
            src='./img/hero1.jpg'
            alt='contatUsImg'
            className='h-[350px] rounded shadow-xl'
          />
        </figure>
      </div>
      {/* right side */}
      <div className='lg:w-3/4'>
        <form className='w-full' onSubmit={handleSubmit}>
          <div className='flex sm:flex-row flex-col items-baseline w-full sm:gap-5 mb-4'>
            {/* first name */}
            <label className='md:w-1/2 w-full sm:mb-0 mb-4'>
              {/* text-slate-700 */}
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-[#F3F1FE]">
                First Name
              </span>
              <input
                type='text'
                name='name'
                className='w-full bg-[#0f1621] peer mt-1 px-3 py-2 border shadow-sm border-slate-400 placeholder-slate-400 focus:outline-none focus:border-violet-700 focus:violet-700 rounded-md sm:text-sm focus:ring-1'
                placeholder='Your First Name'
                required
              />
            </label>
            {/* last name */}
            <label className='md:w-1/2 w-full'>
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-[#F3F1FE]">
                Last Name
              </span>
              <input
                type='text'
                name='surname'
                className='w-full bg-[#0f1621] peer mt-1 px-3 py-2 peer-invalid:visible border shadow-sm border-slate-400 placeholder-slate-400 focus:outline-none focus:border-violet-700 focus:violet-700 rounded-md sm:text-sm focus:ring-1'
                placeholder='You Last Name'
                required
              />
            </label>
          </div>
          {/* user name End */}
          <div className='flex sm:flex-row flex-col items-baseline w-full sm:gap-5 mb-4'>
            {/* first name */}
            <label className='md:w-1/2 w-full sm:mb-0 mb-4'>
              <span className='block text-sm font-medium text-[#F3F1FE]'>
                Phone Number
              </span>
              <input
                maxLength='10'
                type='tel'
                name='number'
                className='w-full bg-[#0f1621] peer mt-1 px-3 py-2 peer-invalid:visible border shadow-sm border-slate-400 placeholder-slate-400 focus:outline-none focus:border-violet-700 focus:violet-700 rounded-md sm:text-sm focus:ring-1'
                placeholder='Your Phone Number'
              />
            </label>
            {/* last name */}
            <label className='md:w-1/2 w-full'>
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-[#F3F1FE]">
                Email
              </span>
              <input
                type='email'
                name='email'
                className='w-full bg-[#0f1621] peer mt-1 px-3 py-2 peer-invalid:visible border shadow-sm border-slate-400 placeholder-slate-400 focus:outline-none focus:border-violet-700 focus:violet-700 rounded-md sm:text-sm focus:ring-1'
                placeholder='Your Email Address'
                required
              />
            </label>
          </div>
          {/* user email and number End */}

          <div className='mb-4'>
            <label className='w-full'>
              <span className=' block text-sm font-medium text-[#F3F1FE]'>
                Your Address
              </span>
              <textarea
                name='number'
                className='w-full bg-[#0f1621] resize-none peer mt-1 px-3 py-2 peer-invalid:visible border shadow-sm border-slate-400 placeholder-slate-400 focus:outline-none focus:border-violet-700 focus:violet-700 rounded-md sm:text-sm focus:ring-1'
                placeholder='Your Home Address'
                cols='10'
                rows='2'
              ></textarea>
            </label>
          </div>

          {/* messages textarea End */}
          <div>
            <label className='w-full'>
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-[#F3F1FE]">
                Your Messages
              </span>
              <textarea
                name='number'
                className='w-full bg-[#0f1621] resize-none peer mt-1 px-3 py-2 peer-invalid:visible border shadow-sm border-slate-400 placeholder-slate-400 focus:outline-none focus:border-violet-700 focus:violet-700 rounded-md sm:text-sm focus:ring-1'
                placeholder='Your Messages'
                cols='10'
                rows='2'
                required
              ></textarea>
            </label>
          </div>

          {/* messages textarea End */}

          <div className='flex w-full gap-3 mt-4'>
            <input
              type='checkbox'
              name='checkbox'
              id='checkstate'
              className='cursor-pointer'
              required
            />

            <label
              htmlFor='checkstate'
              className='text-gray-500 leading-5 text-left text-sm'
            >
              I agree that the thapatechnicalpay may contact me at the email
              address or phone number above
            </label>
          </div>

          {/* chechstate End */}

          <div className='buttons w-full mt-7'>
            <button
              type='submit'
              className='w-full h-max bg-[#6f5de7] shadow-lg signUpBtn py-[0.5rem] text-white rounded-full'
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
