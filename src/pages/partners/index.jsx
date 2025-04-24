import React from 'react';
import { Helmet } from 'react-helmet-async';
import CenteredHeading from '@/components/atoms/CenteredHeading';
import PartnerCard from '@/components/molecules/PartnerCard';
import CallToAction from '@/components/molecules/CallToAction';
import PageContainer from '@/components/templates/PageContainer';
import { partners } from '@/data/partnersData';

const PartnersPage = () => {
  return (
    <PageContainer>
      <Helmet>
        <title>Our Partners | ACCCA</title>
        <meta name="description" content="Meet the organizations and individuals who support our mission to preserve Ankole cattle and culture." />
      </Helmet>
      
      <section className="py-12 md:py-16">
        <CenteredHeading>Our Partners</CenteredHeading>
        <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
          We collaborate with organizations and individuals who share our commitment to preserving Ankole cattle heritage and cultural traditions. Together, we work toward sustainable conservation practices and cultural education.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {partners.map((partner) => (
            <PartnerCard key={partner.id} partner={partner} />
          ))}
        </div>
        
        <CallToAction 
          title="Become a Partner" 
          description="Join our network of conservation-minded organizations and individuals. Together, we can make a greater impact." 
          buttonText="Contact Us" 
          buttonLink="/contact"
          variant="secondary"
        />
      </section>
    </PageContainer>
  );
};

export default PartnersPage; 