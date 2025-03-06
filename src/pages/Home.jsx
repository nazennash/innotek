import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import TestimonialsCarousel from '../components/Testimonials';
import ServiceDisplay from '../components/ServiceDisplay';
import HomePage from '../components/HomePage';

export const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HomePage />
        <TestimonialsCarousel />
      </main>
      <Footer />
    </div>
  );
};