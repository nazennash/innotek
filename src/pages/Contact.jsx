import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ContactUs } from '../components/ContactUs';

export const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <ContactUs />        
      </main>
      <Footer />
    </div>
  );
};