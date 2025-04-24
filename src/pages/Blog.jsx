import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Blog = () => {
  const blogPosts = [
    {
      id: '1',
      title: 'Innovative Conservation Techniques in Eastern Africa',
      excerpt: 'Exploring new approaches to habitat conservation that combine traditional knowledge with modern technology.',
      date: 'May 15, 2023',
      author: 'Dr. Jane Kagume',
      category: 'Conservation',
      image: '/placeholder.jpg'
    },
    {
      id: '2',
      title: 'Climate Change Adaptation Strategies for Local Communities',
      excerpt: 'How rural communities are developing resilience to climate impacts through sustainable practices.',
      date: 'April 28, 2023',
      author: 'Michael Abara',
      category: 'Climate Action',
      image: '/placeholder.jpg'
    },
    {
      id: '3',
      title: 'The Role of Indigenous Knowledge in Modern Conservation',
      excerpt: 'How traditional ecological knowledge is being integrated into conservation planning and implementation.',
      date: 'April 12, 2023',
      author: 'Sarah Omondi',
      category: 'Indigenous Knowledge',
      image: '/placeholder.jpg'
    },
    {
      id: '4',
      title: 'Wildlife Corridor Success Story: Connecting Fragmented Habitats',
      excerpt: 'Our recent project has successfully established a critical wildlife corridor reconnecting separated populations.',
      date: 'March 30, 2023',
      author: 'Dr. Daniel Kimani',
      category: 'Wildlife',
      image: '/placeholder.jpg'
    },
    {
      id: '5',
      title: 'Sustainable Agriculture Practices That Boost Yields and Protect Biodiversity',
      excerpt: 'Innovative farming methods that increase food production while preserving local ecosystems.',
      date: 'March 15, 2023',
      author: 'Emily Njoroge',
      category: 'Sustainable Agriculture',
      image: '/placeholder.jpg'
    },
    {
      id: '6',
      title: 'Community-Led Conservation: A Model for Success',
      excerpt: 'Examining successful case studies where local communities take leadership in conservation efforts.',
      date: 'February 28, 2023',
      author: 'James Mwangi',
      category: 'Community',
      image: '/placeholder.jpg'
    }
  ];

  return (
    <>
      <Helmet>
        <title>ACCCA - Conservation Blog</title>
        <meta name="description" content="Latest news, insights and stories from our conservation work across Africa" />
      </Helmet>
      
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Conservation Blog
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Insights, stories, and updates from our conservation work across Africa.
            </p>
          </div>
          
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <div key={post.id} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                <div className="flex-shrink-0">
                  <div className="h-48 w-full bg-gray-200"></div>
                </div>
                <div className="flex flex-1 flex-col justify-between bg-white p-6">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-green-600">
                      {post.category}
                    </p>
                    <Link to={`/blog/${post.id}`} className="mt-2 block">
                      <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                      <p className="mt-3 text-base text-gray-500">{post.excerpt}</p>
                    </Link>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <div className="h-10 w-10 rounded-full bg-gray-300"></div>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        {post.author}
                      </p>
                      <div className="flex space-x-1 text-sm text-gray-500">
                        <time dateTime={post.date}>{post.date}</time>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 flex justify-center">
            <nav className="flex items-center justify-between">
              <div className="flex-1 flex justify-between sm:hidden">
                <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                  Previous
                </a>
                <a href="#" className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                  Next
                </a>
              </div>
              <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-center">
                <div>
                  <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
                    <a href="#" className="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                      Previous
                    </a>
                    <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                      1
                    </a>
                    <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-green-50 text-sm font-medium text-green-600 hover:bg-green-100">
                      2
                    </a>
                    <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                      3
                    </a>
                    <a href="#" className="relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                      Next
                    </a>
                  </nav>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog; 