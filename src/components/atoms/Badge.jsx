import React from 'react';
import PropTypes from 'prop-types';

const colorClasses = {
  green: 'bg-green-100 text-green-800',
  blue: 'bg-blue-100 text-blue-800',
  red: 'bg-red-100 text-red-800',
  yellow: 'bg-yellow-100 text-yellow-800',
  purple: 'bg-purple-100 text-purple-800',
  gray: 'bg-gray-100 text-gray-800',
};

const Badge = ({ text, color = 'green', className = '' }) => {
  const colorClass = colorClasses[color] || colorClasses.green;
  
  return (
    <span 
      className={`px-2 py-1 rounded-full text-xs font-medium uppercase ${colorClass} ${className}`}
    >
      {text}
    </span>
  );
};

Badge.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.oneOf(['green', 'blue', 'red', 'yellow', 'purple', 'gray']),
  className: PropTypes.string,
};

export default Badge; 