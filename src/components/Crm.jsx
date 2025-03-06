import React from 'react';

export const Crm = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="text-gray-600 body-font bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          {/* Left Column: Text Content */}
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-5xl text-4xl mb-4 font-bold text-gray-900">
              Transform Your Business with Pinacore CRM
            </h1>
            <p className="mb-8 leading-relaxed text-gray-600">
              Pinacore CRM is the ultimate customer relationship management solution designed to streamline your operations, enhance customer engagement, and drive business growth.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-3 px-8 focus:outline-none hover:bg-indigo-600 rounded-lg text-lg transform hover:scale-105 transition-transform duration-300">
                Get Started Now
              </button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-3 px-8 focus:outline-none hover:bg-gray-200 rounded-lg text-lg transform hover:scale-105 transition-transform duration-300">
                Learn More
              </button>
            </div>
          </div>
          {/* Right Column: Image */}
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded-lg shadow-2xl"
              alt="Pinacore CRM Illustration"
              src="https://dummyimage.com/720x600/3b82f6/ffffff&text=Pinacore+CRM"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Pinacore CRM Section */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Pinacore CRM?</h2>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Pinacore CRM stands out with its unique features, intuitive design, and proven track record of success. Here's why businesses choose us:
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            {/* Feature 1 */}
            <div className="p-4 md:w-1/3 sm:w-1/2 w-full transform hover:scale-105 transition-transform duration-300">
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <h2 className="text-lg font-medium title-font mb-2">All-in-One Platform</h2>
                <p className="leading-relaxed text-base">
                  Manage sales, marketing, customer support, and analytics from a single, unified platform.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="p-4 md:w-1/3 sm:w-1/2 w-full transform hover:scale-105 transition-transform duration-300">
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <h2 className="text-lg font-medium title-font mb-2">AI-Powered Insights</h2>
                <p className="leading-relaxed text-base">
                  Leverage AI-driven analytics to make data-backed decisions and predict customer behavior.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="p-4 md:w-1/3 sm:w-1/2 w-full transform hover:scale-105 transition-transform duration-300">
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                    <circle cx="12" cy="5" r="3"></circle>
                    <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                  </svg>
                </div>
                <h2 className="text-lg font-medium title-font mb-2">Seamless Integrations</h2>
                <p className="leading-relaxed text-base">
                  Integrate with your favorite tools like Slack, Salesforce, and Google Workspace for a seamless workflow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Unique Selling Points Section */}
      <section className="text-gray-600 body-font bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Makes Pinacore CRM Unique?</h2>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Pinacore CRM is trusted by leading companies worldwide. Here's what sets us apart:
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            {/* USP 1 */}
            <div className="p-4 md:w-1/2 w-full">
              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Proven Track Record</h2>
                <p className="leading-relaxed text-base">
                  Used by over 10,000 businesses globally, Pinacore CRM has a proven track record of driving growth and improving customer satisfaction.
                </p>
              </div>
            </div>

            {/* USP 2 */}
            <div className="p-4 md:w-1/2 w-full">
              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Customer-Centric Design</h2>
                <p className="leading-relaxed text-base">
                  Our intuitive interface is designed with the end-user in mind, ensuring a seamless experience for your team and customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Leading Companies</h2>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Hear from businesses that trust Pinacore CRM to transform their operations.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            {/* Testimonial 1 */}
            <div className="p-4 md:w-1/2 w-full">
              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <p className="leading-relaxed mb-6">
                  "Pinacore CRM has revolutionized our customer management. The AI-powered insights have been a game-changer for our sales team."
                </p>
                <div className="inline-flex items-center">
                  <img
                    alt="Testimonial"
                    src="https://dummyimage.com/100x100/3b82f6/ffffff&text=Client+1"
                    className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-gray-900">John Doe</span>
                    <span className="text-gray-500 text-sm">CEO, GrowthCorp</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="p-4 md:w-1/2 w-full">
              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <p className="leading-relaxed mb-6">
                  "The seamless integrations and customer-centric design have made Pinacore CRM an indispensable tool for our business."
                </p>
                <div className="inline-flex items-center">
                  <img
                    alt="Testimonial"
                    src="https://dummyimage.com/100x100/3b82f6/ffffff&text=Client+2"
                    className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-gray-900">Jane Smith</span>
                    <span className="text-gray-500 text-sm">CTO, Innovate Inc.</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
            <h2 className="flex-grow sm:pr-16 text-2xl font-medium text-gray-900">
              Ready to transform your business? Join thousands of satisfied clients today!
            </h2>
            <button className="flex-shrink-0 text-white bg-indigo-500 border-0 py-3 px-8 focus:outline-none hover:bg-indigo-600 rounded-lg text-lg mt-10 sm:mt-0 transform hover:scale-105 transition-transform duration-300">
              Get Started Now
            </button>
          </div>
        </div>
      </section>
    </>
  );
};