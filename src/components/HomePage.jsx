import React from 'react';
import { useState, useEffect } from 'react';
import image from '../assets/image1.jpg';
import './Home.css';

const HomePage = () => {
    const [text, setText] = useState('');
    const targetText = 'Bridging the Digital Divide';

    useEffect(() => {
        let currentIndex = 0;
        let intervalId = null;

        const typeText = () => {
            intervalId = setInterval(() => {
                if (currentIndex <= targetText.length) {
                    setText(targetText.slice(0, currentIndex));
                    currentIndex++;
                } else {
                    clearInterval(intervalId);
                    setTimeout(() => {
                        setText('');
                        currentIndex = 0;
                        typeText();
                    }, 5000);
                }
            }, 100);
        };

        typeText();

        return () => {
            if (intervalId) {
                clearInterval(intervalId);
            }
        };
    }, []);

    return (
        <>
            <div className="mb-10">
                <div className="relative w-full h-screen">
                    <img
                        src={image}
                        alt="Header Background"
                        className="header-image w-full h-full object-cover"
                    />

                    <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center flex-col text-center bg-black bg-black/80">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                            {text.split('').map((char, index) => (
                                <span key={index} className="typing-effect">
                                    {char}
                                </span>
                            ))}
                            <span className="blinking-cursor text-4xl font-thin">|</span>
                        </h1>

                        <div className="container mx-auto px-4 text-center relative z-10 animate-fade-in text-white">
                            
                            <p className="text-xl text-gray-600 mb-8 animate-fade-in">
                                We deliver cutting-edge technology solutions to help your business grow and thrive in the digital age.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <section className="bg-indigo-50 py-20 relative overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                    alt="IT Solutions"
                    className="absolute inset-0 w-full h-full object-cover opacity-20"
                />
                <div className="container mx-auto px-4 text-center relative z-10 animate-fade-in">
                    <h1 className="text-5xl font-bold mb-4 animate-fade-in">
                        Empowering Businesses with Innovative IT Solutions
                    </h1>
                    <p className="text-xl text-gray-600 mb-8 animate-fade-in">
                        We deliver cutting-edge technology solutions to help your business grow and thrive in the digital age.
                    </p>
                    <button className="bg-indigo-500 text-white px-8 py-3 rounded-lg hover:bg-indigo-600 transition-colors duration-300 animate-fade-in">
                        Get Started
                    </button>
                </div>
            </section>

            <section className="py-12 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-8 animate-fade-in">Why Choose Us?</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up transform hover:scale-105">
                            <div className="text-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-12 w-12 text-indigo-500 mx-auto mb-4"
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
                                <h3 className="text-xl font-semibold mb-2">Innovative Solutions</h3>
                                <p className="text-gray-600">
                                    We leverage the latest technologies to create tailored solutions for your business.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up delay-100 transform hover:scale-105">
                            <div className="text-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-12 w-12 text-indigo-500 mx-auto mb-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                                    />
                                </svg>
                                <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
                                <p className="text-gray-600">
                                    Our team of experienced professionals is dedicated to your success.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up delay-200 transform hover:scale-105">
                            <div className="text-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-12 w-12 text-indigo-500 mx-auto mb-4"
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
                                <h3 className="text-xl font-semibold mb-2">Customer-Centric</h3>
                                <p className="text-gray-600">
                                    Your success is our priority. We’re here to support you every step of the way.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-8 animate-fade-in">Our Services</h2>
                    <div className="grid md:grid-cols-3 gap-8">

                        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up transform hover:scale-105">
                            <img
                                src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                                alt="Software Development"
                                className="w-full h-48 object-cover rounded-lg mb-4"
                            />
                            <h3 className="text-xl font-semibold mb-2">Software Development</h3>
                            <p className="text-gray-600 mb-4">
                                Custom software solutions tailored to your business needs.
                            </p>
                            <button className="bg-indigo-500 text-white px-6 py-2 rounded-lg hover:bg-indigo-600 transition-colors duration-300">
                                Learn More
                            </button>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up delay-100 transform hover:scale-105">
                            <img
                                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                                alt="Cloud Solutions"
                                className="w-full h-48 object-cover rounded-lg mb-4"
                            />
                            <h3 className="text-xl font-semibold mb-2">Cloud Solutions</h3>
                            <p className="text-gray-600 mb-4">
                                Scalable and secure cloud infrastructure for your business.
                            </p>
                            <button className="bg-indigo-500 text-white px-6 py-2 rounded-lg hover:bg-indigo-600 transition-colors duration-300">
                                Learn More
                            </button>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up delay-200 transform hover:scale-105">
                            <img
                                src="https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                                alt="Cybersecurity"
                                className="w-full h-48 object-cover rounded-lg mb-4"
                            />
                            <h3 className="text-xl font-semibold mb-2">Cybersecurity</h3>
                            <p className="text-gray-600 mb-4">
                                Protect your business with our advanced cybersecurity solutions.
                            </p>
                            <button className="bg-indigo-500 text-white px-6 py-2 rounded-lg hover:bg-indigo-600 transition-colors duration-300">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomePage;