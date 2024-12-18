import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Showcase from '../components/Showcase';
import UseCases from '../components/UseCases';
import Pricing from '../components/Pricing';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <Hero />
      <Features />
      <Showcase />
      <UseCases />
      <Pricing />
      <Footer />
    </div>
  );
}