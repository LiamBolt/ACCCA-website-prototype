import React from 'react';
import { Helmet } from 'react-helmet-async';

const Partners = () => {
  const partnersList = [
    {
      id: 1,
      name: 'African Wildlife Foundation',
      category: 'Conservation',
      description: 'Working together on habitat protection and wildlife conservation projects across Africa.',
      logo: '/placeholder-logo.png'
    },
    {
      id: 2,
      name: 'Green Climate Fund',
      category: 'Funding',
      description: 'Supporting our climate adaptation and mitigation programs through grants and technical assistance.',
      logo: '/placeholder-logo.png'
    },
    {
      id: 3,
      name: 'Ministry of Environment',
      category: 'Government',
      description: 'Collaborating on policy development and implementation of national conservation strategies.',
      logo: '/placeholder-logo.png'
    },
    {
      id: 4,
      name: 'University of Nairobi',
      category: 'Research',
      description: 'Research partnerships that build scientific knowledge to support conservation efforts.',
      logo: '/placeholder-logo.png'
    },
    {
      id: 5,
      name: 'Local Communities Network',
      category: 'Community',
      description: 'Working with local community associations to implement grassroots conservation initiatives.',
      logo: '/placeholder-logo.png'
    },
    {
      id: 6,
      name: 'Conservation International',
      category: 'Conservation',
      description: 'Strategic partnership on regional biodiversity conservation and sustainable development.',
      logo: '/placeholder-logo.png'
    },
    {
      id: 7,
      name: 'EcoBusiness Fund',
      category: 'Funding',
      description: 'Supporting our sustainable enterprise development programs in local communities.',
      logo: '/placeholder-logo.png'
    },
    {
      id: 8,
      name: 'Africa Adaptation Initiative',
      category: 'Climate',
      description: 'Working together to enhance climate resilience in vulnerable communities.',
      logo: '/placeholder-logo.png'
    }
  ];

  return (
    <>
      <Helmet>
        <title>ACCCA - Our Partners</title>
        <meta name="description" content="Learn about the organizations and institutions partnering with ACCCA" />
      </Helmet>
      
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
          <div className="lg:text-center">
            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Partners
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 lg:mx-auto">
              We collaborate with organizations and institutions that share our vision for a sustainable Africa.
            </p>
          </div>
          
          <div className="mt-16 grid gap-12 lg:grid-cols-2">
            {partnersList.map((partner) => (
              <div key={partner.id} className="flex items-start">
                <div className="flex-shrink-0 h-16 w-16 bg-gray-200 rounded"></div>
                <div className="ml-6">
                  <h3 className="text-lg font-medium text-gray-900">{partner.name}</h3>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 mt-2">
                    {partner.category}
                  </span>
                  <p className="mt-2 text-base text-gray-500">{partner.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-20 text-center">
            <h2 className="text-2xl font-bold text-gray-900">Interested in partnering with ACCCA?</h2>
            <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
              We're always looking for new partnerships that can help advance our conservation mission.
              Whether you're an organization, institution, or business, we'd love to explore collaboration opportunities.
            </p>
            <div className="mt-8">
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Partners; 