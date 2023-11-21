import React from 'react'
import CountUp from 'react-countup'
import Typer from './Typer'

const Description = ({text, start, end}) => {
    return (
        <div className="description-content flex flex-col justify-center gap-8 w-full">
            <div className="div description-left flex justify-center items-center">
                <div className="div description-box min-w-36 w-36 h-36 bg-red-500 border-red border-2 rounded-xl flex justify-center items-center text-white text-5xl">
                    <p><CountUp start={start} end={end}/></p>
                </div>
            </div>
            <div className="div description-right flex justify-start items-center">
                <div className="description-text flex justify-center items-center text-xl font-bold text-right text-gray-500 w-full">
                    <Typer text={text}></Typer>
                </div>
            </div>
        </div>
    )
}

export default Description
