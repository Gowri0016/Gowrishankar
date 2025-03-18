import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-700 via-purple-700 to-indigo-700 text-white py-12 shadow-lg shadow-purple-500/50">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center md:text-left">

     

          {/* About Section */}
          <div>
            <h3 className="text-xl font-semibold mb-3 text-white">About Us</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300 transition-colors duration-300">Company</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors duration-300">Community</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors duration-300">Careers</a></li>
            </ul>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="text-xl font-semibold mb-3 text-white">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300 transition-colors duration-300">AI Web/App</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors duration-300">Mobile App (Android/IOS)</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors duration-300">SEO Optimization</a></li>
            </ul>
          </div>

          {/* Follow Us Section */}
          <div>
            <h3 className="text-xl font-semibold mb-3 text-white">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="hover:text-gray-300 transition-transform transform hover:scale-110">
                <Linkedin size={24} />
              </a>
              <a href="#" className="hover:text-gray-300 transition-transform transform hover:scale-110">
                <Instagram size={24} />
              </a>
              <a href="#" className="hover:text-gray-300 transition-transform transform hover:scale-110">
                <Twitter size={24} />
              </a>
              <a href="#" className="hover:text-gray-300 transition-transform transform hover:scale-110">
                <Facebook size={24} />
              </a>
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-semibold mb-3 text-white">Contact</h3>
            <p className="text-gray-300 hover:text-white transition-colors duration-300">📞 80568-89616</p>
            <p className="text-gray-300 hover:text-white transition-colors duration-300">✉️ gowridyk3@gmail.com</p>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="mt-10 border-t border-gray-400 pt-4 text-center">
          <p className="text-gray-300">&copy; Thank for Vi  sit!!...</p>
        </div>
      </div>
    </footer>
  );
}
