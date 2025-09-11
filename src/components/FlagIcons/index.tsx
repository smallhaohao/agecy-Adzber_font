/**
 * 国旗图标组件
 * 提供SVG格式的国旗图标，确保在所有设备上显示一致
 */

import React from 'react';

interface FlagIconProps {
  className?: string;
}

// 美国国旗SVG图标
export const USAFlag: React.FC<FlagIconProps> = ({ className = "w-16 h-12" }) => (
  <svg className={className} viewBox="0 0 60 40" xmlns="http://www.w3.org/2000/svg">
    {/* 红白条纹背景 */}
    <rect width="60" height="40" fill="#B22234"/>
    <rect y="3" width="60" height="3" fill="white"/>
    <rect y="9" width="60" height="3" fill="white"/>
    <rect y="15" width="60" height="3" fill="white"/>
    <rect y="21" width="60" height="3" fill="white"/>
    <rect y="27" width="60" height="3" fill="white"/>
    <rect y="33" width="60" height="3" fill="white"/>
    
    {/* 蓝色星区 */}
    <rect width="24" height="21" fill="#3C3B6E"/>
    
    {/* 白色星星 */}
    <g fill="white">
      <circle cx="4" cy="3" r="1"/>
      <circle cx="8" cy="3" r="1"/>
      <circle cx="12" cy="3" r="1"/>
      <circle cx="16" cy="3" r="1"/>
      <circle cx="20" cy="3" r="1"/>
      
      <circle cx="6" cy="6" r="1"/>
      <circle cx="10" cy="6" r="1"/>
      <circle cx="14" cy="6" r="1"/>
      <circle cx="18" cy="6" r="1"/>
      
      <circle cx="4" cy="9" r="1"/>
      <circle cx="8" cy="9" r="1"/>
      <circle cx="12" cy="9" r="1"/>
      <circle cx="16" cy="9" r="1"/>
      <circle cx="20" cy="9" r="1"/>
      
      <circle cx="6" cy="12" r="1"/>
      <circle cx="10" cy="12" r="1"/>
      <circle cx="14" cy="12" r="1"/>
      <circle cx="18" cy="12" r="1"/>
      
      <circle cx="4" cy="15" r="1"/>
      <circle cx="8" cy="15" r="1"/>
      <circle cx="12" cy="15" r="1"/>
      <circle cx="16" cy="15" r="1"/>
      <circle cx="20" cy="15" r="1"/>
      
      <circle cx="6" cy="18" r="1"/>
      <circle cx="10" cy="18" r="1"/>
      <circle cx="14" cy="18" r="1"/>
      <circle cx="18" cy="18" r="1"/>
    </g>
  </svg>
);

// 欧盟旗帜SVG图标
export const EuropeFlag: React.FC<FlagIconProps> = ({ className = "w-16 h-12" }) => (
  <svg className={className} viewBox="0 0 60 40" xmlns="http://www.w3.org/2000/svg">
    {/* 蓝色背景 */}
    <rect width="60" height="40" fill="#003399"/>
    
    {/* 黄色星星圆环 */}
    <g fill="#FFCC00">
      {/* 12颗星星排成圆环 */}
      <polygon points="30,8 31,11 34,11 32,13 33,16 30,14 27,16 28,13 26,11 29,11" />
      <polygon points="38,10 39,13 42,13 40,15 41,18 38,16 35,18 36,15 34,13 37,13" transform="rotate(30 30 20)"/>
      <polygon points="42,18 43,21 46,21 44,23 45,26 42,24 39,26 40,23 38,21 41,21" transform="rotate(60 30 20)"/>
      <polygon points="42,26 43,29 46,29 44,31 45,34 42,32 39,34 40,31 38,29 41,29" transform="rotate(90 30 20)"/>
      <polygon points="38,34 39,37 42,37 40,39 41,42 38,40 35,42 36,39 34,37 37,37" transform="rotate(120 30 20)"/>
      <polygon points="30,36 31,39 34,39 32,41 33,44 30,42 27,44 28,41 26,39 29,39" transform="rotate(150 30 20)"/>
      <polygon points="22,34 23,37 26,37 24,39 25,42 22,40 19,42 20,39 18,37 21,37" transform="rotate(180 30 20)"/>
      <polygon points="18,26 19,29 22,29 20,31 21,34 18,32 15,34 16,31 14,29 17,29" transform="rotate(210 30 20)"/>
      <polygon points="18,18 19,21 22,21 20,23 21,26 18,24 15,26 16,23 14,21 17,21" transform="rotate(240 30 20)"/>
      <polygon points="22,10 23,13 26,13 24,15 25,18 22,16 19,18 20,15 18,13 21,13" transform="rotate(270 30 20)"/>
      <polygon points="26,6 27,9 30,9 28,11 29,14 26,12 23,14 24,11 22,9 25,9" transform="rotate(300 30 20)"/>
      <polygon points="34,6 35,9 38,9 36,11 37,14 34,12 31,14 32,11 30,9 33,9" transform="rotate(330 30 20)"/>
    </g>
  </svg>
);

// 中东地区图标（地球仪样式）
export const MiddleEastIcon: React.FC<FlagIconProps> = ({ className = "w-16 h-12" }) => (
  <svg className={className} viewBox="0 0 60 40" xmlns="http://www.w3.org/2000/svg">
    {/* 地球背景 */}
    <circle cx="30" cy="20" r="18" fill="#4A90E2"/>
    
    {/* 大陆轮廓 */}
    <g fill="#8B4513">
      <path d="M20 15 Q25 12 30 15 Q35 12 40 15 Q38 20 35 22 Q30 25 25 22 Q22 20 20 15Z"/>
      <path d="M15 25 Q20 22 25 25 Q30 28 35 25 Q40 22 45 25 Q42 30 38 32 Q30 35 22 32 Q18 30 15 25Z"/>
    </g>
    
    {/* 经纬线 */}
    <g stroke="white" strokeWidth="0.5" fill="none" opacity="0.3">
      <circle cx="30" cy="20" r="18"/>
      <ellipse cx="30" cy="20" rx="18" ry="9"/>
      <ellipse cx="30" cy="20" rx="9" ry="18"/>
      <line x1="12" y1="20" x2="48" y2="20"/>
      <line x1="30" y1="2" x2="30" y2="38"/>
    </g>
  </svg>
);
