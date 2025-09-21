/**
 * 首页主要展示区块组件
 * 包含主标题、描述文字、按钮和3D地球仪交互动画
 */

import React from 'react';
import Globe from '../Globe';

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
      
      {/* 自定义轨道旋转动画样式 */}
      <style>{`
        @keyframes orbitRotate {
          from {
            transform: rotate(0deg) translateX(var(--orbit-radius)) rotate(0deg);
          }
          to {
            transform: rotate(360deg) translateX(var(--orbit-radius)) rotate(-360deg);
          }
        }
        
        @keyframes orbitRotateReverse {
          from {
            transform: rotate(0deg) translateX(var(--orbit-radius)) rotate(0deg);
          }
          to {
            transform: rotate(-360deg) translateX(var(--orbit-radius)) rotate(360deg);
          }
        }
        
        .orbit-element {
          position: absolute;
          top: 50%;
          left: 50%;
          transform-origin: 0 0;
        }
        
        .orbit-1 { --orbit-radius: 280px; animation: orbitRotate 40s linear infinite; }
        .orbit-2 { --orbit-radius: 240px; animation: orbitRotateReverse 30s linear infinite; }
        .orbit-3 { --orbit-radius: 200px; animation: orbitRotate 25s linear infinite; }
        .orbit-4 { --orbit-radius: 160px; animation: orbitRotateReverse 35s linear infinite; }
        .orbit-5 { --orbit-radius: 220px; animation: orbitRotate 50s linear infinite; }
        .orbit-6 { --orbit-radius: 180px; animation: orbitRotateReverse 20s linear infinite; }
      `}</style>
      
      <div className="max-w-[105rem] mx-auto px-6 py-16 relative z-10">
        <div className="flex flex-col items-center">
          {/* Top Section - 3D Globe */}
          <div className="w-full relative flex justify-center items-center mb-16">
            <div className="relative">
              {/* 3D地球仪组件 */}
              <Globe 
                width={450} 
                height={450} 
                className="transform hover:scale-105 transition-transform duration-300"
              />
              
              {/* 轨道路径 - 静态环形轨道 */}
              <div className="absolute inset-0 pointer-events-none">
                {/* 轨道路径线 */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-112 h-112 border border-yellow-400/15 rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-purple-300/15 rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-cyan-300/15 rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-green-400/15 rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-88 h-88 border-2 border-dashed border-indigo-300/10 rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 border border-dotted border-pink-400/15 rounded-full"></div>
              </div>
              
              {/* 轨道运动的装饰元素 */}
              <div className="absolute inset-0 pointer-events-none">
                {/* 第一轨道 - 金色卫星 */}
                <div className="absolute top-1/2 left-1/2">
                  <div className="orbit-element orbit-1">
                    <div className="w-4 h-4 bg-yellow-400 rounded-full shadow-lg relative">
                      <div className="absolute inset-0 bg-yellow-400 rounded-full animate-ping"></div>
                      {/* 卫星拖尾 */}
                      <div className="absolute -left-2 top-1/2 w-2 h-px bg-yellow-400/60 transform -translate-y-1/2"></div>
                    </div>
                  </div>
                </div>
                
                {/* 第二轨道 - 紫色卫星 */}
                <div className="absolute top-1/2 left-1/2">
                  <div className="orbit-element orbit-2">
                    <div className="w-3 h-3 bg-purple-500 rounded-full shadow-lg relative">
                      <div className="absolute inset-0 bg-purple-500 rounded-full animate-pulse"></div>
                      {/* 数据流 */}
                      <div className="absolute -left-1 top-1/2 w-1 h-px bg-purple-500/60 transform -translate-y-1/2"></div>
                    </div>
                  </div>
                </div>
                
                {/* 第三轨道 - 青色卫星 */}
                <div className="absolute top-1/2 left-1/2">
                  <div className="orbit-element orbit-3">
                    <div className="w-3.5 h-3.5 bg-cyan-400 rounded-full shadow-lg relative">
                      <div className="absolute inset-0 bg-cyan-400 rounded-full animate-bounce"></div>
                      {/* 信号波 */}
                      <div className="absolute -right-2 top-1/2 w-2 h-px bg-cyan-400/60 transform -translate-y-1/2"></div>
                    </div>
                  </div>
                </div>
                
                {/* 第四轨道 - 绿色卫星 */}
                <div className="absolute top-1/2 left-1/2">
                  <div className="orbit-element orbit-4">
                    <div className="w-2.5 h-2.5 bg-green-400 rounded-full shadow-lg relative">
                      <div className="absolute inset-0 bg-green-400 rounded-full animate-ping"></div>
                    </div>
                  </div>
                </div>
                
                {/* 第五轨道 - 靛蓝色卫星 */}
                <div className="absolute top-1/2 left-1/2">
                  <div className="orbit-element orbit-5">
                    <div className="w-3 h-3 bg-indigo-400 rounded-full shadow-lg relative">
                      <div className="absolute inset-0 bg-indigo-400 rounded-full animate-pulse"></div>
                      {/* 方形装饰 */}
                      <div className="absolute -top-1 -left-1 w-1 h-1 bg-indigo-400/40 transform rotate-45"></div>
                    </div>
                  </div>
                </div>
                
                {/* 第六轨道 - 粉色卫星 */}
                <div className="absolute top-1/2 left-1/2">
                  <div className="orbit-element orbit-6">
                    <div className="w-2 h-2 bg-pink-400 rounded-full shadow-lg relative">
                      <div className="absolute inset-0 bg-pink-400 rounded-full animate-bounce"></div>
                    </div>
                  </div>
                </div>
                
                {/* 额外的轨道装饰 - 双星系统 */}
                <div className="absolute top-1/2 left-1/2">
                  <div className="orbit-element orbit-2" style={{animationDelay: '15s'}}>
                    <div className="w-2 h-2 bg-purple-300 rounded-full shadow-lg opacity-60">
                      <div className="absolute inset-0 bg-purple-300 rounded-full animate-ping"></div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute top-1/2 left-1/2">
                  <div className="orbit-element orbit-3" style={{animationDelay: '12s'}}>
                    <div className="w-1.5 h-1.5 bg-cyan-300 rounded-full shadow-lg opacity-60">
                      <div className="absolute inset-0 bg-cyan-300 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* 浮动数据点 */}
              <div className="absolute top-20 left-20 w-3 h-3 bg-cyan-400 rounded-full animate-ping"></div>
              <div className="absolute bottom-20 right-20 w-4 h-4 bg-purple-500 rounded-full animate-bounce"></div>
              <div className="absolute top-1/2 left-10 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <div className="absolute top-1/3 right-10 w-3 h-3 bg-blue-400 rounded-full animate-ping delay-500"></div>
              
              {/* 新增：更多浮动元素增强科技感 */}
              <div className="absolute top-10 right-1/3 w-2 h-2 bg-yellow-400 rounded-full animate-pulse delay-200"></div>
              <div className="absolute bottom-10 left-1/3 w-3 h-3 bg-indigo-400 rounded-full animate-bounce delay-600"></div>
              <div className="absolute top-3/4 left-1/4 w-1.5 h-1.5 bg-pink-400 rounded-full animate-ping delay-900"></div>
              
              {/* 连接线条 */}
              <div className="absolute top-1/4 left-0 w-20 h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent animate-pulse"></div>
              <div className="absolute bottom-1/3 right-0 w-24 h-px bg-gradient-to-l from-transparent via-cyan-400/50 to-transparent animate-pulse delay-700"></div>
              
              {/* 新增：更多连接线条 */}
              <div className="absolute top-1/6 right-1/4 w-16 h-px bg-gradient-to-r from-transparent via-yellow-400/40 to-transparent animate-pulse delay-400"></div>
              <div className="absolute bottom-1/6 left-1/4 w-18 h-px bg-gradient-to-l from-transparent via-green-400/40 to-transparent animate-pulse delay-1100"></div>
              
              {/* 数据流效果 */}
              <div className="absolute top-1/2 left-1/4 w-px h-16 bg-gradient-to-b from-transparent via-purple-400/60 to-transparent animate-pulse delay-300"></div>
              <div className="absolute top-1/3 right-1/4 w-px h-12 bg-gradient-to-b from-transparent via-cyan-400/60 to-transparent animate-pulse delay-800"></div>
              
              {/* 新增：垂直数据流 */}
              <div className="absolute top-1/5 left-1/3 w-px h-10 bg-gradient-to-b from-transparent via-yellow-400/50 to-transparent animate-pulse delay-500"></div>
              <div className="absolute bottom-1/5 right-1/3 w-px h-14 bg-gradient-to-t from-transparent via-green-400/50 to-transparent animate-pulse delay-1200"></div>
            </div>
          </div>

          {/* Bottom Section - Centered Content */}
          <div className="w-full text-center">
            {/* Decorative Elements */}
            <div className="absolute top-32 left-20 w-24 h-24 bg-purple-400/20 rounded-full animate-pulse"></div>
            
            <div className="relative">
              <h1 className="text-7xl font-bold text-gray-900 mb-8 leading-tight">
                The World's Leading Programmatic<br />
                Advertising Trading Platform
              </h1>
              
              <p className="text-3xl text-gray-600 mb-10 leading-relaxed">
                Leading the Global Advertising Sector Empowering Businesses for Transcendental Growth
              </p>
              
              <button className="bg-purple-600 text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-purple-700 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105 relative overflow-hidden group">
                <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative">Discover More</span>
              </button>
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