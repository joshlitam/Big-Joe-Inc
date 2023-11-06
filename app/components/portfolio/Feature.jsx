'use client'
import React from 'react'
import { useState, useEffect } from 'react'

const items = [
    { "eventName": "Gatorade Run", "eventDescription": "Installation of a 10' high by 20' long science booth accompanied by a team of event staff and hydration coaches.", "services": ["event activation", "installation", "fabrication"] },
    { "eventName": "PBA Draft", "eventDescription": "Fabrication of all marketing collaterals(a-boards, tarps, backdrops, etc.) as well as faciltation of the coaches drills.", "services": ["event activation", "installation", "fabrication", "sports"] },
    { "eventName": "Liter of Light", "eventDescription": "Production of all marketing collaterals and facilitation of event.", "services": ["event activation", "installation", "fabrication"] },
]

const services = ['fabrication', 'installation', 'manpower activation', 'merchandise']

const Feature = () => {
    const [page, setPage] = useState(1)

    useEffect(() => {
        let int = setInterval(() => {
          setPage(prev => ((prev + 1) >= 4 ? 1 : prev + 1));
        }, 5000)
    
        return () => clearInterval(int)
      }, [])

    const setPrev = () => {
        setPage(prev => ((prev - 1) > 0 ? prev - 1 : 3))
    }

    const setNext = () => {
        setPage(prev => ((prev + 1) >= 4 ? 1 : prev + 1))
    }

    return (
        <div className='f flex h-screen w-screen flex-col justify-center items-center pt-24 pb-24' id="portfolio">
            <h2 className='text-4xl mb-8 text-red-500'>Event Portfolio</h2>
            <div className="w-full h-full f-container flex max-w-7xl gap-8">
                <div className="f-info flex-1">
                    <div className='flex flex-col justify-around items-center w-full h-full gap-8'>
                        <h2 className='text-3xl font-bold text-center'>{items[page - 1].eventName}</h2>
                        <div className="f-carousel-container w-full h-full flex gap-4">
                            <button onClick={setPrev}>left</button>
                            <div className="f-carousel w-full h-full bg-center bg-cover duration-700 ease-in-out flex-1 border-8 border-gray-500" style={{ backgroundImage: `url(/img/hero-pattern-${page}.jpg)` }}></div>
                            <button onClick={setNext}>right</button>
                        </div>

                        <h3 className='text-xl text-center w-2/3'>{items[page - 1].eventDescription}</h3>
                        <h3 className='text-xl text-center'>Tags: <span>{items[page - 1].services.join(", ")}</span></h3>
                        <button className='border-2 px-6 py-4 bg-green-500 text-white rounded-lg'><a href="/">Back to home</a></button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Feature
