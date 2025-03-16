import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="w-full fixed top-0 z-50">
      {/* Glowing RGB Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 blur-lg opacity-50"></div>

      <nav className="relative container mx-auto flex justify-between items-center h-16 px-6 md:px-10 bg-black bg-opacity-80 shadow-lg rounded-b-lg">
        
        {/* Logo with Scaling Effect */}
        <motion.p className="text-white font-extrabold text-2xl md:text-3xl tracking-wide" whileHover={{ scale: 1.1 }}>
          GowriShankar G
        </motion.p>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6 text-white font-semibold">
          <Link to="/" className="hover:text-blue-400 transition-transform">Home</Link>
          <Link to="/Skills" className="hover:text-blue-400 transition-transform">Skills</Link>
          <Link to="/Project" className="hover:text-blue-400 transition-transform">Projects</Link>
          <Link to="/Contact" className="hover:text-blue-400 transition-transform">Contact</Link>
        </div>

        {/* Mobile & MD Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </nav>

      {/* Mobile & Medium Screen Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="absolute top-16 left-0 w-full bg-black bg-opacity-90 shadow-lg flex flex-col items-center space-y-5 py-6 text-white md:hidden"
          >
            <Link to="/" className="text-xl font-semibold hover:text-blue-400 transition-transform" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/Skills" className="text-xl font-semibold hover:text-blue-400 transition-transform" onClick={() => setIsOpen(false)}>Skills</Link>
            <Link to="/Project" className="text-xl font-semibold hover:text-blue-400 transition-transform" onClick={() => setIsOpen(false)}>Projects</Link>
            <Link to="/Contact" className="text-xl font-semibold hover:text-blue-400 transition-transform" onClick={() => setIsOpen(false)}>Contact</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
