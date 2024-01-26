
import React from 'react';
import Link from 'next/link';
// import { Navbar } from '../components/Navbar';

const PrivacyPolicy = () => {
  return (
    <div className= "mt-10">
      {/* <Navbar /> */}
      <section className="mb-10 container mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-white">Privacy Policy</h1>
        <p className="mb-8 text-lg leading-7 text-gray-400">StockDat is committed to protecting the privacy and security of its users. This privacy policy details how we collect, use, and disclose information gathered from our users.</p>

        {/* Add content here */}
        
        <h2 className="text-2xl font-bold my-4 text-white">1. Information Collection</h2>
        <p className="mb-6 text-lg leading-7 text-gray-400">We do not collect any personally identifiable information (PII) about our users. We do not track user activities on our website or store any user data.</p>
        
        {/* Add content here */}
        
        <h2 className="text-2xl font-bold my-4 text-white">2. Use of Information</h2>
        <p className="mb-6 text-lg leading-7 text-gray-400">We use the information we collect solely for the purpose of providing our services. We do not sell, rent, or share user data with third parties.</p>
        
        {/* Add content here */}
        
        <h2 className="text-2xl font-bold my-4 text-white">3. Data Security</h2>
        <p className="mb-6 text-lg leading-7 text-gray-400">We implement reasonable security measures to protect user data from unauthorized access and disclosure. However, no method of transmission over the internet or electronic storage is 100% secure. Therefore, we cannot guarantee absolute protection of user data.</p>
        
        {/* Add content here */}
        
        <h2 className="text-2xl font-bold my-4 text-white">4. Cookies and Other Technologies</h2>
        <p className="mb-6 text-lg leading-7 text-gray-400">We may use cookies and similar technologies to improve user experience and analyze website usage. Users can manage their cookie preferences using their browser settings.</p>
        
        {/* Add content here */}
        
        <h2 className="text-2xl font-bold my-4 text-white">5. Third-Party Links</h2>
        <p className="mb-6 text-lg leading-7 text-gray-400">Our website may contain links to third-party websites. We do not control or endorse the privacy practices of these sites. Users are encouraged to review the privacy policies of any linked sites before providing personal information.</p>
        
        {/* Add content here */}
        
        <h2 className="text-2xl font-bold my-4 text-white">6. Changes to this Privacy Policy</h2>
        <p className="mb-6 text-lg leading-7 text-gray-400">We reserve the right to update this privacy policy at any time. Any changes will be effective immediately upon posting. Users are advised to review this privacy policy periodically for any updates.</p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;