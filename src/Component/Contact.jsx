import React from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <div className="relative flex justify-center items-center h-screen bg-gray-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute top-0 left-0 w-full h-full">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#6B46C1" fillOpacity="0.6" d="M0,128L40,160C80,192,160,256,240,261.3C320,267,400,213,480,208C560,203,640,245,720,256C800,267,880,245,960,218.7C1040,192,1120,160,1200,165.3C1280,171,1360,213,1400,234.7L1440,256L1440,320L0,320Z"></path>
        </svg>
      </div>
      
      {/* Glassmorphism Contact Box */}
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }} 
        animate={{ scale: 1, opacity: 1 }} 
        transition={{ duration: 0.5 }}
        className="relative bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-2xl shadow-2xl w-96 text-center border border-white border-opacity-30"
      >
        <h2 className="text-2xl font-bold mb-4 text-white">Get in Touch</h2>
        <form>
          <div className="mb-4">
            <input type="text" placeholder="Your Name" className="w-full px-4 py-2 bg-transparent border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 text-white" />
          </div>
          <div className="mb-4">
            <input type="email" placeholder="Your Email" className="w-full px-4 py-2 bg-transparent border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 text-white" />
          </div>
          <div className="mb-4">
            <textarea placeholder="Your Message" className="w-full px-4 py-2 bg-transparent border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 text-white h-32"></textarea>
          </div>
          <motion.button 
            whileHover={{ scale: 1.1, boxShadow: "0px 0px 10px #A855F7" }}
            whileTap={{ scale: 0.9 }}
            className="bg-purple-500 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-purple-600 transition-all"
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}
