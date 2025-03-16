import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-10">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-lg font-semibold mb-2">About Us</h3>
            <ul>
              <li><a href="#" className="hover:text-gray-300">Company</a></li>
              <li><a href="#" className="hover:text-gray-300">Community</a></li>
              <li><a href="#" className="hover:text-gray-300">Careers</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Services</h3>
            <ul>
              <li><a href="#" className="hover:text-gray-300">AI Web/App</a></li>
              <li><a href="#" className="hover:text-gray-300">Mobile App (Android/IOS)</a></li>
              <li><a href="#" className="hover:text-gray-300">SEO Optimization</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Follow us</h3>
            <ul>
              <li><a href="#" className="hover:text-gray-300">Linkden</a></li>
              <li><a href="#" className="hover:text-gray-300">Instagram</a></li>
              <li><a href="#" className="hover:text-gray-300">Twitter</a></li>
            </ul>
          </div>
        

          <div>
            <h3 className="text-lg font-semibold mb-2">Contact</h3>
            <p className="hover:text-gray-300">📞 80568-89616</p>
            <p className="hover:text-gray-300">✉️ gowridyk3@gmail.com</p>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-400 pt-4 text-center">
          <p>©️ Poeage 2024 - All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
