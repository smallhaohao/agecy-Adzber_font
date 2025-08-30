/**
 * 网站底部组件
 * 包含 logo、链接和版权信息
 */

import React from 'react';

interface FooterProps {
  onPrivacyClick?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onPrivacyClick }) => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Logo and Links */}
        <div className="flex items-center justify-center mb-8">
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl flex items-center justify-center">
                <img 
                  src="https://cdn-tos-cn.bytedance.net/obj/aipa-tos/fd47af23-a1bc-41aa-838e-83195eeb9d02/LifecycleOwner 监听 (2).png" 
                  alt="Adzber Logo" 
                  className="w-12 h-12 object-contain"
                />
              </div>
              <div>
                <div className="text-xl font-bold bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 bg-clip-text text-transparent">
                  Adzber
                </div>
                <div className="text-xs text-gray-600 uppercase tracking-wide font-medium">Performance Agency</div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center justify-center space-x-12 mb-8">
          <a href="#careers" className="text-gray-300 hover:text-white transition-colors">
            Careers
          </a>
          <button 
            onClick={onPrivacyClick}
            className="text-gray-300 hover:text-white transition-colors"
          >
            Privacy Policy
          </button>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex items-center justify-between">
            <div className="text-gray-400 text-sm">
              Copyright © 2025 Adzber. All rights reserved.
            </div>
            
            {/* Back to Top Button */}
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center hover:bg-purple-700 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;