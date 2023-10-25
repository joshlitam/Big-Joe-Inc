'use client'
import React from 'react'
import { useState } from 'react'
import Navbar from './Navbar'

const Hero = () => {
    const [useBackground, setBackground] = useState(0)

    return (
        <div className='flex justify-center hero-wrapper'>
            <div className="hero h-screen">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content flex flex-col gap-12 w-full">
                    <div className="max-w-xl">
                        <div className='flex flex-col items-center'>
                            <h1 className="text-7xl font-bold hero-title">Events? We Got <span className='text-red-700 font-black'>YOU!</span></h1>
                            <p className="py-6 text-center text-white w-8/12 hero-text"><span className='text-yellow-300 font-extrabold text-xl underline'>BIG JOE INC</span> offers end-to-end services when it comes to events! From concept creation to merchandise sourcing, all the way to event handling, Big Joe has got your event needs covered.</p>
                        </div>
                    </div>
                    <div className="flex gap-6 justify-center hero-buttons">
                        <a href="#contact-us"><button className="btn w-48 bg-red-600 text-white">Send an Inquiry!</button></a>
                        <a href="https://www.facebook.com/bigjoeinc/photos" target='_blank'><button className="btn w-48 bg-green-600 text-white">See our Portfolio</button></a>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Hero
