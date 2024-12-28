import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const NavB = () => {
    const [position, setPosition] = useState(11)


    const listenScrollEvent = () => {
        window.scrollY > 10 ? setPosition(0) : setPosition(11);
    };


    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };



    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
        return () => {
            window.removeEventListener("scroll", listenScrollEvent);
        };
    }, [position]);
    return (
        <>
            <div className={position < 10 ? "sticky top-0 sm:px-4 z-10 w-full h-16 md:pb-0 pb-4 flex justify-evenly items-center bg-blue-600 text-white transition-all duration-1000" :
                "absolute top-18 z-10 w-full md:h-24 h-16 flex pb-4  md:pb-0 justify-evenly items-center bg-gradient-to-tr from-[#ffffff97] text-white transition-all duration-1000"} >
                <Link to={'/'}>
                    <div className='w-20 md:text-[30px] lg:text-4xl text-2xl  font-bold italic flex justify-center items-center md:p-0 pl-16 md:mt-0 mt-4 '>
                        <span>RAK</span>
                        <span className='text-yellow-400 md:text-5xl text-4xl'>T</span>
                        <span className='text-red-500'>DAAN</span>
                        <i className="las la-syringe md:text-3xl text-2xl ml-1 md:mt-1"></i>
                    </div>
                </Link>
                <div className='md:visible '>
                    <ul className='flex justify-center items-center gap-10 md:text-[16px] md:visible invisible md:w-full w-40' >
                        <Link to={'/'}><li><a href="" className='hover:text-red-500 delay-200'>Home</a></li></Link>
                        <Link to={'/about'}><li><a href="" className='hover:text-red-500 delay-200'>About Us</a></li></Link>
                        <Link to={'/contact'}><li><a href="" className='hover:text-red-500 delay-200'>Contact Us</a></li></Link>
                        <Link to={'/donarlist'}><li><a href="" className='hover:text-red-500 delay-200'>Donar List</a></li></Link>
                        {/* <Link to={'/searchdonar'}><li><a href="" className='hover:text-red-500 delay-200'>Search Donor</a></li></Link> */}
                        <Link to={'/admin'}><li><a href="" className='hover:text-red-500 delay-200' >Admin</a></li></Link>
                        <input type="text" className='border-none px-1.5 py-0.5 text-white bg-transparent placeholder:text-white outline-red-400 outline-offset-2' placeholder='Search Donar' />
                    </ul>
                </div>
                <div>
                    <button
                        onClick={toggleMenu}
                        className="text-gray-600 p-2 focus:outline-none md:hidden visible "
                    >
                        {isOpen ? <i className="visible md:hidden  md:mt-0 mt-12 md:pl-0 pl-10 z-20 text-3xl text-yellow-500">
                            <i className="las la-bars visible md:hidden md:mt-0 mt-12 md:pl-0 pl-10 z-20 text-3xl text-yellow-500"></i>

                        </i>
                            : <i className="las la-bars z-20 visible md:hidden md:mt-0 mt-12 md:pl-0 pl-10 text-3xl text-red-500"></i>}
                    </button>
                    {/* <i className="las la-bars visible md:hidden md:mt-0 mt-12 md:pl-0 pl-10 text-3xl text-red-500"></i> */}
                    <div className='bg-black md:visible invisible text-white md:p-2 md:px-4 px-2 p-[2px]  hover:bg-red-500 delay-200 flex justify-center items-center gap-1'>
                        <i className="las la-sign-in-alt text-xl"></i>
                        <button>
                            <Link to={'/login'}>LOGIN</Link>
                        </button>
                    </div>
                </div>

            </div>


            <div className="relative">

                <nav
                    className={`absolute z-10 top-0 left-0 w-52  bg-red-500 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
                        } transition-transform duration-300 ease-in-out`}
                >
                    <ul className="p-4">
                        <li className="py-2 border-b border-gray-300">
                            <a href="#home" className="block text-gray-700">
                                Home
                            </a>
                        </li>
                        <li className="py-2 border-b border-gray-300">
                            <a href="#about" className="block text-gray-700">
                                About
                            </a>
                        </li>
                        <li className="py-2 border-b border-gray-300">
                            <a href="#services" className="block text-gray-700">
                                Services
                            </a>
                        </li>
                        <li className="py-2">
                            <a href="#contact" className="block text-gray-700">
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>


        </>
    )
}

export default NavB