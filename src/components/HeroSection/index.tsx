/**
 * 首页主要展示区块组件
 * 包含主标题、描述文字、按钮和插图，增加科技感动画效果
 */

import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50 pt-24 overflow-hidden relative">
      {/* 科技背景网格 */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(139, 92, 246, 0.15) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      {/* 浮动的科技元素 */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-cyan-400 rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-purple-500 rounded-full animate-bounce delay-300"></div>
      <div className="absolute bottom-40 left-1/4 w-3 h-3 bg-green-400 rounded-full animate-ping delay-700"></div>
      <div className="absolute top-60 left-1/3 w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-1000"></div>
      
      {/* 动态线条 */}
      <div className="absolute top-1/3 left-0 w-32 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-pulse"></div>
      <div className="absolute bottom-1/3 right-0 w-40 h-px bg-gradient-to-l from-transparent via-cyan-400 to-transparent animate-pulse delay-500"></div>
      
      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="flex items-center justify-between">
          {/* Left Content */}
          <div className="w-1/2 pr-12">
            {/* Decorative Elements */}
            <div className="absolute top-32 left-20 w-24 h-24 bg-purple-400/20 rounded-full animate-pulse"></div>
            
            <div className="relative">
              <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Maximizing Traffic for<br />
                Your Mobile App
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Specializing in precise targeting and optimization, we deliver 
                custom solutions to elevate your mobile app's user base.
              </p>
              
              <button className="bg-purple-600 text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-purple-700 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105 relative overflow-hidden group">
                <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative">Discover More</span>
              </button>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="w-1/2 relative">
            <div className="relative">
              {/* Main Illustration Area */}
              <div className="w-96 h-96 mx-auto relative">
                {/* 科技环形装饰 */}
                <div className="absolute top-0 left-0 w-full h-full">
                  <div className="w-80 h-80 border-2 border-purple-300/30 rounded-full absolute top-8 left-8 animate-spin" style={{animationDuration: '20s'}}></div>
                  <div className="w-60 h-60 border border-cyan-300/40 rounded-full absolute top-18 left-18 animate-spin" style={{animationDuration: '15s', animationDirection: 'reverse'}}></div>
                </div>
                
                {/* Background Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400/20 rounded-full animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-20 h-20 bg-purple-400/30 rounded-full animate-bounce"></div>
                
                {/* Central Figure */}
                <div className="absolute top-1/2 left-1/4 transform -translate-y-1/2">
                  <div className="w-16 h-32 bg-gradient-to-b from-cyan-400 to-cyan-600 rounded-full relative animate-pulse">
                    <div className="w-8 h-8 bg-cyan-100 rounded-full absolute top-2 left-1/2 transform -translate-x-1/2"></div>
                    {/* 发光效果 */}
                    <div className="absolute inset-0 bg-cyan-400 rounded-full blur-sm opacity-30 animate-ping"></div>
                  </div>
                </div>
                
                {/* Charts and Graphs */}
                <div className="absolute bottom-1/3 left-1/3">
                  <div className="flex space-x-2">
                    <div className="w-4 h-12 bg-cyan-400 rounded hover:h-16 transition-all duration-300 relative overflow-hidden">
                      <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-cyan-500 to-cyan-300 animate-pulse"></div>
                    </div>
                    <div className="w-4 h-16 bg-purple-600 rounded hover:h-20 transition-all duration-300 relative overflow-hidden">
                      <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-purple-700 to-purple-500 animate-pulse delay-200"></div>
                    </div>
                    <div className="w-4 h-8 bg-cyan-400 rounded hover:h-12 transition-all duration-300 relative overflow-hidden">
                      <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-cyan-500 to-cyan-300 animate-pulse delay-400"></div>
                    </div>
                  </div>
                </div>
                
                {/* Floating Icons */}
                <div className="absolute top-1/4 left-1/2">
                  <div className="w-8 h-8 bg-cyan-400 rounded-lg animate-float"></div>
                </div>
                <div className="absolute bottom-1/4 right-1/3">
                  <div className="w-6 h-6 bg-green-400 rounded-lg animate-float delay-300"></div>
                </div>
                
                {/* 连接线条 */}
                <div className="absolute top-1/2 left-1/2 w-px h-16 bg-gradient-to-b from-transparent via-purple-400 to-transparent animate-pulse"></div>
                <div className="absolute top-1/3 left-1/3 w-20 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse delay-700"></div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -bottom-10 right-10 w-16 h-16 bg-purple-400/20 rounded-full animate-bounce"></div>
              <div className="absolute -top-5 -right-5 w-12 h-12 bg-cyan-400/20 rounded-full animate-ping"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Decorative Element */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-purple-400/20 rounded-full animate-pulse"></div>
      
      {/* 数字雨效果 */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-green-400/30 to-transparent animate-pulse"></div>
      <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-blue-400/30 to-transparent animate-pulse delay-1000"></div>
    </section>
  );
};

export default HeroSection;