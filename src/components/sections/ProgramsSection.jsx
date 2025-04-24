import React from 'react';
import { FaSeedling, FaUsers, FaBook, FaHandHoldingHeart } from 'react-icons/fa';

const ProgramCard = ({ icon, title, description, color }) => {
  return (
    <div className={`backdrop-blur-sm bg-white/20 border border-white/20 rounded-xl p-6 shadow-lg flex-1 min-w-[300px] transition-all hover:shadow-xl hover:translate-y-[-5px]`}>
      <div className={`${color} w-14 h-14 rounded-full flex items-center justify-center mb-4 shadow-md`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold text-brown-900 mb-3">{title}</h3>
      <p className="text-brown-800">{description}</p>
    </div>
  );
};

const ProgramsSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-green-50/30 to-amber-50/30">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brown-900 mb-4">Our Conservation Programs</h2>
          <p className="text-lg text-brown-800 max-w-3xl mx-auto">
            Through these key initiatives, we work to protect the Ankole cattle and preserve the cultural heritage they represent.
          </p>
        </div>
        
        <div className="flex flex-wrap gap-6 justify-center">
          <ProgramCard 
            icon={<FaSeedling className="text-white text-2xl" />}
            title="Breeding Program" 
            description="Supporting sustainable breeding practices that maintain the purity of Ankole cattle while ensuring genetic diversity and health."
            color="bg-green-800"
          />
          
          <ProgramCard 
            icon={<FaUsers className="text-white text-2xl" />}
            title="Community Engagement" 
            description="Working with local communities to develop sustainable cattle-keeping practices that benefit both the animals and their keepers."
            color="bg-amber-800"
          />
          
          <ProgramCard 
            icon={<FaBook className="text-white text-2xl" />}
            title="Education & Research" 
            description="Documenting traditional knowledge about Ankole cattle and conducting research on sustainable management practices."
            color="bg-brown-700"
          />
          
          <ProgramCard 
            icon={<FaHandHoldingHeart className="text-white text-2xl" />}
            title="Cultural Preservation" 
            description="Recording and promoting the songs, stories, ceremonies, and practices that celebrate the cultural significance of Ankole cattle."
            color="bg-green-700"
          />
        </div>
        
        <div className="mt-12 backdrop-blur-sm bg-white/30 border border-white/20 rounded-xl p-8 shadow-lg max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center text-brown-900 mb-4">Join Our Conservation Efforts</h3>
          <p className="text-center text-brown-800 mb-6">
            We welcome volunteers, researchers, donors, and partners who share our passion for preserving 
            the Ankole cattle and their cultural significance.
          </p>
          <div className="flex justify-center">
            <button className="bg-green-800 hover:bg-green-900 text-white font-medium py-3 px-6 rounded-lg shadow-md transition-all transform hover:scale-105 flex items-center">
              Get Involved
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection; 