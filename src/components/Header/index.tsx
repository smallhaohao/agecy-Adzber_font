/**
 * 网站头部导航组件
 * 包含 logo、导航菜单和联系按钮，支持平滑滚动到对应区块
 */

import React from 'react';

interface HeaderProps {
  onContactClick: () => void;
  onNavigateToSection?: (sectionId: string) => void;
  isPrivacyPage?: boolean;
}

const Header: React.FC<HeaderProps> = ({ onContactClick, onNavigateToSection, isPrivacyPage = false }) => {
  const handleNavigation = (sectionId: string) => {
    if (onNavigateToSection) {
      onNavigateToSection(sectionId);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
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

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => handleNavigation('home')}
              className="text-purple-600 font-medium hover:text-purple-700 transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => handleNavigation('about')}
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              About Us
            </button>
            <button 
              onClick={() => handleNavigation('technology')}
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              Technology
            </button>
            <button 
              onClick={() => handleNavigation('specialities')}
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              Our Specialities
            </button>
            <button 
              onClick={() => handleNavigation('careers')}
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              Careers
            </button>
          </nav>

          {/* Contact Button */}
          <button 
            onClick={onContactClick}
            className="bg-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-purple-700 transition-colors"
          >
            Contact Us
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;