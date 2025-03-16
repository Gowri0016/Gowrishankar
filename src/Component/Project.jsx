import React from 'react';
import { motion } from 'framer-motion';

export default function Project() {
  const projects = [
    {
      id: 1,
      title: 'Luxury Dashboard',
      description: 'A sleek, modern dashboard with AI-driven analytics and interactive UI.',
      imgSrc: 'https://via.placeholder.com/400',
      gitLink: 'https://github.com/user/luxury-dashboard',
      role: 'Frontend Developer'
    },
    {
      id: 2,
      title: 'E-Commerce Platform',
      description: 'A high-performance e-commerce solution with advanced filters and animations.',
      imgSrc: 'https://via.placeholder.com/400',
      gitLink: 'https://github.com/user/ecommerce-platform',
      role: 'Full Stack Developer'
    },
    {
      id: 3,
      title: 'AI Chatbot',
      description: 'A conversational AI chatbot integrated with NLP and real-time responses.',
      imgSrc: 'https://via.placeholder.com/400',
      gitLink: 'https://github.com/user/ai-chatbot',
      role: 'AI Engineer'
    }
  ];

  return (
    <div className="p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 bg-gray-900 min-h-screen"> 
      {projects.map((project) => (
        <motion.div
          key={project.id}
          className="relative bg-white bg-opacity-10 backdrop-blur-lg p-6 rounded-2xl shadow-xl border border-gray-600 overflow-hidden"
          whileHover={{ scale: 1.05, rotateY: 5, rotateX: 5 }}
          transition={{ duration: 0.5 }}
        >
          <motion.img 
            src={project.imgSrc} 
            alt={project.title} 
            className="w-full h-56 object-cover rounded-lg shadow-lg"
            whileHover={{ scale: 1.1 }}
          />
          <h2 className="text-2xl font-bold text-white mt-4">{project.title}</h2>
          <p className="text-gray-300 mt-2">{project.description}</p>
          <motion.p 
            className="mt-2 text-sm text-blue-400 font-semibold"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Role: {project.role}
          </motion.p>
          <motion.a
            href={project.gitLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-6 py-3 text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 transition-transform hover:scale-110 hover:shadow-lg"
          >
            View on GitHub
          </motion.a>
        </motion.div>
      ))}
    </div>
  );
}