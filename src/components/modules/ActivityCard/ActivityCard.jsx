import React from 'react';
import PropTypes from 'prop-types';
import GlassPanel from '@/components/ui/GlassPanel/GlassPanel';

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
    <GlassPanel
      variant="default"
      intensity="medium"
      className="h-full overflow-hidden group"
      animate={true}
      onClick={onClick}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        
        {/* Activity Time */}
        <div className="absolute bottom-4 left-4">
          <GlassPanel
            variant="dark"
            intensity="medium"
            rounded="lg"
            className="px-3 py-1 text-sm font-medium text-white"
          >
            {time} · {duration}
          </GlassPanel>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6">
        <div className="flex items-center mb-4">
          {/* Icon Circle */}
          <div className="mr-3 p-2 rounded-full bg-forest-green/10 text-forest-green">
            {icon}
          </div>
          
          <h3 className="font-display text-xl text-forest-green-dark">{title}</h3>
        </div>
        
        <p className="font-body text-gray-700">
          {description}
        </p>
        
        {/* Learn More Indicator */}
        <div className="mt-4 flex items-center text-saddle-brown font-medium">
          <span>Learn more</span>
          <svg className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
      </div>
    </GlassPanel>
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