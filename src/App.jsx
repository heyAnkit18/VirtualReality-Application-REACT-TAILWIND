import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeatureSection from './components/FeatureSection';
import Pricing from './components/Pricing';
import Workflow from './components/Workflow';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      
      <section id="hero">
        <HeroSection />
      </section>
      <section id="features">
        <FeatureSection />
      </section>
      <section id="workflow">
        <Workflow />
      </section>
      <section id="pricing">
        <Pricing />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <Footer />
    </div>
  );
};

export default App;
