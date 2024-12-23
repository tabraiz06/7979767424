import React from 'react'
import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel'
import Slider from '../components/Slider'
import About from '../components/About'
import TrustSection from '../components/TrustSection'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='overflow-x-hidden'>
    <Navbar/>
    <Carousel/>
    <Slider/>
    <About/>
    <TrustSection/>
    <Contact/>
    <Footer/>
    </div>
  )
}

export default Home
