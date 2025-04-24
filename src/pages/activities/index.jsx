import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageHeader from '@/components/molecules/PageHeader';
import ActivityCard from '@/components/molecules/ActivityCard';
import SectionContainer from '@/components/atoms/SectionContainer';
import CallToAction from '@/components/organisms/CallToAction';

const activities = [
  {
    id: 1,
    title: 'Cow Milking Experience',
    description: 'Learn traditional milking techniques from local herders and participate in the daily ritual of milk collection.',
    imageUrl: '/assets/images/activities/milking.jpg',
    duration: '2 hours',
    difficulty: 'Easy',
    price: '$25',
    availableSlots: 8
  },
  {
    id: 2,
    title: 'Ankole Heritage Walk',
    description: 'Guided educational tour focusing on the cultural significance of Ankole cattle throughout history.',
    imageUrl: '/assets/images/activities/heritage-walk.jpg',
    duration: '3 hours',
    difficulty: 'Easy',
    price: '$30',
    availableSlots: 12
  },
  {
    id: 3,
    title: 'Conservation Workshop',
    description: 'Hands-on workshop on sustainable farming practices and conservation techniques to preserve the Ankole breed.',
    imageUrl: '/assets/images/activities/conservation.jpg',
    duration: '4 hours',
    difficulty: 'Medium',
    price: '$45',
    availableSlots: 10
  },
  {
    id: 4,
    title: 'Cultural Immersion Day',
    description: 'Full-day experience including traditional meals, storytelling, and participating in local customs with Ankole herders.',
    imageUrl: '/assets/images/activities/cultural-day.jpg',
    duration: '8 hours',
    difficulty: 'Medium',
    price: '$85',
    availableSlots: 6
  }
];

const ActivitiesPage = () => {
  return (
    <>
      <Helmet>
        <title>Cultural Activities | Ankole Cultural Cow Conservation Association</title>
        <meta name="description" content="Explore our range of cultural activities centered around Ankole cattle conservation and local traditions." />
      </Helmet>
      
      <PageHeader 
        title="Cultural Activities" 
        subtitle="Immerse yourself in authentic experiences that connect you with Ankole heritage"
        backgroundImage="/assets/images/backgrounds/activities-header.jpg"
      />
      
      <SectionContainer className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Discover Our Experiences</h2>
            <p className="text-lg text-gray-600 max-w-3xl">
              Our carefully curated activities offer authentic engagement with Ankole cattle heritage, 
              from hands-on experiences to educational workshops focused on conservation and culture.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity) => (
              <ActivityCard key={activity.id} activity={activity} />
            ))}
          </div>
        </div>
      </SectionContainer>
      
      <SectionContainer className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Custom Group Experiences</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Planning for a school, corporate retreat, or special occasion? Contact us to design a 
              customized experience tailored to your group's interests and needs.
            </p>
          </div>
          
          <div className="flex justify-center">
            <a href="/contact" className="px-8 py-3 bg-forest-green text-white rounded-lg hover:bg-green-800 transition duration-300 font-medium">
              Inquire About Group Bookings
            </a>
          </div>
        </div>
      </SectionContainer>
      
      <CallToAction 
        title="Ready to Book Your Experience?"
        description="Secure your spot for our most popular activities and start your journey into Ankole culture."
        buttonText="Book Now"
        buttonLink="/booking"
      />
    </>
  );
};

export default ActivitiesPage; 