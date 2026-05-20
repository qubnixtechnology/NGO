import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import demo from '../assets/home/test.webp'
import Poor from '../assets/home/poor.jpg'
import School from '../assets/home/school.jpg'
import Road from '../assets/home/road.jpg'
import Group from '../assets/home/oldman.jpg'
import { nav } from 'framer-motion/client'
import { useNavigate } from 'react-router-dom'

export default function Mission() {
  const navigate = useNavigate();
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
    <div className="min-h-screen bg-white flex items-center justify-center p-4 font-poppins">
      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        
        {/* Right side - Mission text (shown first on mobile) */}
        <ConditionalMotion
          className="text-gray-900 space-y-6 lg:order-2"
          variants={slideInRight}
        >
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight font-poppins">
            Our <span className="text-blue-600">Mission</span> and <span className="text-blue-600">Vision</span>
          </h1>

          <p className="text-lg lg:text-xl leading-relaxed text-gray-700 font-poppins">
            Our mission is to empower individuals and families who lack the financial means to pursue their dreams, with
            a focus on small businesses, healthcare, education and general welfare. Our goal is to reduce poverty by
            creating job opportunities, self employment and enable people to become self-sufficient.
          </p>

          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
              <p className="text-gray-600 font-poppins">Empowering underprivileged communities through sustainable programs</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
              <p className="text-gray-600 font-poppins">Creating lasting positive impact through education and healthcare</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
              <p className="text-gray-600 font-poppins">Building self-sufficient communities through job creation</p>
            </div>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 font-poppins"
          onClick={()=>{
                window.scrollTo(0, 0);
                navigate('/about');
          }}>
            Learn More
          </button>
        </ConditionalMotion>

        {/* Left side - Overlapping Image collage (shown second on mobile) */}
        <ConditionalMotion
          className="relative h-[400px] sm:h-[500px] lg:h-[600px] lg:order-1"
          variants={staggerContainer}
        >
          {/* Top left image - largest */}
          <ConditionalMotion
            className="absolute top-0 left-0 w-[200px] h-[140px] sm:w-[240px] sm:h-[170px] md:w-[280px] md:h-[200px] lg:w-[320px] lg:h-[240px] rounded-2xl sm:rounded-3xl overflow-hidden z-10 shadow-xl"
            variants={slideInLeft}
          >
            <img 
              src={Poor} 
              alt="Community work and outreach programs"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              {/* <span className="text-white text-lg font-semibold">Community Work</span> */}
            </div>
          </ConditionalMotion>

          {/* Top right image - overlapping */}
          <ConditionalMotion
            className="absolute top-6 sm:top-8 md:top-12 right-0 w-[180px] h-[130px] sm:w-[220px] sm:h-[160px] md:w-[260px] md:h-[180px] lg:w-[300px] lg:h-[220px] rounded-2xl sm:rounded-3xl overflow-hidden z-20 shadow-xl"
            variants={slideInLeft}
          >
            <img 
              src={School} 
              alt="Education programs and learning initiatives"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              {/* <span className="text-white text-lg font-semibold">Education</span> */}
            </div>
          </ConditionalMotion>

          {/* Bottom left image - overlapping with top left */}
          <ConditionalMotion
            className="absolute bottom-8 sm:bottom-10 md:bottom-12 left-4 sm:left-6 md:left-8 w-[170px] h-[120px] sm:w-[200px] sm:h-[140px] md:w-[240px] md:h-[160px] lg:w-[320px] lg:h-[240px] rounded-2xl sm:rounded-3xl overflow-hidden z-30 shadow-xl"
            variants={slideInLeft}
          >
            <img 
              src={Road} 
              alt="Community gatherings and social events"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              {/* <span className="text-white text-lg font-semibold">Community Gathering</span> */}
            </div>
          </ConditionalMotion>

          {/* Bottom right image - small circular overlay */}
          <ConditionalMotion
            className="absolute bottom-0 right-6 sm:right-8 md:right-12 w-[190px] h-[130px] sm:w-[220px] sm:h-[150px] md:w-[260px] md:h-[180px] lg:w-[300px] lg:h-[220px] rounded-2xl sm:rounded-3xl overflow-hidden z-40 shadow-xl"
            variants={slideInLeft}
          >
            <img 
              src={Group} 
              alt="Small business support and entrepreneurship"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              {/* <span className="text-white text-lg font-semibold">Small Business</span> */}
            </div>
          </ConditionalMotion>
        </ConditionalMotion>

      </div>
    </div>
  )
}