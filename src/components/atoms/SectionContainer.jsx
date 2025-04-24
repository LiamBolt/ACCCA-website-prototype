import React from 'react';
import PropTypes from 'prop-types';

const SectionContainer = ({ 
  children, 
  className = '', 
  bgColor = 'bg-white',
  id = null,
  fullWidth = false,
  paddingY = 'py-12 md:py-16'
}) => {
  return (
    <section id={id} className={`${bgColor} ${paddingY} ${className}`}>
      <div className={`mx-auto px-4 sm:px-6 lg:px-8 ${fullWidth ? 'w-full' : 'max-w-7xl'}`}>
        {children}
      </div>
    </section>
  );
};

SectionContainer.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  bgColor: PropTypes.string,
  id: PropTypes.string,
  fullWidth: PropTypes.bool,
  paddingY: PropTypes.string,
};

export default SectionContainer; 