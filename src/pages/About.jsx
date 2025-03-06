import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { AboutUs } from '../components/AboutUs';

export const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <AboutUs />
      </main>
      <Footer />
    </div>
  );
};