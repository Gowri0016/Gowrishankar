import React, { useState } from "react";
import { motion } from "framer-motion";
import Gowri from '../Asset/Gowri Pro.png';

export default function Details() {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;

    const rotateX = (clientY / innerHeight - 0.5) * 20; // Adjust tilt range
    const rotateY = (clientX / innerWidth - 0.5) * -20;

    setRotate({ x: rotateX, y: rotateY });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-black p-6">
      
      {/* 3D Animated Profile Card */}
      <motion.div
        className="relative bg-white bg-opacity-20 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-gray-600 max-w-xs text-center"
        style={{
          transformStyle: "preserve-3d",
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setRotate({ x: 0, y: 0 })}
        transition={{ duration: 0.3 }}
      >
        {/* Profile Image */}
        <motion.img
              src={Gowri} // Ensure this is the correct image import
              alt="Gowri Shankar"
              className="w-full h-44 relative mb-10 mx-auto rounded-full border-4 border-purple-500 shadow-lg transform transition-transform hover:scale-110 object-cover"
        />


        <h2 className="text-xl font-bold text-white mt-4" style={{ transform: "translateZ(30px)" }}>
          Gowri Shankar
        </h2>
        <p className="text-gray-300 text-sm" style={{ transform: "translateZ(20px)" }}>
          Full-Stack Web Developer
        </p>

      </motion.div>

      {/* Portfolio Section */}
      <motion.div 
        className="mt-10 bg-white bg-opacity-10 backdrop-blur-xl p-10 rounded-2xl shadow-xl border border-gray-700 w-full max-w-2xl text-center relative"
        whileHover={{ scale: 1.02 }}
      >
        <h1 className="text-4xl font-extrabold text-white drop-shadow-lg">Explore My Work</h1>
        <p className="text-gray-300 mt-4">
          I specialize in crafting dynamic and visually appealing web applications.
          With expertise in React.js and modern web technologies, I build digital experiences that leave an impact.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex justify-center space-x-4">
          <motion.button
            className="px-6 py-3 text-white bg-purple-600 rounded-lg shadow-lg hover:bg-purple-700 transform transition-all hover:scale-110"
            whileHover={{ y: -3 }}
          >
            <a href="/Project" className="block w-full h-full">View Projects</a>
          </motion.button>

          <motion.button
            className="px-6 py-3 text-purple-600 border-2 border-purple-600 rounded-lg shadow-lg hover:bg-purple-600 hover:text-white transform transition-all hover:scale-110"
            whileHover={{ y: -3 }}
          >
            <a href="tel:8056889616" className="block w-full h-full">Contact Me</a>
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
