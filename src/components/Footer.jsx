import React from 'react'

const Footer = () => {
    return (
        <>
            <div className='absolute z-10 w-full bg-fixed bg-IMG3 bg-contain sm:bg-cover '>

                <div className='w-full relative text-center h-auto pt-24 flex flex-col justify-center items-center text-white sm:flex-col-2'>
                    <div className='w-full md:flex md:justify-evenly md:items-start text-start flex-col-2 justify-evenly items-center sm:text-[14px] md:text-x text-xs sm:px-16 md:px-10'>
                        <div>
                            <h1 className='md:w-[25rem] text-4xl font-bold italic'><span className='text-red-500'>Blood Bank & </span>Donar Management System</h1>
                            <i className="las la-syringe md:text-4xl text-[14px] mr-2 my-8"></i>
                            <p className='md:w-[25rem]'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
                                inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                            </p>
                        </div>
                        <div>
                            <h1 className='font-bold md:text-xl sm:text-[15px] mb-3 md:py-0 py-3 '>Address</h1>
                            <ul className='flex flex-col gap-2'>
                                <li>
                                    <i className="las la-map-marker-alt md:text-lg text-[14px] mr-2 text-red-600"></i>
                                    <a href="">KND Blood Camp Indore(M.P)</a></li>
                                <li>
                                    <i className="las la-phone md:text-lg text-[14px] mr-2 text-red-600"></i>
                                    <a href="">+91-9617874140</a></li>
                                <li>
                                    <i className="las la-envelope-open md:text-lg text-[14px] mr-2  text-red-600"></i>
                                    <a href="">ankit@gmail.com</a></li>
                            </ul>
                        </div>
                        <div>
                            <h1 className='font-bold md:text-xl sm:text-[15px] mb-3 md:py-0 py-3 '>Quick Links</h1>
                            <ul className='flex flex-col gap-2'>
                                <li><a href="">Home</a></li>
                                <li><a href="">About Us</a></li>
                                <li><a href="">Contact Us</a></li>
                            </ul>
                        </div>
                    </div>
                    <hr className='md:w-[71%] sm:w-96 h-[1px] md:mt-20 mt-4 sm:mt-4 bg-white' />
                    <p className='mt-6 sm:mt-2 pb-12 md:text-[14px] text-[12px]'>© Blood Bank Donor Management System Design By <span><a href="" className='hover:text-red-500 delay-100'>Ankit Chouhan</a></span></p>
                </div>
            </div>
        </>
    )
}

export default Footer