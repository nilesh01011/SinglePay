import React from 'react'
import AboutUs from '../components/AboutUs/AboutUs'
import Banner from '../components/Banner/Banner'
import ContactUs from '../components/ContactUs/ContactUs'
import Footer from '../components/Footer/Footer'
import HowItWorks from '../components/HowItWorks/HowItWorks'
import Navbar from '../components/Navbar/Navbar'
import NewsletterSection from '../components/NewsletterSection'
import ServicePage from '../components/ServicePage/ServicePage'

function Home() {
    const dark = {
        dark: 'dark',
    }
    return (
        <div className='max-w-[1640px] mx-auto bg-[#0f1621]'>
            <Navbar theme={dark} />
            <Banner />
            <main className='lg:px-10 sm:px-6 px-2 md:mt-0 mt-[4.5rem] bg-[#0f1621] text-[#F3F1FE]'>
                <div className='-top-20 relative'>
                    <HowItWorks theme={dark} />
                </div>
                <AboutUs />
                <ServicePage />
                <NewsletterSection />
                <ContactUs />
            </main>
            <Footer />
        </div>
    )
}

export default Home