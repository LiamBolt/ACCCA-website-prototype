import React from 'react';
import { GiCow } from 'react-icons/gi';

const MissionSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-amber-50/30 to-green-50/30">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Mission Content */}
          <div className="flex-1 order-2 md:order-1">
            <div className="backdrop-blur-sm bg-white/30 border border-white/20 rounded-xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-brown-900 mb-6 flex items-center">
                <GiCow className="mr-3 text-green-800" size={32} />
                Our Mission
              </h2>
              <p className="text-brown-800 mb-4 leading-relaxed">
                The Ankole Cultural Cow Conservation Association is dedicated to preserving the 
                majestic Ankole cattle and the rich cultural heritage they represent. For centuries, 
                these magnificent animals have been central to the identity, economy, and traditions 
                of the Ankole people.
              </p>
              <p className="text-brown-800 mb-6 leading-relaxed">
                As modernization and cross-breeding threaten the purity of this treasured breed, 
                our mission is to protect and promote sustainable practices that ensure the survival 
                of authentic Ankole cattle for generations to come.
              </p>
              <div className="flex flex-wrap gap-4 mt-2">
                <div className="bg-green-800/10 backdrop-blur-sm rounded-lg p-4 flex-1 min-w-[240px]">
                  <h3 className="font-semibold text-green-900 mb-2">Conservation</h3>
                  <p className="text-brown-700">Protecting pure Ankole cattle bloodlines and promoting sustainable breeding practices</p>
                </div>
                <div className="bg-amber-800/10 backdrop-blur-sm rounded-lg p-4 flex-1 min-w-[240px]">
                  <h3 className="font-semibold text-amber-900 mb-2">Education</h3>
                  <p className="text-brown-700">Sharing cultural knowledge and traditional cattle-keeping practices with new generations</p>
                </div>
                <div className="bg-brown-800/10 backdrop-blur-sm rounded-lg p-4 flex-1 min-w-[240px]">
                  <h3 className="font-semibold text-brown-900 mb-2">Community Support</h3>
                  <p className="text-brown-700">Empowering local families who maintain Ankole cattle herds through resources and training</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mission Image */}
          <div className="flex-1 order-1 md:order-2">
            <div className="relative">
              <div className="absolute -inset-4 bg-green-800/20 rounded-full blur-lg"></div>
              <img 
                src="/images/ankole-mission.jpg" 
                alt="Ankole cattle herder with cattle" 
                className="rounded-xl object-cover w-full h-[500px] relative z-10 shadow-xl"
              />
              <div className="absolute bottom-6 right-6 backdrop-blur-md bg-white/30 border border-white/20 rounded-lg p-4 shadow-lg z-20">
                <p className="text-sm text-brown-900 font-medium italic">
                  "Our cattle are not just livestock; they are our heritage, our pride, and our future."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection; 