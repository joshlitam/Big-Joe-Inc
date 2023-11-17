'use client'
import PreviewSection from '../components/portfolio/PreviewSection'
import useSWR from 'swr';
import Image from 'next/image';


const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function Home() {
  const { data, error } = useSWR(`/api/events`, fetcher)

  if (error) return <div className='h-screen w-screen'>failed to load..</div>
  if (!data) return <div className='h-screen w-screen flex justify-center items-center'><Image src='/img/loading.png' width={200} height={200} alt={"loading"} /></div>
  const event = data.events
  console.log(event)

  return (
    <PreviewSection events={event} />
  )
}
