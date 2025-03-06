import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import TestimonialsCarousel from '../components/Testimonials';

export const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        nash
        <TestimonialsCarousel />
      </main>
      <Footer />
    </div>
  );
};