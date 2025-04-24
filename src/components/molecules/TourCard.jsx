import React from 'react';
import { Link } from 'react-router-dom';
import { FaClock, FaMapMarkerAlt, FaUsers } from 'react-icons/fa';
import Badge from '@/components/atoms/Badge';
import Button from '@/components/atoms/Button';

const TourCard = ({ tour }) => {
  const { id, title, description, image, duration, location, maxGroupSize, price, category } = tour;
  
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg flex flex-col h-full">
      <div className="relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-0 right-0 m-2">
          <Badge text={category} color="green" />
        </div>
      </div>
      
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="font-semibold text-xl mb-2">{title}</h3>
        
        <p className="text-gray-600 mb-4 flex-grow line-clamp-3">
          {description}
        </p>
        
        <div className="flex flex-col gap-2 mb-4 text-sm text-gray-700">
          <div className="flex items-center">
            <FaClock className="mr-2 text-green-800" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center">
            <FaMapMarkerAlt className="mr-2 text-green-800" />
            <span>{location}</span>
          </div>
          <div className="flex items-center">
            <FaUsers className="mr-2 text-green-800" />
            <span>Max {maxGroupSize} people</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
          <span className="font-bold text-green-800 text-lg">${price} <span className="text-sm font-normal">per person</span></span>
          <Link to={`/booking?tour=${id}`}>
            <Button variant="outline">Book Now</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TourCard; 