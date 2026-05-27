import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowRight, ExternalLink, ShieldCheck, HeartHandshake, Award } from 'lucide-react';
import Facebook from '../assets/footer/Facebook.png';
import Insta from '../assets/footer/Instagram.png';
import Youtube from '../assets/footer/Youtube.png';
import Logo from '../assets/image/logo.jpeg';

function Footer() {
  return (
    <footer className="relative bg-slate-900 text-slate-300 pt-16 pb-8 overflow-hidden font-poppins">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-blue-600 rounded-full blur-[120px] opacity-20"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-purple-600 rounded-full blur-[120px] opacity-20"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* 1. Organization Info */}
          <div className="space-y-6">
            <div className="bg-white/5 p-4 rounded-xl inline-block border border-white/10 shadow-xl backdrop-blur-sm">
              <img 
                src={Logo} 
                alt="Engross Foundation Logo" 
                className="w-48 h-auto object-contain drop-shadow-md brightness-110"
              />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed pr-4">
              Empowering lives and building futures through dedicated humanitarian services. We focus on health, education, small businesses, and community outreach.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="group relative">
                <div className="absolute inset-0 bg-blue-500 rounded-full blur opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
                <img src={Facebook} alt="Facebook" className="w-10 h-10 relative z-10 transform group-hover:-translate-y-1 group-hover:scale-110 transition-all duration-300" />
              </a>
              <a href="#" className="group relative">
                <div className="absolute inset-0 bg-pink-500 rounded-full blur opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
                <img src={Insta} alt="Instagram" className="w-10 h-10 relative z-10 transform group-hover:-translate-y-1 group-hover:scale-110 transition-all duration-300" />
              </a>
              <a href="#" className="group relative">
                <div className="absolute inset-0 bg-red-500 rounded-full blur opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
                <img src={Youtube} alt="Youtube" className="w-10 h-10 relative z-10 transform group-hover:-translate-y-1 group-hover:scale-110 transition-all duration-300" />
              </a>
            </div>
          </div>

          {/* 2. Quick Links */}
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-semibold text-white mb-2">Quick Links</h4>
              <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            </div>
            <ul className="space-y-3">
              {[
                { name: 'About Us', path: '/about' },
                { name: 'Our Projects', path: '/projects' },
                { name: 'Donate Now', path: '/donate' },
                { name: 'Volunteer', path: '/volunteer' },
                { name: 'Contact', path: '/contact' }
              ].map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="group flex items-center text-slate-400 hover:text-white transition-colors duration-300"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 text-blue-500 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    <span className="transform group-hover:translate-x-1 transition-transform duration-300 text-sm">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Certifications */}
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-semibold text-white mb-2">Certifications</h4>
              <div className="w-12 h-1 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"></div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors">
                  <ShieldCheck className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h5 className="text-white text-sm font-medium">MCA Registered</h5>
                  <p className="text-slate-500 text-xs">Govt. of India</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 group">
                <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center border border-purple-500/20 group-hover:bg-purple-500/20 transition-colors">
                  <Award className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <h5 className="text-white text-sm font-medium">ISO 9001:2015</h5>
                  <p className="text-slate-500 text-xs">Certified Organization</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 group">
                <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center border border-green-500/20 group-hover:bg-green-500/20 transition-colors">
                  <HeartHandshake className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <h5 className="text-white text-sm font-medium">NITI Aayog</h5>
                  <p className="text-slate-500 text-xs">Darpan Registered</p>
                </div>
              </div>
            </div>
          </div>

          {/* 4. Contact Info */}
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-semibold text-white mb-2">Contact Us</h4>
              <div className="w-12 h-1 bg-gradient-to-r from-orange-400 to-red-500 rounded-full"></div>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                <div className="text-sm">
                  <strong className="text-white block mb-1">Registered Office:</strong>
                  <span className="text-slate-400">Lucknow (Uttar Pradesh)</span>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                <div className="text-sm">
                  <strong className="text-white block mb-1">Head Office & Associates:</strong>
                  <span className="text-slate-400">207/14, Prakash Muhalla, East of Kailash, New Delhi - 110065</span>
                  <span className="text-slate-500 text-xs block mt-1">Associates across 17+ major cities in India</span>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-400 flex-shrink-0" />
                <a href="tel:+919718666900" className="text-sm text-slate-400 hover:text-white transition-colors">+91 9718666900</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a href="mailto:engrossfoundation@gmail.com" className="text-sm text-slate-400 hover:text-white transition-colors">engrossfoundation@gmail.com</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Support Banner */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-900 to-indigo-900 border border-blue-500/30 p-6 sm:p-8 mb-12 flex flex-col md:flex-row items-center justify-between shadow-2xl">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="relative z-10 mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-2">Connect With Us Instantly</h3>
            <p className="text-blue-200 text-sm max-w-md">Need assistance, have queries about our programs, or want to collaborate? Message us directly on WhatsApp.</p>
          </div>
          <a 
            href="https://wa.me/919718666900" 
            target="_blank" 
            rel="noopener noreferrer"
            className="relative z-10 group inline-flex items-center justify-center px-8 py-4 bg-green-500 hover:bg-green-400 text-white font-semibold rounded-full shadow-lg shadow-green-500/30 transition-all duration-300 transform hover:-translate-y-1"
          >
            <Phone className="w-5 h-5 mr-2 animate-bounce" />
            Chat on WhatsApp
          </a>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-slate-500 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Engross Foundation. All rights reserved. <br />
            <a
            href="https://www.qubnixtechnology.com/"
            target="_blank"
            rel="noreferrer"
          >
           Developed by Qubnix Technology
          </a>
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/privacy" className="text-sm text-slate-500 hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-sm text-slate-500 hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/cookie" className="text-sm text-slate-500 hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;