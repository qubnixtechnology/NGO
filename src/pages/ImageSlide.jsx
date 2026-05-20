import React, { useState, useEffect } from 'react';
import img1 from '../assets/image/WebSite Photos/1.jpeg';
import img2 from '../assets/image/WebSite Photos/6.jpeg';
import img3 from '../assets/image/WebSite Photos/9.jpeg';
import img4 from '../assets/image/WebSite Photos/11.jpeg';

function ImageSlide() {
  const images = [
    {
      src: img1,
      alt: "Engross Foundation Community Work",
      title: "Empowering Communities",
      description: "Research-driven development for inclusive and sustainable change"
    },
    {
      src: img2,
      alt: "Engross Foundation Field Work",
      title: "Research & Impact Assessment",
      description: "Evidence-based insights to improve lives and policies"
    },
    {
      src: img3,
      alt: "Engross Foundation Livelihood",
      title: "Building Sustainable Livelihoods",
      description: "Skill development and entrepreneurship for vulnerable communities"
    },
    {
      src: img4,
      alt: "Engross Foundation Volunteer",
      title: "Join Our Mission",
      description: "Together we can create lasting social impact across India"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      handleSlideChange((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // Increased to 5 seconds for smoother experience

    return () => clearInterval(slideInterval);
  }, [images.length]);

  const handleSlideChange = (newIndexOrFunction) => {
    if (isTransitioning) return; // Prevent rapid clicks
    
    setIsTransitioning(true);
    
    if (typeof newIndexOrFunction === 'function') {
      setCurrentIndex(newIndexOrFunction);
    } else {
      setCurrentIndex(newIndexOrFunction);
    }
    
    // Reset transition flag after animation completes
    setTimeout(() => setIsTransitioning(false), 1000);
  };

  const goToSlide = (index) => {
    if (index !== currentIndex) {
      handleSlideChange(index);
    }
  };

  const goToPrevious = () => {
    handleSlideChange(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    handleSlideChange(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className="relative w-full h-[45vh] md:h-[55vh] lg:h-[65vh] overflow-hidden bg-gray-900 font-poppins">
      {/* Image Container */}
      <div 
        className="flex transition-transform duration-1000 ease-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="min-w-full h-full relative">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-opacity duration-1000"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/50"></div>
            
            {/* Content Overlay */}
            <div className="absolute inset-0 flex items-center justify-center text-center text-white px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className={`text-xl md:text-3xl lg:text-5xl font-bold mb-3 transform transition-all duration-1000 ${
                  index === currentIndex 
                    ? 'translate-y-0 opacity-100 scale-100' 
                    : 'translate-y-8 opacity-0 scale-95'
                }`}>
                  {image.title}
                </h2>
                <p className={`text-base md:text-lg lg:text-xl font-medium transform transition-all duration-1000 delay-200 ${
                  index === currentIndex 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-8 opacity-0'
                }`}>
                  {image.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        disabled={isTransitioning}
        className="absolute top-1/2 left-3 md:left-4 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 md:p-3 rounded-full transition-all duration-300 backdrop-blur-sm disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Previous image"
      >
        <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={goToNext}
        disabled={isTransitioning}
        className="absolute top-1/2 right-3 md:right-4 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 md:p-3 rounded-full transition-all duration-300 backdrop-blur-sm disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Next image"
      >
        <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-3 md:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            disabled={isTransitioning}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-500 disabled:cursor-not-allowed ${
              index === currentIndex 
                ? 'bg-white scale-125 shadow-lg' 
                : 'bg-white/50 hover:bg-white/75 scale-100'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-1000 ease-out"
          style={{ width: `${((currentIndex + 1) / images.length) * 100}%` }}
        />
      </div>

      {/* Slide Counter */}
      <div className="absolute top-3 md:top-4 right-3 md:right-4 bg-black/50 text-white px-2 md:px-3 py-1 rounded-full text-xs md:text-sm backdrop-blur-sm">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
}

export default ImageSlide;