import React, { useEffect } from 'react'
import IMG1 from '../assets/banner1.jpg'
import IMG3 from '../assets/banner2.jpg'
import IMG4 from '../assets/1.jpg'
import { useState } from 'react';

const Carousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const images = [
        { src: "https://media.gettyimages.com/id/1240838889/photo/bollywood-actor-milind-soman-inaugurates-blood-donation-camp-at-prabodhankar-thackrey-sports.jpg?s=2048x2048&w=gi&k=20&c=X7K8XZlv3T-3lP3Ne-myxQGoVc-Siz1HJVKhsO2ROgU=", alt: 'Blood Help', text: "Blood bank services that you can trust" },
        { src: "https://media.gettyimages.com/id/1241296374/photo/india-health-blood-donation.jpg?s=2048x2048&w=gi&k=20&c=ns7nOd9X8g_SWSTYXNENClMBD4rpDF3TaRMua-M3PL4=", alt: 'blood bank' },
        { src: "https://media.gettyimages.com/id/1224905702/photo/covid-19-trial-treatment-at-the-institute-of-liver-and-biliary-sciences-plasma-bank.jpg?s=2048x2048&w=gi&k=20&c=9Ypk6sGb9DWSiTbZ_20fBi-eUlpEgnGcOwgO6icZQcs=", alt: 'No Medi image', text: "One Blood Donation Save three Lives every day" },
    ];

    const handlePrev = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    };


    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 3000);

        return () => {
            clearInterval(interval);
        };
    }, [activeIndex]);

    return (
        <div id="carouselExampleControls" className="relative" data-twe-carousel-init data-twe-ride="carousel">
            {/* Carousel items */}
            <div className="relative w-full md:h-[110vh]  overflow-hidden">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`relative float-left w-full transition-transform duration-[600ms] ease-in-out ${index === activeIndex ? 'block' : 'hidden'
                            }`}
                    >
                        <img src={image.src} className="block w-full" alt={image.alt} />

                        <div className="absolute inset-0 flex md:pb-96 font-bold items-center justify-center bg-black bg-opacity-35 text-white md:text-6xl text-[16px]">
                            <p className='md:w-[48rem]'>{image.text}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Carousel controls - prev item */}
            <button
                className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none"
                type="button"
                onClick={handlePrev}
            >
                <span className="inline-block h-8 w-8">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </span>
                <span className="sr-only">Previous</span>
            </button>

            {/* Carousel controls - next item */}
            <button
                className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none"
                type="button"
                onClick={handleNext}
            >
                <span className="inline-block h-8 w-8">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </span>
                <span className="sr-only">Next</span>
            </button>
        </div>
    );
};

export default Carousel;
