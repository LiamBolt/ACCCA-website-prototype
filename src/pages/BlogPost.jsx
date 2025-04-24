import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const BlogPost = () => {
  const { id } = useParams();
  
  // This would typically come from an API call based on the id
  const post = {
    id: id,
    title: 'Innovative Conservation Techniques in Eastern Africa',
    content: `
      <p>Conservation efforts in Eastern Africa have evolved significantly over the past decade, with innovative approaches combining traditional knowledge with modern technology to address complex environmental challenges.</p>
      
      <h2>Blending Traditional and Modern Approaches</h2>
      <p>For generations, local communities have developed sophisticated systems for managing natural resources sustainably. These traditional practices, when combined with contemporary scientific methods, create powerful solutions for today's conservation challenges.</p>
      
      <p>In our recent project in Kenya's eastern highlands, we worked with elders from the local community to document traditional land management techniques that have maintained biodiversity in the region for centuries. These methods were then integrated with modern monitoring technologies to develop a comprehensive conservation plan.</p>
      
      <h2>Technology as an Enabler</h2>
      <p>Digital tools are revolutionizing how we approach conservation work. From satellite monitoring to mobile apps for community data collection, technology is enhancing our ability to track changes, respond to threats, and measure impact.</p>
      
      <p>Our team has deployed a network of low-cost sensors to monitor water quality in critical wetland ecosystems. This data, accessible to both researchers and community members via a simple mobile interface, has enabled rapid response to pollution events and improved overall ecosystem management.</p>
      
      <h2>Community-Centered Design</h2>
      <p>Perhaps the most important innovation in modern conservation is the shift toward approaches that place local communities at the center of both planning and implementation. When people who depend on natural resources for their livelihoods are empowered as conservation leaders, sustainable outcomes become possible.</p>
      
      <p>Through our participatory conservation planning process, we've seen remarkable success in developing strategies that balance ecological needs with community priorities. In the Mara region, a community-led initiative has increased wildlife populations while simultaneously improving agricultural productivity and livestock health.</p>
      
      <h2>Looking Forward</h2>
      <p>As climate change intensifies and biodiversity loss accelerates, innovative conservation approaches will become increasingly important. By honoring traditional knowledge, embracing appropriate technologies, and centering community leadership, we can develop solutions that address today's environmental challenges while building resilience for the future.</p>
    `,
    date: 'May 15, 2023',
    author: 'Dr. Jane Kagume',
    authorTitle: 'Conservation Director',
    category: 'Conservation',
    image: '/placeholder.jpg',
    authorImage: '/placeholder-author.jpg'
  };
  
  const relatedPosts = [
    {
      id: '2',
      title: 'Climate Change Adaptation Strategies for Local Communities',
      excerpt: 'How rural communities are developing resilience to climate impacts through sustainable practices.',
      date: 'April 28, 2023',
      author: 'Michael Abara',
      category: 'Climate Action'
    },
    {
      id: '3',
      title: 'The Role of Indigenous Knowledge in Modern Conservation',
      excerpt: 'How traditional ecological knowledge is being integrated into conservation planning and implementation.',
      date: 'April 12, 2023',
      author: 'Sarah Omondi',
      category: 'Indigenous Knowledge'
    }
  ];

  return (
    <>
      <Helmet>
        <title>{post.title} | ACCCA Blog</title>
        <meta name="description" content={post.content.substring(0, 150).replace(/<[^>]*>/g, '')} />
      </Helmet>
      
      <div className="bg-white">
        <div className="max-w-3xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
          {/* Back to blog link */}
          <div className="mb-8">
            <Link to="/blog" className="text-green-600 hover:text-green-700 flex items-center">
              <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Blog
            </Link>
          </div>
          
          {/* Article header */}
          <div className="text-center mb-8">
            <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800">
              {post.category}
            </span>
            <h1 className="mt-4 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              {post.title}
            </h1>
            
            <div className="mt-6 flex items-center justify-center">
              <div className="flex-shrink-0">
                <div className="h-10 w-10 rounded-full bg-gray-300"></div>
              </div>
              <div className="ml-3 text-left">
                <p className="text-sm font-medium text-gray-900">{post.author}</p>
                <div className="flex space-x-1 text-sm text-gray-500">
                  <time dateTime={post.date}>{post.date}</time>
                </div>
              </div>
            </div>
          </div>
          
          {/* Featured image */}
          <div className="my-8">
            <div className="aspect-w-16 aspect-h-9">
              <div className="w-full h-64 bg-gray-200 rounded-lg"></div>
            </div>
          </div>
          
          {/* Article content */}
          <div className="prose prose-green prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }}></div>
          
          {/* Author bio */}
          <div className="mt-12 border-t border-gray-200 pt-8">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="h-14 w-14 rounded-full bg-gray-300"></div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-bold text-gray-900">{post.author}</h3>
                <p className="text-base text-gray-500">{post.authorTitle}</p>
              </div>
            </div>
          </div>
          
          {/* Related posts */}
          <div className="mt-12 border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
            <div className="grid gap-8 md:grid-cols-2">
              {relatedPosts.map((relatedPost) => (
                <div key={relatedPost.id} className="border border-gray-200 rounded-lg p-6">
                  <span className="text-sm font-medium text-green-600">
                    {relatedPost.category}
                  </span>
                  <Link to={`/blog/${relatedPost.id}`} className="mt-2 block">
                    <p className="text-xl font-semibold text-gray-900">{relatedPost.title}</p>
                    <p className="mt-3 text-base text-gray-500">{relatedPost.excerpt}</p>
                  </Link>
                  <div className="mt-4 text-sm text-gray-500">
                    <time dateTime={relatedPost.date}>{relatedPost.date}</time>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPost; 