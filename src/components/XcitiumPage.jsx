import React, { useState } from 'react';

export const XcitiumPage = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 via-indigo-800 to-indigo-900 h-[80vh]">
        <div className="absolute inset-0 bg-[url('/cyber-pattern.png')] opacity-10"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Next-Gen Cybersecurity for the Digital Age
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Protect your business with AI-powered security that never sleeps
            </p>
            <div className="flex gap-4">
              <button className="bg-white text-indigo-900 px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all">
                Get Started
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-900 transition-all">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Header Section */}
      <section className="text-gray-600 body-font bg-gradient-to-br from-gray-50 to-indigo-50">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Xcitium Cybersecurity Solutions</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Protect your business with Xcitium's cutting-edge cybersecurity solutions. Tailored to your needs, Xcitium offers advanced threat detection, endpoint protection, and managed security services.
            </p>
          </div>

          {/* Steps Section */}
          <div className="flex flex-wrap justify-center mb-20">
            {/* Step 1 */}
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full transform hover:scale-105 transition-transform duration-300">
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <h2 className="text-lg font-medium title-font mb-2">Step 1: Assess Your Needs</h2>
                <p className="leading-relaxed text-base">
                  Evaluate your business's cybersecurity requirements. Identify vulnerabilities and areas for improvement.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full transform hover:scale-105 transition-transform duration-300">
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <h2 className="text-lg font-medium title-font mb-2">Step 2: Choose Your Plan</h2>
                <p className="leading-relaxed text-base">
                  Select from Xcitium's flexible plans, designed to meet the needs of businesses of all sizes.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full transform hover:scale-105 transition-transform duration-300">
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                    <circle cx="12" cy="5" r="3"></circle>
                    <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                  </svg>
                </div>
                <h2 className="text-lg font-medium title-font mb-2">Step 3: Customize Your Solution</h2>
                <p className="leading-relaxed text-base">
                  Tailor Xcitium's features to your specific needs, ensuring maximum protection and efficiency.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full transform hover:scale-105 transition-transform duration-300">
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <h2 className="text-lg font-medium title-font mb-2">Step 4: Deploy & Protect</h2>
                <p className="leading-relaxed text-base">
                  Implement Xcitium's solutions and enjoy unparalleled cybersecurity protection for your business.
                </p>
              </div>
            </div>
          </div>

          {/* How It Works Section */}
          <div className="text-center mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How Xcitium Works</h2>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Xcitium leverages advanced technologies to provide real-time protection against cyber threats. Here's how it works:
            </p>
            <div className="flex flex-wrap justify-center mt-10">
              {/* Feature 1 */}
              <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                  </div>
                  <h2 className="text-lg font-medium title-font mb-2">Real-Time Threat Detection</h2>
                  <p className="leading-relaxed text-base">
                    Xcitium uses AI-powered algorithms to detect and neutralize threats in real time, ensuring your systems are always protected.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <h2 className="text-lg font-medium title-font mb-2">Endpoint Protection</h2>
                  <p className="leading-relaxed text-base">
                    Secure all endpoints, including laptops, desktops, and mobile devices, with Xcitium's advanced endpoint protection.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                      <circle cx="12" cy="5" r="3"></circle>
                      <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                    </svg>
                  </div>
                  <h2 className="text-lg font-medium title-font mb-2">24/7 Monitoring</h2>
                  <p className="leading-relaxed text-base">
                    Xcitium's team of experts monitors your systems around the clock, providing immediate response to any threats.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Unique Features Section */}
          <div className="text-center mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Makes Xcitium Stand Out</h2>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Xcitium is not just another cybersecurity solution. Here's what sets us apart:
            </p>
            <div className="flex flex-wrap justify-center mt-10">
              {/* Feature 1 */}
              <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h2 className="text-lg font-medium title-font mb-2">Zero-Trust Architecture</h2>
                  <p className="leading-relaxed text-base">
                    Xcitium operates on a zero-trust model, ensuring that no user or device is trusted by default, even within your network.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h2 className="text-lg font-medium title-font mb-2">Automated Threat Response</h2>
                  <p className="leading-relaxed text-base">
                    Xcitium automatically responds to threats, isolating and neutralizing them before they can cause harm.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h2 className="text-lg font-medium title-font mb-2">Scalable Solutions</h2>
                  <p className="leading-relaxed text-base">
                    Whether you're a small business or a large enterprise, Xcitium's solutions scale to meet your needs.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Product Section */}
          <div className="flex flex-col items-center text-center">
            <img
              className="xl:w-1/4 lg:w-1/3 md:w-1/2 w-2/3 block mx-auto mb-10 object-cover object-center rounded-lg shadow-lg"
              alt="Xcitium Product"
              src="https://dummyimage.com/720x600"
            />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Xcitium Advanced Protection</h2>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Xcitium offers a comprehensive suite of cybersecurity tools, including endpoint detection, threat intelligence, and 24/7 monitoring. Protect your business from evolving threats with ease.
            </p>
            <div className="mt-6">
              <span className="text-2xl font-bold text-gray-900">Starting at $99.99/month</span>
            </div>
            <div className="mt-6">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-3 px-8 focus:outline-none hover:bg-indigo-600 rounded-lg text-lg transform hover:scale-105 transition-transform duration-300">
                Get Started Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* New Statistics Section */}
      <div className="bg-indigo-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">99.9%</div>
              <div className="text-indigo-200">Threat Detection Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-indigo-200">Active Monitoring</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10k+</div>
              <div className="text-indigo-200">Protected Companies</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">0.1ms</div>
              <div className="text-indigo-200">Response Time</div>
            </div>
          </div>
        </div>
      </div>

      {/* New Testimonials Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <img
                    src={`https://i.pravatar.cc/60?img=${i}`}
                    alt="Avatar"
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="ml-4">
                    <div className="font-semibold">John Doe</div>
                    <div className="text-sm text-gray-500">CEO, Tech Corp</div>
                  </div>
                </div>
                <p className="text-gray-600">
                  "Xcitium has transformed our security infrastructure. Their AI-powered solutions have prevented numerous potential breaches."
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* New FAQ Section */}
      <div className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          {[
            {
              q: "How does Xcitium's AI detection work?",
              a: "Our AI system continuously learns from global threat patterns, providing real-time protection against new and emerging threats."
            },
            {
              q: "What makes Xcitium different from other solutions?",
              a: "Xcitium's unique approach combines zero-trust architecture with AI-powered threat detection, providing unmatched security."
            },
            {
              q: "Can Xcitium scale with my business?",
              a: "Yes, our solutions are fully scalable and can adapt to businesses of any size, from startups to enterprises."
            }
          ].map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="w-full p-4 text-left bg-white rounded-lg shadow-md focus:outline-none"
                onClick={() => toggleFaq(index)}
              >
                <div className="flex justify-between items-center">
                  <span className="font-semibold">{faq.q}</span>
                  <span className={`transform transition-transform ${activeFaq === index ? 'rotate-180' : ''}`}>
                    ↓
                  </span>
                </div>
                {activeFaq === index && (
                  <p className="mt-4 text-gray-600">{faq.a}</p>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="bg-gradient-to-r from-indigo-900 to-blue-900 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto bg-white rounded-xl p-8 shadow-xl">
            <h2 className="text-3xl font-bold text-center mb-8">Raise a concern</h2>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows="4"
                  className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-500"
                ></textarea>
              </div>
              <button className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                Send Concern
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};