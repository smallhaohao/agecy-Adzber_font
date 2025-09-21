/**
 * 技术服务展示区块组件
 * 展示三个主要技术服务，增加科技感动画效果
 */

import React from 'react';
import globalCoverageIcon from '../../assets/images/globalCoverageIcon.png';
import algorithmDrivenIcon from '../../assets/images/algorithmDrivenIcon.png';
import preciseTargetingIcon from '../../assets/images/preciseTargetingIcon.png';

interface TechnologySectionProps {
  onContactClick?: () => void;
}

const TechnologySection: React.FC<TechnologySectionProps> = ({ onContactClick }) => {
  const services = [
    {
      icon: globalCoverageIcon,
      title: "Global Coverage",
      description: "Adzber provides enterprises and advertisers with high-quality, targeted users, enabling them to achieve global growth seamlessly. AI"
    },
    {
      icon: algorithmDrivenIcon,
      title: "Algorithm-Driven",
      description: "Based on robust data analytics capabilities and in-depth AI algorithm learning, we develop high-efficiency and professional promotion strategies."
    },
    {
      icon: preciseTargetingIcon,
      title: "Precise Targeting & Matching",
      description: "We deliver precise matching of users in target markets and have earned the trust of major clients such as Lazada, Ali Express, Kwai, and Shopee."
    }
  ];

  const handleContactClick = () => {
    if (onContactClick) {
      onContactClick();
    }
  };

  return (
    <section id="technology" className="py-20 bg-gradient-to-br from-purple-50 to-gray-50 relative overflow-hidden">
      {/* 科技背景网格 */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 3px 3px, rgba(59, 130, 246, 0.15) 2px, transparent 0)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      
      {/* 浮动科技元素 */}
      <div className="absolute top-20 left-20 w-6 h-6 bg-blue-400 rounded-full animate-bounce delay-300"></div>
      <div className="absolute top-40 right-32 w-4 h-4 bg-purple-500 rounded-full animate-ping delay-700"></div>
      <div className="absolute bottom-32 left-1/3 w-8 h-8 bg-cyan-400 rounded-full animate-pulse delay-1000"></div>
      
      {/* 连接线网络 */}
      <div className="absolute top-1/4 left-0 w-48 h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent animate-pulse"></div>
      <div className="absolute bottom-1/4 right-0 w-56 h-px bg-gradient-to-l from-transparent via-cyan-400/30 to-transparent animate-pulse delay-1000"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 relative">
          <div className="inline-block px-6 py-3 bg-purple-100 text-purple-600 rounded-full text-4xl font-bold mb-4 relative overflow-hidden">
            <span className="relative z-10">What we offer</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 animate-pulse"></div>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 relative">
            One-Stop Mobile Marketing Solution
            {/* 装饰性数据点 */}
            <div className="absolute -top-4 -right-8 w-3 h-3 bg-cyan-400 rounded-full animate-ping"></div>
            <div className="absolute -bottom-2 -left-6 w-2 h-2 bg-purple-500 rounded-full animate-pulse delay-500"></div>
          </h2>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative group overflow-hidden">
              {/* 科技边框效果 */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-cyan-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* 动态边框 */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur"></div>
              
              <div className="relative z-10">
                <div className="w-12 h-12 flex items-center justify-center mb-6 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                  <img 
                    src={service.icon} 
                    alt={`${service.title} icon`}
                    className="w-12 h-12"
                  />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
              
              {/* 浮动装饰元素 */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-bounce"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gray-900 mt-20 py-16 relative overflow-hidden">
        {/* 科技背景元素 */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-32 h-32 border-2 border-purple-400 rounded-full animate-spin" style={{animationDuration: '20s'}}></div>
          <div className="absolute bottom-0 right-0 w-24 h-24 border border-cyan-400 rounded-full animate-spin" style={{animationDuration: '15s', animationDirection: 'reverse'}}></div>
        </div>
        
        {/* 数字雨效果 */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-green-400/30 to-transparent animate-pulse"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-blue-400/30 to-transparent animate-pulse delay-700"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex items-center justify-between">
            <h3 className="text-3xl font-bold text-white relative">
              Accurate Traffic For Your App
              {/* 发光效果 */}
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-600/30 to-cyan-600/30 blur-lg opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </h3>
            <button 
              onClick={handleContactClick}
              className="bg-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 relative overflow-hidden group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative">Contact Us</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;