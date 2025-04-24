import React from 'react';
import { Link } from 'react-router-dom';
import { formatDate } from '@/utils/dateUtils';

const BlogCard = ({ post }) => {
  return (
    <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-2/5">
          <Link to={`/blog/${post.slug}`} className="block h-full">
            <img 
              src={post.coverImage} 
              alt={post.title} 
              className="w-full h-full object-cover"
              style={{ minHeight: '240px' }}
            />
          </Link>
        </div>
        
        <div className="md:w-3/5 p-6">
          <div className="mb-3 flex items-center">
            <Link 
              to={`/blog?category=${post.category}`}
              className="px-3 py-1 bg-green-100 text-forest-green rounded-full text-xs font-medium hover:bg-green-200 transition duration-300"
            >
              {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
            </Link>
            <span className="mx-2 text-gray-400">•</span>
            <time dateTime={post.date} className="text-xs text-gray-500">
              {formatDate(post.date)}
            </time>
          </div>
          
          <h3 className="text-xl font-bold text-gray-800 mb-3">
            <Link to={`/blog/${post.slug}`} className="hover:text-forest-green transition duration-300">
              {post.title}
            </Link>
          </h3>
          
          <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
          
          <div className="flex items-center">
            <img 
              src={post.author.avatar} 
              alt={post.author.name} 
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="ml-3">
              <p className="font-medium text-gray-800 text-sm">{post.author.name}</p>
              <p className="text-gray-500 text-xs">{post.author.role}</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogCard; 