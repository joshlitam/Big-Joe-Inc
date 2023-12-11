'use client'
import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import useSWR from 'swr'
import Image from 'next/image'
import AdminEvent from '@/app/components/admin/AdminEvent'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

const page = () => {
    // getting id from url "localhost3000:/admin/[id]"
    const params = useParams()
    const id = params.id
    // fetching data thru api route
    const { data, error } = useSWR(`/api/events/${id}`, fetcher)

    if (error) return <div className='h-screen w-screen'>failed to load..</div>
    if (!data) return <div className='h-screen w-screen flex justify-center items-center'><Image src='/img/loading.png' width={200} height={200} /></div>
    const event = data.event
    const pictures = [event.primaryImage, event.supportingImage[0], event.supportingImage[1], event.supportingImage[2]]

    return (
        <AdminEvent pictures={pictures} eventName={event.eventName} description={event.description} tags={event.tags} />
    )
}

export default page
