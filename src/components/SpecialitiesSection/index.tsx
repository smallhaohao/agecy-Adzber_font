/**
 * 特色优势展示区块组件
 * 展示公司的四个核心优势，增加科技感动画效果
 */

import React from 'react';

const SpecialitiesSection: React.FC = () => {
  const specialities = [
    {
      icon: (
        <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Precise Tag Targeting",
      description: "For advertisers, Adzber ADX features core advantages including precise tag targeting, exclusive traffic resources,and transparent anti-fraud measures.",
      metric: "99.9%"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      title: "High-Efficiency Conversion",
      description: "Significantly boosts advertising conversion rates,ensuring no waste of advertising budget.",
      metric: "ISO"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Global Leadership",
      description: "Has established a leading position in regions such as Latin America, Southeast Asia,the United States,Russia,India,and the Middle East.",
      metric: "50+"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "24/7 Premium Support",
      description: "Uninterrupted assistance anytime, day or night—our 24/7 Premium Support ensures swift resolution and peace of mind.",
      metric: "24/7"
    }
  ];

  return (
    <section id="specialities" className="py-20 bg-white relative overflow-hidden">
      {/* 科技背景网格 */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(6, 182, 212, 0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="absolute top-0 left-0 w-32 h-64 bg-purple-600/20 rounded-full transform -translate-x-16 -translate-y-32 animate-pulse"></div>
      
      {/* 浮动科技元素 */}
      <div className="absolute top-20 right-20 w-6 h-6 bg-cyan-400 rounded-full animate-bounce delay-300"></div>
      <div className="absolute bottom-32 left-10 w-4 h-4 bg-purple-500 rounded-full animate-ping delay-700"></div>
      <div className="absolute top-1/2 right-1/4 w-8 h-8 transform rotate-45 border-2 border-cyan-400/50 animate-spin" style={{animationDuration: '8s'}}></div>
      
      {/* 连接线网络 */}
      <div className="absolute top-1/3 left-0 w-40 h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent animate-pulse"></div>
      <div className="absolute bottom-1/3 right-0 w-48 h-px bg-gradient-to-l from-transparent via-cyan-400/30 to-transparent animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/3 w-px h-32 bg-gradient-to-b from-transparent via-purple-400/30 to-transparent animate-pulse delay-500"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 relative">
          <div className="inline-block px-6 py-3 bg-purple-100 text-purple-600 rounded-full text-4xl font-bold mb-4 relative overflow-hidden">
            <span className="relative z-10">Core Advantage of Adzber ADX</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 animate-pulse"></div>
            <div className="absolute -top-6 -right-12 w-4 h-4 bg-cyan-400 rounded-full animate-ping"></div>
            <div className="absolute -bottom-4 -left-8 w-3 h-3 bg-purple-500 rounded-full animate-pulse delay-700"></div>
          </div>
        </div>

        {/* Specialities Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {specialities.map((item, index) => (
            <div key={index} className="text-center group relative">
              {/* 背景发光效果 */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-cyan-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
              
              <div className="relative z-10 p-6 rounded-2xl transition-all duration-300 group-hover:bg-white/50 group-hover:shadow-xl">
                <div className="w-16 h-16 bg-cyan-100 rounded-2xl flex items-center justify-center mx-auto mb-6 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 relative overflow-hidden">
                  {item.icon}
                  <div className="absolute inset-0 bg-cyan-400 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 animate-pulse"></div>
                </div>
                
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed max-w-md mx-auto">
                  {item.description}
                </p>
                
                {/* 连接点动画 */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-8 bg-gradient-to-b from-purple-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* 装饰性连接线 */}
              {index % 2 === 0 && (
                <div className="absolute top-1/2 -right-6 w-12 h-px bg-gradient-to-r from-cyan-400/30 to-transparent animate-pulse hidden md:block"></div>
              )}
            </div>
          ))}
        </div>
        
        {/* 中央连接点 */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-purple-600 rounded-full animate-pulse hidden md:block"></div>
        
        {/* 数据可视化仪表板 */}
        <div className="mt-16 bg-gradient-to-br from-purple-50 to-cyan-50 rounded-3xl p-8 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full" style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, rgba(139, 92, 246, 0.2) 0%, transparent 70%), radial-gradient(circle at 75% 75%, rgba(6, 182, 212, 0.2) 0%, transparent 70%)`
            }}></div>
          </div>
          
          <div className="relative z-10 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Real-time Performance Metrics</h3>
            <div className="grid grid-cols-4 gap-8">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-purple-600">150K+</div>
                <div className="text-sm text-gray-600">Apps Optimized</div>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-purple-500 to-purple-600 rounded-full w-4/5 animate-pulse"></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-cyan-600">98.5%</div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-full w-full animate-pulse delay-200"></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-green-600">24h</div>
                <div className="text-sm text-gray-600">Response Time</div>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-green-500 to-green-600 rounded-full w-2/3 animate-pulse delay-400"></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-orange-600">500M+</div>
                <div className="text-sm text-gray-600">Users Reached</div>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-orange-500 to-orange-600 rounded-full w-5/6 animate-pulse delay-600"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialitiesSection;