import { useEffect, useRef } from 'react';
import { useGallery } from '@/hooks/useGallery';
import GalleryLightbox from '@/components/molecules/GalleryLightbox';
import Loader from '@/components/atoms/Loader';
import { ChevronDown, Filter } from 'react-feather';

const GalleryMasonry = () => {
  const {
    filteredImages,
    categories,
    activeCategory,
    isLightboxOpen,
    currentImage,
    isLoading,
    error,
    openLightbox,
    closeLightbox,
    nextImage,
    prevImage,
    filterImagesByCategory
  } = useGallery();
  
  const masonryRef = useRef(null);
  
  useEffect(() => {
    // This would typically use a library like Masonry.js
    // For this implementation, we'll use CSS grid with auto-placement
    const resizeGridItems = () => {
      // Implementation would go here
    };
    
    resizeGridItems();
    window.addEventListener('resize', resizeGridItems);
    
    return () => {
      window.removeEventListener('resize', resizeGridItems);
    };
  }, [filteredImages]);
  
  if (isLoading) return <Loader size="lg" />;
  
  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-500">Failed to load gallery images. Please try again later.</p>
      </div>
    );
  }
  
  return (
    <div className="space-y-6">
      {/* Category Filter */}
      <div className="flex justify-center">
        <div className="relative inline-block">
          <button
            className="px-4 py-2 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg border border-white border-opacity-20 rounded-lg flex items-center"
          >
            <Filter size={16} className="mr-2" />
            Filter by: <span className="font-medium ml-1">{activeCategory === 'all' ? 'All Categories' : activeCategory}</span>
            <ChevronDown size={16} className="ml-2" />
          </button>
          
          <div className="absolute z-10 mt-1 w-56 rounded-md shadow-lg bg-white bg-opacity-95 backdrop-filter backdrop-blur-lg ring-1 ring-black ring-opacity-5">
            <div className="py-1" role="menu" aria-orientation="vertical">
              <button
                className={`block px-4 py-2 text-sm w-full text-left ${activeCategory === 'all' ? 'bg-green-50 text-green-700' : 'hover:bg-gray-100'}`}
                onClick={() => filterImagesByCategory('all')}
              >
                All Categories
              </button>
              
              {categories.filter(c => c !== 'all').map(category => (
                <button
                  key={category}
                  className={`block px-4 py-2 text-sm w-full text-left ${activeCategory === category ? 'bg-green-50 text-green-700' : 'hover:bg-gray-100'}`}
                  onClick={() => filterImagesByCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Gallery Grid */}
      <div 
        ref={masonryRef}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
      >
        {filteredImages.map(image => (
          <div 
            key={image.id}
            className="relative group overflow-hidden rounded-lg"
            style={{ gridRowEnd: `span ${Math.ceil(image.height / 100)}` }}
          >
            <img
              src={image.url}
              alt={image.title}
              className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
              <button
                onClick={() => openLightbox(image.id)}
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-3"
                aria-label={`View ${image.title}`}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
              <h3 className="text-white font-medium">{image.title}</h3>
              <p className="text-white text-sm opacity-80">{image.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      {filteredImages.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-500">No images found in this category.</p>
        </div>
      )}
      
      {/* Lightbox */}
      {isLightboxOpen && (
        <GalleryLightbox
          image={currentImage}
          onClose={closeLightbox}
          onNext={nextImage}
          onPrev={prevImage}
        />
      )}
    </div>
  );
};

export default GalleryMasonry; 