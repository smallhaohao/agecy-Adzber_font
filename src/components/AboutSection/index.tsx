/**
 * 关于我们区块组件
 * 展示团队信息和核心优势，增加科技感背景元素
 */

import React from 'react';
import businessGrowthImage from '../../assets/images/business-growth.png';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* 科技背景网格 */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }}></div>
      </div>
      
      {/* 动态科技元素 */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-purple-400/10 rounded-full animate-pulse"></div>
      <div className="absolute top-1/4 right-20 w-6 h-6 bg-cyan-400 rounded-full animate-bounce delay-500"></div>
      <div className="absolute bottom-1/3 left-1/4 w-4 h-4 bg-purple-500 rounded-full animate-ping delay-1000"></div>
      
      {/* 六边形装饰元素 */}
      <div className="absolute top-20 right-1/4 w-12 h-12 transform rotate-45 border-2 border-purple-300/30 animate-spin" style={{animationDuration: '10s'}}></div>
      <div className="absolute bottom-40 left-1/3 w-8 h-8 transform rotate-45 border border-cyan-300/40 animate-spin" style={{animationDuration: '8s', animationDirection: 'reverse'}}></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex items-center justify-between">
          {/* Left Image */}
          <div className="w-1/2 pr-12">
            <div className="relative group">
              <img 
                src={businessGrowthImage}
                alt="Business growth and startup illustration"
                className="w-full h-96 object-cover rounded-2xl transform transition-transform duration-300 group-hover:scale-105"
              />
              
              {/* 科技边框效果 */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur"></div>
              
              {/* 浮动数据指示器 */}
              <div className="absolute top-4 right-4 bg-white/90 rounded-lg p-2 transform transition-transform duration-300 hover:scale-110">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
                  <span className="text-xs font-semibold text-gray-700">ACTIVE</span>
                </div>
              </div>
              
              {/* 数据流动线条 */}
              <div className="absolute bottom-4 left-4 right-4 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full overflow-hidden">
                <div className="h-full w-1/3 bg-white/60 animate-ping"></div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="w-1/2 relative">
            {/* 装饰性数据可视化 */}
            <div className="absolute -top-10 -right-10 w-20 h-20 opacity-20">
              <div className="w-full h-full border-2 border-purple-400 rounded-full animate-spin" style={{animationDuration: '15s'}}></div>
              <div className="absolute top-2 left-2 w-16 h-16 border border-cyan-400 rounded-full animate-spin" style={{animationDuration: '12s', animationDirection: 'reverse'}}></div>
            </div>
            
            <h2 className="text-4xl font-bold text-gray-900 mb-6 relative">
              Expert team dedicated to boosting mobile app engagement.
              {/* 文字发光效果 */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 blur-xl opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </h2>
            
            <p className="text-lg text-gray-600 mb-12 leading-relaxed">
              At Adzber, we specialize in targeted digital marketing strategies that effectively increase user acquisition for 
              mobile apps. Our team of experts uses cutting-edge technology to ensure your app reaches its ideal audience, 
              maximizing both reach and engagement.
            </p>

            {/* Features */}
            <div className="space-y-8">
              {/* Big Data Mastery */}
              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 relative">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  <div className="absolute inset-0 bg-green-400 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 animate-pulse"></div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300">Big Data Mastery</h3>
                  <p className="text-gray-600">Leveraging analytics for targeted app growth</p>
                </div>
              </div>

              {/* Scaling Excellence */}
              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 relative">
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <div className="absolute inset-0 bg-gray-400 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 animate-pulse"></div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors duration-300">Scaling Excellence</h3>
                  <p className="text-gray-600">Tailored reach for maximum app exposure</p>
                </div>
              </div>

              {/* Human Optimization */}
              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center flex-shrink-0 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 relative">
                  <svg className="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <div className="absolute inset-0 bg-cyan-400 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 animate-pulse"></div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-cyan-600 transition-colors duration-300">Human Optimization</h3>
                  <p className="text-gray-600">Guiding your app's success with a personal touch</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* 右下角装饰元素 */}
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-purple-400/10 rounded-full animate-pulse"></div>
      
      {/* 连接线网络 */}
      <div className="absolute top-1/2 left-1/2 w-32 h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent animate-pulse"></div>
      <div className="absolute top-1/3 right-1/4 w-px h-20 bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent animate-pulse delay-500"></div>
    </section>
  );
};

export default AboutSection;