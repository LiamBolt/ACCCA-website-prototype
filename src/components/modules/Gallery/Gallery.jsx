import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Mock data for gallery images
const galleryData = [
  {
    id: 1,
    title: 'Royal Ankole Bull',
    description: 'A magnificent specimen of the royal Ankole cattle, known for their distinctive long horns.',
    imageUrl: '/images/ankole-bull-1.jpg', // These would be replaced with actual image paths
    category: 'bulls'
  },
  {
    id: 2, 
    title: 'Ankole Cow and Calf',
    description: 'Mother and calf representing the continuation of this precious heritage.',
    imageUrl: '/images/ankole-cow-calf.jpg',
    category: 'family'
  },
  {
    id: 3,
    title: 'Ankole Herd',
    description: 'A traditional herd of Ankole cattle grazing in their natural habitat.',
    imageUrl: '/images/ankole-herd.jpg',
    category: 'herds'
  },
  {
    id: 4,
    title: 'Ankole in Cultural Ceremony',
    description: 'Ankole cattle play an important role in traditional ceremonies.',
    imageUrl: '/images/ankole-ceremony.jpg',
    category: 'cultural'
  },
  {
    id: 5,
    title: 'Conservation Efforts',
    description: 'Local conservationists working to preserve the Ankole breed.',
    imageUrl: '/images/conservation-work.jpg',
    category: 'conservation'
  },
  {
    id: 6,
    title: 'Ankole Bull with Record Horns',
    description: 'This magnificent bull has some of the longest horns recorded in recent years.',
    imageUrl: '/images/record-horns.jpg',
    category: 'bulls'
  }
];

// Categories for filtering
const categories = ['all', 'bulls', 'family', 'herds', 'cultural', 'conservation'];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedImage, setExpandedImage] = useState(null);

  // Filter images based on selected category
  const filteredImages = selectedCategory === 'all' 
    ? galleryData 
    : galleryData.filter(image => image.category === selectedCategory);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1 
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="w-full py-20 bg-gradient-to-b from-green-50 to-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-brown-800 mb-4">Ankole Cattle Gallery</h2>
          <p className="text-lg text-green-800 max-w-2xl mx-auto">
            Explore the beauty and cultural significance of the Ankole cattle through our collection of images.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                ? 'bg-green-700 text-white shadow-lg'
                : 'bg-white bg-opacity-30 backdrop-blur-sm border border-green-200 text-green-800 hover:bg-green-100'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredImages.map(image => (
            <motion.div
              key={image.id}
              variants={itemVariants}
              className="relative overflow-hidden rounded-xl shadow-xl cursor-pointer group"
              onClick={() => setExpandedImage(image)}
            >
              <div className="aspect-w-16 aspect-h-9 bg-green-100">
                {/* In a real implementation, you'd use real images here */}
                <div 
                  className="w-full h-64 bg-amber-200 bg-opacity-60"
                  style={{
                    backgroundImage: `url('https://via.placeholder.com/600x400?text=Ankole+Cattle+${image.id}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                ></div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-bold">{image.title}</h3>
                <p className="text-sm mt-1">{image.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Image Modal */}
        {expandedImage && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
            onClick={() => setExpandedImage(null)}
          >
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl overflow-hidden max-w-4xl w-full mx-4 p-4" onClick={e => e.stopPropagation()}>
              <div className="relative">
                <div 
                  className="w-full h-96 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://via.placeholder.com/1200x800?text=Ankole+Cattle+${expandedImage.id}')`
                  }}
                ></div>
                <button 
                  className="absolute top-4 right-4 bg-black bg-opacity-50 rounded-full p-2 text-white hover:bg-opacity-70"
                  onClick={() => setExpandedImage(null)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white">{expandedImage.title}</h3>
                <p className="text-gray-100 mt-2">{expandedImage.description}</p>
                <div className="mt-4 inline-block px-4 py-1 rounded-full bg-green-700 text-white text-sm">
                  {expandedImage.category.charAt(0).toUpperCase() + expandedImage.category.slice(1)}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery; 