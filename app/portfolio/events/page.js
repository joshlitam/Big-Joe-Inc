import Hero from '@/app/components/portfolio/Hero'
import EventTemplate from '@/app/components/portfolio/EventTemplate'
import RootLayout from '@/app/layout'
import React from 'react'
import Footer from '@/app/components/Footer'

const page = () => {
  return (
    <RootLayout>
      <Hero />
      <EventTemplate />
      <Footer />
    </RootLayout>

  )
}

export default page
