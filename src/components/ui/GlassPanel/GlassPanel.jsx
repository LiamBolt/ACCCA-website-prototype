import React from 'react';
import PropTypes from 'prop-types';

const GlassPanel = ({ 
  children, 
  className = '', 
  variant = 'light', 
  intensity = 'medium',
  borderRadius = 'rounded-xl',
  shadow = true
}) => {
  // Base classes for all glass panels
  const baseClasses = `backdrop-blur ${borderRadius} overflow-hidden ${shadow ? 'shadow-lg' : ''}`;
  
  // Variant and intensity combinations
  const variantClasses = {
    light: {
      low: 'bg-white/30 border border-white/40',
      medium: 'bg-white/50 border border-white/50',
      high: 'bg-white/70 border border-white/60'
    },
    dark: {
      low: 'bg-gray-900/30 border border-gray-800/40 text-white',
      medium: 'bg-gray-900/50 border border-gray-800/50 text-white',
      high: 'bg-gray-900/70 border border-gray-800/60 text-white'
    },
    green: {
      low: 'bg-green-900/30 border border-green-800/40 text-white',
      medium: 'bg-green-900/50 border border-green-800/50 text-white',
      high: 'bg-green-900/70 border border-green-800/60 text-white'
    }
  };
  
  // Select the appropriate variant and intensity
  const appearanceClass = variantClasses[variant][intensity];
  
  return (
    <div className={`${baseClasses} ${appearanceClass} ${className}`}>
      {children}
    </div>
  );
};

GlassPanel.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['light', 'dark', 'green']),
  intensity: PropTypes.oneOf(['low', 'medium', 'high']),
  borderRadius: PropTypes.string,
  shadow: PropTypes.bool
};

export default GlassPanel; 