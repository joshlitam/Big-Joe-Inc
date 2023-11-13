import Hero from '@/app/components/portfolio/Hero'
import EventTemplate from '@/app/components/portfolio/EventTemplate'
import RootLayout from '@/app/layout'
import React from 'react'
import Footer from '@/app/components/Footer'
import Carousel from '@/app/components/Carousel'

const page = () => {
  return (
    <RootLayout>
      <Carousel />
      <EventTemplate />
      <Footer />
    </RootLayout>

  )
}

export default page
