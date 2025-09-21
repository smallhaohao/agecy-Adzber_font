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
              About Adzber
              {/* 文字发光效果 */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 blur-xl opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </h2>
            

            {/* Features */}
            <div className="space-y-8">
              {/* Platform Foundation */}
              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 relative">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                  <div className="absolute inset-0 bg-purple-400 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 animate-pulse"></div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">Platform Foundation</h3>
                  <p className="text-gray-600">As the world's leading programmatic advertising trading platform, Adzber leverages platform aggregation capabilities and algorithmic recommendations as its foundation, with intelligent AI as the efficiency driver. It integrates front-end and back-end resources to deliver one-stop global promotion and monetization services for advertisers and developers.</p>
                </div>
              </div>

              {/* Global Reach */}
              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 relative">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div className="absolute inset-0 bg-blue-400 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 animate-pulse"></div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">Global Reach</h3>
                  <p className="text-gray-600">Currently, Adzber's external developer traffic reaches 200 million users worldwide. It has established connections with thousands of advertisers and clients, spanning key sectors including finance, e-commerce, social media, and gaming.</p>
                </div>
              </div>

              {/* Collaborative Growth */}
              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 relative">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <div className="absolute inset-0 bg-green-400 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 animate-pulse"></div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300">Collaborative Growth</h3>
                  <p className="text-gray-600">Adhering to the "Collaborative Growth" cooperation principle, we are committed to tailoring professional and high-efficiency digital marketing solutions for global partners. From supply-side resource integration to precise demand-side execution, we ensure your growth outcomes are clearly measurable.</p>
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