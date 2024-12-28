import React from 'react'
import DoctorInfo from '../components/DoctorInfo'
import DonarInfo from '../components/DonarInfo'
import Info from '../components/Info'
import Donate from '../components/Donate'
import Carousel from '../components/Carousel'

const Home = () => {
    return (
        <>
            <Carousel />
            <DoctorInfo />
            <Donate />
            <DonarInfo />
            <Info />
        </>
    )
}

export default Home