import React from 'react';
import { Link } from 'react-router-dom';

const RelatedPosts = ({ posts }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {posts.map((post) => (
        <Link 
          key={post.id} 
          to={`/blog/${post.id}`}
          className="group block"
        >
          <div className="bg-white rounded-lg overflow-hidden shadow-sm group-hover:shadow-md transition-all duration-300">
            <div className="h-40 overflow-hidden">
              <img 
                src={post.featuredImage} 
                alt={post.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <span className="text-xs font-medium text-green-800 bg-green-100 px-2 py-1 rounded-full">
                {post.category}
              </span>
              <h3 className="font-medium text-lg mt-2 group-hover:text-green-800 transition-colors">
                {post.title}
              </h3>
              <p className="text-sm text-gray-600 mt-1">{post.date}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default RelatedPosts; 