import React from 'react';
import { FaPaperPlane, FaLeaf } from 'react-icons/fa';

export default function Newsletter() {
  return (
    <div className=' '>
  <div className="relative overflow-hidden bg-gradient-to-r from-green-50 to-emerald-100 rounded-xl shadow-lg max-w-4xl mx-auto my-16 p-8 md:p-12 border border-green-200">
      {/* Decorative elements */}
      <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-green-200 opacity-20"></div>
      <div className="absolute -bottom-16 -left-16 w-40 h-40 rounded-full bg-emerald-200 opacity-20"></div>
      <FaLeaf className="absolute top-8 right-8 text-green-300 text-6xl opacity-20" />
      
      <div className="relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Text content */}
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center mb-4">
              <FaPaperPlane className="text-green-600 mr-2" />
              <span className="font-semibold text-green-700 tracking-wider">GARDEN UPDATES</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-3">Join Our Green Community</h2>
            <p className="text-gray-600 mb-6 max-w-md">
              Subscribe to our newsletter for gardening tips, seasonal guides, and exclusive offers. 
              Let's grow together!
            </p>
            
            {/* Stats */}
            <div className="flex justify-center md:justify-start gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-700">10K+</div>
                <div className="text-xs text-gray-500">SUBSCRIBERS</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-700">100%</div>
                <div className="text-xs text-gray-500">ORGANIC CONTENT</div>
              </div>
            </div>
          </div>
          
          {/* Form */}
          <div className="flex-1 w-full">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-green-100">
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    placeholder="Jane Greenleaf" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="your@email.com" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
                  />
                </div>
                
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    id="consent" 
                    className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                  />
                  <label htmlFor="consent" className="ml-2 block text-sm text-gray-700">
                    I agree to receive gardening tips and offers
                  </label>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full flex items-center justify-center px-6 py-3 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all transform hover:-translate-y-0.5"
                >
                  <FaPaperPlane className="mr-2" />
                  Subscribe Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>


    </div>
  
  );
}