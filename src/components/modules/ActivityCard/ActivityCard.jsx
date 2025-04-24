import React from 'react';
import PropTypes from 'prop-types';

const ActivityCard = ({
  title,
  description,
  icon,
  imageSrc,
  time,
  duration,
  onClick,
}) => {
  return (
    <div 
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col cursor-pointer"
      onClick={onClick}
    >
      <div className="relative h-48">
        <img 
          src={imageSrc} 
          alt={title}
          className="w-full h-full object-cover" 
        />
        <div className="absolute top-0 left-0 m-3 bg-white bg-opacity-90 backdrop-blur-sm p-2 rounded-full shadow-sm">
          <div className="text-forest-green-dark">
            {icon}
          </div>
        </div>
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{description}</p>
        
        <div className="mt-auto flex justify-between items-center pt-3 border-t border-gray-100">
          <div className="text-sm text-gray-500">
            <span className="font-medium text-forest-green-dark">{time}</span>
          </div>
          <div className="text-sm text-gray-500">
            <span className="font-medium text-forest-green-dark">{duration}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

ActivityCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  imageSrc: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default ActivityCard; 