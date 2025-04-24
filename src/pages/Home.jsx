import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '@/components/modules/HeroSection/HeroSection';
import GlassPanel from '@/components/ui/GlassPanel/GlassPanel';
import Button from '@/components/ui/Button/Button';
import ActivityCard from '@/components/modules/ActivityCard/ActivityCard';
import TestimonialCarousel from '@/components/modules/TestimonialCarousel/TestimonialCarousel';
import { useIntersection } from '@/hooks/useIntersection';

// Import icons (assuming these are created or imported from a library)
import { CowIcon, MilkIcon, DanceIcon, NatureIcon } from '@/components/ui/Icons';

const HomePage = () => {
  // Set page title on component mount
  useEffect(() => {
    document.title = 'ACCCA | Ankole Cultural Cow Conservation Association';
  }, []);

  // Featured activities
  const featuredActivities = [
    {
      id: 'cow-milking',
      title: 'Cow Milking',
      description: 'Learn traditional milking techniques from Ankole herders and participate in this daily ritual.',
      icon: <CowIcon className="w-6 h-6" />,
      imageSrc: '/src/assets/images/activities/cow-milking.jpg',
      time: '6 AM or 7 PM',
      duration: '60 min'
    },
    {
      id: 'milk-churning',
      title: 'Milk Churning & Ghee Making',
      description: 'Discover how Ankole families create traditional dairy products using age-old methods.',
      icon: <MilkIcon className="w-6 h-6" />,
      imageSrc: '/src/assets/images/activities/milk-churning.jpg',
      time: 'After milking',
      duration: '120 min'
    },
    {
      id: 'cultural-dancing',
      title: 'Cultural Dancing',
      description: 'Experience vibrant Banyankole dance performances that celebrate cattle culture.',
      icon: <DanceIcon className="w-6 h-6" />,
      imageSrc: '/src/assets/images/activities/cultural-dancing.jpg',
      time: 'Evenings',
      duration: '40 min'
    },
    {
      id: 'nature-walk',
      title: 'Nature Walk',
      description: 'Explore the 12.7km trail connecting culturally significant sites in the region.',
      icon: <NatureIcon className="w-6 h-6" />,
      imageSrc: '/src/assets/images/activities/nature-walk.jpg',
      time: 'Flexible',
      duration: 'Full day'
    }
  ];

  // Animation refs for scroll-triggered animations
  const { ref: missionRef, inView: missionInView } = useIntersection({ threshold: 0.2 });
  const { ref: activitiesRef, inView: activitiesInView } = useIntersection({ threshold: 0.1 });
  const { ref: testimonialsRef, inView: testimonialsInView } = useIntersection({ threshold: 0.1 });
  const { ref: ctaRef, inView: ctaInView } = useIntersection({ threshold: 0.2 });

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Mission Section */}
      <section 
        ref={missionRef}
        className="py-16 md:py-24 bg-cultural-texture bg-opacity-5 bg-fixed"
      >
        <div className="container mx-auto px-4">
          <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${missionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-forest-green-dark mb-6">Our Mission</h2>
            
            <div className="h-1 w-24 bg-saddle-brown mx-auto my-6"></div>
            
            <GlassPanel className="p-8 md:p-10">
              <p className="text-lg md:text-xl text-gray-800 mb-6">
                To promote, preserve, and sustainably develop the Ankole cattle breed for the benefit of current and future generations through innovation, education, and community empowerment.
              </p>
              
              <p className="text-base md:text-lg text-gray-700">
                For over 20 years, the Ankole Cultural Cow Conservation Association has worked to protect this magnificent breed while celebrating the rich cultural heritage of the Ankole people.
              </p>
              
              <div className="mt-8">
                <Button
                  variant="outline"
                  size="lg"
                  as={Link}
                  to="/about"
                >
                  Learn Our Story
                </Button>
              </div>
            </GlassPanel>
          </div>
        </div>
      </section>
      
      {/* Featured Activities */}
      <section 
        ref={activitiesRef}
        className="py-16 md:py-24"
      >
        <div className="container mx-auto px-4">
          <div className={`text-center mb-12 transition-all duration-700 ${activitiesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-forest-green-dark">Experience Our Culture</h2>
            <div className="h-1 w-24 bg-saddle-brown mx-auto my-6"></div>
            <p className="max-w-2xl mx-auto text-lg text-gray-700">
              Immerse yourself in authentic Ankole traditions with our hands-on cultural activities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {featuredActivities.map((activity, index) => (
              <div 
                key={activity.id}
                className={`transition-all duration-700 delay-${index * 100} ${activitiesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              >
                <ActivityCard
                  title={activity.title}
                  description={activity.description}
                  icon={activity.icon}
                  imageSrc={activity.imageSrc}
                  time={activity.time}
                  duration={activity.duration}
                  onClick={() => {/* navigate to detail page */}}
                />
              </div>
            ))}
          </div>
          
          <div className={`text-center mt-12 transition-all duration-700 delay-500 ${activitiesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Button
              variant="primary"
              size="lg"
              as={Link}
              to="/activities"
              className="font-bold"
            >
              View All Activities
            </Button>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section 
        ref={testimonialsRef}
        className="py-16 md:py-24 bg-cattle-pattern bg-opacity-5 bg-fixed"
      >
        <div className="container mx-auto px-4">
          <div className={`text-center mb-12 transition-all duration-700 ${testimonialsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-forest-green-dark">What Our Visitors Say</h2>
            <div className="h-1 w-24 bg-saddle-brown mx-auto my-6"></div>
          </div>
          
          <div className={`transition-all duration-1000 delay-300 ${testimonialsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <TestimonialCarousel />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section 
        ref={ctaRef}
        className="py-16 md:py-24 relative overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/src/assets/images/backgrounds/cta-background.jpg"
            alt="Ankole cattle grazing"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-forest-green/60"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className={`max-w-3xl mx-auto transition-all duration-1000 ${ctaInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <GlassPanel
              variant="dark"
              intensity="medium"
              className="p-8 md:p-12 text-center"
            >
              <h2 className="font-display text-3xl md:text-4xl text-white mb-6">
                Plan Your Cultural Journey Today
              </h2>
              
              <p className="text-lg md:text-xl text-white/90 mb-8">
                Join us for an unforgettable experience celebrating Ankole culture, heritage, and the majestic Ankole cattle.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button
                  variant="secondary"
                  size="xl"
                  as={Link}
                  to="/booking"
                  className="font-bold"
                >
                  Book Your Visit
                </Button>
                
                <Button
                  variant="outline"
                  size="xl"
                  as={Link}
                  to="/contact"
                  glassmorphic={true}
                >
                  Contact Us
                </Button>
              </div>
            </GlassPanel>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage; 