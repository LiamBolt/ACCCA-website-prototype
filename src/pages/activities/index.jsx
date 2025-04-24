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
        <title>ACCCA - Activities</title>
        <meta name="description" content="Explore activities at ACCCA - African Climate Change and Conservation Alliance" />
      </Helmet>
      
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Conservation Activities
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Discover the innovative conservation programs we're implementing across Africa.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Activity 1 */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="h-48 bg-gray-200"></div>
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900">Reforestation Projects</h3>
                <p className="mt-2 text-base text-gray-500">
                  Working with local communities to restore degraded lands and forests.
                </p>
                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  >
                    Learn more
                  </button>
                </div>
              </div>
            </div>

            {/* Activity 2 */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="h-48 bg-gray-200"></div>
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900">Sustainable Agriculture</h3>
                <p className="mt-2 text-base text-gray-500">
                  Promoting climate-smart agricultural practices to enhance food security.
                </p>
                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  >
                    Learn more
                  </button>
                </div>
              </div>
            </div>

            {/* Activity 3 */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="h-48 bg-gray-200"></div>
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900">Wildlife Conservation</h3>
                <p className="mt-2 text-base text-gray-500">
                  Protecting endangered species and their habitats through community engagement.
                </p>
                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  >
                    Learn more
                  </button>
                </div>
              </div>
            </div>

            {/* Activity 4 */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="h-48 bg-gray-200"></div>
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900">Climate Education</h3>
                <p className="mt-2 text-base text-gray-500">
                  Educational programs to raise awareness about climate change impacts and solutions.
                </p>
                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  >
                    Learn more
                  </button>
                </div>
              </div>
            </div>

            {/* Activity 5 */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="h-48 bg-gray-200"></div>
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900">Water Conservation</h3>
                <p className="mt-2 text-base text-gray-500">
                  Implementing water harvesting and management techniques in drought-prone areas.
                </p>
                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  >
                    Learn more
                  </button>
                </div>
              </div>
            </div>

            {/* Activity 6 */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="h-48 bg-gray-200"></div>
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900">Clean Energy Initiatives</h3>
                <p className="mt-2 text-base text-gray-500">
                  Promoting renewable energy solutions in rural communities.
                </p>
                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  >
                    Learn more
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ActivitiesPage; 