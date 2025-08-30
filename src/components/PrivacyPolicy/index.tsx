/**
 * 隐私政策页面组件
 * 独立的隐私政策页面，包含页头、页尾和详细的隐私政策内容
 */

import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

interface PrivacyPolicyProps {
  onNavigateToSection: (sectionId: string) => void;
  onContactClick: () => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onNavigateToSection, onContactClick }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-gray-50">
      <Header 
        onContactClick={onContactClick} 
        onNavigateToSection={onNavigateToSection}
        isPrivacyPage={true}
      />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-purple-100 to-purple-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          <p className="text-gray-600 text-lg">Last updated: [17/01/2024]</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 leading-relaxed mb-8">
                Welcome to Adzber! This Privacy Policy explains how Adzber ("we," "us," or "our") collects, uses, discloses, and protects your information when you use our website, mobile application, and any related services (collectively, the "Services").
              </p>
              
              <p className="text-gray-600 leading-relaxed mb-8">
                By accessing or using the Services, you agree to the terms of this Privacy Policy. If you do not agree with the terms of this Privacy Policy, please do not use the Services.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">1. Personal Information:</h3>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>When you sign up for an account, we may collect personal information such as your name, email address, and contact details.</li>
                <li>If you choose to connect your social media accounts, we may collect information from those accounts.</li>
                <li>We may collect payment information if you make a purchase through the Services.</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">2. Usage Information:</h3>
              <ul className="list-disc list-inside text-gray-600 mb-6">
                <li>We collect information about how you interact with our Services, including log files, device information, and analytics data.</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">3. User Content:</h3>
              <ul className="list-disc list-inside text-gray-600 mb-8">
                <li>Any content you create, upload, or share through the Services, including comments, reviews, and messages.</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">How We Use Your Information</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                We use the collected information for the following purposes:
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">1. Providing and Improving Services:</h3>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>To deliver and maintain our Services.</li>
                <li>To personalize your experience and improve our offerings.</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">2. Communication:</h3>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>To send you updates, newsletters, and promotional materials.</li>
                <li>To respond to your inquiries and provide customer support.</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">3. Analytics:</h3>
              <ul className="list-disc list-inside text-gray-600 mb-6">
                <li>To analyze usage patterns and improve the functionality of our Services.</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">4. Legal Compliance:</h3>
              <ul className="list-disc list-inside text-gray-600 mb-8">
                <li>To comply with applicable laws, regulations, or legal processes.</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">Information Sharing</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                We do not sell, trade, or otherwise transfer your personal information to outside parties without your consent, except as described in this Privacy Policy.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">1. Service Providers:</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                We may share information with third-party service providers to assist in providing, maintaining, and improving our Services.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">2. Legal Compliance:</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                We may disclose your information when required by law or in response to a valid legal request.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">3. Business Transfers:</h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                In the event of a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred as part of that transaction.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">Security</h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                We take reasonable measures to protect your information from unauthorized access, disclosure, alteration, and destruction.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Choices</h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                You have the right to access, correct, or delete your personal information. You may also choose not to provide certain information, but this may limit your ability to use some features of the Services.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">Updates to this Privacy Policy</h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                We may update this Privacy Policy from time to time. The date of the latest update will be indicated at the top of this page. We encourage you to review this Privacy Policy periodically.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you have any questions or concerns about this Privacy Policy, please contact us at [info@adzber.com].
              </p>

              <p className="text-gray-600 leading-relaxed font-medium">
                Thank you for using Adzber!
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;