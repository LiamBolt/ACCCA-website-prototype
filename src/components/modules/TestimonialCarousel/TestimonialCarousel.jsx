import React, { useState, useEffect, useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import TestimonialCard from '@/components/molecules/TestimonialCard';

// Sample testimonial data
const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Tourist',
    location: 'USA',
    content: 'My visit to the Ankole Cultural Center was the highlight of my Uganda trip. Learning about the connection between the people and these magnificent cattle was eye-opening. The guides were incredibly knowledgeable and passionate!',
    image: '/src/assets/images/testimonials/testimonial-1.jpg',
    rating: 5
  },
  {
    id: 2,
    name: 'David Mukasa',
    role: 'Local Farmer',
    location: 'Uganda',
    content: 'As someone who grew up around Ankole cattle, I appreciate how ACCCA is preserving our traditions while helping farmers like me adapt to changing climate conditions. Their training programs have been invaluable.',
    image: '/src/assets/images/testimonials/testimonial-2.jpg',
    rating: 5
  },
  {
    id: 3,
    name: 'Emma Nakato',
    role: 'Student',
    location: 'Uganda',
    content: 'The educational programs at ACCCA opened my eyes to the importance of cultural preservation. I now understand why protecting Ankole cattle is about more than just animals—its about preserving a way of life.',
    image: '/src/assets/images/testimonials/testimonial-3.jpg',
    rating: 4
  },
  {
    id: 4,
    name: 'Michael Chen',
    role: 'Environmental Researcher',
    location: 'Canada',
    content: 'The conservation work being done at ACCCA represents an excellent model of how cultural preservation and environmental sustainability can work hand-in-hand. Their approach should be replicated elsewhere.',
    image: '/src/assets/images/testimonials/testimonial-4.jpg',
    rating: 5
  },
  {
    id: 5,
    name: 'Rebecca Atwine',
    role: 'Community Leader',
    location: 'Uganda',
    content: 'Our village has benefited tremendously from ACCCA\'s community programs. They\'ve helped us maintain our cultural identity while providing economic opportunities for our youth.',
    image: '/src/assets/images/testimonials/testimonial-5.jpg',
    rating: 5
  }
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [transition, setTransition] = useState(false);
  const carouselRef = useRef(null);
  
  // For larger screens, show multiple testimonials at once
  const getItemsPerPage = () => {
    if (typeof window === 'undefined') return 1;
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
  };
  
  const [itemsPerPage, setItemsPerPage] = useState(getItemsPerPage());
  
  // Update items per page on window resize
  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(getItemsPerPage());
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const nextTestimonial = () => {
    setTransition(true);
    setCurrentIndex(prevIndex => 
      prevIndex + itemsPerPage >= testimonials.length ? 0 : prevIndex + 1
    );
    
    // Reset transition flag after animation completes
    setTimeout(() => setTransition(false), 500);
  };
  
  const prevTestimonial = () => {
    setTransition(true);
    setCurrentIndex(prevIndex => 
      prevIndex <= 0 ? testimonials.length - itemsPerPage : prevIndex - 1
    );
    
    // Reset transition flag after animation completes
    setTimeout(() => setTransition(false), 500);
  };

  // Autoplay functionality
  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [autoplay, currentIndex, itemsPerPage]);
  
  // Pause autoplay when hovering
  const handleMouseEnter = () => setAutoplay(false);
  const handleMouseLeave = () => setAutoplay(true);
  
  // Get current visible testimonials
  const getVisibleTestimonials = () => {
    const result = [];
    for (let i = 0; i < itemsPerPage; i++) {
      const index = (currentIndex + i) % testimonials.length;
      result.push(testimonials[index]);
    }
    return result;
  };
  
  const visibleTestimonials = getVisibleTestimonials();

  return (
    <div 
      className="relative px-4"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={carouselRef}
    >
      <div className="hidden md:flex justify-between absolute top-1/2 left-0 right-0 -mt-6 px-4 z-10">
        <button 
          onClick={prevTestimonial}
          className="w-12 h-12 rounded-full bg-white bg-opacity-80 shadow-md flex items-center justify-center text-green-800 hover:bg-green-700 hover:text-white transition-colors focus:outline-none"
          aria-label="Previous testimonial"
        >
          <FaChevronLeft className="w-5 h-5" />
        </button>
        
        <button 
          onClick={nextTestimonial}
          className="w-12 h-12 rounded-full bg-white bg-opacity-80 shadow-md flex items-center justify-center text-green-800 hover:bg-green-700 hover:text-white transition-colors focus:outline-none"
          aria-label="Next testimonial"
        >
          <FaChevronRight className="w-5 h-5" />
        </button>
      </div>
      
      <div 
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500 ease-in-out ${transition ? 'opacity-40' : 'opacity-100'}`}
      >
        {visibleTestimonials.map((testimonial) => (
          <div key={testimonial.id}>
            <TestimonialCard testimonial={testimonial} />
          </div>
        ))}
      </div>
      
      {/* Mobile navigation dots */}
      <div className="flex justify-center mt-8 md:hidden">
        {Array.from({ length: Math.ceil(testimonials.length / itemsPerPage) }).map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setTransition(true);
              setCurrentIndex(index * itemsPerPage);
              setTimeout(() => setTransition(false), 500);
            }}
            className={`w-3 h-3 mx-1 rounded-full ${
              Math.floor(currentIndex / itemsPerPage) === index ? 'bg-green-700' : 'bg-gray-300'
            }`}
            aria-label={`Go to testimonial group ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel; 