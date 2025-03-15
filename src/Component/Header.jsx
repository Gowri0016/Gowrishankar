import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Import icons

export default function Header() {
  
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className="bg-white shadow-lg w-full h-20 flex justify-between items-center px-6 md:px-10">
        <p className="text-blue-500 font-bold text-3xl">GowriShankar G</p>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-4">
          <a href="#" className="cursor-pointer hover:text-blue-500">Home</a>
          <a href="Skills" className="cursor-pointer hover:text-blue-500">Skills</a>
          <a href="#" className="cursor-pointer hover:text-blue-500">Project</a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center bg-white shadow-lg p-4 space-y-3">
          <a href="#" className="cursor-pointer hover:text-blue-500">Home</a>
          <a href="Skills" className="cursor-pointer hover:text-blue-500">Skills</a>
          <a href="#" className="cursor-pointer hover:text-blue-500">Project</a>
        </div>
      )}
    </div>
  );
}
