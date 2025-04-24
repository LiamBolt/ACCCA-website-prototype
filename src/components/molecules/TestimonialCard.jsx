import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const TestimonialCard = ({ testimonial }) => {
  const { name, role, location, content, image, rating } = testimonial;
  
  // Generate stars based on rating
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <svg 
          key={i}
          className={`w-4 h-4 ${i <= rating ? 'text-yellow-500' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }
    return stars;
  };
  
  return (
    <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-lg p-6 shadow-md border border-gray-100 flex flex-col h-full">
      <div className="flex justify-between items-start mb-4">
        <FaQuoteLeft className="text-green-800 opacity-20 text-3xl" />
        <div className="flex">
          {renderStars()}
        </div>
      </div>
      
      <p className="text-gray-700 mb-6 flex-grow italic">
        "{content}"
      </p>
      
      <div className="flex items-center mt-auto pt-4 border-t border-gray-100">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-sm text-gray-600">{role}, {location}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard; 