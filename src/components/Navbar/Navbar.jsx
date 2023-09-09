import React, { useState } from 'react';
import './Navbar.scss';
import { Link } from 'react-scroll';
import { HiMenuAlt2 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';

function Navbar({ theme }) {
  const [nav, setNav] = useState(false);
  const [navBg, setNavBg] = useState(false);
  const navigate = useNavigate();

  const overflowHidden = () => {
    if (nav === true) {
      document.querySelector('body').style.overflow = 'hidden';
    } else {
      document.querySelector('body').style.overflow = 'auto';
    }
  };

  overflowHidden();

  const changeNavbarBGColor = () => {
    if (window.scrollY >= 80) {
      setNavBg(true);
    } else {
      setNavBg(false);
    }
  };

  window.addEventListener('scroll', changeNavbarBGColor);

  const handleNavigation = () => {
    navigate('/')
  }

  const handleBlogs = () => {
    navigate('/blogs')
  }

  // navbars links
  const nav_classnames = "cursor-pointer rounded-lg px-3 py-2 hover:bg-violet-100 hover:text-slate-900";

  const links = [
    {
      id: "home",
      name: "Home",
      classnames: nav_classnames
    },
    {
      id: "services",
      name: "Services",
      classnames: nav_classnames
    },
    {
      id: "aboutus",
      name: "About",
      classnames: nav_classnames
    }
  ];

  return (
    // bg-[#f1f5fd]
    <div
      className={`w-full navbarBG fixed top-0 z-50 ${theme.dark === 'dark' ? 'bg-[#0f1621]' : 'bg-white'} 
       border-b border-solid border-[#6C62E2] max-w-[1640px] mx-auto flex justify-between items-center py-4 lg:px-10 sm:px-6 px-2 ${navBg === true ? 'shadow-xl rounded-b-3xl' : ''
        }`}
    >
      {/* Navbar Left sides */}
      <div className='flex items-center'>
        <div className={`cursor-pointer ${theme.dark === 'dark' ? 'text-[#F3F1FE]' : 'text-black'}`}>
          <HiMenuAlt2 onClick={() => setNav(!nav)} size={35} />
        </div>
        <h1 className={`text-2xl font-bold sm:text-3xl lg:text-4xl px-2 ${theme.dark === 'dark' ? 'text-[#F3F1FE]' : 'text-black'}`}>
          <Link to='/' onClick={handleNavigation} className="cursor-pointer">
            Single<span className='text-[#6f5de7]'>Pay</span>
          </Link>
        </h1>
      </div>
      {/* Navbar Right sides */}
      <div className='flex items-center gap-4'>
        {/* Menu Lists */}
        <ul
          id='navbars'
          className='lg:flex hidden gap-2 items-center text-gray-500'
        >
          {links.map((navLinks) => (
            <li key={navLinks.id}>
              <Link
                to={navLinks.id} smooth activeClass="active" spy
                className={navLinks.classnames}
              >
                {navLinks.name}
              </Link>
            </li>
          ))}
          {/* sidebar navLinks end */}
          {theme.dark === 'dark' ? (
            <li>
              <Link onClick={handleBlogs} to="blogs" smooth activeClass="active" spy className='cursor-pointer rounded-lg px-3 py-2 hover:bg-violet-100 hover:text-slate-900'>
                Blogs
              </Link>
            </li>
          ) : ""}
          {theme.dark === 'dark' ? (
            <li>
              <Link to="contact" smooth activeClass="active" spy className='cursor-pointer rounded-lg px-3 py-2 hover:bg-violet-100 hover:text-slate-900'>
                Contact
              </Link>
            </li>
          ) : ""}
        </ul>
        {/* Buttons Groups */}
        <div className='sm:flex hidden items-center gap-4'>
          {/* signUp Btn */}
          <Link
            as="button" to="contact" smooth
            className='bg-[#6f5de7] shadow-md signUpBtn py-1 p-6 text-white rounded-2xl cursor-pointer'
          >
            Sign Up
          </Link>
          {/* signIn Btn */}
          <Link
            as="button" to="contact" smooth
            className='loginBtns py-1 p-6 text-[#6f5de7] rounded-2xl shadow-md hover:bg-violet-100 cursor-pointer'
          >
            Login In
          </Link>
        </div>
      </div>

      {/* ------- Mobile Menu ------- */}
      {/* Overlay */}

      {nav ? (
        <div
          onClick={() => setNav(!nav)}
          className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0 cursor-pointer'
        ></div>
      ) : (
        ''
      )}

      {/* Sidebars sections */}

      <div
        className={
          nav
            ? `fixed top-0 left-0 w-[300px] h-screen ${theme.dark === 'dark' ? 'bg-[#0f1621] text-[#F3F1FE]' : 'bg-white text-black'}  z-10 duration-500 shadow-xl rounded-r-2xl`
            : `fixed top-0 left-[-100%] w-[300px] h-screen ${theme.dark === 'dark' ? 'bg-[#0f1621] text-[#F3F1FE]' : 'bg-white text-black'} z-10 duration-500`
        }
      >
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          size={32}
          className='absolute right-4 top-4 cursor-pointer'
        />

        <h2 className='text-2xl font-semibold p-4'>
          <a href='/'>
            Single<span className='text-[#6f5de7]'>Pay</span>
          </a>
        </h2>

        {/* navigations Menu List */}

        <Sidebar theme={theme} clicks={handleBlogs} />
      </div>
    </div>
  );
}

export default Navbar;
