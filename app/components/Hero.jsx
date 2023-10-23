'use client'
import React from 'react'
import { useState } from 'react'

const Hero = () => {
    const [useBackground, setBackground] = useState(0)

    return (
        <div className='flex justify-center mt-12 hero-wrapper'>
            <div className='flex flex-col max-w-7xl min-w-1/4'>
                <div className='flex flex-col items-center'>
                    <h1 className="text-5xl font-bold hero-title">Events? We Got <span className='text-red-700 font-black'>YOU!</span></h1>

                    <p className="py-6 text-center text-gray-500 w-8/12 hero-text">Big Joe Inc offers end-to-end services when it comes to events! From concept creation to merchandise sourcing, all the way to event handling, Big Joe has got your event needs covered.</p>
                </div>
                <div className='hero-container mb-12'>
                    <div className="hero">
                        <div className="hero-overlay bg-opacity-20"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex gap-6 justify-center hero-buttons">
                    <button className="btn bg-red-600 text-white">Send an Inquiry!</button>
                    <button className="btn bg-green-600 text-white">See our Portfolio</button>
                </div>
            </div>
        </div>

    )
}

export default Hero
