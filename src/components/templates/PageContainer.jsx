import React from 'react';
import PropTypes from 'prop-types';

const PageContainer = ({ children, className = '' }) => {
  return (
    <main className={`container mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </main>
  );
};

PageContainer.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default PageContainer; 