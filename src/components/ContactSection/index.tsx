/**
 * 联系表单区块组件
 * 包含联系表单和提交功能，增加科技感背景和动画
 */

import React from 'react';
import { useAtom } from 'jotai';
import { contactFormDataAtom, isSubmittingAtom, submitResultAtom } from './contactForm';
import { useContactSubmit } from './contactRequest';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useAtom(contactFormDataAtom);
  const [isSubmitting] = useAtom(isSubmittingAtom);
  const [submitResult] = useAtom(submitResultAtom);
  const { submitContact } = useContactSubmit();

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // 简单验证
    if (!formData.name || !formData.email || !formData.company || !formData.serviceType || !formData.details) {
      alert('请填写所有必填字段');
      return;
    }

    const success = await submitContact(formData);
    if (success) {
      // 重置表单
      setFormData({
        name: '',
        email: '',
        company: '',
        serviceType: '',
        details: ''
      });
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-purple-50 to-gray-50 relative overflow-hidden">
      {/* 科技背景网格 */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-16 h-16 bg-purple-400/20 rounded-full animate-pulse"></div>
      <div className="absolute top-1/3 right-10 w-20 h-20 bg-purple-400/20 rounded-full animate-bounce delay-300"></div>
      <div className="absolute bottom-20 right-1/4 w-24 h-24 bg-purple-400/10 rounded-full animate-pulse delay-700"></div>
      
      {/* 科技连接线 */}
      <div className="absolute top-1/4 left-0 w-64 h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent animate-pulse"></div>
      <div className="absolute bottom-1/3 right-0 w-48 h-px bg-gradient-to-l from-transparent via-cyan-400/30 to-transparent animate-pulse delay-1000"></div>
      
      {/* 浮动科技元素 */}
      <div className="absolute top-32 right-32 w-6 h-6 bg-cyan-400 rounded-full animate-float"></div>
      <div className="absolute bottom-40 left-20 w-4 h-4 bg-purple-500 rounded-full animate-float delay-500"></div>
      <div className="absolute top-1/2 left-20 w-8 h-8 transform rotate-45 border-2 border-cyan-400/50 animate-spin" style={{animationDuration: '10s'}}></div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 relative">
          <div className="inline-block px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-medium mb-4 relative overflow-hidden">
            <span className="relative z-10">Need help?</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 animate-pulse"></div>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-8 relative">
            Don't hesitate to contact us for more<br />information
            {/* 装饰性科技元素 */}
            <div className="absolute -top-4 -right-8 w-3 h-3 bg-cyan-400 rounded-full animate-ping"></div>
            <div className="absolute -bottom-2 -left-6 w-2 h-2 bg-purple-500 rounded-full animate-pulse delay-500"></div>
          </h2>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg relative overflow-hidden group">
          {/* 表单背景科技效果 */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-cyan-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur"></div>
          
          <div className="relative z-10">
            {/* Name Field */}
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-medium mb-2">
                My name is
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-300 hover:shadow-md"
                placeholder="Enter your name"
                required
              />
            </div>

            {/* Service Type */}
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-medium mb-2">
                and I would like to
              </label>
              <select
                value={formData.serviceType}
                onChange={(e) => handleInputChange('serviceType', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-300 hover:shadow-md"
                required
              >
                <option value="">Please select an option</option>
                <option value="become-advertiser">Become an advertiser</option>
                <option value="become-publisher">Become an publisher</option>
                <option value="report-problem">Report a problem</option>
              </select>
            </div>

            {/* Details */}
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Here are some details...
              </label>
              <textarea
                value={formData.details}
                onChange={(e) => handleInputChange('details', e.target.value)}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-300 hover:shadow-md"
                placeholder="Tell us more about your project"
                required
              />
            </div>

            {/* Company */}
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Company name
              </label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) => handleInputChange('company', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-300 hover:shadow-md"
                placeholder="Enter your company name"
                required
              />
            </div>

            {/* Email */}
            <div className="mb-8">
              <label className="block text-gray-700 text-sm font-medium mb-2">
                My Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-300 hover:shadow-md"
                placeholder="Enter your email address"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-purple-600 text-white py-4 rounded-lg font-medium text-lg hover:bg-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center relative overflow-hidden group transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative z-10">
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    提交中...
                  </>
                ) : (
                  <>
                   <span className="inline-flex items-center">
                        I'm interested
                        <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                   </span>
                    
                  </>
                )}
              </span>
            </button>

            {/* Result Message */}
            {submitResult && (
              <div className={`mt-4 p-4 rounded-lg ${submitResult.success ? 'bg-green-100 text-green-700 border border-green-200' : 'bg-red-100 text-red-700 border border-red-200'} relative overflow-hidden`}>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-green-600 animate-pulse"></div>
                {submitResult.message}
              </div>
            )}
          </div>
          
          {/* 表单装饰元素 */}
          <div className="absolute top-4 right-4 w-3 h-3 bg-cyan-400 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute bottom-4 left-4 w-2 h-2 bg-purple-500 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;