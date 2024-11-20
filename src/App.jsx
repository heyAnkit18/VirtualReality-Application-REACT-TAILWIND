import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeatureSection from './components/FeatureSection'
import Pricing from './components/Pricing'
import Workflow from './components/Workflow'


const App = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <FeatureSection/>
      <Workflow/>
      <Pricing/>
      
     
    </div>
  )
}

export default App