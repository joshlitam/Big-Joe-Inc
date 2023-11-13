'use client'
import React from 'react'
import EventDescription from '@/app/components/portfolio/EventDescription'
import { CldImage } from 'next-cloudinary'

const page = async ({ params }) => {
    const {id} = params
    const getEvent = async () => {
        try {
            const res = await fetch(`http://localhost:3000/api/events/${id}`)
            if (!res.ok) {
                throw new Error('Failewd to fetch event')
            }

            return res.json()
        } catch (error) {
            console.log("Error loading event", error)
        }
    }
    const { event } = await getEvent()
    return (
        <div>
            <div className='et-wrapper h-screen w-screen flex justify-center items-center'>
                <div className='et-container flex justify-center items-center max-w-7xl px-6'>
                    <div className='flex flex-col gap-4'>
                        <CldImage src={'dw4zjdp8qywsucxsndwj'} width={800} height={700} />
                        <div className='flex gap-4 justify-center items-center'>
                            <CldImage src={'dw4zjdp8qywsucxsndwj'} width={100} height={100} />
                            <CldImage src={'dw4zjdp8qywsucxsndwj'} width={100} height={100} />
                            <CldImage src={'dw4zjdp8qywsucxsndwj'} width={100} height={100} />

                        </div>
                    </div>
                    <EventDescription eventName={event.eventName} eventDescription={event.EventDescription} tags={event.tags} />
                </div>
            </div>
        </div >
    )
}

export default page
