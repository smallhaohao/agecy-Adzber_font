/**
 * 技术服务展示区块组件
 * 展示三个主要技术服务，增加科技感动画效果
 */

import React from 'react';

const TechnologySection: React.FC = () => {
  const services = [
    {
      icon: (
        <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "User Experience Optimization",
      description: "Enhancing engagement through user-focused design",
      stats: "95%"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Audience Engagement",
      description: "Connecting your app with the right users",
      stats: "87%"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: "Conversion Rate Optimization",
      description: "Turning visitors into loyal app users",
      stats: "92%"
    }
  ];

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
          <div className="inline-block px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-medium mb-4 relative overflow-hidden">
            <span className="relative z-10">What we offer</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 animate-pulse"></div>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 relative">
            Where technology meets<br />business.
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
                <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center mb-6 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 relative">
                  {service.icon}
                  <div className="absolute inset-0 bg-cyan-400 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 animate-pulse"></div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-4">
                  {service.description}
                </p>
                
                {/* 成功率指示器 */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm text-gray-500">Success Rate</span>
                  </div>
                  <div className="text-2xl font-bold text-purple-600">{service.stats}</div>
                </div>
                
                {/* 进度条 */}
                <div className="mt-4 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full transform transition-all duration-1000 group-hover:animate-pulse"
                    style={{width: service.stats}}
                  ></div>
                </div>
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
            <button className="bg-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 relative overflow-hidden group">
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