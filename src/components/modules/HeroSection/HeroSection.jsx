import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import GlassPanel from '@/components/ui/GlassPanel/GlassPanel';
import Button from '@/components/ui/Button/Button';
import { useIntersection } from '@/hooks/useIntersection';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useIntersection({ threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <section 
      ref={ref}
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/src/assets/videos/hero-background.mp4" type="video/mp4" />
      </video>
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent"></div>
      
      {/* Content Container */}
      <div className="container mx-auto px-4 h-full flex items-center">
        <div className="max-w-3xl">
          {/* Animated Content */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <GlassPanel 
              variant="dark" 
              intensity="medium" 
              className="p-8 backdrop-blur-xl"
            >
              <h1 className="font-display text-4xl md:text-6xl text-white mb-4">
                Ankole Cultural Cow Conservation Association
              </h1>

              <div className="h-1 w-24 bg-saddle-brown my-6"></div>
              
              <p className="font-body text-xl text-white/90 mb-8">
                "Cows are our wealth, culture"
              </p>
              
              <p className="font-body text-lg text-white/80 mb-8">
                Experience the rich cultural heritage of the Ankole people through our immersive cultural tours, activities, and conservation efforts.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="secondary" 
                  size="lg" 
                  className="font-bold"
                >
                  Book Your Experience
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  glassmorphic={true}
                >
                  Explore Activities
                </Button>
              </div>
            </GlassPanel>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <svg className="w-8 h-8 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 