import React from "react";
import { motion } from "framer-motion";
import Gowri from '../Asset/Gori4.jpeg'

export default function Details() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-6">
      {/* 3D Animated Profile Card */}
      <motion.div
        className="relative bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-xl shadow-lg border border-gray-700 max-w-xs text-center"
        whileHover={{ scale: 1.05, rotateY: 5, rotateX: 5 }}
        transition={{ duration: 0.5 }}
      >
        {/* Profile Image */}
        <motion.img
          src={Gowri}
          className="w-32 h-32 mx-auto rounded-full border-4 border-blue-500 shadow-lg"
          whileHover={{ scale: 1.1 }}
        />
        
        <p className="text-gray-300">Full-Stack Web Developer</p>

        {/* Social Links */}
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="text-blue-500 hover:text-blue-700 transition">
            <i className="fab fa-linkedin text-2xl"></i>
          </a>
          <a href="#" className="text-white hover:text-gray-300 transition">
            <i className="fab fa-github text-2xl"></i>
          </a>
          <a href="#" className="text-blue-400 hover:text-blue-600 transition">
            <i className="fab fa-twitter text-2xl"></i>
          </a>
        </div>
      </motion.div>

      {/* Portfolio Section */}
      <div className="mt-8 bg-white p-8 rounded-lg shadow-md w-full max-w-2xl text-center">
        <h1 className="text-3xl font-bold text-gray-900">Welcome to My Portfolio!</h1>
        <p className="text-gray-700 mt-4">
          My name is Gowri Shankar, and I'm a web developer. I finished two projects in (React.jsx).
          My specialty is helping businesses stand out by creating visually appealing and user-friendly websites.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex justify-center space-x-4">
          <motion.button
            className="px-6 py-2 text-white bg-blue-600 rounded-md shadow-md hover:bg-blue-700 transition"
            whileHover={{ scale: 1.1 }}
          >
            Learn
          </motion.button>
          <motion.button
            className="px-6 py-2 text-blue-600 border-2 border-blue-600 rounded-md shadow-md hover:bg-blue-600 hover:text-white transition"
            whileHover={{ scale: 1.1 }}
          >
            Visit
          </motion.button>
        </div>
      </div>
    </div>
  );
}
