import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const Firewall = () => {
  const [isVisible, setIsVisible] = useState(false);
  
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
              Advanced Firewall Protection
            </motion.h1>
            <motion.p 
              className="lg:w-2/3 mx-auto leading-relaxed text-base"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Secure your network with industry-leading firewall solutions from Sophos, Fortigate, and Ruijie Cloud. 
              Monitor, configure, and control your network remotely with ease.
            </motion.p>
          </motion.div>

          {/* Product Showcase Section with Staggered Animation */}
          <motion.div 
            className="flex flex-wrap -m-4"
            variants={staggerContainer}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            {/* Sophos Card */}
            <motion.div 
              className="p-4 md:w-1/3 sm:w-1/2 w-full"
              variants={fadeIn}
              transition={{ duration: 0.5 }}
            >
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-lg"
                variants={cardHover}
                initial="rest"
                whileHover="hover"
              >
                <div className="h-24 flex items-center justify-center mb-6 bg-blue-500 rounded-md text-white font-bold">
                  Sophos
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Sophos Firewall</h2>
                <p className="leading-relaxed text-base mb-4">
                  Sophos provides next-gen firewall protection with advanced threat intelligence, deep learning, and automated response capabilities.
                </p>
                <ul className="list-disc list-inside mb-4 text-sm text-gray-600">
                  <li>AI-powered threat detection</li>
                  <li>Integrated endpoint protection</li>
                  <li>Cloud-based management</li>
                </ul>
                <motion.button 
                  className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg"
                  variants={buttonHover}
                  initial="rest"
                  whileHover="hover"
                >
                  Learn More
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Fortigate Card */}
            <motion.div 
              className="p-4 md:w-1/3 sm:w-1/2 w-full"
              variants={fadeIn}
              transition={{ duration: 0.5 }}
            >
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-lg"
                variants={cardHover}
                initial="rest"
                whileHover="hover"
              >
                <div className="h-24 flex items-center justify-center mb-6 bg-red-500 rounded-md text-white font-bold">
                  Fortigate
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Fortigate Firewall</h2>
                <p className="leading-relaxed text-base mb-4">
                  Fortigate offers high-performance firewall solutions with advanced security features, including intrusion prevention and SSL inspection.
                </p>
                <ul className="list-disc list-inside mb-4 text-sm text-gray-600">
                  <li>High-speed threat prevention</li>
                  <li>Unified threat management</li>
                  <li>Scalable for enterprises</li>
                </ul>
                <motion.button 
                  className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg"
                  variants={buttonHover}
                  initial="rest"
                  whileHover="hover"
                >
                  Learn More
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Ruijie Cloud Card */}
            <motion.div 
              className="p-4 md:w-1/3 sm:w-1/2 w-full"
              variants={fadeIn}
              transition={{ duration: 0.5 }}
            >
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-lg"
                variants={cardHover}
                initial="rest"
                whileHover="hover"
              >
                <div className="h-24 flex items-center justify-center mb-6 bg-green-500 rounded-md text-white font-bold">
                  Ruijie Cloud
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Ruijie Cloud</h2>
                <p className="leading-relaxed text-base mb-4">
                  Ruijie Cloud enables seamless network monitoring, configuration, and remote control of devices, all from a centralized platform.
                </p>
                <ul className="list-disc list-inside mb-4 text-sm text-gray-600">
                  <li>Centralized network management</li>
                  <li>Real-time monitoring</li>
                  <li>Remote device configuration</li>
                </ul>
                <motion.button 
                  className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
                  variants={buttonHover}
                  initial="rest"
                  whileHover="hover"
                >
                  Learn More
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* How It Works Section with Animation */}
          <motion.div 
            className="text-center mt-20"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.h2 
              className="text-3xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              How It Works
            </motion.h2>
            <motion.p 
              className="lg:w-2/3 mx-auto leading-relaxed text-base"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Our firewall solutions provide comprehensive protection for your network. Here's how they work:
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap justify-center mt-10"
              variants={staggerContainer}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
            >
              {/* Step 1 */}
              <motion.div 
                className="p-4 md:w-1/3 sm:w-1/2 w-full"
                variants={fadeIn}
                transition={{ duration: 0.5 }}
              >
                <motion.div 
                  className="bg-white p-6 rounded-lg shadow-lg"
                  variants={cardHover}
                  initial="rest"
                  whileHover="hover"
                >
                  <motion.div 
                    className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-4"
                    whileHover={{ rotate: 360, transition: { duration: 0.6 } }}
                  >
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                  </motion.div>
                  <h2 className="text-lg font-medium title-font mb-2">Step 1: Deploy</h2>
                  <p className="leading-relaxed text-base">
                    Install the firewall solution on your network. It integrates seamlessly with your existing infrastructure.
                  </p>
                </motion.div>
              </motion.div>

              {/* Step 2 */}
              <motion.div 
                className="p-4 md:w-1/3 sm:w-1/2 w-full"
                variants={fadeIn}
                transition={{ duration: 0.5 }}
              >
                <motion.div 
                  className="bg-white p-6 rounded-lg shadow-lg"
                  variants={cardHover}
                  initial="rest"
                  whileHover="hover"
                >
                  <motion.div 
                    className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-4"
                    whileHover={{ rotate: 360, transition: { duration: 0.6 } }}
                  >
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </motion.div>
                  <h2 className="text-lg font-medium title-font mb-2">Step 2: Monitor</h2>
                  <p className="leading-relaxed text-base">
                    Use the centralized dashboard to monitor network traffic, detect threats, and analyze performance in real time.
                  </p>
                </motion.div>
              </motion.div>

              {/* Step 3 */}
              <motion.div 
                className="p-4 md:w-1/3 sm:w-1/2 w-full"
                variants={fadeIn}
                transition={{ duration: 0.5 }}
              >
                <motion.div 
                  className="bg-white p-6 rounded-lg shadow-lg"
                  variants={cardHover}
                  initial="rest"
                  whileHover="hover"
                >
                  <motion.div 
                    className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-4"
                    whileHover={{ rotate: 360, transition: { duration: 0.6 } }}
                  >
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                      <circle cx="12" cy="5" r="3"></circle>
                      <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                    </svg>
                  </motion.div>
                  <h2 className="text-lg font-medium title-font mb-2">Step 3: Protect</h2>
                  <p className="leading-relaxed text-base">
                    Automatically block threats, configure devices remotely, and ensure your network remains secure 24/7.
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Call-to-Action Section with Animation */}
          <motion.div 
            className="text-center mt-20"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.h2 
              className="text-3xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              Ready to Secure Your Network?
            </motion.h2>
            <motion.p 
              className="lg:w-2/3 mx-auto leading-relaxed text-base"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              Choose the best firewall solution for your business and enjoy peace of mind with top-tier protection.
            </motion.p>
            <motion.div 
              className="mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              <motion.button 
                className="inline-flex text-white bg-blue-500 border-0 py-3 px-8 focus:outline-none hover:bg-blue-600 rounded-lg text-lg"
                variants={buttonHover}
                initial="rest"
                whileHover="hover"
                >
                Book A demo
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};