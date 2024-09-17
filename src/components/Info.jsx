import React from 'react'
import blood from '../assets/blood.jpg'
const Info = () => {
    return (
        <>
            <div className="w-full  bg-white flex flex-col justify-start items-center ">

                <h1 className='font-bold text-3xl mt-10'>BLOOD GROUPS</h1>
                <span className='w-52 flex justify-evenly items-center gap-2'>
                    <hr className='md:w-24 w-12 h-[2px] bg-black' />
                    <i class="las la-stethoscope md:text-4xl text-2xl text-red-500"></i>
                    <hr className='md:w-24 w-12 h-[2px] bg-black' />
                </span>
                <p className='text-[15px] text-center mb-10'>Blood group of any human being will mainly fall in any one of the following groups..</p>


                <div className='w-full md:flex sm:flex-col-2 sm:justify-center px-10 md:px-0 justify-evenly items-center'>
                    <div>
                        <ul>
                            <li className='font-semibold list-disc'>A positive or A negative</li>
                            <li className='font-semibold list-disc'>B positive or B negative</li>
                            <li className='font-semibold list-disc'>O positive or O negative</li>
                            <li className='font-semibold list-disc'>AB positive or AB negative</li>
                            <p className='md:w-[35rem] text-gray-500 mb-5'>A healthy diet helps ensure a successful blood donation, and also makes you feel better! Check out the following recommended foods to eat prior to your donation.</p>
                        </ul>
                    </div>
                    <div>
                        <img className='w-[400px]' src={blood} alt="" />
                    </div>
                </div>


                <div className='w-full md:flex sm:flex-col-2 px-10 md:px-0 justify-evenly items-center my-10'>
                    <div>
                        <button className='bg-black text-white p-2 px-4 my-'>Read More</button>
                    </div>
                    <div className='mt-10'>
                        <h1 className='text-xl font-semibold md:text-end my-2'>UNIVERSAL DONORS AND RECIPIENTS</h1>
                        <p className='md:w-[40rem] text-gray-500'>The most common blood type is O, followed by type A. Type O individuals are often called "universal donors" since their blood can be transfused into persons with any blood type. Those with type AB blood are called "universal recipients" because they can receive blood of any type.</p>
                    </div>
                </div>





            </div>
        </>
    )
}

export default Info