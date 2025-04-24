import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import PageHeader from '@/components/molecules/PageHeader';
import SectionContainer from '@/components/atoms/SectionContainer';
import GalleryGrid from '@/components/organisms/GalleryGrid';
import ImageModal from '@/components/molecules/ImageModal';

const categories = [
  { id: 'all', name: 'All Images' },
  { id: 'cattle', name: 'Ankole Cattle' },
  { id: 'cultural', name: 'Cultural Events' },
  { id: 'conservation', name: 'Conservation Work' },
  { id: 'community', name: 'Community Activities' }
];

const images = [
  {
    id: 1,
    src: '/assets/images/gallery/ankole-1.jpg',
    alt: 'Ankole cattle grazing at sunset',
    category: 'cattle',
    title: 'Sunset Grazing',
    description: 'Ankole cattle with their majestic horns grazing as the sun sets over the plains.'
  },
  {
    id: 2,
    src: '/assets/images/gallery/cultural-dance-1.jpg',
    alt: 'Traditional cultural dance celebration',
    category: 'cultural',
    title: 'Heritage Dance',
    description: 'Annual cultural festival featuring traditional dances honoring the Ankole cattle.'
  },
  {
    id: 3,
    src: '/assets/images/gallery/conservation-education.jpg',
    alt: 'Conservation education session with local children',
    category: 'conservation',
    title: 'Future Conservationists',
    description: 'Educational program teaching local children about the importance of preserving Ankole cattle.'
  },
  {
    id: 4,
    src: '/assets/images/gallery/community-milking.jpg',
    alt: 'Community members participating in milk collection',
    category: 'community',
    title: 'Morning Milk Collection',
    description: 'Community members gather for the traditional morning milk collection ritual.'
  },
  {
    id: 5,
    src: '/assets/images/gallery/ankole-2.jpg',
    alt: 'Close-up of Ankole cow horns',
    category: 'cattle',
    title: 'Horn Majesty',
    description: 'The distinctive curved horns that make Ankole cattle so iconic.'
  },
  {
    id: 6,
    src: '/assets/images/gallery/cultural-ceremony.jpg',
    alt: 'Cultural ceremony involving Ankole cattle',
    category: 'cultural',
    title: 'Blessing Ceremony',
    description: 'Traditional blessing ceremony where Ankole cattle play a central role in cultural heritage.'
  },
  {
    id: 7,
    src: '/assets/images/gallery/conservation-breeding.jpg',
    alt: 'Conservation breeding program',
    category: 'conservation',
    title: 'Breeding Program',
    description: 'Our carefully managed breeding program ensures genetic diversity in the Ankole cattle population.'
  },
  {
    id: 8,
    src: '/assets/images/gallery/community-workshop.jpg',
    alt: 'Community workshop on sustainable farming',
    category: 'community',
    title: 'Knowledge Sharing',
    description: 'Community workshop where traditional knowledge about cattle raising is shared between generations.'
  }
];

const GalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  
  const filteredImages = activeCategory === 'all' 
    ? images 
    : images.filter(image => image.category === activeCategory);
  
  return (
    <>
      <Helmet>
        <title>Gallery | Ankole Cultural Cow Conservation Association</title>
        <meta name="description" content="Explore our gallery of Ankole cattle, cultural events, conservation work, and community activities." />
      </Helmet>
      
      <PageHeader 
        title="Gallery" 
        subtitle="Explore the beauty of Ankole cattle and our conservation efforts"
        backgroundImage="/assets/images/backgrounds/gallery-header.jpg"
      />
      
      <SectionContainer className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-2 rounded-full transition-colors duration-300 ${
                    activeCategory === category.id
                      ? 'bg-forest-green text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
          
          <GalleryGrid 
            images={filteredImages} 
            onImageClick={(image) => setSelectedImage(image)}
          />
        </div>
      </SectionContainer>
      
      {selectedImage && (
        <ImageModal
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </>
  );
};

export default GalleryPage; 