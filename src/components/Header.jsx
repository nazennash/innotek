import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false); 
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <header
    // className={`sticky top-0 z-50 w-full text-gray-700 bg-white transition-all duration-300 ${
      className={`sticky top-0 z-50 w-full text-gray-700 bg-white/60 transition-all duration-300 ${
        scrolled ? 'shadow-md py-2' : 'shadow-sm py-4'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center">
          <a
            href="#"
            className="flex title-font font-medium items-center text-gray-900 transform transition-transform duration-300 hover:scale-105"
          >
            <div className="hidden md:block w-12 h-12 text-white p-2 bg-indigo-600 rounded-full flex items-center justify-center overflow-hidden relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-7 h-7"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <div className="absolute inset-0 bg-indigo-600 opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
            </div>
            <span className="ml-3 text-xl font-bold tracking-wider">Innovative Computers</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition-colors duration-200 text-gray-700 z-50"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:ml-auto md:mr-auto flex-wrap items-center text-base justify-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
                to={item.href}
              className="font-medium text-gray-800 hover:text-indigo-600 transition-colors duration-300 relative group py-2"
            >
              <span>{item.name}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        <button className="hidden md:inline-flex items-center bg-indigo-800 text-white py-2 px-6 focus:outline-none rounded-lg text-base font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:bg-indigo-700 group">
          + 254 700 000 000
          <ChevronRight size={18} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-70 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      >
        {/* Mobile Navigation Menu */}
        <div
          className={`fixed inset-y-0 left-0 z-50 w-full bg-black shadow-lg transform transition-transform duration-300 ${
            mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()} 
        >
          <div className="flex flex-col space-y-15 p-6 text-white justify-center items-center h-full text-xl">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="font-medium hover:text-indigo-600 transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;