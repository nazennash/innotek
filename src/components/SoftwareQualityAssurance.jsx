import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Link } from 'react-router-dom';

export const SoftwareQualityAssurance = () => {
  return (
    <>
      <Header />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-4xl text-3xl font-bold title-font mb-4 text-gray-900">Software Quality Assurance</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Ensure reliable, bug-free software with comprehensive QA services including test planning, automation, performance testing, and continuous quality monitoring throughout the development lifecycle.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg p-6 hover:border-indigo-500 transition-colors">
                <h2 className="text-lg font-medium title-font mb-2">Test Planning & Strategy</h2>
                <p className="leading-relaxed">Structured test plans and strategies tailored to your project scope and delivery timelines.</p>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg p-6 hover:border-indigo-500 transition-colors">
                <h2 className="text-lg font-medium title-font mb-2">Test Automation</h2>
                <p className="leading-relaxed">Automated regression and integration testing to speed up releases and maintain quality.</p>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg p-6 hover:border-indigo-500 transition-colors">
                <h2 className="text-lg font-medium title-font mb-2">Performance & Security Testing</h2>
                <p className="leading-relaxed">Load, stress, and security testing to ensure your software performs under real-world conditions.</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-12">
            <Link to="/contact" className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
