import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CallToAction = ({
  title = "Ready to get involved?",
  description = "Join us in our mission to protect and preserve the cultural and natural heritage of the Ankole region.",
  buttonText = "Contact Us",
  buttonLink = "/contact",
  backgroundImage = null,
  className = "",
}) => {
  return (
    <div className={`relative py-16 md:py-24 ${className}`}>
      {backgroundImage ? (
        <>
          <div className="absolute inset-0 overflow-hidden">
            <img
              src={backgroundImage}
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-green-900 bg-opacity-70" />
          </div>
          <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>
            <p className="text-xl text-white opacity-90 mb-8">{description}</p>
            <Link
              to={buttonLink}
              className="inline-block bg-white text-green-800 px-8 py-3 rounded-lg font-medium text-lg hover:bg-gray-100 transition-colors"
            >
              {buttonText}
            </Link>
          </div>
        </>
      ) : (
        <div className="bg-green-800 rounded-2xl py-12 px-8 md:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>
            <p className="text-xl text-white opacity-90 mb-8">{description}</p>
            <Link
              to={buttonLink}
              className="inline-block bg-white text-green-800 px-8 py-3 rounded-lg font-medium text-lg hover:bg-gray-100 transition-colors"
            >
              {buttonText}
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

CallToAction.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  buttonText: PropTypes.string,
  buttonLink: PropTypes.string,
  backgroundImage: PropTypes.string,
  className: PropTypes.string,
};

export default CallToAction; 