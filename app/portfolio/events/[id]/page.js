'use client'
import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Event from '@/app/components/portfolio/eventComponents/Event'
import useSWR from 'swr'
import Image from 'next/image'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

const page = () => {
    const params = useParams()
    const id = params.id
    const { data, error } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/api/events/${id}`, fetcher)

    if (error) return <div className='h-screen w-screen'>failed to load..</div>
    if (!data) return <div className='h-screen w-screen flex justify-center items-center'><Image src='/img/loading.png' width={200} height={200} /></div>
    const event = data.event

    return (
        <Event image1={event.primaryImage} image2={event.supportingImage[0]} image3={event.supportingImage[1]} image4={event.supportingImage[2]} eventName={event.eventName} description={event.EventDescription} tags={event.tags} />

    )
}

export default page
