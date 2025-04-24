import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import TourCard from '@/components/molecules/TourCard';
import FilterButtons from '@/components/molecules/FilterButtons';
import CenteredHeading from '@/components/atoms/CenteredHeading';
import PageContainer from '@/components/templates/PageContainer';
import { tours } from '@/data/toursData';

const ToursPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const categories = ['all', 'half-day', 'full-day', 'multi-day'];
  
  const filteredTours = activeFilter === 'all' 
    ? tours
    : tours.filter(tour => tour.category === activeFilter);

  return (
    <PageContainer>
      <Helmet>
        <title>ACCCA - Tours</title>
        <meta name="description" content="Explore our conservation tours and expeditions" />
      </Helmet>
      
      <section className="py-12 md:py-16">
        <CenteredHeading>Cultural Tours</CenteredHeading>
        <p className="text-center text-gray-700 mb-8 max-w-3xl mx-auto">
          Join our expert guides on immersive journeys through Ankole culture, traditions, and landscapes. Each tour offers a unique perspective on our heritage and conservation efforts.
        </p>
        
        <div className="mt-8 flex justify-center space-x-4">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              activeFilter === 'all' 
                ? 'bg-green-600 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            All Tours
          </button>
          <button
            onClick={() => setActiveFilter('wildlife')}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              activeFilter === 'wildlife' 
                ? 'bg-green-600 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Wildlife
          </button>
          <button
            onClick={() => setActiveFilter('community')}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              activeFilter === 'community' 
                ? 'bg-green-600 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Community
          </button>
          <button
            onClick={() => setActiveFilter('forest')}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              activeFilter === 'forest' 
                ? 'bg-green-600 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Forest
          </button>
          <button
            onClick={() => setActiveFilter('research')}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              activeFilter === 'research' 
                ? 'bg-green-600 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Research
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTours.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
      </section>
    </PageContainer>
  );
};

export default ToursPage; 