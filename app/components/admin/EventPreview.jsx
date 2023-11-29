import React from 'react'
import { CldImage } from 'next-cloudinary';
import Link from 'next/link';

const EventPreview = ({ events }) => {
    return (
        <div>
            <div className='grid grid-cols-4 gap-8'>
                {events.map((event) => (
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <div className="a-image-container" style={{ height: "200px", width: "200px" }}>
                            <Link href={`/admin/dashboard/${event._id}`}>
                                <CldImage className="admin-image" src={event.primaryImage} width={200} height={200} />
                            </Link>

                        </div>
                        <h2 className='text-center'>{event.eventName}</h2>

                    </div>
                ))}
            </div>
        </div>

    )
}

export default EventPreview
