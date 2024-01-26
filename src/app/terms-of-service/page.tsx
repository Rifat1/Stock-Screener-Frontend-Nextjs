
import React from 'react';
import Link from 'next/link';
// import { Navbar } from '../components/Navbar';

const TermsOfService = () => {
  return (
    <div className= "mt-10">
      {/* <Navbar /> */}
      <section className="container mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-white">Terms of Service</h1>
        <p className="mb-8 text-lg leading-7 text-gray-400">By using StockDat, you agree to comply with these terms and conditions. These terms govern your use of our website and services provided by StockDat.</p>
        
        {/* Add content here */}
        
        <h2 className="text-2xl font-bold my-4 text-white">1. User Conduct</h2>
        <p className="mb-6 text-lg leading-7 text-gray-400">You agree not to use the StockDat website for any illegal or unauthorized purpose. You shall not engage in any activity that disrupts, interferes with, or restricts the access of other users.</p>
        
        {/* Add content here */}
        
        <h2 className="text-2xl font-bold my-4 text-white">2. Limitation of Liability</h2>
        <p className="mb-6 text-lg leading-7 text-gray-400">We do not guarantee the accuracy, completeness, or timeliness of the data provided on our website. We are not responsible for any losses or damages resulting from the use of our data.</p>
        
        {/* Add content here */}
        
        <h2 className="text-2xl font-bold my-4 text-white">3. Intellectual Property</h2>
        <p className="mb-6 text-lg leading-7 text-gray-400">All content and information on the StockDat website are protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, or modify any of this content without our prior written consent.</p>
        
        {/* Add content here */}
        
        <h2 className="text-2xl font-bold my-4 text-white">4. Termination</h2>
        <p className="mb-6 text-lg leading-7 text-gray-400">We reserve the right to terminate your access to our website at any time, without notice, for any reason. Termination of your access may result in the deletion of your user account and all associated data.</p>
        
        {/* Add content here */}
        
        <h2 className="text-2xl font-bold my-4 text-white">5. Governing Law</h2>
        <p className="mb-6 text-lg leading-7 text-gray-400">These terms shall be governed by and construed in accordance with the laws of Canada, excluding its conflict of law principles. Any dispute arising from these terms shall be resolved exclusively in the courts of Canada.</p>
      </section>
    </div>
  );
};

export default TermsOfService;