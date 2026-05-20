import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import img from '../assets/home/test.webp'
import { useNavigate } from 'react-router-dom'

export default function Empower() {
  const navigate = useNavigate()
  const [isMobile, setIsMobile] = useState(false);

  // Properly detect mobile on client side
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Check on mount
    checkIsMobile();

    // Check on resize
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  // Animation variants (only for desktop)
  const slideInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  }

  const slideInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  }

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  // Conditional wrapper component
  const ConditionalMotion = ({ children, variants, className, ...props }) => {
    if (isMobile) {
      return <div className={className}>{children}</div>;
    }
    return (
      <motion.div 
        className={className}
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
        {...props}
      >
        {children}
      </motion.div>
    );
  };
  
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 text-gray-900 min-h-screen">
      <div className="w-full py-16 lg:py-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <ConditionalMotion
            className="space-y-8 flex flex-col items-center text-center lg:text-left lg:items-start px-6 lg:pl-12"
            variants={slideInLeft}
          >
            <ConditionalMotion
              className="space-y-4"
              variants={fadeInUp}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                  Empowering Lives,
                </span>
                <br />
                <span className="text-gray-900">Building Futures</span>
              </h1>
              
              {/* Animated underline */}
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto lg:mx-0"></div>
            </ConditionalMotion>

            <ConditionalMotion
              variants={fadeInUp}
            >
              <p className="text-lg md:text-xl leading-relaxed text-gray-700 max-w-2xl font-poppins">
                Engross Foundation is a dedicated humanitarian organization committed to enhancing the
                well-being of underprivileged communities. With a focus on health, education, small businesses, and 
                community outreach, we strive to create lasting positive impact on lives.
              </p>
            </ConditionalMotion>

            <ConditionalMotion
              className="flex flex-col sm:flex-row gap-4 pt-4"
              variants={fadeInUp}
            >
              <button 
                onClick={() => {
                  window.scrollTo(0, 0);
                  navigate('/donate')}}
                className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 text-lg font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <span className="flex items-center justify-center gap-2">
                  Donate Now
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
              <button 
                onClick={() => {
                  window.scrollTo(0, 0);
                  navigate('/about')}}
                className="group bg-transparent border-2 border-purple-600 text-purple-600 hover:bg-gradient-to-r hover:from-purple-600 hover:to-purple-700 hover:text-white hover:border-transparent px-8 py-3 text-lg font-medium rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
              >
                <span className="flex items-center justify-center gap-2">
                  View Projects
                  <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </span>
              </button>
            </ConditionalMotion>

            {/* Stats Section */}
            <ConditionalMotion
              className="grid grid-cols-3 gap-6 pt-8 w-full max-w-md"
              variants={staggerContainer}
            >
              <ConditionalMotion
                className="text-center group"
                variants={fadeInUp}
              >
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">500+</div>
                <div className="text-sm text-gray-600 font-medium">Lives Impacted</div>
              </ConditionalMotion>
              <ConditionalMotion
                className="text-center group"
                variants={fadeInUp}
              >
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">50+</div>
                <div className="text-sm text-gray-600 font-medium">Projects</div>
              </ConditionalMotion>
              <ConditionalMotion
                className="text-center group"
                variants={fadeInUp}
              >
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">10+</div>
                <div className="text-sm text-gray-600 font-medium">Communities</div>
              </ConditionalMotion>
            </ConditionalMotion>
          </ConditionalMotion>

          {/* Right Image - Simplified */}
          <ConditionalMotion
            className="flex justify-center px-6 lg:pr-12"
            variants={slideInRight}
          >
            <div className="relative group">
              {/* Single subtle background circle */}
              <div className="absolute -top-4 -left-4 w-80 h-80 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px] bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-30"></div>
              
              {/* Main image with clean gradient border */}
              <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden shadow-2xl border-4 border-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1 group-hover:scale-105 transition-transform duration-500">
                <div className="w-full h-full rounded-full overflow-hidden bg-white">
                  <img
                    src={img}
                    alt="Community members served by Engross Foundation - empowering lives and building futures"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </ConditionalMotion>
        </div>
      </div>
    </div>
  )
}