import AboutUs from './components/AboutUs/AboutUs';
import Banner from './components/Banner/Banner';
import ContactUs from './components/ContactUs/ContactUs';
import Footer from './components/Footer/Footer';
import HowItWorks from './components/HowItWorks/HowItWorks';
import Navbar from './components/Navbar/Navbar';
import ServicePage from './components/ServicePage/ServicePage';

function App() {
  return (
    <div className='max-w-[1640px] mx-auto'>
      <Navbar />
      <Banner />
      <main className='lg:px-10 sm:px-6 px-2 md:mt-0 mt-28'>
        <HowItWorks />
        <AboutUs />
        <ServicePage />
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
}

export default App;
