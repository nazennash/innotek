import React from 'react';

export const AboutUs = () => {
  return (
    <>
      {/* About Us Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 animate-fade-in">About Us</h2>

          {/* Top Management Section */}
          <section className="text-gray-600 body-font">
            <div className="container px-5 py-10 mb-5 mx-auto">
              <div className="flex flex-col">
                <div className="h-1 bg-gray-200 rounded overflow-hidden">
                  <div className="w-24 h-full bg-indigo-500 animate-slide-right"></div>
                </div>
                <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
                  <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0 animate-fade-in">
                    Meet Our Leadership
                  </h1>
                  <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0 animate-fade-in">
                    Our top management team brings decades of experience and a shared passion for innovation and sustainability. Get to know the people driving our mission forward.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                {/* Card 1 - CEO */}
                <div className="p-4 md:w-1/3 sm:mb-0 mb-6 animate-fade-in-up">
                  <div className="rounded-full h-64 w-64 mx-auto overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  {/* <div className="rounded-full h-64 w-64 mx-auto overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"> */}
                    <img
                      alt="CEO"
                      className="object-cover object-center h-full w-full"
                      src="https://media.licdn.com/dms/image/v2/C4D03AQEw3i9txRNH3g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1584280639174?e=1746662400&v=beta&t=plE8ihwJXxtr3KR5Hp0yGbhFhu1NMD8ud1-CuIy57F8"
                    />
                  </div>
                  <h2 className="text-xl font-medium title-font text-gray-900 mt-5 text-center">Walter Ochieng</h2>
                  <p className="text-base leading-relaxed mt-2 text-center">CEO & Founder</p>
                  <p className="text-gray-600 mt-2 text-center">
                    Jane is a visionary leader with over 15 years of experience in sustainable business practices.
                  </p>
                </div>

                {/* Card 2 - CTO */}
                <div className="p-4 md:w-1/3 sm:mb-0 mb-6 animate-fade-in-up delay-100">
                  <div className="rounded-full h-64 w-64 mx-auto overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  {/* <div className="rounded-full h-64 w-64 mx-auto overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"> */}
                    <img
                      alt="CTO"
                      className="object-cover object-center h-full w-full"
                      src="https://media.licdn.com/dms/image/v2/D4D03AQF54IdzNGK3Jw/profile-displayphoto-shrink_800_800/B4DZPO0VHAGgAc-/0/1734341646290?e=1746662400&v=beta&t=mN4qmFVAUzzkRvDhW-EZviIEfUzuDDBkxz1tyURgCO8"
                    />
                  </div>
                  <h2 className="text-xl font-medium title-font text-gray-900 mt-5 text-center">Nash Oliver</h2>
                  <p className="text-base leading-relaxed mt-2 text-center">Chief Technology Officer</p>
                  <p className="text-gray-600 mt-2 text-center">
                    John is an innovator with a passion for creating cutting-edge, eco-friendly technologies.
                  </p>
                </div>

                {/* Card 3 - COO */}
                <div className="p-4 md:w-1/3 sm:mb-0 mb-6 animate-fade-in-up delay-200">
                  <div className="rounded-full h-64 w-64 mx-auto overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  {/* <div className="rounded-full h-64 w-64 mx-auto overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"> */}
                    <img
                      alt="COO"
                      className="object-cover object-center h-full w-full"
                      src="https://img.freepik.com/free-photo/smiley-african-woman-with-golden-earrings_23-2148747979.jpg?ga=GA1.1.822486634.1739465152&semt=ais_hybrid"
                    />
                  </div>
                  <h2 className="text-xl font-medium title-font text-gray-900 mt-5 text-center">Queen Denver</h2>
                  <p className="text-base leading-relaxed mt-2 text-center">Chief Operations Officer</p>
                  <p className="text-gray-600 mt-2 text-center">
                    Emily ensures our operations run smoothly while maintaining our commitment to sustainability.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Divider */}
          <div className="container mx-auto px-4 mb-10">
            <div className="h-1 bg-gray-200 rounded overflow-hidden">
              <div className="w-24 h-full bg-indigo-500 animate-slide-right"></div>
            </div>
          </div>

          {/* Story and Mission Section */}
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 md:items-center">
              {/* Story and Mission */}
              <div className="animate-fade-in-left">
                <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-2xl font-semibold mb-4 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-indigo-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Our Story
                  </h3>
                  <p className="text-gray-600 mb-6 leading-10">
                    Founded in 2010, we started as a small team of passionate individuals dedicated to creating eco-friendly products. Our journey began in a small garage, and today, we serve customers worldwide.
                </p>
                  <h3 className="text-2xl font-semibold mb-4 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-indigo-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Our Mission
                  </h3>
                  <p className="text-gray-600 mb-6 leading-10">
                    Our mission is to provide sustainable solutions that improve lives while protecting the planet. We believe in creating products that are good for people and the environment.
                  </p>
                  <h3 className="text-2xl font-semibold mb-4 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-indigo-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                    Our Values
                  </h3>
                  <ul className="text-gray-600 list-disc list-inside mb-6 leading-10">
                    <li>Sustainability</li>
                    <li>Innovation</li>
                    <li>Customer Focus</li>
                    <li>Integrity</li>
                  </ul>
                </div>
              </div>

              {/* Team and Why Choose Us */}
              <div className="animate-fade-in-right">
                <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-2xl font-semibold mb-4 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-indigo-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    Our Team
                  </h3>
                  <p className="text-gray-600 mb-6 leading-10">
                    Meet our team of passionate designers, engineers, and customer service experts who make it all possible. We’re proud to have a diverse and talented group of individuals who share our vision.
                  </p>
                  <h3 className="text-2xl font-semibold mb-4 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-indigo-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Why Choose Us?
                  </h3>
                  <p className="text-gray-600 mb-6 leading-10">
                    Unlike others, we source 100% of our materials from sustainable farms and ensure fair wages for all workers. Our commitment to quality and sustainability sets us apart.
                  </p>
                  <h3 className="text-2xl font-semibold mb-4 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-indigo-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    Community Involvement
                  </h3>
                  <p className="text-gray-600 mb-6 leading-10">
                    We donate 5% of all profits to environmental conservation projects and actively participate in community initiatives to make a positive impact.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-12 bg-indigo-50 animate-fade-in">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Us in Making a Difference</h2>
          <p className="text-gray-600 mb-6 leading-10">
            We’re always looking for talented individuals who share our passion for sustainability and innovation. If you’re ready to make a difference, we’d love to hear from you.
          </p>
          <button className="bg-indigo-500 text-white px-6 py-2 rounded-lg hover:bg-indigo-600 transition-colors duration-300">
            Careers
          </button>
        </div>
      </section>
    </>
  );
};