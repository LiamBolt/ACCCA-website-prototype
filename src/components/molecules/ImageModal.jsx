import React, { useEffect } from 'react';
import { X } from 'lucide-react';

const ImageModal = ({ image, onClose }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);
  
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  
  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
      onClick={handleBackdropClick}
    >
      <div className="relative max-w-5xl max-h-screen p-4">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 p-2 bg-white rounded-full text-gray-800 hover:bg-gray-200 transition duration-300 z-10"
          aria-label="Close"
        >
          <X size={24} />
        </button>
        
        <div className="relative">
          <img 
            src={image.src} 
            alt={image.alt} 
            className="max-w-full max-h-[80vh] rounded-lg object-contain"
          />
          
          {(image.title || image.description) && (
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4 rounded-b-lg">
              {image.title && <h3 className="text-xl font-bold mb-1">{image.title}</h3>}
              {image.description && <p className="text-sm">{image.description}</p>}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageModal; 