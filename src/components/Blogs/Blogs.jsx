import React from 'react'
import { Link } from 'react-router-dom'
import AboutUs from '../AboutUs/AboutUs'
import Footer from '../Footer/Footer'
import HowItWorks from '../HowItWorks/HowItWorks'
import Navbar from '../Navbar/Navbar'
import ServicePage from '../ServicePage/ServicePage'
import { BsArrowLeft } from "react-icons/bs"
import NewsletterSection from '../NewsletterSection'

function Blogs() {
  const dark = {
    dark: 'light',
  }
  return (
    <div className='max-w-[1640px] mx-auto'>
      <Navbar theme={dark} />
      <div className='lg:px-10 sm:px-6 px-2 h-full'>
        <div id="home" className='pt-[85px]'>
          <Link
            to="/"
            className='bg-[#6f5de7] shadow-md signUpBtn py-2 px-6 text-white rounded-full cursor-pointer w-max flex gap-[10px] items-center mb-5'
          >
            <BsArrowLeft /> Go back
          </Link>
          <div className='hidden sm:flex lg:flex-row flex-col items-center justify-center gap-[4px]'>
            <div className='sm:w-2/4 w-full h-[360px]'>
              <img src='/img/hero2.jpg' className='w-full h-full object-cover' alt='hero2-images' />
            </div>
            <div className='h-[360px] flex flex-col gap-[4px] mt-[10px]'>
              <div className='flex h-2/4 gap-[4px]'>
                <img src='/img/hero4.jpg' className='w-fit h-full object-contain' alt='hero4-images' />
                <img src='/img/hero3.jpg' className='w-fit h-full object-cover' alt='hero3-images' />
              </div>
              <div className='flex h-2/4 gap-[4px]'>
                <img src='/img/hero3.jpg' className='w-fit h-full object-cover' alt='hero4-images' />
                <img src='/img/hero4.jpg' className='w-fit h-full object-contain' alt='hero3-images' />
              </div>
            </div>
          </div>
          {/* images */}
          <div className='my-5 flex lg:flex-row flex-col gap-5 border shadow-sm'>
            <img src='https://demo.tagdiv.com/newsmag/wp-content/uploads/2016/05/2-2-238x178.jpg' className='w-full h-[260px] object-cover' alt='hero2-images' />
            <div className='flex flex-col gap-5 p-3 pl-0'>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
              <Link
                to="/"
                className='bg-[#6f5de7] shadow-md signUpBtn py-2 px-6 text-white rounded-full cursor-pointer w-max'
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
        <div className='my-[2.5rem]'>
          <HowItWorks theme={dark} />
        </div>
        <ServicePage />
        <NewsletterSection />
        <AboutUs />
      </div>
      <Footer />
    </div>
  )
}

export default Blogs