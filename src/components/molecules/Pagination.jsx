import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };
  
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };
  
  const renderPageNumbers = () => {
    const pages = [];
    
    // Always show first page
    pages.push(
      <button
        key={1}
        onClick={() => onPageChange(1)}
        className={`w-10 h-10 rounded-full ${
          currentPage === 1 
            ? 'bg-forest-green text-white' 
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        } transition duration-300`}
      >
        1
      </button>
    );
    
    // Add ellipsis if needed
    if (currentPage > 3) {
      pages.push(
        <span key="ellipsis1" className="px-2">
          ...
        </span>
      );
    }
    
    // Add pages around current page
    for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
      if (i === 1 || i === totalPages) continue; // Skip first and last page as they're always shown
      
      pages.push(
        <button
          key={i}
          onClick={() => onPageChange(i)}
          className={`w-10 h-10 rounded-full ${
            currentPage === i 
              ? 'bg-forest-green text-white' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          } transition duration-300`}
        >
          {i}
        </button>
      );
    }
    
    // Add ellipsis if needed
    if (currentPage < totalPages - 2) {
      pages.push(
        <span key="ellipsis2" className="px-2">
          ...
        </span>
      );
    }
    
    // Always show last page if there's more than one page
    if (totalPages > 1) {
      pages.push(
        <button
          key={totalPages}
          onClick={() => onPageChange(totalPages)}
          className={`w-10 h-10 rounded-full ${
            currentPage === totalPages 
              ? 'bg-forest-green text-white' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          } transition duration-300`}
        >
          {totalPages}
        </button>
      );
    }
    
    return pages;
  };
  
  return (
    <div className="flex items-center justify-center space-x-2">
      <button
        onClick={handlePrevPage}
        disabled={currentPage === 1}
        className={`w-10 h-10 rounded-full flex items-center justify-center ${
          currentPage === 1 
            ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        } transition duration-300`}
        aria-label="Previous page"
      >
        <ChevronLeft size={18} />
      </button>
      
      {renderPageNumbers()}
      
      <button
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
        className={`w-10 h-10 rounded-full flex items-center justify-center ${
          currentPage === totalPages 
            ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        } transition duration-300`}
        aria-label="Next page"
      >
        <ChevronRight size={18} />
      </button>
    </div>
  );
};

export default Pagination; 