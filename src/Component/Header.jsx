import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const homenavigate = () =>{
    navigate('#')
  } 

  const skilnavigate = () =>{
    navigate('/Skills')
  }

  const projnavigate = () => {
    navigate('/Project')
  }

  const contnavigate = () => {
    navigate('/Contact')
  }

  return (
    <header className="w-full fixed top-0 z-50">
      {/* Glowing RGB Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 blur-lg opacity-50"></div>

      <nav className="relative container mx-auto flex justify-between items-center h-16 px-6 md:px-10 bg-black bg-opacity-80 shadow-lg rounded-b-lg">
        
        {/* Logo with Scaling Effect */}
        <motion.p className="text-white font-extrabold text-2xl md:text-3xl tracking-wide" whileHover={{ scale: 1.1 }}>GowriShankar G</motion.p>

        {/* Desktop Navigation */}
        

        <div className="hidden md:flex gap-6 text-white font-semibold">
        <Link to="/" onClick={homenavigate} className="hover:text-blue-400 transition-transform">Home</Link>
        <Link to="/Skills" onClick={skilnavigate} className="hover:text-blue-400 transition-transform">Skills</Link>
        <Link to="/Project" onClick={projnavigate} className="hover:text-blue-400 transition-transform">Projects</Link>
        <Link to="/Contact" onClick={contnavigate} className="hover:text-blue-400 transition-transform">Contact</Link>
        </div>


        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </nav>


    </header>
  );
}
