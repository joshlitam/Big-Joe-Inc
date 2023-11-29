'use client'
import { useRouter, useParams } from 'next/navigation'
import React, { useState } from 'react'
import useSWR from 'swr'
import Image from 'next/image'
import { FiEdit } from "react-icons/fi";
import { FaRegTrashAlt } from "react-icons/fa";

const fetcher = (...args) => fetch(...args).then((res) => res.json())

const page = () => {
    const router = useRouter()
    const [editMode, setEditMode] = useState(false)
    const params = useParams()
    const id = params.id
    const { data, error } = useSWR(`/api/events/${id}`, fetcher)

    if (error) return <div className='h-screen w-screen'>failed to load..</div>
    if (!data) return <div className='h-screen w-screen flex justify-center items-center'><Image src='/img/loading.png' width={200} height={200} /></div>
    const event = data.event

    const handleDelete = async (identifier) => {
        console.log(identifier)
        const confirmed = confirm('are you sure?')
        if (confirmed) {
            try {
                fetch(`/api/events?id=${identifier}`, {
                    method: "DELETE", headers: {
                        "Content-Type": "application/json"
                    }, body: JSON.stringify({ id: identifier })
                })
                console.log("deleted")
                router.push("/admin/dashboard")
            } catch (error) {
                console.error(error)
            }

        }
    }

    return (
        <div className="flex justify-around">
            <button onClick={() => {
                if (editMode) {
                    setEditMode(false)
                } else {
                    setEditMode(true)
                }
                console.log(`Edit mode is set to: ${editMode}`)
            }
            }><FiEdit /></button>
            <h2 className='text-center'>{event.eventName}</h2>
            <button onClick={() => handleDelete(event._id)}><FaRegTrashAlt /></button>
        </div>

    )
}

export default page
