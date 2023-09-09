import React from 'react'
import { Link } from 'react-scroll';
import { ImBlogger } from 'react-icons/im'
import { HiHome } from "react-icons/hi"
import { MdOutlineMiscellaneousServices, MdContactPage } from "react-icons/md"
import { BsClipboardData } from "react-icons/bs"

function Sidebar({ theme, clicks }) {
    // sidebar navLinks
    const links = [
        {
            id: "home",
            icons: <HiHome size={25} />,
            name: "Home",
            classnames: "cursor-pointer py-3 px-4 flex align-center gap-2 hover:bg-violet-100 hover:text-[#6f5de7]"
        },
        {
            id: "services",
            icons: <MdOutlineMiscellaneousServices size={25} />,
            name: "Services",
            classnames: "cursor-pointer py-3 px-4 flex align-center gap-2 hover:bg-violet-100 hover:text-[#6f5de7]"
        },
        {
            id: "aboutus",
            icons: <BsClipboardData size={25} />,
            name: "About",
            classnames: "cursor-pointer py-3 px-4 flex align-center gap-2 hover:bg-violet-100 hover:text-[#6f5de7]"
        }
    ];
    return (
        <div className='sidebarContents py-6 flex flex-col justify-between'>
            <ul id='sidebarnavbars' className='gap-6 text-gray-500'>
                {links.map((navLinks) => (
                    <li key={navLinks.id}>
                        <Link
                            to={navLinks.id} smooth activeClass="active" spy
                            className={navLinks.classnames}
                        >
                            {navLinks.icons}
                            {navLinks.name}
                        </Link>
                    </li>
                ))}
                {theme.dark === 'dark' ? (
                    <li>
                        <Link
                            to="contact" smooth activeClass="active" spy
                            className='cursor-pointer py-3 px-4 hover:bg-violet-100 hover:text-[#6f5de7] flex align-center gap-2'
                        >
                            <MdContactPage size={25} />
                            Contact
                        </Link>
                    </li>
                ) : ""}
                {theme.dark === 'dark' ? (
                    <li>
                        <Link onClick={clicks} to="blogs" smooth activeClass="active" spy className='cursor-pointer py-3 px-4 hover:bg-violet-100 hover:text-[#6f5de7] flex align-center gap-2'>
                            <ImBlogger size={25} />
                            Blogs
                        </Link>
                    </li>
                ) : ""}
            </ul>
            {/* Sidebar Menu List End */}

            {/* Buttons List */}

            <div className='flex items-center gap-4 px-4 justify-center'>
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
                    className={`loginBtns py-1 p-6 text-[#6f5de7] rounded-2xl shadow-md ${theme.dark === 'dark' ? 'hover:text-[#F3F1FE]' : ''} cursor-pointer`}
                >
                    Login In
                </Link>
            </div>
        </div>
    )
}

export default Sidebar