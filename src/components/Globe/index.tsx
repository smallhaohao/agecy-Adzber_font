/**
 * 3D地球仪组件
 * 支持自动旋转和鼠标交互控制
 */

import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';

interface GlobeProps {
  width?: number;
  height?: number;
  className?: string;
}

const Globe: React.FC<GlobeProps> = ({ 
  width = 400, 
  height = 400, 
  className = '' 
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene>();
  const rendererRef = useRef<THREE.WebGLRenderer>();
  const cameraRef = useRef<THREE.PerspectiveCamera>();
  const globeRef = useRef<THREE.Mesh>();
  const animationRef = useRef<number>();
  
  // 鼠标交互状态
  const [isDragging, setIsDragging] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [rotationSpeed, setRotationSpeed] = useState({ x: 0.005, y: 0.01 });

  useEffect(() => {
    if (!mountRef.current) return;

    // 创建场景
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // 创建相机
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 3;
    cameraRef.current = camera;

    // 创建渲染器
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true 
    });
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    rendererRef.current = renderer;

    // 创建地球几何体
    const geometry = new THREE.SphereGeometry(1, 64, 64);
    
    // 创建地球材质 - 调整为淡紫色
    const material = new THREE.MeshPhongMaterial({
      color: 0xA78BFA, // 淡紫色 (对应 purple-300)
      shininess: 80,
      transparent: true,
      opacity: 0.75,
      emissive: 0x8B5CF6, // 添加淡紫色发光效果 (对应 purple-400)
      emissiveIntensity: 0.1,
    });

    // 创建地球网格
    const globe = new THREE.Mesh(geometry, material);
    globeRef.current = globe;
    scene.add(globe);

    // 添加网格线 - 调整为更淡的紫色
    const wireframeGeometry = new THREE.SphereGeometry(1.01, 32, 32);
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0xC4B5FD, // 更淡的紫色 (对应 purple-200)
      wireframe: true,
      transparent: true,
      opacity: 0.4,
    });
    const wireframe = new THREE.Mesh(wireframeGeometry, wireframeMaterial);
    scene.add(wireframe);

    // 添加点光源
    const pointLight = new THREE.PointLight(0xffffff, 1, 100);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    // 添加环境光 - 调整为紫色调
    const ambientLight = new THREE.AmbientLight(0xF3E8FF, 0.7); // 淡紫色环境光
    scene.add(ambientLight);

    // 添加粒子系统 - 调整为淡紫色
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 1000;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.005,
      color: 0xDDD6FE, // 非常淡的紫色 (对应 purple-100)
      transparent: true,
      opacity: 0.6,
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // 将渲染器添加到DOM
    mountRef.current.appendChild(renderer.domElement);

    // 动画循环
    const animate = () => {
      animationRef.current = requestAnimationFrame(animate);

      if (globeRef.current) {
        // 自动旋转
        if (!isDragging) {
          globeRef.current.rotation.y += rotationSpeed.y;
          globeRef.current.rotation.x += rotationSpeed.x;
        }
      }

      // 粒子旋转
      if (particlesMesh) {
        particlesMesh.rotation.y += 0.001;
      }

      // 网格旋转
      if (wireframe) {
        wireframe.rotation.y += 0.015;
        wireframe.rotation.x += 0.008;
      }

      renderer.render(scene, camera);
    };

    animate();

    // 鼠标事件处理
    const handleMouseDown = (event: MouseEvent) => {
      setIsDragging(true);
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    const handleMouseMove = (event: MouseEvent) => {
      if (!isDragging || !globeRef.current) return;

      const deltaX = event.clientX - mousePos.x;
      const deltaY = event.clientY - mousePos.y;

      globeRef.current.rotation.y += deltaX * 0.01;
      globeRef.current.rotation.x += deltaY * 0.01;

      setMousePos({ x: event.clientX, y: event.clientY });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    const canvas = renderer.domElement;
    canvas.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    // 响应式处理
    const handleResize = () => {
      if (!cameraRef.current || !rendererRef.current) return;
      
      const newWidth = mountRef.current?.clientWidth || width;
      const newHeight = mountRef.current?.clientHeight || height;
      
      cameraRef.current.aspect = newWidth / newHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // 清理函数
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      canvas.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('resize', handleResize);
      
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      
      // 清理Three.js资源
      geometry.dispose();
      material.dispose();
      wireframeGeometry.dispose();
      wireframeMaterial.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      renderer.dispose();
    };
  }, [width, height, isDragging, mousePos, rotationSpeed]);

  return (
    <div 
      ref={mountRef} 
      className={`relative ${className}`}
      style={{ width, height, cursor: isDragging ? 'grabbing' : 'grab' }}
    >
      
      {/* 科技感装饰 - 调整为紫色主题 */}
      <div className="absolute top-2 right-2 w-3 h-3 bg-purple-400 rounded-full animate-ping"></div>
      <div className="absolute bottom-2 right-2 w-2 h-2 bg-purple-300 rounded-full animate-pulse"></div>
    </div>
  );
};

export default Globe;