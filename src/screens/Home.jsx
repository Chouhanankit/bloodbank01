import React from 'react'
import NavA from '../components/NavA'
import Carousel from '../components/Carousel'
import NavB from '../components/NavB'
import Footer from '../components/Footer'
import DoctorInfo from '../components/DoctorInfo'
import DonarInfo from '../components/DonarInfo'
import Info from '../components/Info'
import Donate from '../components/Donate'

const Home = () => {
    return (
        <>
            <NavA />
            <NavB />
            <Carousel />
            <DoctorInfo />
            <Donate/>
            <DonarInfo />
            <Info />
            <Footer />
        </>
    )
}

export default Home