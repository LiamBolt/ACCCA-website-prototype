import React from 'react';
import PropTypes from 'prop-types';

const PageHeader = ({ 
  title, 
  subtitle, 
  backgroundImage = null, 
  overlay = true,
  centered = true,
  className = '' 
}) => {
  const containerClasses = `relative px-4 py-16 md:py-24 ${className}`;
  const textContainerClasses = centered ? 'text-center max-w-4xl mx-auto' : 'max-w-4xl';
  
  return (
    <header className={containerClasses}>
      {backgroundImage && (
        <>
          <div className="absolute inset-0 overflow-hidden">
            <img 
              src={backgroundImage} 
              alt=""
              className="w-full h-full object-cover"
            />
            {overlay && (
              <div className="absolute inset-0 bg-black bg-opacity-50" />
            )}
          </div>
          <div className="relative z-10">
            <div className={textContainerClasses}>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                {title}
              </h1>
              {subtitle && (
                <p className="text-lg md:text-xl text-white opacity-90">
                  {subtitle}
                </p>
              )}
            </div>
          </div>
        </>
      )}
      
      {!backgroundImage && (
        <div className={textContainerClasses}>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl text-gray-600">
              {subtitle}
            </p>
          )}
        </div>
      )}
    </header>
  );
};

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  backgroundImage: PropTypes.string,
  overlay: PropTypes.bool,
  centered: PropTypes.bool,
  className: PropTypes.string,
};

export default PageHeader; 