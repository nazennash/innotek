import React from 'react';

export const DigitalMarketting = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen text-gray-600 body-font bg-gradient-to-tr from-purple-50 via-pink-50 to-blue-50">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-6xl text-5xl mb-4 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              Elevate Your Digital Presence
            </h1>
            <p className="mb-8 leading-relaxed text-lg">
              Transform your brand with data-driven digital marketing strategies. From SEO to social media, we craft campaigns that convert visitors into loyal customers.
            </p>
            <div className="flex gap-4">
              <button className="group relative inline-flex items-center px-8 py-3 text-lg font-medium text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-full overflow-hidden transition-all duration-300 ease-in-out hover:scale-105">
                <span className="relative">Start Your Campaign</span>
              </button>
              <button className="inline-flex items-center px-8 py-3 text-lg font-medium text-purple-600 border-2 border-purple-600 rounded-full hover:bg-purple-50 transition-all duration-300">
                Free Consultation
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 relative">
            <div className="animate-float">
              <img
                className="object-cover object-center rounded-xl shadow-2xl"
                alt="Digital Marketing Dashboard"
                src="https://dummyimage.com/720x600/6D28D9/ffffff&text=Digital+Growth"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Our Digital Marketing Arsenal
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="p-6 bg-gradient-to-br from-white to-purple-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-12 h-12 inline-flex items-center justify-center rounded-xl bg-purple-100 text-purple-600 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-purple-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="p-6">
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-purple-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Ready to Dominate Digital?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's create a customized digital marketing strategy that puts you ahead of the competition.
            </p>
            <button className="inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105">
              Schedule Your Strategy Session
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

const services = [
  {
    title: "SEO Optimization",
    description: "Boost your search rankings and drive organic traffic with data-driven SEO strategies.",
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
  },
  {
    title: "Social Media Marketing",
    description: "Engage your audience and build brand loyalty across all social platforms.",
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" /></svg>
  },
  {
    title: "Content Marketing",
    description: "Create compelling content that resonates with your target audience and drives conversions.",
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
  },
  {
    title: "PPC Advertising",
    description: "Maximize ROI with targeted paid advertising campaigns across search and social.",
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  },
  {
    title: "Email Marketing",
    description: "Nurture leads and boost customer retention with personalized email campaigns.",
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
  },
  {
    title: "Analytics & Reporting",
    description: "Track, measure, and optimize your campaigns with comprehensive analytics.",
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
  }
];

const stats = [
  { value: "500+", label: "Clients Served" },
  { value: "98%", label: "Client Retention" },
  { value: "10M+", label: "Leads Generated" },
  { value: "250%", label: "Average ROI" }
];