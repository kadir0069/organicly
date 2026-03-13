import { useState } from 'react'
import Hero from './components/Hero'
import './App.css'
import Navbar from './components/NavBar'
import Problem from './components/Problem'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Testimonial from './components/Testimonial'
import Checkout from './components/Checkout'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <Navbar />
    <Hero />
    <Problem />
    <Features />
    <Testimonial />
    <Pricing   />
    <Checkout />
    <Footer />
    </>
  )
}

export default App
