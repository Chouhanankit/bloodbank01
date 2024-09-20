import React from 'react'
import BG from '../assets/BG.svg'
import DrIMG1 from '../assets/p1.png'
import DrIMG2 from '../assets/p2.png'
import DrIMG3 from '../assets/p3.png'
import DrIMG4 from '../assets/p4.png'
import DrIMG5 from '../assets/p5.png'
import DrIMG6 from '../assets/p7.png'
import DrIMG7 from '../assets/p9.png'
import DrIMG8 from '../assets/p10.png'

const DonarInfo = () => {
    return (
        <>
            <div className='w-full flex flex-col justify-center items-center h-auto relative bg-gradient-to-br from-red-100 '>
                <h1 className='md:text-5xl text-2xl font-semibold text-gray-800 p-2 mt-10'>Some of the Donar</h1>
                <span className='flex justify-evenly items-center gap-2'>
                    <hr className='md:w-24 w-12 h-[2px] bg-white' />
                    <i class="las la-stethoscope md:text-4xl text-2xl text-white"></i>
                    <hr className='md:w-24 w-12 h-[2px] bg-white' />
                </span>
                <img className='absolute bottom-0 z-[-10] opacity-50' src={BG} alt="" />
                <div className='w-[80%] justify-evenly items-center md:grid md:grid-cols-2 lg:grid-cols-4  grid-cols-1 grid sm:grid-cols-2 sm:flex sm:flex-wrap gap-5 p-5 py-10'>

                    <div className="card mx-auto w-full h-[25rem] max-w-xs border-2 border-blue-800 bg-white p-0 text-gray-800 transition-transform duration-300 ease-in-out hover:scale-105 hover:border-2 hover:border-yellow-400">
                        <div className="card__hero relative h-[12rem] bg-indigo-500 text-sm">
                            <div className="card w-full h-[12rem] relative flex flex-col items-center overflow-hidden duration-500">
                                <img className='w-[200px]' src={DrIMG1} alt="" />
                                <div className="card__job-title absolute bottom-0 left-0 w-52 text-2xl font-bold bg-red-600 text-white p-2">Akash Singh</div>
                            </div>
                        </div>
                        <div className="card__footer gap-4 p-3 font-bold text-sm">
                            <div className="card__job-summary flex flex-col justify-center items-start gap-3">
                                <span className='flex justify-center items-center gap-2 mt-4'>
                                    <h1 className='text-xl'>Gender :</h1>
                                    <p className='text-xl'>Male</p>
                                </span>
                                <span className='flex justify-center items-center gap-3 mt-2'>
                                    <h1 className='text-[18px]'>Blood Group :</h1>
                                    <p className='text-2xl text-red-600'>A+</p>
                                </span>
                            </div>
                            <button className="card__btn w-full text-center py-2 px-10 my-4 rounded-lg bg-blue-600 text-white text-base md:w-auto hover:bg-red-500 delay-100 ">
                                Request
                            </button>
                        </div>
                    </div>

                    <div className="card mx-auto w-full h-[25rem] max-w-xs border-2 border-blue-800 bg-white p-0 text-gray-800 transition-transform duration-300 ease-in-out hover:scale-105 hover:border-2 hover:border-yellow-400">
                        <div className="card__hero relative h-[12rem] bg-indigo-500 text-sm">
                            <div className="card w-full h-[12rem] relative flex flex-col items-center overflow-hidden duration-500">
                                <img className='w-[200px]' src={DrIMG7} alt="" />
                                <div className="card__job-title absolute bottom-0 left-0 w-52 text-2xl font-bold bg-red-600 text-white p-2">Virat Patidar</div>
                            </div>
                        </div>
                        <div className="card__footer gap-4 p-3 font-bold text-sm">
                            <div className="card__job-summary flex flex-col justify-center items-start gap-3">
                                <span className='flex justify-center items-center gap-2 mt-4'>
                                    <h1 className='text-xl'>Gender :</h1>
                                    <p className='text-xl'>Male</p>
                                </span>
                                <span className='flex justify-center items-center gap-3 mt-2'>
                                    <h1 className='text-[18px]'>Blood Group :</h1>
                                    <p className='text-2xl text-red-600'>C</p>
                                </span>
                            </div>
                            <button className="card__btn w-full text-center py-2 px-10 my-4 rounded-lg bg-blue-600 text-white text-base md:w-auto hover:bg-red-500 delay-100 ">
                                Request
                            </button>
                        </div>
                    </div>

                    <div className="card mx-auto w-full h-[25rem] max-w-xs border-2 border-blue-800 bg-white p-0 text-gray-800 transition-transform duration-300 ease-in-out hover:scale-105 hover:border-2 hover:border-yellow-400">
                        <div className="card__hero relative h-[12rem] bg-indigo-500 text-sm">
                            <div className="card w-full h-[12rem] relative flex flex-col items-center overflow-hidden duration-500">
                                <img className='w-[200px]' src={DrIMG8} alt="" />
                                <div className="card__job-title absolute bottom-0 left-0 w-52 text-2xl font-bold bg-red-600 text-white p-2">Harsh Patel</div>
                            </div>
                        </div>
                        <div className="card__footer gap-4 p-3 font-bold text-sm">
                            <div className="card__job-summary flex flex-col justify-center items-start gap-3">
                                <span className='flex justify-center items-center gap-2 mt-4'>
                                    <h1 className='text-xl'>Gender :</h1>
                                    <p className='text-xl'>Male</p>
                                </span>
                                <span className='flex justify-center items-center gap-3 mt-2'>
                                    <h1 className='text-[18px]'>Blood Group :</h1>
                                    <p className='text-2xl text-red-600'>AB+</p>
                                </span>
                            </div>
                            <button className="card__btn w-full text-center py-2 px-10 my-4 rounded-lg bg-blue-600 text-white text-base md:w-auto hover:bg-red-500 delay-100 ">
                                Request
                            </button>
                        </div>
                    </div>

                    <div className="card mx-auto w-full h-[25rem] max-w-xs border-2 border-blue-800 bg-white p-0 text-gray-800 transition-transform duration-300 ease-in-out hover:scale-105 hover:border-2 hover:border-yellow-400">
                        <div className="card__hero relative h-[12rem] bg-indigo-500 text-sm">
                            <div className="card w-full h-[12rem] relative flex flex-col items-center overflow-hidden duration-500">
                                <img className='w-[200px]' src={DrIMG2} alt="" />
                                <div className="card__job-title absolute bottom-0 left-0 w-52 text-2xl font-bold bg-red-600 text-white p-2">Salman Khan</div>
                            </div>
                        </div>
                        <div className="card__footer gap-4 p-3 font-bold text-sm">
                            <div className="card__job-summary flex flex-col justify-center items-start gap-3">
                                <span className='flex justify-center items-center gap-2 mt-4'>
                                    <h1 className='text-xl'>Gender :</h1>
                                    <p className='text-xl'>Male</p>
                                </span>
                                <span className='flex justify-center items-center gap-3 mt-2'>
                                    <h1 className='text-[18px]'>Blood Group :</h1>
                                    <p className='text-2xl text-red-600'>B+</p>
                                </span>
                            </div>
                            <button className="card__btn w-full text-center py-2 px-10 my-4 rounded-lg bg-blue-600 text-white text-base md:w-auto hover:bg-red-500 delay-100 ">
                                Request
                            </button>
                        </div>
                    </div>


                    <div className="card mx-auto w-full h-[25rem] max-w-xs border-2 border-blue-800 bg-white p-0 text-gray-800 transition-transform duration-300 ease-in-out hover:scale-105 hover:border-2 hover:border-yellow-400">
                        <div className="card__hero relative h-[12rem] bg-indigo-500 text-sm">
                            <div className="card w-full h-[12rem] relative flex flex-col items-center overflow-hidden duration-500">
                                <img className='w-[200px]' src={DrIMG3} alt="" />
                                <div className="card__job-title absolute bottom-0 left-0 w-52 text-2xl font-bold bg-red-600 text-white p-2">Mohit Rathore</div>
                            </div>
                        </div>
                        <div className="card__footer gap-4 p-3 font-bold text-sm">
                            <div className="card__job-summary flex flex-col justify-center items-start gap-3">
                                <span className='flex justify-center items-center gap-2 mt-4'>
                                    <h1 className='text-xl'>Gender :</h1>
                                    <p className='text-xl'>Male</p>
                                </span>
                                <span className='flex justify-center items-center gap-3 mt-2'>
                                    <h1 className='text-[18px]'>Blood Group :</h1>
                                    <p className='text-2xl text-red-600'>A</p>
                                </span>
                            </div>
                            <button className="card__btn w-full text-center py-2 px-10 my-4 rounded-lg bg-blue-600 text-white text-base md:w-auto hover:bg-red-500 delay-100 ">
                                Request
                            </button>
                        </div>
                    </div>


                    <div className="card mx-auto w-full h-[25rem] max-w-xs border-2 border-blue-800 bg-white p-0 text-gray-800 transition-transform duration-300 ease-in-out hover:scale-105 hover:border-2 hover:border-yellow-400">
                        <div className="card__hero relative h-[12rem] bg-indigo-500 text-sm">
                            <div className="card w-full h-[12rem] relative flex flex-col items-center overflow-hidden duration-500">
                                <img className='w-[200px]' src={DrIMG4} alt="" />
                                <div className="card__job-title absolute bottom-0 left-0 w-52 text-2xl font-bold bg-red-600 text-white p-2">Anand Yadav</div>
                            </div>
                        </div>
                        <div className="card__footer gap-4 p-3 font-bold text-sm">
                            <div className="card__job-summary flex flex-col justify-center items-start gap-3">
                                <span className='flex justify-center items-center gap-2 mt-4'>
                                    <h1 className='text-xl'>Gender :</h1>
                                    <p className='text-xl'>Male</p>
                                </span>
                                <span className='flex justify-center items-center gap-3 mt-2'>
                                    <h1 className='text-[18px]'>Blood Group :</h1>
                                    <p className='text-2xl text-red-600'>B</p>
                                </span>
                            </div>
                            <button className="card__btn w-full text-center py-2 px-10 my-4 rounded-lg bg-blue-600 text-white text-base md:w-auto hover:bg-red-500 delay-100 ">
                                Request
                            </button>
                        </div>
                    </div>



                    <div className="card mx-auto w-full h-[25rem] max-w-xs border-2 border-blue-800 bg-white p-0 text-gray-800 transition-transform duration-300 ease-in-out hover:scale-105 hover:border-2 hover:border-yellow-400">
                        <div className="card__hero relative h-[12rem] bg-indigo-500 text-sm">
                            <div className="card w-full h-[12rem] relative flex flex-col items-center overflow-hidden duration-500">
                                <img className='w-[200px]' src={DrIMG6} alt="" />
                                <div className="card__job-title absolute bottom-0 left-0 w-52 text-2xl font-bold bg-red-600 text-white p-2">Neha Sharma</div>
                            </div>
                        </div>
                        <div className="card__footer gap-4 p-3 font-bold text-sm">
                            <div className="card__job-summary flex flex-col justify-center items-start gap-3">
                                <span className='flex justify-center items-center gap-2 mt-4'>
                                    <h1 className='text-xl'>Gender :</h1>
                                    <p className='text-xl'>Female</p>
                                </span>
                                <span className='flex justify-center items-center gap-3 mt-2'>
                                    <h1 className='text-[18px]'>Blood Group :</h1>
                                    <p className='text-2xl text-red-600'>A+</p>
                                </span>
                            </div>
                            <button className="card__btn w-full text-center py-2 px-10 my-4 rounded-lg bg-blue-600 text-white text-base md:w-auto hover:bg-red-500 delay-100 ">
                                Request
                            </button>
                        </div>
                    </div>


                    <div className="card mx-auto w-full h-[25rem] max-w-xs border-2 border-blue-800 bg-white p-0 text-gray-800 transition-transform duration-300 ease-in-out hover:scale-105 hover:border-2 hover:border-yellow-400">
                        <div className="card__hero relative h-[12rem] bg-indigo-500 text-sm">
                            <div className="card w-full h-[12rem] relative flex flex-col items-center overflow-hidden duration-500">
                                <img className='w-[200px]' src={DrIMG5} alt="" />
                                <div className="card__job-title absolute bottom-0 left-0 w-52 text-2xl font-bold bg-red-600 text-white p-2">Kuldeep Joshi</div>
                            </div>
                        </div>
                        <div className="card__footer gap-4 p-3 font-bold text-sm">
                            <div className="card__job-summary flex flex-col justify-center items-start gap-3">
                                <span className='flex justify-center items-center gap-2 mt-4'>
                                    <h1 className='text-xl'>Gender :</h1>
                                    <p className='text-xl'>Male</p>
                                </span>
                                <span className='flex justify-center items-center gap-3 mt-2'>
                                    <h1 className='text-[18px]'>Blood Group :</h1>
                                    <p className='text-2xl text-red-600'>B+</p>
                                </span>
                            </div>
                            <button className="card__btn w-full text-center py-2 px-10 my-4 rounded-lg bg-blue-600 text-white text-base md:w-auto hover:bg-red-500 delay-100 ">
                                Request
                            </button>
                        </div>
                    </div>

                </div>

                <button className='bg-white text-black p-2 mb-10 hover:bg-red-600 delay-150 hover:text-white '>View All Donar</button>
            </div>
        </>
    )
}

export default DonarInfo