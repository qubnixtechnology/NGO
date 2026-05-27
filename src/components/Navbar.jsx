import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from '../assets/image/logo.jpeg';

const Navbar = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isAboutMobileOpen, setIsAboutMobileOpen] = useState(false);
  const [isLeadersMobileOpen, setIsLeadersMobileOpen] = useState(false);
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
    setIsAboutMobileOpen(false);
    setIsLeadersMobileOpen(false);
  };

  const handleNavClick = (to) => {
    closeMenu();
    if (to && to.includes('#')) {
      const [path, hashPart] = to.split('#');
      if (location.pathname === path) {
        setTimeout(() => {
          const element = document.getElementById(hashPart);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 50);
      }
    } else {
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 100);
    }
  };

  const aboutSubItems = [
    { label: "Who We Are", to: "/about#who-we-are" },
    { label: "Our Vision", to: "/about#our-vision" },
    { label: "Our Mission", to: "/about#our-mission" },
    { label: "Core Objectives", to: "/about#core-objectives" },
    { label: "Our Approach", to: "/about#our-approach" },
    { label: "Why It Matters", to: "/about#why-it-matters" },
    { label: "Recognition & Certifications", to: "/about#recognition-certifications" },
    
  ];

  const leadersSubItems = [
    { label: "Chief Functionary's Speaks", to: "/leaders#chief-functionary-speaks" },
    { label: "OUR CORE TEAM", to: "/leaders#core-team" },
    { label: "CORE ADVISORS / CONSULTANTS", to: "/leaders#core-advisors" },
    
  ];

  const NavItem = ({ to, children }) => {
    const isActive = location.pathname === to;
    return (
      <li>
        <Link
          to={to}
          onClick={() => handleNavClick(to)}
          className={`relative block py-2 px-2 xl:px-4 lg:px-2.5 rounded-full transition-all duration-300 font-semibold text-xs xl:text-sm tracking-wide ${
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
    <nav className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-300 font-poppins border-b ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2 border-gray-100' : 'bg-white py-4 border-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" onClick={() => handleNavClick('/')} className="flex-shrink-0 group">
            <img
              src={Logo}
              className={`transition-all duration-300 object-contain ${scrolled ? 'h-10 lg:h-12' : 'h-12 lg:h-16'} group-hover:scale-105`}
              alt="Engross Foundation Logo"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center flex-1 ml-4 xl:ml-10">
            <ul className="flex space-x-1 xl:space-x-2 items-center">
              <NavItem to="/">Home</NavItem>
              
              {/* About Us Dropdown */}
              <li className="relative group">
                <Link
                  to="/about"
                  onClick={() => handleNavClick('/about')}
                  className={`flex items-center gap-1 xl:gap-1.5 py-2 px-2 xl:px-4 lg:px-2.5 rounded-full transition-all duration-300 font-semibold text-xs xl:text-sm tracking-wide ${
                    location.pathname === '/about' 
                      ? 'text-blue-700 bg-blue-50 shadow-sm' 
                      : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50/50'
                  }`}
                >
                  About Us
                  <svg className="w-3 h-3 xl:w-4 xl:h-4 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"></path>
                  </svg>
                  {location.pathname === '/about' && (
                    <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                  )}
                </Link>
                
                {/* Dropdown Menu */}
                <div className="absolute left-1/2 mt-2 w-72 bg-gradient-to-br from-blue-600 to-emerald-600 rounded-2xl shadow-2xl border border-white/20 z-50 py-3 px-2 nav-dropdown">
                  {aboutSubItems.map((item, index) => (
                    <Link
                      key={index}
                      to={item.to}
                      onClick={() => handleNavClick(item.to)}
                      className="block px-4 py-2.5 rounded-xl text-white font-medium text-sm hover:bg-white/20 hover:backdrop-blur-sm transition-all duration-200"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </li>

              {/* Leaders Dropdown */}
              <li className="relative group">
                <Link
                  to="/leaders"
                  onClick={() => handleNavClick('/leaders')}
                  className={`flex items-center gap-1 xl:gap-1.5 py-2 px-2 xl:px-4 lg:px-2.5 rounded-full transition-all duration-300 font-semibold text-xs xl:text-sm tracking-wide ${
                    location.pathname === '/leaders' 
                      ? 'text-blue-700 bg-blue-50 shadow-sm' 
                      : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50/50'
                  }`}
                >
                  Leadership
                  <svg className="w-3 h-3 xl:w-4 xl:h-4 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"></path>
                  </svg>
                  {location.pathname === '/leaders' && (
                    <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                  )}
                </Link>
                
                {/* Dropdown Menu */}
                <div className="absolute left-1/2 mt-2 w-72 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl shadow-2xl border border-white/20 z-50 py-3 px-2 nav-dropdown">
                  {leadersSubItems.map((item, index) => (
                    <Link
                      key={index}
                      to={item.to}
                      onClick={() => handleNavClick(item.to)}
                      className="block px-4 py-2.5 rounded-xl text-white font-medium text-sm hover:bg-white/20 hover:backdrop-blur-sm transition-all duration-200"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </li>

              <NavItem to="/what-we-do">What We Do</NavItem>
              <NavItem to="/projects">Projects</NavItem>
              <NavItem to="/gallery">Gallery</NavItem>
              <NavItem to="/volunteer">Join Us</NavItem>
              <NavItem to="/donate">Donate</NavItem>
              <NavItem to="/contact">Contact</NavItem>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a 
              href="tel:9718666900" 
              className="group relative inline-flex items-center justify-center p-2.5 xl:px-6 xl:py-2.5 text-sm font-bold text-white transition-all duration-300 bg-gradient-to-r from-blue-600 to-indigo-600 border border-transparent rounded-full shadow-md hover:shadow-lg hover:shadow-blue-500/30 hover:from-blue-700 hover:to-indigo-700 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
            >
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 group-hover:animate-bounce" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="hidden xl:inline">9718666900</span>
              </span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
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
      <div 
        style={{ maxHeight: isMenuOpen ? 'calc(100dvh - 85px)' : '0px' }}
        className={`lg:hidden transition-all duration-300 ease-in-out origin-top ${isMenuOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'} overflow-y-auto bg-white/95 backdrop-blur-md shadow-xl border-t border-gray-100 absolute w-full mobile-nav-menu`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2 sm:px-3">
          <Link 
            to="/" 
            onClick={() => handleNavClick('/')} 
            className={`block px-4 py-3 rounded-xl text-base font-semibold transition-all ${
              location.pathname === '/' 
                ? 'text-blue-700 bg-blue-50 shadow-sm' 
                : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/50'
            }`}
          >
            Home
          </Link>

          {/* About Us Mobile Accordion */}
          <div>
            <button 
              onClick={() => setIsAboutMobileOpen(!isAboutMobileOpen)}
              className={`flex items-center justify-between w-full px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                location.pathname === '/about' 
                  ? 'text-blue-700 bg-blue-50 shadow-sm' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/50'
              }`}
            >
              <span>About Us</span>
              <svg className={`w-4 h-4 transition-transform duration-200 ${isAboutMobileOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            
            {isAboutMobileOpen && (
              <div className="pl-4 pr-2 py-2 mt-1 space-y-1 bg-gradient-to-br from-blue-50 to-indigo-50/30 rounded-2xl border border-blue-100/50">
                {aboutSubItems.map((item) => (
                  <Link 
                    key={item.to}
                    to={item.to} 
                    onClick={() => handleNavClick(item.to)} 
                    className="block px-4 py-2.5 rounded-xl text-sm font-semibold text-gray-600 hover:text-blue-600 hover:bg-white transition-all shadow-sm"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Leaders Mobile Accordion */}
          <div>
            <button 
              onClick={() => setIsLeadersMobileOpen(!isLeadersMobileOpen)}
              className={`flex items-center justify-between w-full px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                location.pathname === '/leaders' 
                  ? 'text-blue-700 bg-blue-50 shadow-sm' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/50'
              }`}
            >
              <span>Leaders</span>
              <svg className={`w-4 h-4 transition-transform duration-200 ${isLeadersMobileOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            
            {isLeadersMobileOpen && (
              <div className="pl-4 pr-2 py-2 mt-1 space-y-1 bg-gradient-to-br from-blue-50 to-indigo-50/30 rounded-2xl border border-blue-100/50">
                <Link 
                  to="/leaders" 
                  onClick={() => handleNavClick('/leaders')} 
                  className="block px-4 py-2.5 rounded-xl text-sm font-semibold text-gray-600 hover:text-blue-600 hover:bg-white transition-all shadow-sm bg-white/50"
                >
                  Leaders Overview
                </Link>
                {leadersSubItems.map((item) => (
                  <Link 
                    key={item.to}
                    to={item.to} 
                    onClick={() => handleNavClick(item.to)} 
                    className="block px-4 py-2.5 rounded-xl text-sm font-semibold text-gray-600 hover:text-blue-600 hover:bg-white transition-all shadow-sm"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {[
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
              onClick={() => handleNavClick(link.to)} 
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