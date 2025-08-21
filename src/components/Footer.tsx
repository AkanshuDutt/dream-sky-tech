// app/Components/Footer.tsx

import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-800 to-blue-700 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-xl font-bold text-white mb-6 relative inline-block
                         after:content-[''] after:block after:w-half after:h-[3px] 
                         after:bg-gradient-to-r after:from-cyan-100 after:to-blue-400 
                         after:rounded-full after:transition-all after:duration-500 
                         hover:after:from-white hover:after:to-white 
                         transition-transform hover:-translate-y-1">
            Dream Sky Tech
          </h3>
          <p className="text-sm">
            We are a modern IT solutions company delivering reliable services.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-yellow-300"><FaFacebookF /></a>
            <a href="#" className="hover:text-yellow-300"><FaLinkedinIn /></a>
            <a href="#" className="hover:text-yellow-300"><FaInstagram /></a>
            <a href="#" className="hover:text-yellow-300"><FaWhatsapp /></a>
            <a href="#" className="hover:text-yellow-300"><FaYoutube /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold text-white mb-6 relative inline-block
                         after:content-[''] after:block after:w-half after:h-[3px] 
                         after:bg-gradient-to-r after:from-cyan-100 after:to-blue-400 
                         after:rounded-full after:transition-all after:duration-500 
                         hover:after:from-white hover:after:to-white 
                         transition-transform hover:-translate-y-1">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-yellow-300">Home</a></li>
            <li><a href="/About" className="hover:text-yellow-300">About Us</a></li>
            <li><a href="/Carrer" className="hover:text-yellow-300">Carrer</a></li>
            <li><a href="/Refund" className="hover:text-yellow-300">Refund Policy</a></li>
            <li><a href="/Terms" className="hover:text-yellow-300">Terms & Conditions</a></li>
            <li><a href="/PrivacyPolicy" className="hover:text-yellow-300">Privacy & Policy</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-bold text-white mb-6 relative inline-block
                         after:content-[''] after:block after:w-half after:h-[3px] 
                         after:bg-gradient-to-r after:from-cyan-100 after:to-blue-400 
                         after:rounded-full after:transition-all after:duration-500 
                         hover:after:from-white hover:after:to-white 
                         transition-transform hover:-translate-y-1">
            Services
          </h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/Service" className="hover:text-yellow-300">Web Development</a></li>
            <li><a href="/Service" className="hover:text-yellow-300">UI/UX Design</a></li>
            <li><a href="/Service" className="hover:text-yellow-300">Cloud Solutions</a></li>
            <li><a href="/Service" className="hover:text-yellow-300">Mobile App Development</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold text-white mb-6 relative inline-block
                         after:content-[''] after:block after:w-half after:h-[3px] 
                         after:bg-gradient-to-r after:from-cyan-100 after:to-blue-400 
                         after:rounded-full after:transition-all after:duration-500 
                         hover:after:from-white hover:after:to-white 
                         transition-transform hover:-translate-y-1">
            Contact Us
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="mailto:info@dreamskytech.com" className="hover:text-yellow-300">
                Email: info@dreamskytech.com
              </a>
            </li>
            <li>
              <a href="tel:8750610304" className="hover:text-yellow-300">
                Mobile Number: 8750610304
              </a>
            </li>
            <li>
              <a
                href="https://www.google.com/maps/search/?api=1&query=A-43,+Noida+Sector+63,+Uttar+Pradesh,+201301"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-300"
              >
                Address: A-43, Noida Sector 63, Uttar Pradesh, 201301
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-b-blue-200 mt-10">
        <div className="flex justify-center items-center h-24 text-white text-sm">
          &copy; Copyright dreamskytech {new Date().getFullYear()}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
