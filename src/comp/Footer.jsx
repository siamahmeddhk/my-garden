import React from 'react';
import { FaTwitter, FaYoutube, FaFacebook } from "react-icons/fa";


export default function Footer() {
  return (
    <footer className="bg-base-200 text-base-content pt-5">
      {/* Main Footer Content */}
      <div className="footer footer-center p-5 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Contact Info */}
        <div>
          <h2 className="font-semibold text-lg mb-2">Contact Info</h2>
          <p>123 Garden Street<br />Green City, Earth 10101</p>
          <p>Phone: +123 456 7890</p>
          <p>Email: support@gardensite.com</p>
        </div>

        {/* Terms & Legal */}
        <div>
          <h2 className="font-semibold text-lg mb-2">Legal</h2>
          <a className="link link-hover">Terms of Service</a><br />
          <a className="link link-hover">Privacy Policy</a>
        </div>

        {/* Social Links */}
        <div>
          <h2 className="font-semibold text-lg mb-2">Follow Us</h2>
          <div className="flex gap-4 justify-center">
            <a
              href="#"
              className="bg-green-500 p-3 rounded-full hover:bg-green-600 transition"
            >
              <FaTwitter className="text-white w-5 h-5" />
            </a>
            <a
              href="#"
              className="bg-green-500 p-3 rounded-full hover:bg-green-600 transition"
            >
              <FaYoutube className="text-white w-5 h-5" />
            </a>
            <a
              href="#"
              className="bg-green-500 p-3 rounded-full hover:bg-green-600 transition"
            >
              <FaFacebook className="text-white w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center text-sm py-4 border-t border-base-300">
        © {new Date().getFullYear()} GardenSite — All rights reserved
      </div>
    </footer>
  );
}