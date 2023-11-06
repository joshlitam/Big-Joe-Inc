import Image from 'next/image'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AboutUs from '../components/AboutUs'
import Features from '../components/Features'
import ContactUs from '../components/ContactUs'
import Footer from '../components/Footer'
import Brands from '../components/Brands'
import Descriptions from '../components/Descriptions'
import RootLayout from '../layout'
import Carousel from '../components/Carousel'
import Portfolio from '../components/portfolio/Portfolio'

export default function Home() {
  return (
    <RootLayout>
      <Portfolio />
    </RootLayout>
  )
}
