import React from 'react'
import doctor1 from '../../src/assets/doctor3.jpg'
import doctor2 from '../../src/assets/doctor2.png'
import doctor3 from '../../src/assets/doctor4.png'
import doctor4 from '../../src/assets/doctor5.jpg'


const DoctorInfo = () => {
    return (
        <>
            <div className='w-full h-auto bg-gradient-to-br from-blue-600 text-center md:flex justify-evenly items-center'>
                <span>
                    <h1 className='text-3xl font-bold text-white py-3 pt-10 md:pt-0 '>High professional doctors</h1>
                    <p className='md:w-96 font-semibold text-[15px] italic px-8 md:px-0 '>All specialists have extensive practical experience and regularly training courses in educational centers of the world</p>
                </span>
                <div className='md:flex justify-evenly items-center md:py-10 gap-10 grid sm:grid-cols sm:flex sm:flex-wrap p-10 md:p-0'>
                    <div className="card w-40 h-44 relative bg-gradient-to-tl from-red-300 overflow-hidden rounded-[10px] transition-[border-radius] duration-500 cubic-bezier-[0.175,0.885,0.32,1.275] ring-2 ring-gray-300 shadow-[inset_0_-3em_3em_rgba(0,0,0,0.1),0_0_0_2px_rgb(190,190,190),0.3em_0.3em_1em_rgba(0,0,0,0.3)]">
                        <img className='w-[200px]' src={doctor1} alt="" />
                        <div className='w-full absolute bottom-0 rounded-b-xl bg-gradient-to-br from-red-300 text-white pb-0'>Dr.Deepak Yadav</div>
                    </div>
                    <div className="card w-40 h-44 relative bg-gradient-to-tl from-red-300 overflow-hidden rounded-[10px] transition-[border-radius] duration-500 cubic-bezier-[0.175,0.885,0.32,1.275] ring-2 ring-gray-300 shadow-[inset_0_-3em_3em_rgba(0,0,0,0.1),0_0_0_2px_rgb(190,190,190),0.3em_0.3em_1em_rgba(0,0,0,0.3)]">
                        <img className='w-[200px]' src={doctor2} alt="" />
                        <div className='w-full absolute bottom-0 rounded-b-xl bg-gradient-to-br from-red-300 text-white pb-0'>Dr.Ram Sharma</div>
                    </div>
                    <div className="card w-40 h-44 relative bg-gradient-to-tl from-red-300 overflow-hidden rounded-[10px] transition-[border-radius] duration-500 cubic-bezier-[0.175,0.885,0.32,1.275] ring-2 ring-gray-300 shadow-[inset_0_-3em_3em_rgba(0,0,0,0.1),0_0_0_2px_rgb(190,190,190),0.3em_0.3em_1em_rgba(0,0,0,0.3)]">
                        <img className='w-[200px]' src={doctor3} alt="" />
                        <div className='w-full absolute bottom-0 rounded-b-xl bg-gradient-to-br from-red-300 text-white pb-0'>Dr.Mohan Joshi</div>
                    </div>
                    
                </div>
            </div>

        </>
    )
}

export default DoctorInfo