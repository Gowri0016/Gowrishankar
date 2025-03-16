import React from "react";
import { motion } from "framer-motion";

// Importing skill logos
import HtmlLogo from '../Asset/html.png';
import CssLogo from '../Asset/Css.webp';
import TailwindLogo from '../Asset/Tailwind.png';
import JavaScriptLogo from '../Asset/js.png';
import ReactLogo from '../Asset/react.png';
import VercelLogo from '../Asset/vercel.png';
import GitLogo from '../Asset/Git.png';
import BackendLogo from '../Asset/Backend.jpg';
import WixLogo from '../Asset/Wix.png';

const skills = [
  { name: "React", level: 75, color: "bg-blue-600", glow: "shadow-blue-500", description: "Expert in building interactive UIs with React.", logo: ReactLogo },
  { name: "HTML", level: 95, color: "bg-red-500", glow: "shadow-red-500", description: "Strong foundation in semantic HTML and accessibility.", logo: HtmlLogo },
  { name: "CSS", level: 92, color: "bg-indigo-500", glow: "shadow-indigo-500", description: "Expert in responsive styling and animations.", logo: CssLogo },
  { name: "Tailwind CSS", level: 97, color: "bg-teal-500", glow: "shadow-teal-500", description: "Proficient in utility-first styling for fast development.", logo: TailwindLogo },
  { name: "JavaScript", level: 80, color: "bg-yellow-500", glow: "shadow-yellow-500", description: "Skilled in ES6+, async programming, and modern JS.", logo: JavaScriptLogo },
  { name: "Git", level: 90, color: "bg-cyan-500", glow: "shadow-cyan-500", description: "Proficient in version control and team collaboration.", logo: GitLogo },
  { name: "Vercel", level: 70, color: "bg-blue-800", glow: "shadow-gray-700", description: "Experience in deploying full-stack applications.", logo: VercelLogo },
  { name: "Wix Studio", level: 50, color: "bg-green-500", glow: "shadow-gray-500", description: "Basic experience with website builders.", logo: WixLogo },
  { name: "Backend Development", level: 65, color: "bg-purple-600", glow: "shadow-purple-500", description: "Learning Node.js, Express, and databases.", logo: BackendLogo }
];

export default function Skills() {
  return (
    <div id="Skills" className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 flex flex-col items-center justify-center px-6 relative overflow-hidden">
      <h2 className="text-4xl font-extrabold text-white mb-10 drop-shadow-lg tracking-wide">
         Skills
      </h2>

      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <motion.div 
            key={index} 
            className="relative p-5 bg-gray-800 backdrop-blur-lg rounded-xl overflow-hidden shadow-lg shadow-black/30 border border-gray-700 hover:shadow-xl transition-all"
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-3">
                <img src={skill.logo} alt={skill.name} className="w-10 h-10 rounded-md" />
                <span className="text-white font-semibold text-lg">{skill.name}</span>
              </div>
              <span className="text-gray-300 font-semibold text-lg">{skill.level}%</span>
            </div>

            {/* Animated Progress Bar with Glow */}
            <div className="w-full bg-gray-600 h-3 rounded-lg relative overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1.2 }}
                className={`h-full ${skill.color} rounded-lg ${skill.glow} shadow-md`}
              />
            </div>
            
            {/* Skill Description */}
            <p className="text-gray-400 mt-3 text-sm">{skill.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
 