import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from './pages/Contactus';
import About from './pages/About'
import Donate from './pages/Donate'
import Home from './pages/Home'
import Privacy from './pages/Privecy';
import Terms from './pages/Terms'
import certificate from './pages/Certificategen'
import WhatWeDo from './pages/WhatWeDo';
import Project from './pages/Project';
import Volunteer from './pages/Volunteer';
import Leaders from './pages/Leaders';
import React, { useEffect } from 'react';
import Gallery from './pages/Gallery';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Find the element matching the hash (e.g. #who-we-are -> who-we-are)
      const targetId = hash.replace('#', '');
      const timer = setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 150);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/what-we-do" element={<WhatWeDo />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/certificate" element={<certificate />} />
        <Route path="/leaders" element={<Leaders />} />
      </Routes>
      <Footer />
      <FloatingWhatsApp />
    </Router>
  )
}

export default App