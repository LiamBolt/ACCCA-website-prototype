import React from 'react';
import { Helmet } from 'react-helmet-async';

const Testimonials = () => {
  const testimonialsList = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Environmental Educator',
      content: 'The work ACCCA is doing is transformative. Their approach to combining traditional knowledge with modern conservation techniques has created a model that truly works for African communities.',
      image: '/placeholder.jpg'
    },
    {
      id: 2,
      name: 'Daniel Mwangi',
      role: 'Local Farmer',
      content: 'Being part of ACCCA\'s sustainable agriculture program has changed my life. I\'ve increased my crop yields while using practices that protect my land for future generations.',
      image: '/placeholder.jpg'
    },
    {
      id: 3,
      name: 'Emily Ochieng',
      role: 'Conservation Student',
      content: 'My internship with ACCCA gave me practical experience in community-based conservation that I couldn\'t have gotten anywhere else. Their team is passionate and truly committed to their mission.',
      image: '/placeholder.jpg'
    },
    {
      id: 4,
      name: 'Michael Abara',
      role: 'Community Leader',
      content: 'ACCCA has been a reliable partner to our village for over 5 years. Together, we\'ve implemented water conservation projects that have helped us survive recent droughts.',
      image: '/placeholder.jpg'
    },
    {
      id: 5,
      name: 'Lisa Kimathi',
      role: 'Research Partner',
      content: 'The data collected through our joint research projects with ACCCA has been invaluable. Their team brings a unique perspective that bridges scientific and traditional knowledge systems.',
      image: '/placeholder.jpg'
    },
    {
      id: 6,
      name: 'Robert Chen',
      role: 'Eco-Tourist',
      content: 'My conservation tour with ACCCA was the highlight of my trip to Africa. The guides were knowledgeable, and I gained a deep appreciation for the complex challenges and innovative solutions in African conservation.',
      image: '/placeholder.jpg'
    }
  ];

  return (
    <>
      <Helmet>
        <title>ACCCA - Testimonials</title>
        <meta name="description" content="Read what others are saying about their experiences with ACCCA" />
      </Helmet>
      
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Testimonials
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Hear from the communities, partners, and visitors who have experienced our work firsthand.
            </p>
          </div>
          
          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            {testimonialsList.map((testimonial) => (
              <div key={testimonial.id} className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-6 py-8">
                  <div className="flex items-center mb-4">
                    <div className="h-12 w-12 rounded-full bg-gray-200"></div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">{testimonial.name}</h3>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                  <blockquote>
                    <p className="text-base italic text-gray-600">"{testimonial.content}"</p>
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 bg-green-50 rounded-lg overflow-hidden shadow">
            <div className="px-6 py-8 sm:p-10 text-center">
              <h2 className="text-2xl font-bold text-gray-900">Share Your Experience</h2>
              <p className="mt-4 text-lg text-gray-600">
                Have you participated in our conservation activities, tours, or programs? We'd love to hear about your experience.
              </p>
              <div className="mt-8">
                <a
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  Submit Your Testimonial
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials; 