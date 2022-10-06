import React from 'react';

function ContactUs() {
  return (
    <div
      id='contact'
      className='flex lg:flex-row flex-col justify-between mt-20 lg:w-10/12 md:w-11/12 w-full mx-auto gap-10 pb-16 snap-start'
    >
      {/* left side */}
      <div className='w-auto flex flex-col md:items-start items-center md:text-left text-center'>
        <h1 className='sm:text-3xl text-2xl md:mb-5 mb-6 font-medium'>
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
        <form className='w-full'>
          <div className='flex md:flex-row flex-col items-baseline w-full md:gap-5'>
            {/* first name */}
            <label className='md:w-1/2 w-full'>
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                First Name
              </span>
              <input
                type='text'
                name='name'
                className='w-full peer mt-1 px-3 py-2 peer-invalid:visible bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-violet-700 focus:violet-700 rounded-md sm:text-sm focus:ring-1'
                placeholder='Your First Name'
              />
              <p className='mt-2 invisible peer-invalid:visible text-red-600 text-sm'>
                Please enter a valid name.
              </p>
            </label>
            {/* last name */}
            <label className='md:w-1/2 w-full'>
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                Last Name
              </span>
              <input
                type='text'
                name='surname'
                className='w-full peer mt-1 px-3 py-2 peer-invalid:visible bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-violet-700 focus:violet-700 rounded-md sm:text-sm focus:ring-1'
                placeholder='You Last Name'
              />
              <p className='mt-2 invisible peer-invalid:visible text-red-600 text-sm'>
                Please enter a valid surname.
              </p>
            </label>
          </div>
          {/* user name End */}
          <div className='flex md:flex-row flex-col items-baseline w-full md:gap-5'>
            {/* first name */}
            <label className='md:w-1/2 w-full'>
              <span className='block text-sm font-medium text-slate-700'>
                Phone Number
              </span>
              <input
                maxLength='10'
                type='tel'
                name='number'
                className='w-full peer mt-1 px-3 py-2 peer-invalid:visible bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-violet-700 focus:violet-700 rounded-md sm:text-sm focus:ring-1'
                placeholder='Your Phone Number'
              />
              <p className='mt-2 invisible peer-invalid:visible text-red-600 text-sm'>
                Please enter a valid number.
              </p>
            </label>
            {/* last name */}
            <label className='md:w-1/2 w-full'>
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                Email
              </span>
              <input
                type='email'
                name='email'
                className='w-full peer mt-1 px-3 py-2 peer-invalid:visible bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-violet-700 focus:violet-700 rounded-md sm:text-sm focus:ring-1'
                placeholder='Your Email Address'
              />
              <p className='mt-2 invisible peer-invalid:visible text-red-600 text-sm'>
                Please enter a valid email address.
              </p>
            </label>
          </div>
          {/* user email and number End */}

          <label className='w-full'>
            <span className=' block text-sm font-medium text-slate-700'>
              Your Address
            </span>
            <textarea
              name='number'
              className='w-full resize-none peer mt-1 px-3 py-2 peer-invalid:visible bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-violet-700 focus:violet-700 rounded-md sm:text-sm focus:ring-1'
              placeholder='Your Home Address'
              cols='10'
              rows='2'
            ></textarea>
            <p className='mt-2 invisible peer-invalid:visible text-red-600 text-sm'>
              Please enter a valid address.
            </p>
          </label>

          {/* messages textarea End */}

          <label className='w-full'>
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
              Your Messages
            </span>
            <textarea
              name='number'
              className='w-full resize-none peer mt-1 px-3 py-2 peer-invalid:visible bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-violet-700 focus:violet-700 rounded-md sm:text-sm focus:ring-1'
              placeholder='Your Messages'
              cols='10'
              rows='2'
            ></textarea>
            <p className='mt-2 invisible peer-invalid:visible text-red-600 text-sm'>
              Please enter a valid messages.
            </p>
          </label>

          {/* messages textarea End */}

          <div className='flex w-full gap-3'>
            <input
              type='checkbox'
              name='checkbox'
              id='checkstate'
              className='cursor-pointer'
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

          <div className='buttons w-full mt-5'>
            <button
              type='submit'
              className='w-full h-[40px] bg-[#6f5de7] shadow-md signUpBtn py-1 p-6 text-white rounded-full'
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
