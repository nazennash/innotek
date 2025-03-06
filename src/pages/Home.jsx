import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import TestimonialsCarousel from '../components/Testimonials';
import ServiceDisplay from '../components/ServiceDisplay';

export const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <ServiceDisplay />
        <TestimonialsCarousel />
      </main>
      <Footer />
    </div>
  );
};