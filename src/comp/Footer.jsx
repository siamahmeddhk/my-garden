
import React from 'react';
import { FaTwitter, FaYoutube, FaFacebook, FaLeaf } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-green-50 to-base-200 text-base-content pt-12 px-6 md:px-12 lg:px-24 border-t border-green-100">
      <div className="max-w-8xl mx-auto">
        {/* Logo/Branding */}
        <div className="flex items-center justify-center md:justify-start mb-8">
          <FaLeaf className="text-green-600 text-3xl mr-2" />
          <span className="text-2xl font-bold text-green-700">GardenSite</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
          {/* Contact Info */}
          <div>
            <h2 className="font-semibold text-xl mb-4 text-green-800 flex items-center justify-center md:justify-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              Contact Info
            </h2>
            <address className="not-italic space-y-3 text-sm md:text-base text-gray-600">
              <p className="flex items-center justify-center md:justify-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                123 Garden Street<br className="md:hidden" /> Green City, Earth 10101
              </p>
              <p className="flex items-center justify-center md:justify-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <a href="tel:+1234567890" className="hover:underline hover:text-green-700 transition-colors">+123 456 7890</a>
              </p>
              <p className="flex items-center justify-center md:justify-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a href="mailto:support@gardensite.com" className="hover:underline hover:text-green-700 transition-colors">support@gardensite.com</a>
              </p>
            </address>
          </div>

          {/* Terms & Legal */}
          <div>
            <h2 className="font-semibold text-xl mb-4 text-green-800 flex items-center justify-center md:justify-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
              </svg>
              Legal
            </h2>
            <nav className="flex flex-col space-y-3 text-sm md:text-base">
              <a href="#" className="link link-hover hover:text-green-600 transition-colors flex items-center justify-center md:justify-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                Terms of Service
              </a>
              <a href="#" className="link link-hover hover:text-green-600 transition-colors flex items-center justify-center md:justify-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                Privacy Policy
              </a>
            </nav>
          </div>

          {/* Social Links */}
          <div>
            <h2 className="font-semibold text-xl mb-4 text-green-800 flex items-center justify-center md:justify-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              Follow Us
            </h2>
            <div className="flex justify-center md:justify-start gap-4">
              <a
                href="#"
                aria-label="Twitter"
                className="bg-green-600 p-3 rounded-full hover:bg-green-700 transition-all transform hover:-translate-y-1 shadow-md hover:shadow-lg"
              >
                <FaTwitter className="text-white w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="bg-green-600 p-3 rounded-full hover:bg-green-700 transition-all transform hover:-translate-y-1 shadow-md hover:shadow-lg"
              >
                <FaYoutube className="text-white w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="bg-green-600 p-3 rounded-full hover:bg-green-700 transition-all transform hover:-translate-y-1 shadow-md hover:shadow-lg"
              >
                <FaFacebook className="text-white w-5 h-5" />
              </a>
            </div>
            
            {/* Newsletter */}
            <div className="mt-6">
              <h3 className="text-sm font-medium text-green-800 mb-2">Subscribe to our newsletter</h3>
              <div className="flex flex-col sm:flex-row gap-2 max-w-xs mx-auto md:mx-0">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-3 py-2 text-sm rounded border border-green-200 focus:outline-none focus:ring-1 focus:ring-green-500"
                />
                <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-sm transition-colors shadow-sm">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-12 text-center text-sm text-gray-500 border-t border-green-200 pt-6 pb-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© {new Date().getFullYear()} GardenSite — All rights reserved</p>
            <div className="mt-2 md:mt-0 flex gap-4">
              <a href="#" className="hover:text-green-600 transition-colors">Sitemap</a>
              <a href="#" className="hover:text-green-600 transition-colors">Careers</a>
              <a href="#" className="hover:text-green-600 transition-colors">FAQ</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}