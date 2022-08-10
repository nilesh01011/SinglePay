import React from 'react';
import './Footer.scss';
import { FcHome, FcServices, FcAbout, FcBusinessContact } from 'react-icons/fc';

function Footer() {
  return (
    <div className='flex flex-col'>
      <div className=' shadow-xl footer md:py-20 py-16 lg:px-10 sm:px-6 px-2 flex md:flex-row flex-col align-baseline text-white justify-between md:gap-0 gap-7'>
        <div className=' md:order-1 order-2'>
          <h2 className='text-xl font-medium mb-6'>About Us</h2>

          <p className='text-sm text-gray-400 w-[240px]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, modi
            molestias quibusdam iusto corporis similique.
          </p>
          <br />
          <p className='text-sm text-gray-400 w-[240px]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, modi
            molestias quibusdam iusto corporis similique.
          </p>
        </div>
        <div className='md:order-2 order-1'>
          <h2 className='text-xl font-medium mb-6'>Links</h2>
          <ul className='text-gray-400'>
            <li className='mb-3'>
              <a href='/#' className='flex align-center gap-2'>
                <FcHome size={20} /> Home
              </a>
            </li>
            <li className='mb-3'>
              <a href='#services' className='flex align-center gap-2'>
                <FcServices size={20} />
                Service
              </a>
            </li>
            <li className='mb-3'>
              <a href='#aboutus' className='flex align-center gap-2'>
                <FcAbout size={20} />
                About
              </a>
            </li>
            <li className='mb-3'>
              <a href='#contactus' className='flex align-center gap-2'>
                <FcBusinessContact size={20} />
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div className='order-3'>
          <h2 className='text-xl font-medium mb-6'>Company</h2>

          <ul className='text-gray-400'>
            <li className='mb-3'>Privacy Policy</li>
            <li className='mb-3'>Terms & Condition</li>
            <li className='mb-3'>Lates Blogs</li>
            <li className='mb-3'>App Services</li>
          </ul>
        </div>
        <div className='order-4'>
          <h2 className='text-xl font-medium mb-6'>Follow Us</h2>

          <ul className='flex items-baseline gap-3 flex-col'>
            <li className='flex items-baseline gap-2 text-gray-400'>
              <i className='icons gap-2 fab fa-facebook-f fontawesome-style text-[#6f5de7] p-1 flex items-center justify-center bg-white'></i>{' '}
              Facebook
            </li>
            <li className='flex items-baseline gap-2 text-gray-400'>
              <i className='icons fab fa-instagram fontawesome-style text-[#6f5de7] p-1 flex items-center justify-center bg-white'></i>{' '}
              Instagram
            </li>
            <li className='flex items-baseline gap-2 text-gray-400'>
              <i className='icons fab fa-twitter fontawesome-style text-[#6f5de7] p-1 flex items-center justify-center bg-white'></i>{' '}
              Twitter
            </li>
          </ul>
        </div>
      </div>
      {/* top footer End */}

      {/* main footers */}
      <footer className='p-4'>
        <p className='text-white text-sm text-center font-thin'>
          {' '}
          Copyright @ 2022{' '}
          <span className='font-medium'>
            Single<span className='text-[#6f5de7]'>Pay</span>
          </span>
          . All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default Footer;
