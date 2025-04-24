import React, { useState } from 'react';

const galleryImages = [
  {
    id: 1,
    src: '/images/ankole-gallery-1.jpg',
    alt: 'Majestic Ankole cow with large horns',
    caption: 'The distinctive curved horns can span up to 8 feet from tip to tip'
  },
  {
    id: 2,
    src: '/images/ankole-gallery-2.jpg',
    alt: 'Herd of Ankole cattle grazing',
    caption: 'Ankole cattle grazing in the savanna grasslands'
  },
  {
    id: 3,
    src: '/images/ankole-gallery-3.jpg',
    alt: 'Ankole cattle herder',
    caption: 'Traditional herding practices passed down through generations'
  },
  {
    id: 4,
    src: '/images/ankole-gallery-4.jpg',
    alt: 'Close-up of Ankole cow',
    caption: 'The distinctive reddish-brown coat is adapted to hot climates'
  },
  {
    id: 5,
    src: '/images/ankole-gallery-5.jpg',
    alt: 'Ankole cattle crossing water',
    caption: 'Ankole cattle are known for their resilience and adaptability'
  },
  {
    id: 6,
    src: '/images/ankole-gallery-6.jpg',
    alt: 'Traditional ceremony with Ankole cattle',
    caption: 'Ankole cattle play a central role in cultural ceremonies'
  }
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section className="py-16 bg-gradient-to-br from-amber-50/30 to-green-50/30">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brown-900 mb-4">Gallery</h2>
          <p className="text-lg text-brown-800 max-w-3xl mx-auto">
            Witness the beauty and majesty of the Ankole cattle through our collection of images.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <div 
              key={image.id} 
              className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg"
              onClick={() => openModal(image)}
            >
              <div className="aspect-w-4 aspect-h-3">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white p-4 text-sm">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={closeModal}>
            <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
              <div className="backdrop-blur-md bg-white/10 rounded-xl overflow-hidden">
                <img 
                  src={selectedImage.src} 
                  alt={selectedImage.alt} 
                  className="w-full object-contain max-h-[80vh]"
                />
                <div className="p-4 bg-white/20 backdrop-blur-sm">
                  <p className="text-white text-lg">{selectedImage.caption}</p>
                </div>
              </div>
              <button 
                className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/70 rounded-full p-2"
                onClick={closeModal}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}
        
        <div className="mt-12 text-center">
          <button className="bg-amber-700 hover:bg-amber-800 text-white font-medium py-3 px-6 rounded-lg shadow-md transition-all transform hover:scale-105">
            View Full Gallery
          </button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection; 