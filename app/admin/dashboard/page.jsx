'use client'
import React from 'react'
import useSWR from 'swr';
import Image from 'next/image';
import EventPreview from '@/app/components/admin/EventPreview';

const fetcher = (...args) => fetch(...args).then((res) => res.json())

const page = () => {

    const { data, error } = useSWR(`/api/events`, fetcher)
    if (error) return <div className='h-screen w-screen'>failed to load..</div>
    if (!data) return <div className='h-screen w-screen flex justify-center items-center'><Image src='/img/loading.png' width={200} height={200} alt={"loading"} /></div>
    const events = data.events

    return (
        <div className='h-screen max-w-7xl mx-auto my-4 flex flex-col gap-16'>
            <h1 className='text-3xl text-blue-800 font-bold'>Dashboard</h1>
            <EventPreview events={events}/>
            <button className='py-2 px-4 bg-gray-400 w-48 text-white rounded-lg'>Create New Event</button>
        </div>
    )
}

export default page
