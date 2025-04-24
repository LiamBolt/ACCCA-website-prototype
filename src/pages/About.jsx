import React from 'react';
import { Helmet } from 'react-helmet-async';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About ACCCA</title>
        <meta name="description" content="Learn about ACCCA - African Climate Change and Conservation Alliance" />
      </Helmet>
      
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">About ACCCA</h2>
              <p className="mt-4 text-lg text-gray-500">
                The African Climate Change and Conservation Alliance (ACCCA) is dedicated to protecting 
                Africa's natural heritage through innovative conservation programs, community engagement, 
                and sustainable practices.
              </p>
              
              <div className="mt-6">
                <h3 className="text-xl font-bold text-gray-900">Our Mission</h3>
                <p className="mt-2 text-lg text-gray-500">
                  To promote, preserve, and sustainably develop Africa's natural resources for the benefit 
                  of current and future generations through innovation, education, and community empowerment.
                </p>
              </div>
              
              <div className="mt-6">
                <h3 className="text-xl font-bold text-gray-900">Our Vision</h3>
                <p className="mt-2 text-lg text-gray-500">
                  A sustainable Africa where communities thrive in harmony with nature, preserving biodiversity 
                  and adapting to climate change through traditional knowledge and modern conservation techniques.
                </p>
              </div>
            </div>
            
            <div className="mt-12 lg:mt-0">
              <div className="bg-gray-50 rounded-lg shadow-lg overflow-hidden">
                <div className="px-6 py-8 sm:p-10">
                  <h3 className="text-xl font-semibold text-gray-900">Our Impact</h3>
                  <div className="mt-4">
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <div className="flex-shrink-0">
                          <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </div>
                        <p className="ml-3 text-base text-gray-700">
                          Protected over 10,000 hectares of critical habitat
                        </p>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0">
                          <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </div>
                        <p className="ml-3 text-base text-gray-700">
                          Worked with 50+ local communities across Eastern Africa
                        </p>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0">
                          <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </div>
                        <p className="ml-3 text-base text-gray-700">
                          Implemented sustainable agricultural practices in over 100 villages
                        </p>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0">
                          <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </div>
                        <p className="ml-3 text-base text-gray-700">
                          Trained 2,000+ conservationists and community leaders
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Team Section */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 lg:py-24">
          <div className="space-y-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Leadership</h2>
            <p className="text-lg text-gray-500">
              Meet the dedicated professionals leading our conservation efforts.
            </p>
            
            <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8">
              {/* Leadership profiles would go here */}
              <div className="space-y-4">
                <div className="aspect-w-3 aspect-h-2">
                  <div className="h-60 w-full bg-gray-200 rounded-lg overflow-hidden"></div>
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-medium text-gray-900">Jane Kagume</h3>
                  <p className="text-base text-green-600">Executive Director</p>
                </div>
                <div className="text-base text-gray-500">
                  <p>Over 15 years of experience in conservation leadership across East Africa.</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="aspect-w-3 aspect-h-2">
                  <div className="h-60 w-full bg-gray-200 rounded-lg overflow-hidden"></div>
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-medium text-gray-900">David Omondi</h3>
                  <p className="text-base text-green-600">Director of Programs</p>
                </div>
                <div className="text-base text-gray-500">
                  <p>Specialist in community-based conservation with expertise in climate adaptation.</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="aspect-w-3 aspect-h-2">
                  <div className="h-60 w-full bg-gray-200 rounded-lg overflow-hidden"></div>
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-medium text-gray-900">Amina Korir</h3>
                  <p className="text-base text-green-600">Chief Scientific Officer</p>
                </div>
                <div className="text-base text-gray-500">
                  <p>PhD in Conservation Biology with focus on African biodiversity and habitats.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About; 