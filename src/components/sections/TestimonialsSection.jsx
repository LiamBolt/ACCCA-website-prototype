import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    quote: "The Ankole Cultural Cow Conservation Association has helped our community reconnect with our heritage. Their support has made it possible for us to maintain our herd while preserving traditional practices.",
    author: "Mugisha Robert",
    role: "Cattle Keeper, Western Region",
    image: "/images/testimonial-1.jpg"
  },
  {
    id: 2,
    quote: "As a researcher studying indigenous cattle breeds, I've been impressed by the association's commitment to both cultural preservation and scientific advancement. Their breeding program is a model for sustainable conservation.",
    author: "Dr. Nabukenya Sarah",
    role: "Livestock Researcher",
    image: "/images/testimonial-2.jpg"
  },
  {
    id: 3,
    quote: "My grandfather taught me everything about our Ankole cattle. Now, through the association's youth programs, I'm able to pass this knowledge to my children while adapting to modern challenges.",
    author: "Tumusiime Joseph",
    role: "Community Elder",
    image: "/images/testimonial-3.jpg"
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Auto-scroll testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };
  
  return (
    <section className="py-16 bg-gradient-to-br from-green-50/30 to-brown-50/30">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brown-900 mb-4">Community Voices</h2>
          <p className="text-lg text-brown-800 max-w-3xl mx-auto">
            Hear from community members about the impact of our conservation efforts.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="backdrop-blur-sm bg-white/30 border border-white/20 rounded-xl p-6 md:p-8 shadow-lg relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-24 h-24 bg-green-800/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-amber-700/10 rounded-full translate-x-1/2 translate-y-1/2"></div>
            
            {/* Current testimonial */}
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white/40 shadow-lg shrink-0">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].author} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <blockquote className="text-lg md:text-xl italic text-brown-800 mb-4">
                    "{testimonials[currentIndex].quote}"
                  </blockquote>
                  <div className="flex items-center">
                    <div>
                      <p className="font-bold text-brown-900">{testimonials[currentIndex].author}</p>
                      <p className="text-brown-700 text-sm">{testimonials[currentIndex].role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Pagination */}
          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button 
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all ${currentIndex === index ? 'bg-green-800 w-6' : 'bg-brown-300'}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 