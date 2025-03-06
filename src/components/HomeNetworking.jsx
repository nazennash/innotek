import React from 'react';

export const HomeNetworking = () => {
  return (
    <>
      <section className="text-gray-600 body-font bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="container px-5 py-24 mx-auto">
          {/* Header Section */}
          <div className="text-center mb-20 animate-fadeIn">
            <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
              Home Networking Solutions
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Secure and optimize your home network with advanced solutions from Sophos, Fortigate, and Ruijie Cloud. Enjoy seamless connectivity, robust security, and easy management.
            </p>
          </div>

          {/* Core Components Section */}
          <div className="text-center mb-20">
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
              Core Components of Home Networking
            </h2>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              A home network is built on several key components that work together to provide seamless connectivity and resource sharing.
            </p>
            <div className="flex flex-wrap justify-center mt-10">
              {/* Router */}
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:bg-gradient-to-br hover:from-white hover:to-blue-50">
                  <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-4">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                  </div>
                  <h2 className="text-lg font-medium title-font mb-2">Router</h2>
                  <p className="leading-relaxed text-base">
                    The central hub of a home network, distributing internet access to all connected devices.
                  </p>
                </div>
              </div>

              {/* Modem */}
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:bg-gradient-to-br hover:from-white hover:to-blue-50">
                  <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-4">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <h2 className="text-lg font-medium title-font mb-2">Modem</h2>
                  <p className="leading-relaxed text-base">
                    Connects the home network to the internet service provider (ISP).
                  </p>
                </div>
              </div>

              {/* Switch */}
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:bg-gradient-to-br hover:from-white hover:to-blue-50">
                  <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-4">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                      <circle cx="12" cy="5" r="3"></circle>
                      <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                    </svg>
                  </div>
                  <h2 className="text-lg font-medium title-font mb-2">Switch</h2>
                  <p className="leading-relaxed text-base">
                    Connects multiple wired devices to the network, directing data efficiently.
                  </p>
                </div>
              </div>

              {/* Access Point */}
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:bg-gradient-to-br hover:from-white hover:to-blue-50">
                  <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-4">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <h2 className="text-lg font-medium title-font mb-2">Access Point</h2>
                  <p className="leading-relaxed text-base">
                    Extends Wi-Fi coverage to eliminate dead zones in your home.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Types of Networks Section */}
          <div className="text-center mb-20">
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
              Types of Home Networks
            </h2>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Home networks can be set up in different ways, depending on your needs and preferences.
            </p>
            <div className="flex flex-wrap justify-center mt-10">
              {/* Wired Network */}
              <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:bg-gradient-to-br hover:from-white hover:to-blue-50">
                  <h2 className="text-lg font-medium title-font mb-2">Wired Network</h2>
                  <p className="leading-relaxed text-base">
                    Uses Ethernet cables for fast and reliable connections. Ideal for high-bandwidth devices like gaming consoles.
                  </p>
                </div>
              </div>

              {/* Wireless Network */}
              <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:bg-gradient-to-br hover:from-white hover:to-blue-50">
                  <h2 className="text-lg font-medium title-font mb-2">Wireless Network</h2>
                  <p className="leading-relaxed text-base">
                    Uses Wi-Fi for flexible and convenient connectivity. Perfect for mobile devices like smartphones and laptops.
                  </p>
                </div>
              </div>

              {/* Hybrid Network */}
              <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:bg-gradient-to-br hover:from-white hover:to-blue-50">
                  <h2 className="text-lg font-medium title-font mb-2">Hybrid Network</h2>
                  <p className="leading-relaxed text-base">
                    Combines wired and wireless connections for the best of both worlds: speed and flexibility.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Call-to-Action Section */}
          <div className="text-center mt-20">
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
              Ready to Upgrade Your Home Network?
            </h2>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Choose the best home networking solution for your needs and enjoy seamless connectivity and robust security.
            </p>
            <div className="mt-6">
              <button className="inline-flex text-white bg-gradient-to-r from-blue-500 to-purple-600 border-0 py-3 px-8 focus:outline-none hover:from-blue-600 hover:to-purple-700 rounded-lg text-lg transform hover:scale-105 transition-all duration-300 hover:shadow-lg">
                Get Started Now
              </button>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }
      `}</style>
    </>
  );
};