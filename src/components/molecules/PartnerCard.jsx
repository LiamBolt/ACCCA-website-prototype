import React from 'react';
import { ExternalLink } from 'lucide-react';

const PartnerCard = ({ partner }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="p-8 flex justify-center items-center h-48 bg-gray-50">
        <img 
          src={partner.logo} 
          alt={partner.name} 
          className="max-h-full max-w-full object-contain"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{partner.name}</h3>
        <p className="text-gray-600 mb-4">{partner.description}</p>
        
        <a 
          href={partner.website} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center text-forest-green hover:text-green-800 font-medium transition duration-300"
        >
          Visit Website <ExternalLink size={16} className="ml-1" />
        </a>
      </div>
    </div>
  );
};

export default PartnerCard; 