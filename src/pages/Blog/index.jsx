import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import CenteredHeading from '@/components/atoms/CenteredHeading';
import BlogCard from '@/components/molecules/BlogCard';
import SearchBar from '@/components/molecules/SearchBar';
import CategoryTags from '@/components/molecules/CategoryTags';
import PageContainer from '@/components/templates/PageContainer';
import { blogPosts } from '@/data/blogData';

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  // Extract all unique categories from blog posts
  const allCategories = ['all', ...new Set(blogPosts.map(post => post.category))];
  
  const filteredPosts = blogPosts
    .filter(post => post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter(post => selectedCategory === 'all' || post.category === selectedCategory);

  return (
    <PageContainer>
      <Helmet>
        <title>Blog | ACCCA</title>
        <meta name="description" content="Read our latest articles about Ankole cattle conservation, cultural practices, and community initiatives." />
      </Helmet>
      
      <section className="py-12 md:py-16">
        <CenteredHeading>Our Blog</CenteredHeading>
        <p className="text-center text-gray-700 mb-8 max-w-3xl mx-auto">
          Stay updated with our latest news, conservation success stories, cultural insights, and community initiatives. Our blog explores various aspects of Ankole heritage and sustainable practices.
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 justify-between mb-10">
          <SearchBar 
            value={searchTerm} 
            onChange={setSearchTerm} 
            placeholder="Search articles..." 
            className="md:w-64"
          />
          <CategoryTags 
            categories={allCategories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        </div>
        
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold mb-2">No articles found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your search or category selection.</p>
            <button 
              onClick={() => {setSearchTerm(''); setSelectedCategory('all');}}
              className="text-green-800 hover:text-green-900 font-medium"
            >
              Clear filters
            </button>
          </div>
        )}
      </section>
    </PageContainer>
  );
};

export default BlogPage; 