import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from '../assets/image/logo.png'

const Navbar = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleNavClick = () => {
    closeMenu();
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  };

  const NavItem = ({ to, children }) => {
    const isActive = location.pathname === to;
    return (
      <li>
        <Link
          to={to}
          onClick={handleNavClick}
          className={`relative block py-2 px-4 rounded-full transition-all duration-300 font-semibold text-sm tracking-wide ${
            isActive 
              ? 'text-blue-700 bg-blue-50 shadow-sm' 
              : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50/50'
          }`}
        >
          {children}
          {isActive && (
            <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
          )}
        </Link>
      </li>
    );
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 font-poppins border-b ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2 border-gray-100' : 'bg-white py-4 border-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" onClick={handleNavClick} className="flex-shrink-0 group">
            <img
              src={Logo}
              className={`transition-all duration-300 object-contain ${scrolled ? 'h-12' : 'h-16'} group-hover:scale-105`}
              alt="Engross Foundation Logo"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center flex-1 ml-10">
            <ul className="flex space-x-2">
              <NavItem to="/">Home</NavItem>
              <NavItem to="/about">About Us</NavItem>
              <NavItem to="/what-we-do">What We Do</NavItem>
              <NavItem to="/projects">Projects</NavItem>
              <NavItem to="/gallery">Gallery</NavItem>
              <NavItem to="/volunteer">Join Us</NavItem>
              <NavItem to="/donate">Donate</NavItem>
              <NavItem to="/contact">Contact</NavItem>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="tel:9718666900" 
              className="group relative inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold text-white transition-all duration-300 bg-gradient-to-r from-blue-600 to-indigo-600 border border-transparent rounded-full shadow-md hover:shadow-lg hover:shadow-blue-500/30 hover:from-blue-700 hover:to-indigo-700 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
            >
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 group-hover:animate-bounce" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                9718666900
              </span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-xl text-gray-600 hover:text-blue-600 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div className={`md:hidden transition-all duration-300 ease-in-out origin-top ${isMenuOpen ? 'max-h-[400px] opacity-100 scale-y-100' : 'max-h-0 opacity-0 scale-y-0'} overflow-hidden bg-white/95 backdrop-blur-md shadow-xl border-t border-gray-100 absolute w-full`}>
        <div className="px-4 pt-2 pb-6 space-y-2 sm:px-3">
          {[
            { to: '/', label: 'Home' },
            { to: '/about', label: 'About Us' },
            { to: '/what-we-do', label: 'What We Do' },
            { to: '/projects', label: 'Projects' },
            { to: '/gallery', label: 'Gallery' },
            { to: '/volunteer', label: 'Join Us' },
            { to: '/donate', label: 'Donate' },
            { to: '/contact', label: 'Contact' }
          ].map((link) => (
            <Link 
              key={link.to}
              to={link.to} 
              onClick={handleNavClick} 
              className={`block px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                location.pathname === link.to 
                  ? 'text-blue-700 bg-blue-50 shadow-sm' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/50'
              }`}
            >
              {link.label}
            </Link>
          ))}
          
          <div className="pt-4 mt-4 border-t border-gray-100">
            <a 
              href="tel:9718666900" 
              className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl shadow-md text-base font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call 9718666900
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;