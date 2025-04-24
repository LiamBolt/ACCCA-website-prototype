import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Users, BarChart2, DollarSign } from 'lucide-react';

const ActivityCard = ({ activity }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-60">
        <img 
          src={activity.imageUrl} 
          alt={activity.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-forest-green text-white px-3 py-1 rounded-full text-sm font-medium">
          {activity.price}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{activity.title}</h3>
        <p className="text-gray-600 mb-4">{activity.description}</p>
        
        <div className="flex flex-wrap gap-4 mb-6">
          <div className="flex items-center text-gray-700">
            <Clock size={18} className="mr-1" />
            <span className="text-sm">{activity.duration}</span>
          </div>
          
          <div className="flex items-center text-gray-700">
            <BarChart2 size={18} className="mr-1" />
            <span className="text-sm">{activity.difficulty}</span>
          </div>
          
          <div className="flex items-center text-gray-700">
            <Users size={18} className="mr-1" />
            <span className="text-sm">{activity.availableSlots} spots left</span>
          </div>
        </div>
        
        <Link 
          to={`/booking?activity=${activity.id}`}
          className="block w-full text-center px-4 py-2 bg-forest-green text-white rounded-lg hover:bg-green-800 transition duration-300"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
};

export default ActivityCard; 