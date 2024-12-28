import React from 'react'
import DrIMG1 from '../assets/p1.png'
import DrIMG2 from '../assets/p2.png'
import DrIMG3 from '../assets/p3.png'
import DrIMG4 from '../assets/p4.png'
import DrIMG5 from '../assets/p5.png'
import DrIMG6 from '../assets/p7.png'
import DrIMG7 from '../assets/p9.png'
const DonarList = () => {
    return (
        <>
            <div className='bg-red-400 w-full pt-20'>
                <div className='text-center'>
                    <h2 className='mt-4 text-balance text-4xl font-semibold tracking-tight text-gray-900'>Donar List</h2>
                </div>
                <div className='md:w-full w-full justify-evenly items-center md:grid md:grid-cols-2 lg:grid-cols-4  grid-cols-1 grid sm:grid-cols-2 sm:flex sm:flex-wrap gap-5 p-5 py-10'>
                    <div className="max-w-m md:w-[300px] mx-auto bg-white shadow-lg rounded-lg overflow-hidden border-2 border-red-500 bg-gradient-to-t from-[#faf8da] transition-transform duration-300 ease-in-out hover:scale-110 hover:border-blue-500">
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

            </div>

        </>
    )
}

export default DonarList