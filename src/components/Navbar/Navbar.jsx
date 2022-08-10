import React, { useState } from 'react';
import './Navbar.scss';
import { HiMenuAlt2 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import { FcHome, FcServices, FcAbout, FcBusinessContact } from 'react-icons/fc';

function Navbar() {
  const [nav, setNav] = useState(false);
  const [navBg, setNavBg] = useState(false);

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

  const SetActive = (e) => {
    let active = document.querySelector('#navbars li a.active');

    let setActive = e.target;

    if (e.target) {
      setActive.classList.add('active');
    }

    if (active) {
      active.classList.remove('active');
    }
  };

  const SetActiveSecond = (e) => {
    let active = document.querySelector('#sidebarnavbars li a.active');

    let setActive = e.target;

    if (e.target) {
      setActive.classList.add('active');
    }

    if (active) {
      active.classList.remove('active');
    }
  };

  return (
    <div
      className={`navbarBG sticky top-0 z-50 bg-[#f1f5fd] max-w-[1640px] mx-auto flex justify-between items-center py-4 lg:px-10 sm:px-6 px-2 ${
        navBg === true ? 'shadow-xl rounded-b-3xl' : ''
      }`}
    >
      {/* Navbar Left sides */}
      <div className='flex items-center'>
        <div className='cursor-pointer'>
          <HiMenuAlt2 onClick={() => setNav(!nav)} size={35} />
        </div>
        <h1 className='text-2xl font-bold sm:text-3xl lg:text-4xl px-2'>
          <a href='/'>
            Single<span className='text-[#6f5de7]'>Pay</span>
          </a>
        </h1>
      </div>
      {/* Navbar Right sides */}
      <div className='flex items-center gap-4'>
        {/* Menu Lists */}
        <ul
          id='navbars'
          className='lg:flex hidden gap-2 items-center text-gray-500'
        >
          <li>
            <a
              onClick={SetActive}
              className='active cursor-pointer rounded-lg px-3 py-2 hover:bg-violet-100 hover:text-slate-900'
              href='/#'
            >
              Home
            </a>
          </li>
          <li>
            <a
              onClick={SetActive}
              className='cursor-pointer hover:bg-violet-100 hover:text-slate-900 rounded-lg px-3 py-2'
              href='#services'
            >
              Services
            </a>
          </li>
          <li>
            <a
              onClick={SetActive}
              className='cursor-pointer hover:bg-violet-100 hover:text-slate-900 rounded-lg px-3 py-2'
              href='#aboutus'
            >
              About
            </a>
          </li>
          <li>
            <a
              onClick={SetActive}
              className='cursor-pointer hover:bg-violet-100 hover:text-slate-900 rounded-lg px-3 py-2'
              href='#contactus'
            >
              Contact
            </a>
          </li>
        </ul>
        {/* Buttons Groups */}
        <div className='sm:flex hidden items-center gap-4'>
          {/* signUp Btn */}
          <button
            type='button'
            className='bg-[#6f5de7] shadow-md signUpBtn py-1 p-6 text-white rounded-2xl'
          >
            Sign Up
          </button>
          {/* signIn Btn */}
          <button
            type='button'
            className='loginBtns py-1 p-6 text-[#6f5de7] rounded-2xl shadow-md hover:bg-violet-100'
          >
            Login In
          </button>
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
            ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-500 shadow-xl rounded-r-2xl'
            : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-500'
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

        <div className='sidebarContents py-6 flex flex-col justify-between'>
          <ul id='sidebarnavbars' className='gap-6 text-gray-500'>
            <li>
              <a
                onClick={SetActiveSecond}
                className='active cursor-pointer py-3 px-4 flex align-center gap-2 hover:bg-violet-100 hover:text-[#6f5de7]'
                href='/#'
              >
                <FcHome size={25} /> Home
              </a>
            </li>
            <li>
              <a
                onClick={SetActiveSecond}
                href='#services'
                className='cursor-pointer py-3 px-4 hover:bg-violet-100 hover:text-[#6f5de7] flex align-center gap-2'
              >
                <FcServices size={25} />
                Services
              </a>
            </li>
            <li>
              <a
                onClick={SetActiveSecond}
                href='#aboutus'
                className='cursor-pointer py-3 px-4 hover:bg-violet-100 hover:text-[#6f5de7] flex align-center gap-2'
              >
                <FcAbout size={25} />
                About
              </a>
            </li>
            <li>
              <a
                onClick={SetActiveSecond}
                href='#contactus'
                className='cursor-pointer py-3 px-4 hover:bg-violet-100 hover:text-[#6f5de7] flex align-center gap-2'
              >
                <FcBusinessContact size={25} />
                Contact
              </a>
            </li>
          </ul>
          {/* Sidebar Menu List End */}

          {/* Buttons List */}

          <div className='flex items-center gap-4 px-4 justify-center'>
            {/* signUp Btn */}
            <button
              type='button'
              className='bg-[#6f5de7] shadow-md signUpBtn py-1 p-6 text-white rounded-2xl'
            >
              Sign Up
            </button>
            {/* signIn Btn */}
            <button
              type='button'
              className='loginBtns py-1 p-6 text-[#6f5de7] rounded-2xl shadow-md hover:bg-violet-100'
            >
              Login In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
