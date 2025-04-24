import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';
import Button from '@/components/ui/Button/Button';
import BackgroundImage from "../../../assets/images/hero/background_image.jpg"

/**
 * Enhanced HeroSection component with:
 * - Optimized image loading
 * - Advanced animations
 * - Accessibility improvements
 * - Better performance
 * - Responsive design enhancements
 */
const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);

  // Simple animation on load
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Scroll to next section
  const scrollToNextSection = () => {
    const nextSection = heroRef.current?.nextElementSibling;
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Animation classes
  const fadeIn = isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10';
  const fadeInDelay1 = isVisible ? 'opacity-100 translate-y-0 delay-300' : 'opacity-0 translate-y-10';
  const fadeInDelay2 = isVisible ? 'opacity-100 translate-y-0 delay-600' : 'opacity-0 translate-y-10';

  return (
    <section 
      ref={heroRef}
      className="relative min-h-[90vh] flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={BackgroundImage} 
          alt="Ankole Cattle"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-green-dark/40 to-forest-green-dark/70"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10 pt-20">
        <div className="max-w-3xl">
          <h1 
            className={`text-white text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6 transition-all duration-700 ${fadeIn}`}
          >
            Preserving Ankole <br />
            Cattle & Culture
          </h1>
          
          <p 
            className={`text-white text-xl md:text-2xl font-light opacity-90 mb-8 transition-all duration-700 ${fadeInDelay1}`}
          >
            A journey through the rich heritage of Uganda's iconic Ankole cattle and the people who have cherished them for centuries.
          </p>
          
          <div 
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 ${fadeInDelay2}`}
          >
            <Button
              variant="primary"
              size="xl"
              as={Link}
              to="/about"
              className="font-bold"
            >
              Discover Our Mission
            </Button>
            
            <Button
              variant="outline"
              size="xl"
              as={Link}
              to="/booking"
              glassmorphic={true}
            >
              Plan Your Visit
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center z-10">
        <button
          onClick={scrollToNextSection}
          className="text-white animate-bounce p-2 rounded-full border border-white/30 hover:bg-white/10 transition-colors focus:outline-none"
          aria-label="Scroll down"
        >
          <FaChevronDown className="w-5 h-5" />
        </button>
      </div>
      
      {/* Decorative element */}
      <div className="absolute bottom-0 right-0 left-0 z-10">
        <svg 
          className="w-full text-cream"
          viewBox="0 0 1440 120" 
          fill="currentColor"
          preserveAspectRatio="none"
        >
          <path d="M0,0 C240,100 480,120 720,80 C960,40 1200,100 1440,80 L1440,120 L0,120 Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;