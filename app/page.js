import AboutUs from './components/AboutUs'
import Features from './components/Features'
import ContactUs from './components/ContactUs'
import Brands from './components/Brands'
import Descriptions from './components/Descriptions'
import Carousel from './components/Carousel'

export default function Home() {
  return (
    <>
      <Carousel />
      <AboutUs />
      <Descriptions />
      <Brands />
      <Features />
      <ContactUs />
    </>

  )
}
