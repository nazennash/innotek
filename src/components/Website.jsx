import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Website = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section with Gradient Animation */}
      <section className="relative min-h-screen flex items-center text-gray-600 body-font">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-indigo-500/10 to-purple-500/10 animate-gradient-xy"></div>
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center relative">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
          >
            <h1 className="title-font sm:text-6xl text-5xl mb-8 font-extrabold text-gray-900">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                Create Stunning,
              </span>
              <br />
              Modern Websites
            </h1>
            <p className="mb-8 leading-relaxed text-lg text-gray-600">
              Transform your digital presence with cutting-edge design, blazing-fast performance, 
              and extraordinary user experiences that convert visitors into loyal customers.
            </p>
            <div className="flex gap-4">
              <button className="group relative inline-flex items-center px-8 py-3 text-lg font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
                <span className="relative z-10">Get Started Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button className="inline-flex items-center px-8 py-3 text-lg font-medium text-gray-700 bg-white border-2 border-gray-200 rounded-full hover:bg-gray-50 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                Learn More
              </button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"
          >
            <img
              className="object-cover object-center rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              alt="Website Development"
              src="https://dummyimage.com/720x600/3b82f6/ffffff&text=Website+Development"
            />
          </motion.div>
        </div>
      </section>

      {/* Features Grid with Hover Effects */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container px-5 mx-auto" data-aos="fade-up">
          <div className="text-center mb-20">
            <h2 className="sm:text-5xl text-4xl font-bold text-gray-900 mb-6">
              Why Choose Our
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                {' '}Website Services
              </span>
            </h2>
            {/* ...existing code for features grid... */}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature cards with enhanced styling and animations */}
            {[
              {
                title: "Modern Design",
                description: "Create visually stunning websites with modern design principles",
                icon: "💎"
              },
              {
                title: "Lightning Fast",
                description: "Optimized performance with best-in-class loading speeds",
                icon: "⚡"
              },
              {
                title: "User-Centric",
                description: "Intuitive interfaces that keep users engaged",
                icon: "🎯"
              }
            ].map((feature, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials with Card Hover Effects */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container px-5 mx-auto">
          {/* ...existing testimonials code with enhanced styling... */}
        </div>
      </section>

      {/* Modern CTA Section */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-10"></div>
        <div className="container px-5 mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-8">Ready to Transform Your Online Presence?</h2>
            <button className="inline-flex items-center px-8 py-3 text-lg font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300">
              Start Your Journey
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};