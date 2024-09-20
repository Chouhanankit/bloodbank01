import React, { useEffect, useState } from 'react'

const NavB = () => {
    const [position, setPosition] = useState(11)


    const listenScrollEvent = () => {
        window.scrollY > 10 ? setPosition(0) : setPosition(11);
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
                <div className='w-20 md:text-[30px] lg:text-4xl text-2xl  font-bold italic flex justify-center items-center md:p-0 pl-16 md:mt-0 mt-4 '>
                    <span>B</span>
                    <span>B</span>
                    <span className='text-red-500'>D</span>
                    <span className='text-red-500'>M</span>
                    <span className='text-red-500'>S</span>
                    <i className="las la-syringe md:text-3xl text-2xl ml-1 md:mt-1"></i>
                </div>
                <div className='md:visible '>
                    <ul className='flex justify-center items-center gap-10 md:text-[16px] md:visible invisible md:w-full w-40' >
                        <li><a href="" className='hover:text-red-500 delay-200'>Home</a></li>
                        <li><a href="" className='hover:text-red-500 delay-200'>About Us</a></li>
                        <li><a href="" className='hover:text-red-500 delay-200'>Contact Us</a></li>
                        <li><a href="" className='hover:text-red-500 delay-200'>Donar List</a></li>
                        <li><a href="" className='hover:text-red-500 delay-200'>Search Donor</a></li>
                        <li><a href="" className='hover:text-red-500 delay-200' >Admin</a></li>
                    </ul>
                </div>
                <div>
                    <i className="las la-bars visible md:hidden md:mt-0 mt-12 md:pl-0 pl-10 text-3xl text-red-500"></i>
                    <div className='bg-black md:visible invisible text-white md:p-2 md:px-4 px-2 p-[2px]  hover:bg-red-500 delay-200 flex justify-center items-center gap-1'>
                        <i className="las la-sign-in-alt text-xl"></i>
                        <button>Login</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavB