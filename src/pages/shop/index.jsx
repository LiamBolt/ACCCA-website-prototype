import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import CenteredHeading from '@/components/atoms/CenteredHeading';
import ProductCard from '@/components/molecules/ProductCard';
import FilterButtons from '@/components/molecules/FilterButtons';
import PageContainer from '@/components/templates/PageContainer';
import { products } from '@/data/productsData';

const ShopPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const categories = ['all', 'crafts', 'clothing', 'accessories', 'books'];
  
  const filteredProducts = activeFilter === 'all' 
    ? products 
    : products.filter(product => product.category === activeFilter);

  return (
    <PageContainer>
      <Helmet>
        <title>Cultural Shop | ACCCA</title>
        <meta name="description" content="Shop for authentic Ankole cultural products, handcrafted items, and souvenirs that support our conservation efforts." />
      </Helmet>
      
      <section className="py-12 md:py-16">
        <CenteredHeading>Cultural Shop</CenteredHeading>
        <p className="text-center text-gray-700 mb-8 max-w-3xl mx-auto">
          Browse our selection of authentic Ankole cultural products and handicrafts. Each purchase directly supports our conservation efforts and provides income for local artisans.
        </p>
        
        <FilterButtons 
          categories={categories} 
          activeFilter={activeFilter} 
          setFilter={setActiveFilter} 
          className="justify-center mb-12"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </PageContainer>
  );
};

export default ShopPage; 