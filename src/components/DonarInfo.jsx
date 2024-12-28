import React from 'react'
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
            <div className='w-full flex flex-col justify-center items-center h-auto relative bg-[#E8E8E8]'>
                <h1 className='md:text-5xl text-2xl font-semibold text-[#4d4d4bee] p-2 mt-10'>SOME OF THE DONOR</h1>
                <span className='flex justify-evenly items-center gap-2'>
                    <hr className='md:w-24 w-12 h-[2px] bg-red-400' />
                    <i className="las la-stethoscope md:text-4xl text-2xl text-red-400"></i>
                    <hr className='md:w-24 w-12 h-[2px] bg-red-400' />
                </span>
                <img className='absolute bottom-0 z-[-10] opacity-50' alt="" />
                <div className='md:w-[80%] w-full justify-evenly items-center md:grid md:grid-cols-2 lg:grid-cols-3  grid-cols-1 grid sm:grid-cols-2 sm:flex sm:flex-wrap gap-5 p-5 py-10'>
                    <div className="max-w-m md:w-[300px]  mx-auto bg-white shadow-lg rounded-lg overflow-hidden border-2 border-red-500 bg-gradient-to-t from-[#faf8da] transition-transform duration-300 ease-in-out hover:scale-110 hover:border-blue-500">
                        <div className="bg-red-500 text-white text-center py-4">
                            <h2 className="text-2xl font-bold">BLOOD DONOR</h2>
                        </div>
                        <div className="p-6">
                            <div className="flex items-center mb-4">
                                <img
                                    className="w-20 h-20 rounded-full border-2 border-red-500 mr-4 bg-gradient-to-r from-[#f57d3cde] to-[#0088ff7a]"
                                    src={DrIMG1}
                                    alt="donor profile"
                                />
                                <div>
                                    <h3 className="text-lg font-semibold">VIVEK SHARMA</h3>
                                    <p className="text-gray-600">Blood Group: <span className="font-bold text-red-500">O+</span></p>
                                </div>
                            </div>
                            <div className="mb-4">
                                <p className="text-gray-600">
                                    <strong>Phone:</strong> +91-9617619801
                                </p>
                                <p className="text-gray-600">
                                    <strong>Email:</strong> sharmavivek@gmail.com
                                </p>
                                <p className="text-gray-600">
                                    <strong>Location:</strong> Indore, MP
                                </p>
                            </div>
                            <div className="text-center">
                                <button className="bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-600">
                                    Contact Now
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-m md:w-[300px]  mx-auto bg-white shadow-lg rounded-lg overflow-hidden border-2 border-red-500 bg-gradient-to-t from-[#faf8da] transition-transform duration-300 ease-in-out hover:scale-110 hover:border-blue-500">
                        <div className="bg-red-500 text-white text-center py-4">
                            <h2 className="text-2xl font-bold">BLOOD DONOR</h2>
                        </div>
                        <div className="p-6">
                            <div className="flex items-center mb-4">
                                <img
                                    className="w-20 h-20 rounded-full border-2 border-red-500 mr-4 bg-gradient-to-r from-[#f57d3cde] to-[#0088ff7a]"
                                    src={DrIMG4}
                                    alt="donor profile"
                                />
                                <div>
                                    <h3 className="text-lg font-semibold">SHUBHMAN JOSHI</h3>
                                    <p className="text-gray-600">Blood Group: <span className="font-bold text-red-500">A+</span></p>
                                </div>
                            </div>
                            <div className="mb-4">
                                <p className="text-gray-600">
                                    <strong>Phone:</strong> +91-7856932456
                                </p>
                                <p className="text-gray-600">
                                    <strong>Email:</strong> shubh12@gmail.com
                                </p>
                                <p className="text-gray-600">
                                    <strong>Location:</strong> Bhopal, MP
                                </p>
                            </div>
                            <div className="text-center">
                                <button className="bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-600">
                                    Contact Now
                                </button>
                            </div>
                        </div>
                    </div>


                    <div className="max-w-m md:w-[300px]  mx-auto bg-white shadow-lg rounded-lg overflow-hidden border-2 border-red-500 bg-gradient-to-t from-[#faf8da] transition-transform duration-300 ease-in-out hover:scale-110 hover:border-blue-500">
                        <div className="bg-red-500 text-white text-center py-4">
                            <h2 className="text-2xl font-bold">BLOOD DONOR</h2>
                        </div>
                        <div className="p-6">
                            <div className="flex items-center mb-4">
                                <img
                                    className="w-20 h-20 rounded-full border-2 border-red-500 mr-4 bg-gradient-to-r from-[#f57d3cde] to-[#0088ff7a]"
                                    src={DrIMG2}
                                    alt="donor profile"
                                />
                                <div>
                                    <h3 className="text-lg font-semibold">SALMAN KHAN</h3>
                                    <p className="text-gray-600">Blood Group: <span className="font-bold text-red-500">AB+</span></p>
                                </div>
                            </div>
                            <div className="mb-4">
                                <p className="text-gray-600">
                                    <strong>Phone:</strong> +91-8596327412
                                </p>
                                <p className="text-gray-600">
                                    <strong>Email:</strong> khansalman01@gmail.com
                                </p>
                                <p className="text-gray-600">
                                    <strong>Location:</strong> Ujjain, MP
                                </p>
                            </div>
                            <div className="text-center">
                                <button className="bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-600">
                                    Contact Now
                                </button>
                            </div>
                        </div>
                    </div>




                    <div className="max-w-m md:w-[300px]  mx-auto bg-white shadow-lg rounded-lg overflow-hidden border-2 border-red-500 bg-gradient-to-t from-[#faf8da] transition-transform duration-300 ease-in-out hover:scale-110 hover:border-blue-500">
                        <div className="bg-red-500 text-white text-center py-4">
                            <h2 className="text-2xl font-bold">BLOOD DONOR</h2>
                        </div>
                        <div className="p-6">
                            <div className="flex items-center mb-4">
                                <img
                                    className="w-20 h-20 rounded-full border-2 border-red-500 mr-4 bg-gradient-to-r from-[#f57d3cde] to-[#0088ff7a]"
                                    src={DrIMG6}
                                    alt="donor profile"
                                />
                                <div>
                                    <h3 className="text-lg font-semibold">KHUSHI PATEL</h3>
                                    <p className="text-gray-600">Blood Group: <span className="font-bold text-red-500">B+</span></p>
                                </div>
                            </div>
                            <div className="mb-4">
                                <p className="text-gray-600">
                                    <strong>Phone:</strong> +91-8569564521
                                </p>
                                <p className="text-gray-600">
                                    <strong>Email:</strong> khushi@gmail.com
                                </p>
                                <p className="text-gray-600">
                                    <strong>Location:</strong> Indore, MP
                                </p>
                            </div>
                            <div className="text-center">
                                <button className="bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-600">
                                    Contact Now
                                </button>
                            </div>
                        </div>
                    </div>



                    <div className="max-w-m md:w-[300px]  mx-auto bg-white shadow-lg rounded-lg overflow-hidden border-2 border-red-500 bg-gradient-to-t from-[#faf8da] transition-transform duration-300 ease-in-out hover:scale-110 hover:border-blue-500">
                        <div className="bg-red-500 text-white text-center py-4">
                            <h2 className="text-2xl font-bold">BLOOD DONOR</h2>
                        </div>
                        <div className="p-6">
                            <div className="flex items-center mb-4">
                                <img
                                    className="w-20 h-20 rounded-full border-2 border-red-500 mr-4 bg-gradient-to-r from-[#f57d3cde] to-[#0088ff7a]"
                                    src={DrIMG3}
                                    alt="donor profile"
                                />
                                <div>
                                    <h3 className="text-lg font-semibold">RAHUL JAIN</h3>
                                    <p className="text-gray-600">Blood Group: <span className="font-bold text-red-500">AB+</span></p>
                                </div>
                            </div>
                            <div className="mb-4">
                                <p className="text-gray-600">
                                    <strong>Phone:</strong> +91-6989546851
                                </p>
                                <p className="text-gray-600">
                                    <strong>Email:</strong> jainrahul85@gmail.com
                                </p>
                                <p className="text-gray-600">
                                    <strong>Location:</strong> Ratlam, MP
                                </p>
                            </div>
                            <div className="text-center">
                                <button className="bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-600">
                                    Contact Now
                                </button>
                            </div>
                        </div>
                    </div>




                    <div className="max-w-m md:w-[300px]  mx-auto bg-white shadow-lg rounded-lg overflow-hidden border-2 border-red-500 bg-gradient-to-t from-[#faf8da] transition-transform duration-300 ease-in-out hover:scale-110 hover:border-blue-500">
                        <div className="bg-red-500 text-white text-center py-4">
                            <h2 className="text-2xl font-bold">BLOOD DONOR</h2>
                        </div>
                        <div className="p-6">
                            <div className="flex items-center mb-4">
                                <img
                                    className="w-20 h-20 rounded-full border-2 border-red-500 mr-4 bg-gradient-to-r from-[#f57d3cde] to-[#0088ff7a]"
                                    src={DrIMG7}
                                    alt="donor profile"
                                />
                                <div>
                                    <h3 className="text-lg font-semibold">MOHAN SINGH</h3>
                                    <p className="text-gray-600">Blood Group: <span className="font-bold text-red-500">A</span></p>
                                </div>
                            </div>
                            <div className="mb-4">
                                <p className="text-gray-600">
                                    <strong>Phone:</strong> +91-7845961263
                                </p>
                                <p className="text-gray-600">
                                    <strong>Email:</strong> mohansingh20@gmail.com
                                </p>
                                <p className="text-gray-600">
                                    <strong>Location:</strong> Bhopal, MP
                                </p>
                            </div>
                            <div className="text-center">
                                <button className="bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-600">
                                    Contact Now
                                </button>
                            </div>
                        </div>
                    </div>

                </div>

                <button className='bg-white text-black p-2 mb-10 hover:bg-red-600 delay-150 hover:text-white '>View All Donar</button>
            </div>
        </>
    )
}

export default DonarInfo