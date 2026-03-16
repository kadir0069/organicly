import React, { useState } from 'react' // useState ইমপোর্ট করতে হবে
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
  const [selectedPackage, setSelectedPackage] = useState('1');

  const handleOrderSelection = (packageId) => {
    setSelectedPackage(packageId); 
    const element = document.getElementById('checkout-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar onOrderClick={handleOrderSelection} />
      <Hero onOrderClick={handleOrderSelection} />
      <Problem />
      <Features />
      <Testimonial />
      <Pricing onOrderClick={handleOrderSelection} />
      <Checkout 
        selectedPackage={selectedPackage} 
        setSelectedPackage={setSelectedPackage} 
      />
      <Footer />
    </div>
  )
}

export default App