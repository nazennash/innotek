import React, { useEffect } from 'react';
import { ArrowRight, ShieldCheck, Flame, Video, Home, Server, Lock, Users, Cog, Globe, Smartphone } from 'lucide-react';

const ServiceDisplay = () => {
  useEffect(() => {
    // Simple fade-in animation
    const elements = document.querySelectorAll('.animate-fade-in');
    elements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.remove('opacity-0');
        element.classList.add('opacity-100');
      }, index * 200);
    });
  }, []);

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        {/* Endpoint Security */}
        <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col animate-fade-in opacity-0 transition-opacity duration-500">
          <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0 transition-all duration-300 hover:bg-indigo-200 hover:scale-105">
            <ShieldCheck className="sm:w-16 sm:h-16 w-10 h-10" />
          </div>
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Endpoint Security</h2>
            <p className="leading-relaxed text-base">Protect your devices with advanced threat detection, real-time monitoring, and zero-day vulnerability prevention across all endpoints in your network.</p>
            <a className="mt-3 text-indigo-500 inline-flex items-center cursor-pointer group">
              Learn More
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* Firewall Protection */}
        <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col animate-fade-in opacity-0 transition-opacity duration-500">
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Firewall Protection</h2>
            <p className="leading-relaxed text-base">Implement next-generation firewall solutions with deep packet inspection, intrusion prevention, and adaptive security measures tailored to your business needs.</p>
            <a className="mt-3 text-indigo-500 inline-flex items-center cursor-pointer group">
              Learn More
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
          <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0 transition-all duration-300 hover:bg-indigo-200 hover:scale-105">
            <Flame className="sm:w-16 sm:h-16 w-10 h-10" />
          </div>
        </div>

        {/* Alarms & Surveillance */}
        <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col animate-fade-in opacity-0 transition-opacity duration-500">
          <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0 transition-all duration-300 hover:bg-indigo-200 hover:scale-105">
            <Video className="sm:w-16 sm:h-16 w-10 h-10" />
          </div>
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Alarms & Surveillance</h2>
            <p className="leading-relaxed text-base">Secure your physical assets with integrated alarm systems, AI-powered surveillance cameras, and 24/7 monitoring solutions for comprehensive protection.</p>
            <a className="mt-3 text-indigo-500 inline-flex items-center cursor-pointer group">
              Learn More
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* Home Networking */}
        <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col animate-fade-in opacity-0 transition-opacity duration-500">
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Home Networking</h2>
            <p className="leading-relaxed text-base">Create seamless home connectivity with high-performance Wi-Fi solutions, mesh networks, and smart home integration for optimal coverage and speed.</p>
            <a className="mt-3 text-indigo-500 inline-flex items-center cursor-pointer group">
              Learn More
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
          <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0 transition-all duration-300 hover:bg-indigo-200 hover:scale-105">
            <Home className="sm:w-16 sm:h-16 w-10 h-10" />
          </div>
        </div>

        {/* Campus Networking */}
        <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col animate-fade-in opacity-0 transition-opacity duration-500">
          <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0 transition-all duration-300 hover:bg-indigo-200 hover:scale-105">
            <Server className="sm:w-16 sm:h-16 w-10 h-10" />
          </div>
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Campus Networking</h2>
            <p className="leading-relaxed text-base">Design and implement enterprise-grade campus networks with scalable architecture, high availability, and centralized management for educational and corporate environments.</p>
            <a className="mt-3 text-indigo-500 inline-flex items-center cursor-pointer group">
              Learn More
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* VPN Solutions */}
        <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col animate-fade-in opacity-0 transition-opacity duration-500">
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">VPN Solutions</h2>
            <p className="leading-relaxed text-base">Secure your remote connections with enterprise VPN services featuring military-grade encryption, split tunneling, and zero-trust access controls for your workforce.</p>
            <a className="mt-3 text-indigo-500 inline-flex items-center cursor-pointer group">
              Learn More
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
          <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0 transition-all duration-300 hover:bg-indigo-200 hover:scale-105">
            <Lock className="sm:w-16 sm:h-16 w-10 h-10" />
          </div>
        </div>

        {/* CRM Implementation */}
        <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col animate-fade-in opacity-0 transition-opacity duration-500">
          <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0 transition-all duration-300 hover:bg-indigo-200 hover:scale-105">
            <Users className="sm:w-16 sm:h-16 w-10 h-10" />
          </div>
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">CRM Implementation</h2>
            <p className="leading-relaxed text-base">Transform customer relationships with customized CRM solutions that streamline sales processes, enhance customer insights, and drive revenue growth.</p>
            <a className="mt-3 text-indigo-500 inline-flex items-center cursor-pointer group">
              Learn More
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* ERP Solutions */}
        <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col animate-fade-in opacity-0 transition-opacity duration-500">
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">ERP Solutions</h2>
            <p className="leading-relaxed text-base">Optimize your business operations with integrated ERP systems that connect finance, HR, supply chain, and manufacturing for improved efficiency and decision-making.</p>
            <a className="mt-3 text-indigo-500 inline-flex items-center cursor-pointer group">
              Learn More
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
          <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0 transition-all duration-300 hover:bg-indigo-200 hover:scale-105">
            <Cog className="sm:w-16 sm:h-16 w-10 h-10" />
          </div>
        </div>

        {/* Website Development */}
        <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col animate-fade-in opacity-0 transition-opacity duration-500">
          <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0 transition-all duration-300 hover:bg-indigo-200 hover:scale-105">
            <Globe className="sm:w-16 sm:h-16 w-10 h-10" />
          </div>
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Website Development</h2>
            <p className="leading-relaxed text-base">Create stunning, responsive websites with modern design, optimized performance, and seamless user experience that captivate visitors and drive conversions.</p>
            <a className="mt-3 text-indigo-500 inline-flex items-center cursor-pointer group">
              Learn More
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* App Design Services */}
        <div className="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col animate-fade-in opacity-0 transition-opacity duration-500">
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">App Design Services</h2>
            <p className="leading-relaxed text-base">Develop intuitive mobile applications with cutting-edge UX/UI design, cross-platform compatibility, and robust backend integration for iOS and Android platforms.</p>
            <a className="mt-3 text-indigo-500 inline-flex items-center cursor-pointer group">
              Learn More
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
          <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0 transition-all duration-300 hover:bg-indigo-200 hover:scale-105">
            <Smartphone className="sm:w-16 sm:h-16 w-10 h-10" />
          </div>
        </div>

        <button className="flex mx-auto mt-20 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg transition-all duration-300 hover:shadow-lg">Request a Consultation</button>
      </div>
    </section>
  );
};

export default ServiceDisplay;