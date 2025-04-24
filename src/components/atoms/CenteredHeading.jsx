import React from 'react';
import PropTypes from 'prop-types';

const CenteredHeading = ({ children, subtitle, className = '' }) => {
  return (
    <div className={`text-center mb-8 ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        {children}
      </h2>
      {subtitle && (
        <p className="text-gray-600 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

CenteredHeading.propTypes = {
  children: PropTypes.node.isRequired,
  subtitle: PropTypes.string,
  className: PropTypes.string,
};

export default CenteredHeading; 