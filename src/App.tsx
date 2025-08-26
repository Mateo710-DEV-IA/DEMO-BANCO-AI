import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductsSection from './components/ProductsSection';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <ProductsSection />
        <ServicesSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;