'use client'
import React from 'react'
import CountUp from 'react-countup'
import Reveal from './Reveal'
import Typer from './Typer'
import Description from './Description'

const Descriptions = () => {
  return (
    <div className='descriptions-wrapper py-24 min-h-3/5 h-full flex justify-center bg-gray-200'>
      <div className="descriptions-container max-w-7xl w-full flex justify-around">
        <div className='description-item flex gap-8 justify-around w-full'>
          <Description text="NO.1 EVENT PROVIDER" start={0} end={1}/>
          <Description text="EVENTS HANDLED" start={0} end={100}/>
          <Description text="PARTNERS SATISFIED" start={0} end={50}/>
        </div>
      </div>
    </div>
  )
}

export default Descriptions
