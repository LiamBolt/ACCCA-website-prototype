import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import TourCard from '@/components/molecules/TourCard';
import FilterButtons from '@/components/molecules/FilterButtons';
import CenteredHeading from '@/components/atoms/CenteredHeading';
import PageContainer from '@/components/templates/PageContainer';
import { tours } from '@/data/toursData';

const ToursPage = () => {
  const [filter, setFilter] = useState('all');
  const categories = ['all', 'half-day', 'full-day', 'multi-day'];
  
  const filteredTours = filter === 'all' 
    ? tours
    : tours.filter(tour => tour.category === filter);

  return (
    <PageContainer>
      <Helmet>
        <title>Cultural Tours | ACCCA</title>
        <meta name="description" content="Discover our guided cultural tours showcasing Ankole traditions, cattle practices, and natural landscapes." />
      </Helmet>
      
      <section className="py-12 md:py-16">
        <CenteredHeading>Cultural Tours</CenteredHeading>
        <p className="text-center text-gray-700 mb-8 max-w-3xl mx-auto">
          Join our expert guides on immersive journeys through Ankole culture, traditions, and landscapes. Each tour offers a unique perspective on our heritage and conservation efforts.
        </p>
        
        <FilterButtons 
          categories={categories} 
          activeFilter={filter} 
          setFilter={setFilter} 
          className="justify-center mb-12"
        />
        
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