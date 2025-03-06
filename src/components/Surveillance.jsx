import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const Surveillance = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const cardHover = {
    rest: { scale: 1 },
    hover: { 
      scale: 1.05,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };
  
  const buttonHover = {
    rest: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: { duration: 0.2 }
    }
  };

  const imageReveal = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.8 }
    }
  };

  return (
    <div className="overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          {/* Header Section with Animation */}
          <motion.div 
            className="text-center mb-20"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Advanced Alarms & Surveillance Systems
            </motion.h1>
            <motion.p 
              className="lg:w-2/3 mx-auto leading-relaxed text-base"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Protect your property with cutting-edge alarm systems and surveillance solutions. 
              Monitor, control, and secure your space with state-of-the-art technology.
            </motion.p>
          </motion.div>

          {/* Featured Product Banner */}
          <motion.div 
            className="mb-20 relative rounded-xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="relative">
              <img 
                src="/api/placeholder/1200/500" 
                alt="Smart Security System" 
                className="w-full object-cover h-96"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-transparent flex flex-col justify-center p-10">
                <motion.h2 
                  className="text-3xl font-bold text-white mb-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                >
                  Smart Security Solutions
                </motion.h2>
                <motion.p 
                  className="text-xl text-blue-100 mb-6 max-w-lg"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                >
                  Complete integration of alarms, cameras, and access control with AI-powered monitoring for comprehensive protection.
                </motion.p>
                <motion.button 
                  className="bg-blue-500 text-white px-8 py-3 rounded-lg font-bold inline-block w-max hover:bg-blue-600 transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1, duration: 0.8 }}
                  whileHover={{ scale: 1.05 }}
                >
                  Explore Smart Solutions
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Solution Categories */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Security Solutions</h2>
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              {['Alarms', 'Cameras', 'Access Control', 'Integration'].map((tab, index) => (
                <motion.button
                  key={tab}
                  className={`px-6 py-3 rounded-full font-medium transition-colors ${activeTab === tab.toLowerCase() ? 'bg-blue-500 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
                  onClick={() => setActiveTab(tab.toLowerCase())}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                >
                  {tab}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Product Showcase Section with Staggered Animation */}
          <motion.div 
            className="flex flex-wrap -m-4"
            variants={staggerContainer}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            {/* Alarm System Card */}
            <motion.div 
              className="p-4 md:w-1/3 sm:w-1/2 w-full"
              variants={fadeIn}
              transition={{ duration: 0.5 }}
            >
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-lg h-full flex flex-col"
                variants={cardHover}
                initial="rest"
                whileHover="hover"
              >
                <motion.div 
                  className="rounded-lg mb-6 overflow-hidden"
                  variants={imageReveal}
                >
                  <img 
                    src="/api/placeholder/400/300" 
                    alt="Smart Alarm System" 
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </motion.div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">Smart Alarm Systems</h2>
                <p className="leading-relaxed text-base mb-4 flex-grow">
                  Intelligent alarm systems with mobile alerts, remote arming/disarming, and integration with your smart home devices.
                </p>
                <ul className="list-disc list-inside mb-4 text-sm text-gray-600">
                  <li>Motion detection & glass break sensing</li>
                  <li>Mobile app control & notifications</li>
                  <li>Smart speaker integration</li>
                </ul>
                <motion.button 
                  className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg mt-auto"
                  variants={buttonHover}
                  initial="rest"
                  whileHover="hover"
                >
                  Learn More
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Surveillance Camera Card */}
            <motion.div 
              className="p-4 md:w-1/3 sm:w-1/2 w-full"
              variants={fadeIn}
              transition={{ duration: 0.5 }}
            >
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-lg h-full flex flex-col"
                variants={cardHover}
                initial="rest"
                whileHover="hover"
              >
                <motion.div 
                  className="rounded-lg mb-6 overflow-hidden"
                  variants={imageReveal}
                >
                  <img 
                    src="/api/placeholder/400/300" 
                    alt="HD Surveillance Camera" 
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </motion.div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">HD Surveillance Cameras</h2>
                <p className="leading-relaxed text-base mb-4 flex-grow">
                  High-definition cameras with night vision, motion tracking, and advanced AI-powered analytics for enhanced security.
                </p>
                <ul className="list-disc list-inside mb-4 text-sm text-gray-600">
                  <li>4K Ultra HD resolution</li>
                  <li>Facial recognition & object detection</li>
                  <li>Cloud storage & remote viewing</li>
                </ul>
                <motion.button 
                  className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg mt-auto"
                  variants={buttonHover}
                  initial="rest"
                  whileHover="hover"
                >
                  Learn More
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Access Control Card */}
            <motion.div 
              className="p-4 md:w-1/3 sm:w-1/2 w-full"
              variants={fadeIn}
              transition={{ duration: 0.5 }}
            >
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-lg h-full flex flex-col"
                variants={cardHover}
                initial="rest"
                whileHover="hover"
              >
                <motion.div 
                  className="rounded-lg mb-6 overflow-hidden"
                  variants={imageReveal}
                >
                  <img 
                    src="/api/placeholder/400/300" 
                    alt="Smart Access Control" 
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </motion.div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">Smart Access Control</h2>
                <p className="leading-relaxed text-base mb-4 flex-grow">
                  Control who enters your property with biometric verification, smart locks, and comprehensive access management.
                </p>
                <ul className="list-disc list-inside mb-4 text-sm text-gray-600">
                  <li>Fingerprint & facial recognition</li>
                  <li>Temporary access codes</li>
                  <li>Activity logging & reporting</li>
                </ul>
                <motion.button 
                  className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg mt-auto"
                  variants={buttonHover}
                  initial="rest"
                  whileHover="hover"
                >
                  Learn More
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Feature Highlight Section */}
          <motion.div 
            className="py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <div className="flex flex-wrap items-center">
              <motion.div 
                className="md:w-1/2 mb-10 md:mb-0 md:pr-10"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Integrated Security Management
                </h2>
                <p className="mb-6 text-lg">
                  Our comprehensive security platform integrates all your security needs into one easy-to-use interface. Monitor and control your entire security ecosystem from anywhere.
                </p>
                
                <motion.div 
                  className="mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0, duration: 0.5 }}
                >
                  <div className="flex items-center mb-2">
                    <div className="bg-blue-100 text-blue-500 p-2 rounded-full mr-3">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <h3 className="font-bold text-lg">Centralized Dashboard</h3>
                  </div>
                  <p className="pl-12">Access all security devices from a single intuitive interface.</p>
                </motion.div>
                
                <motion.div 
                  className="mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1, duration: 0.5 }}
                >
                  <div className="flex items-center mb-2">
                    <div className="bg-blue-100 text-blue-500 p-2 rounded-full mr-3">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="
                      http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <h3 className="font-bold text-lg">Real-time Alerts</h3>
                  </div>
                  <p className="pl-12">Receive alerts and notifications for security incidents and vulnerabilities.</p>
                </motion.div>
              </motion.div>
              <motion.div 
                className="md:w-1/2"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
              >
                <img src="/api/placeholder/600/600" alt="Security Management" className="w-full" />
              </motion.div>
            </div>
          </motion.div>
        </div>
    </section>

  </div>
  );
};