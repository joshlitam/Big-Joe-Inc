import React from 'react'
import PreviewCard from './PreviewCard'
import items from '@/app/data'


const PreviewSection = () => {
    return (
        <div className='ps w-screen flex flex-col justify-center items-center pt-24 pb-24'>
            <h2 className='text-4xl text-red-500 mb-24'>Event Portfolio</h2>
            <div className="pc-container w-full h-full max-w-7xl flex justify-around flex-wrap">
                {items.map((item) => (
                    <PreviewCard imageURL={item.imageURL} eventName={item.eventName}/>
                ))}
            </div>
        </div>
    )
}

export default PreviewSection 
