import React from 'react'
import doctor1 from '../../src/assets/doctor3.jpg'
import doctor2 from '../../src/assets/doctor2.png'
import doctor3 from '../../src/assets/doctor4.png'


const DoctorInfo = () => {
    return (
        <>
            <div className='w-full h-auto md:h-[65vh] bg-[#dcd7d73a]  bg-cover text-center md:flex justify-evenly items-center'>

                <div className='md:flex justify-evenly items-center md:py-10 gap-10 grid sm:grid-cols sm:flex sm:flex-wrap p-10 md:p-0'>
                    <div className="card md:w-56 md:h-60 w-40 h-44 relative overflow-hidden rounded-[10px] transition-[border-radius] duration-500 cubic-bezier-[0.175,0.885,0.32,1.275] ring-2 ring-gray-300 shadow-[inset_0_-3em_3em_rgba(0,0,0,0.1),0_0_0_2px_rgb(190,190,190),0.3em_0.3em_1em_rgba(0,0,0,0.3)]">
                        <img className='w-[250px]' src={doctor1} alt="" />
                        <div className='w-full absolute bottom-0 rounded-b-xl bg-gradient-to-br from-red-500 text-white pb-0'>Dr.Deepak Yadav</div>
                    </div>
                    <div className="card w-40 h-44 md:w-56 md:h-60 relative  overflow-hidden rounded-[10px] transition-[border-radius] duration-500 cubic-bezier-[0.175,0.885,0.32,1.275] ring-2 ring-gray-300 shadow-[inset_0_-3em_3em_rgba(0,0,0,0.1),0_0_0_2px_rgb(190,190,190),0.3em_0.3em_1em_rgba(0,0,0,0.3)]">
                        <img className='w-[250px]' src={doctor2} alt="" />
                        <div className='w-full absolute bottom-0 rounded-b-xl bg-gradient-to-br from-red-500 text-white pb-0'>Dr.Ram Sharma</div>
                    </div>
                    <div className="card w-40 h-44 md:w-56 md:h-60 relative  overflow-hidden rounded-[10px] transition-[border-radius] duration-500 cubic-bezier-[0.175,0.885,0.32,1.275] ring-2 ring-gray-300 shadow-[inset_0_-3em_3em_rgba(0,0,0,0.1),0_0_0_2px_rgb(190,190,190),0.3em_0.3em_1em_rgba(0,0,0,0.3)]">
                        <img className='w-[250px]' src={doctor3} alt="" />
                        <div className='w-full absolute bottom-0 rounded-b-xl bg-gradient-to-br from-red-500 text-white pb-0'>Dr.Mohan Joshi</div>
                    </div>

                </div>

                <span>
                    <h1 className='md:text-5xl text-xl font-bold text-[#EE3D32]  md:py-3 '>HIGH PROFESSIONAL DOCTORS</h1>
                    <p className='md:w-[35rem] pb-4 md:pb-0 md:text-[20px] text-[14px] md:text-start text-gray-900 italic px-8 md:px-0 '>All specialists have extensive practical experience and regularly training courses in educational centers of the world</p>
                </span>
            </div>

        </>
    )
}

export default DoctorInfo