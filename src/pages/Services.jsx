import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import ServiceDisplay from '../components/ServiceDisplay';

export const Services = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <ServiceDisplay />
      </main>
      <Footer />
    </div>
  );
};