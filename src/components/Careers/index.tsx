/**
 * 招聘页面组件
 * 包含职位信息、地区选择和公司文化介绍
 */

import React, { useState } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import CareerApplicationModal from '../CareerApplicationModal';
import { USAFlag, EuropeFlag, MiddleEastIcon } from '../FlagIcons';

interface CareersProps {
  onNavigateToSection: (sectionId: string) => void;
  onContactClick: () => void;
}

const Careers: React.FC<CareersProps> = ({ onNavigateToSection, onContactClick }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState('');

  const handleApplyClick = (region: string) => {
    setSelectedRegion(region);
    setIsModalOpen(true);
  };

  const regions = [
    {
      name: 'Middle East',
      flagComponent: <MiddleEastIcon className="w-20 h-16 mx-auto" />,
      originalName: 'Israel'
    },
    {
      name: 'USA',
      flagComponent: <USAFlag className="w-20 h-16 mx-auto" />,
      originalName: 'USA'
    },
    {
      name: 'Europe',
      flagComponent: <EuropeFlag className="w-20 h-16 mx-auto" />,
      originalName: 'Ukraine'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-gray-50">
      <Header 
        onContactClick={onContactClick} 
        onNavigateToSection={onNavigateToSection}
        isPrivacyPage={true}
      />
      
      {/* Hero Section */}
      <section id="careers-hero" className="pt-32 pb-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-6xl font-bold text-gray-900">Careers</h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Help us shape the workforce landscape of the future.
              </p>
            </div>
            
            <div className="flex justify-center">
              <img 
                src="https://picsum.photos/500/400?random=2"
                alt="Career illustration"
                className="max-w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Where Do You Want to Work Section */}
      <section id="career-regions" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="w-12 h-1 bg-purple-600 mx-auto mb-8"></div>
            <h2 className="text-4xl font-bold text-gray-900">Where Do You Want to Work?</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {regions.map((region, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 group">
                <div className="mb-6 transform transition-transform duration-300 group-hover:scale-110">
                  {region.flagComponent}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-8">{region.name}</h3>
                <button
                  onClick={() => handleApplyClick(region.name)}
                  className="bg-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors group-hover:scale-105 transform duration-300"
                >
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture Section */}
      <section id="company-culture" className="py-20 bg-gray-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="mb-8">
            <div className="w-12 h-1 bg-purple-600 mx-auto mb-4"></div>
            <p className="text-gray-400 uppercase tracking-wide">Career at Adzber</p>
          </div>
          
          <h2 className="text-5xl font-bold mb-8">
            Join the team powering a<br />
            better way to work.
          </h2>
          
          <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto mb-12">
            At Adzber, our forte lies in forging perfect connections, and we carry this ethos into our search for new talents. Our organizational culture is not just vibrant but also infused with a sense of enjoyment, and we persistently seek to carve out fresh avenues for advancement. If you're someone who thinks beyond conventional boundaries, harbors a fervor for perfection, and yearns to be part of a greater narrative, then we share a common ground.
          </p>
          
          <button className="bg-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors">
            Discover more
          </button>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section id="why-join-us" className="py-20 bg-gradient-to-br from-purple-50 to-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-12">
              <div>
                <p className="text-purple-600 font-medium mb-4">Why join us?</p>
                <h2 className="text-4xl font-bold text-gray-900 mb-8">
                  Honesty, transparency and<br />
                  family spirit
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Culture and events</h3>
                  <p className="text-gray-600">
                    Cultural diversity blooms in vibrant events, shaping shared societal experiences.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Employee benefits</h3>
                  <p className="text-gray-600">
                    Perks, insurance, retirement plans, fostering well-being, enhancing job satisfaction and productivity.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Work hard, play harder</h3>
                <p className="text-gray-600">
                  Embrace diligence in labor, revel in joyous leisure, work hard, play harder for balanced fulfillment.
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <img 
                src="https://picsum.photos/600/500?random=3"
                alt="Team collaboration illustration"
                className="max-w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Application Modal */}
      <CareerApplicationModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        region={selectedRegion}
      />
    </div>
  );
};

export default Careers;