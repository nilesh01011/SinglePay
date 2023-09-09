// import AboutUs from './components/AboutUs/AboutUs';
// import Banner from './components/Banner/Banner';
// import ContactUs from './components/ContactUs/ContactUs';
// import Footer from './components/Footer/Footer';
// import HowItWorks from './components/HowItWorks/HowItWorks';
// import Navbar from './components/Navbar/Navbar';
// import ServicePage from './components/ServicePage/ServicePage';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Blogs from "./pages/Blogs";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
