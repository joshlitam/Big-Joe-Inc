import Image from 'next/image'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutUs from './components/AboutUs'
import Features from './components/Features'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'
import Brands from './components/Brands'
import Descriptions from './components/Descriptions'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <Descriptions />
      <Brands />
      <Features />
      <Footer />
    </>
  )
}
