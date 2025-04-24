import { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'react-feather';

const GalleryLightbox = ({ image, onClose, onNext, onPrev }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowRight':
          onNext();
          break;
        case 'ArrowLeft':
          onPrev();
          break;
        default:
          break;
      }
    };
    
    document.addEventListener('keydown', handleKeyDown);
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose, onNext, onPrev]);
  
  if (!image) return null;
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 z-10"
        aria-label="Close lightbox"
      >
        <X size={24} />
      </button>
      
      {/* Navigation buttons */}
      <button
        onClick={onPrev}
        className="absolute left-4 text-white p-3 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 z-10"
        aria-label="Previous image"
      >
        <ChevronLeft size={28} />
      </button>
      
      <button
        onClick={onNext}
        className="absolute right-4 text-white p-3 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 z-10"
        aria-label="Next image"
      >
        <ChevronRight size={28} />
      </button>
      
      {/* Image container */}
      <div className="max-w-5xl max-h-[80vh] relative">
        <img
          src={image.url}
          alt={image.title}
          className="max-w-full max-h-[80vh] object-contain"
        />
        
        {/* Caption */}
        <div className="absolute left-0 right-0 bottom-0 bg-black bg-opacity-70 text-white p-4">
          <h3 className="text-xl font-medium mb-1">{image.title}</h3>
          <p className="text-sm opacity-80">{image.description}</p>
          <p className="text-xs opacity-60 mt-1">Category: {image.category}</p>
        </div>
      </div>
    </div>
  );
};

export default GalleryLightbox; 