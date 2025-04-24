import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Markdown from 'react-markdown';
import { FaClock, FaUser, FaTag, FaShare, FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';
import PageContainer from '@/components/templates/PageContainer';
import ErrorMessage from '@/components/molecules/ErrorMessage';
import RelatedPosts from '@/components/organisms/RelatedPosts';
import { blogPosts } from '@/data/blogData';

const BlogPostPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedPosts, setRelatedPosts] = useState([]);
  
  useEffect(() => {
    // Simulate fetching post data
    setTimeout(() => {
      const foundPost = blogPosts.find(p => p.id === id);
      setPost(foundPost);
      
      if (foundPost) {
        // Get 3 related posts with the same category
        const related = blogPosts
          .filter(p => p.category === foundPost.category && p.id !== id)
          .slice(0, 3);
        setRelatedPosts(related);
      }
      
      setLoading(false);
    }, 300);
  }, [id]);
  
  if (loading) {
    return (
      <PageContainer>
        <div className="flex justify-center items-center min-h-[50vh]">
          <div className="w-12 h-12 border-4 border-green-800 border-t-transparent rounded-full animate-spin"></div>
        </div>
      </PageContainer>
    );
  }
  
  if (!post) {
    return (
      <PageContainer>
        <ErrorMessage 
          title="Post Not Found" 
          message="The blog post you're looking for doesn't exist or has been removed." 
          actionText="Return to Blog"
          actionLink="/blog"
        />
      </PageContainer>
    );
  }
  
  return (
    <PageContainer>
      <Helmet>
        <title>{post.title} | ACCCA Blog</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>
      
      <article className="py-8 md:py-12 max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-600 mb-6">
          <Link to="/" className="hover:text-green-800">Home</Link> &gt; <Link to="/blog" className="hover:text-green-800">Blog</Link> &gt; <span className="text-gray-800">{post.title}</span>
        </div>
        
        {/* Featured Image */}
        <div className="rounded-lg overflow-hidden mb-8 shadow-md">
          <img 
            src={post.featuredImage} 
            alt={post.title} 
            className="w-full h-auto object-cover"
          />
        </div>
        
        {/* Post Header */}
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
          
          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
            <div className="flex items-center">
              <FaUser className="mr-2" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center">
              <FaClock className="mr-2" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center">
              <FaTag className="mr-2" />
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">{post.category}</span>
            </div>
          </div>
        </header>
        
        {/* Post Content */}
        <div className="prose prose-green max-w-none">
          <Markdown>{post.content}</Markdown>
        </div>
        
        {/* Share Section */}
        <div className="border-t border-gray-200 mt-12 pt-6">
          <div className="flex items-center">
            <span className="mr-4 font-medium flex items-center">
              <FaShare className="mr-2" /> Share this article:
            </span>
            <div className="flex gap-3">
              <button className="text-blue-600 hover:text-blue-800">
                <FaTwitter size={20} />
              </button>
              <button className="text-blue-900 hover:text-blue-950">
                <FaFacebook size={20} />
              </button>
              <button className="text-blue-700 hover:text-blue-900">
                <FaLinkedin size={20} />
              </button>
            </div>
          </div>
        </div>
      </article>
      
      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-12 border-t border-gray-200">
          <h2 className="text-2xl font-bold mb-6 text-center">Related Articles</h2>
          <RelatedPosts posts={relatedPosts} />
        </section>
      )}
    </PageContainer>
  );
};

export default BlogPostPage; 