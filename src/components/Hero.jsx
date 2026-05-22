import React, { useEffect } from 'react';
import Video from '../assets/final.mp4';
import { ArrowRight, Heart, Globe } from 'lucide-react';

const Hero = () => {
  useEffect(() => {
    // Enhanced animation sequence for smoother appearance
    const animatedElements = document.querySelectorAll('.animate-on-load');
    animatedElements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add('opacity-100', 'translate-y-0');
        element.classList.remove('opacity-0', 'translate-y-4');
      }, 180 * index);
    });
  }, []);

  return (
    <div className='relative flex w-full h-screen overflow-hidden'>
      {/* Video background without any filters to show original video */}
      <video
        className='absolute w-full h-full object-cover transform scale-105'
        src={Video}
        loop
        muted
        autoPlay
        playsInline
      />
      
      {/* Light overlay for text readability without changing video colors */}
      <div className="absolute inset-0 bg-black/30"></div>
      
      {/* Content wrapper with improved positioning */}
      <div className="relative z-10 flex justify-center items-center w-full px-4 sm:px-6">
        <div className="text-center max-w-5xl w-full">
          
          {/* Enhanced badge with animated border */}
          <div className="inline-block relative mb-8 animate-on-load opacity-0 translate-y-4 transition-all duration-500 ease-out">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 opacity-70 blur-sm animate-pulse"></div>
            <div className="relative bg-gradient-to-r from-blue-800 to-blue-600 py-2 px-6 rounded-full text-sm md:text-base text-white font-medium shadow-lg border border-white/10">
              <Heart className="w-4 h-4 inline-block mr-2" /> SOCIAL IMPACT • Transforming Communities
            </div>
          </div>
          
          {/* RGB animated "Empower Lives" with custom CSS */}
          <style jsx>{`
            .rgb-text {
              background: linear-gradient(45deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #8f00ff, #ff0000);
              background-size: 400% 400%;
              -webkit-background-clip: text;
              background-clip: text;
              -webkit-text-fill-color: transparent;
              animation: rgb-flow 3s ease-in-out infinite;
            }
            
            @keyframes rgb-flow {
              0% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
              100% { background-position: 0% 50%; }
            }
          `}</style>
          
          {/* Larger headings for desktop with improved typography */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-3 rgb-text animate-on-load opacity-0 translate-y-4 transition-all duration-500 ease-out delay-100 tracking-tight">
            Empower Lives
          </h1>
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 animate-on-load opacity-0 translate-y-4 transition-all duration-500 ease-out delay-200">
            <span className="bg-white bg-clip-text text-transparent">Transform Futures</span>
          </h2>
          
          {/* Enhanced description box with glassmorphism */}
          <div className="bg-black/70 backdrop-blur-sm p-6 md:p-8 rounded-2xl my-8 text-lg md:text-xl lg:text-2xl text-white border-l-4 border-r-4 border-blue-600 shadow-xl max-w-3xl mx-auto animate-on-load opacity-0 translate-y-4 transition-all duration-500 ease-out delay-300">
            <p className="leading-relaxed">Join us in uplifting the underprivileged and creating a self-reliant India for all.</p>
          </div>
          
          {/* Responsive buttons with enhanced hover effects */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-5 animate-on-load opacity-0 translate-y-4 transition-all duration-500 ease-out delay-400">
            <a
              href="/about"
              className="w-full sm:w-auto group inline-flex items-center justify-center px-8 py-4 rounded-full text-base md:text-lg font-semibold cursor-pointer bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/30"
            >
              <Globe className="w-5 h-5 mr-2" /> 
              WELCOME
              <div className="ml-1 w-0 group-hover:w-5 overflow-hidden transition-all duration-300">
                <ArrowRight className="w-5 h-5" />
              </div>
            </a>
            <a
              href="/donate"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border-2 border-white/80 rounded-full text-base md:text-lg font-semibold cursor-pointer bg-transparent text-white hover:bg-white hover:!text-blue-900 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <Heart className="w-5 h-5 mr-2 animate-pulse" /> Donate Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;