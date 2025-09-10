/**
 * 网站头部导航组件
 * 包含 logo、导航菜单和联系按钮，支持平滑滚动到对应区块
 */

import React, { useState } from 'react';

interface HeaderProps {
  onContactClick: () => void;
  onNavigateToSection?: (sectionId: string) => void;
  isPrivacyPage?: boolean;
}

const Header: React.FC<HeaderProps> = ({ onContactClick, onNavigateToSection, isPrivacyPage = false }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavigation = (sectionId: string) => {
    if (onNavigateToSection) {
      onNavigateToSection(sectionId);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4">
        {/* 主要导航行 - 确保所有元素在同一行 */}
        <div className="flex items-center justify-between w-full">
          {/* 左侧：Logo */}
          <div className="flex items-center space-x-3 flex-shrink-0">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl flex items-center justify-center shadow-sm">
              <img 
                src="https://cdn-tos-cn.bytedance.net/obj/aipa-tos/fd47af23-a1bc-41aa-838e-83195eeb9d02/LifecycleOwner 监听 (2).png" 
                alt="Adzber Logo" 
                className="w-14 h-14 object-contain"
              />
            </div>
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 bg-clip-text text-transparent">
                Adzber
              </div>
              <div className="text-xs text-gray-600 uppercase tracking-wide font-medium">Performance Agency</div>
            </div>
          </div>

          {/* 中间：桌面端导航菜单 */}
          <nav className="hidden md:flex items-center space-x-8 flex-1 justify-center">
            <button 
              onClick={() => handleNavigation('home')}
              className="text-purple-600 font-medium hover:text-purple-700 transition-colors whitespace-nowrap"
            >
              Home
            </button>
            <button 
              onClick={() => handleNavigation('about')}
              className="text-gray-700 hover:text-purple-600 transition-colors whitespace-nowrap"
            >
              About Us
            </button>
            <button 
              onClick={() => handleNavigation('technology')}
              className="text-gray-700 hover:text-purple-600 transition-colors whitespace-nowrap"
            >
              Technology
            </button>
            <button 
              onClick={() => handleNavigation('specialities')}
              className="text-gray-700 hover:text-purple-600 transition-colors whitespace-nowrap"
            >
              Our Specialities
            </button>
            <button 
              onClick={() => handleNavigation('careers')}
              className="text-gray-700 hover:text-purple-600 transition-colors whitespace-nowrap"
            >
              Careers
            </button>
          </nav>

          {/* 右侧：移动端菜单按钮 + Contact Us 按钮 */}
          <div className="flex items-center space-x-4 flex-shrink-0">
            {/* 移动端菜单按钮 */}
            <button 
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <div className="w-6 h-6 flex flex-col justify-center">
                <span className={`bg-gray-700 h-0.5 w-6 transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-0.5' : 'mb-1'}`}></span>
                <span className={`bg-gray-700 h-0.5 w-6 transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`bg-gray-700 h-0.5 w-6 transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-0.5' : 'mt-1'}`}></span>
              </div>
            </button>

            {/* Contact Us 按钮 - 始终在最右边 */}
            <button 
              onClick={onContactClick}
              className="bg-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-purple-700 transition-colors whitespace-nowrap"
            >
              Contact Us
            </button>
          </div>
        </div>

        {/* 移动端下拉菜单 */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="px-4 py-4 space-y-4 bg-white border-t border-gray-200 mt-4">
            <button 
              onClick={() => handleNavigation('home')}
              className="block w-full text-left text-purple-600 font-medium hover:text-purple-700 transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => handleNavigation('about')}
              className="block w-full text-left text-gray-700 hover:text-purple-600 transition-colors"
            >
              About Us
            </button>
            <button 
              onClick={() => handleNavigation('technology')}
              className="block w-full text-left text-gray-700 hover:text-purple-600 transition-colors"
            >
              Technology
            </button>
            <button 
              onClick={() => handleNavigation('specialities')}
              className="block w-full text-left text-gray-700 hover:text-purple-600 transition-colors"
            >
              Our Specialities
            </button>
            <button 
              onClick={() => handleNavigation('careers')}
              className="block w-full text-left text-gray-700 hover:text-purple-600 transition-colors"
            >
              Careers
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;