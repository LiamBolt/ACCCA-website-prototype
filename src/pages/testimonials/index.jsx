import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import CenteredHeading from '@/components/atoms/CenteredHeading';
import TestimonialCard from '@/components/molecules/TestimonialCard';
import FilterButtons from '@/components/molecules/FilterButtons';
import PageContainer from '@/components/templates/PageContainer';
import { testimonials } from '@/data/testimonialsData';

const TestimonialsPage = () => {
  const [filter, setFilter] = useState('all');
  const categories = ['all', 'visitors', 'partners', 'community'];
  
  const filteredTestimonials = filter === 'all' 
    ? testimonials 
    : testimonials.filter(testimonial => testimonial.category === filter);

  return (
    <PageContainer>
      <Helmet>
        <title>Testimonials | ACCCA</title>
        <meta name="description" content="Read what visitors, partners, and community members say about their experiences with the Ankole Cultural Cow Conservation Association." />
      </Helmet>
      
      <section className="py-12 md:py-16">
        <CenteredHeading>Testimonials</CenteredHeading>
        <p className="text-center text-gray-700 mb-8 max-w-3xl mx-auto">
          Discover what visitors, partners, and community members have to say about their experiences with ACCCA. These testimonials reflect the impact of our conservation efforts and cultural programs.
        </p>
        
        <FilterButtons 
          categories={categories} 
          activeFilter={filter} 
          setFilter={setFilter} 
          className="justify-center mb-12"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTestimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </section>
    </PageContainer>
  );
};

export default TestimonialsPage; 