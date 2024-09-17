import React from 'react'

const NavA = () => {
    return (
        <>
            <>
                <div className='w-full h-16 bg-[rgb(255,0,0)] text-white md:flex justify-evenly items-center flex  text-xs md:text-[16px]'>

                    <div className='w-full md:flex md:gap-2 justify-center items-center flex-col-2 text-center' >
                        <div className='Logo'>
                            <i className="lab la-facebook-f md:text-lg text-[14px] mx-2"></i>
                            <i className="lab la-twitter md:text-lg text-[14px] mx-2"></i>
                            <i className="lab la-google-plus md:text-lg text-[16px] mx-2"></i>
                            <i className="lab la-pinterest-p md:text-lg text-[14px] mx-2"></i>
                        </div>
                        <hr className='rotate-90 w-5 md:visible invisible' />
                        <div className='address' >
                            <i className="las la-map-marker-alt md:text-lg text-[14px] mx-2"></i>
                            <a href="" className='no-underline'>KND Blood Camp Indore(M.P)</a>
                        </div>
                    </div>

                    <div className='w-full md:flex md:gap-2 gap-0 justify-center items-center flex-col-2 text-center'>
                        <div className='gmail'>
                            <i className="las la-envelope-open md:text-lg text-[14px] mx-2"></i>
                            <a href="" className='no-underline'>ankit@gmail.com</a>
                        </div>
                        <hr className='rotate-90 md:w-5 w-8  ' />
                        <div className='telephone'>
                            <i className="las la-phone md:text-xl text-[14px] mx-2"></i>
                            <a className='no-underline'>+9617874140</a>
                        </div>
                    </div>

                </div>
            </>
        </>
    )
}

export default NavA;