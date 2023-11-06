'use client'
import React from 'react'
import { useState, useEffect } from 'react'

const items = [
    {"eventName": "Gatorade Run", "eventDescription": "Installation of a 10' high by 20' long science booth accompanied by a team of event staff and hydration coaches.", "services": ["event activation", "installation", "fabrication"]},
    {"eventName": "PBA Draft", "eventDescription": "Fabrication of all marketing collaterals(a-boards, tarps, backdrops, etc.) as well as faciltation of the coaches drills.", "services": ["event activation", "installation", "fabrication", "sports"]},
    {"eventName": "Gatorade Run", "eventDescription": "Installation of a 10' high by 20' long science booth accompanied by a team of event staff and hydration coaches.", "services": ["event activation", "installation", "fabrication"]},
]

const services = ['fabrication', 'installation', 'manpower activation', 'merchandise']

const Feature = () => {
    const [page, setPage] = useState(1)

    const setPrev = () => {
        setPage(prev => ((prev - 1) > 0 ? prev - 1 : 1))
    }

    const setNext = () => {
        setPage(prev => ((prev + 1) >= 4 ? 1 : prev + 1))
    }

    return (
        <div className='f flex h-screen w-screen flex-col justify-center items-center pt-24'>
            <h2 className='text-7xl mb-36'>Event Portfolio</h2>
            <div className="w-full h-full f-container flex max-w-7xl gap-8">
                <div className="w-full h-full carousel-container flex-1">
                    <div className="f-carousel w-full h-1/2 bg-center bg-cover duration-700 ease-in-out flex-1 border-8 border-gray-500" style={{ backgroundImage: `url(/img/hero-pattern-${page}.jpg)` }}></div>
                    <div className="f-buttons flex justify-around mt-8">
                        <button onClick={setPrev}>left</button>
                        <button onClick={setNext}>right</button>
                    </div>
                </div>

                <div className="f-info flex-1">
                    <div className='flex flex-col justify-around w-full h-1/2 gap-8'>
                        <h2 className='text-3xl font-bold text-center'>{items[page - 1].eventName}</h2>
                        <h3 className='text-xl text-center'>{items[page - 1].eventDescription}</h3>
                        <h3 className='text-xl text-center'>Services Rendered: {items[page - 1].services.join(", ")}</h3>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Feature
