import React from 'react';
import PropTypes from 'prop-types';

const FilterButtons = ({ categories, activeFilter, setActiveFilter }) => {
  return (
    <div className="mt-8 flex flex-wrap justify-center gap-3">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setActiveFilter(category)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            activeFilter === category
              ? 'bg-green-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          {category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ')}
        </button>
      ))}
    </div>
  );
};

FilterButtons.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeFilter: PropTypes.string.isRequired,
  setActiveFilter: PropTypes.func.isRequired,
};

export default FilterButtons; 