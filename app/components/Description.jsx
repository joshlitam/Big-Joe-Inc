import React from 'react'
import CountUp from 'react-countup'
import Typer from './Typer'
import ScrollTrigger from 'react-scroll-trigger'
import { useState } from 'react'

const Description = ({ text, start, end }) => {
    const [counterOn, setCounterOn] = useState(false)
    return (
        <div className="description-content flex flex-col justify-center gap-8 w-full">
            <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                <div className="div description-left flex justify-center items-center">
                    <div className="div description-box min-w-36 w-36 h-36 bg-red-500 border-red border-2 rounded-xl flex justify-center items-center text-white text-5xl">
                        {counterOn && <p><CountUp start={start} end={end} duration={3} /></p>}
                    </div>
                </div>
            </ScrollTrigger>

            <div className="div description-right flex justify-start items-center">
                <div className="description-text flex justify-center items-center text-xl font-bold text-right text-gray-500 w-full">
                    <Typer text={text}></Typer>
                </div>
            </div>
        </div>
    )
}

export default Description
