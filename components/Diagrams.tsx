/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar, Briefcase } from 'lucide-react';

// --- TECH STACK GRID ---
export const TechStack: React.FC = () => {
  const technologies = [
    { name: 'React', level: 'Expert' },
    { name: 'TypeScript', level: 'Expert' },
    { name: 'Next.js', level: 'Expert' },
    { name: 'Node.js', level: 'Advanced' },
    { name: 'Tailwind', level: 'Advanced' },
    { name: 'PostgreSQL', level: 'Intermediate' },
    { name: 'Docker', level: 'Intermediate' },
    { name: 'AWS', level: 'Intermediate' },
    { name: 'GraphQL', level: 'Advanced' },
    { name: 'Python', level: 'Intermediate' },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
      {technologies.map((tech, i) => (
        <motion.div
          key={tech.name}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.05 }}
          className="p-3 bg-slate-800/50 border border-slate-700 rounded-lg hover:bg-slate-800 hover:border-primary/50 transition-all cursor-default group"
        >
          <div className="font-bold text-slate-200 group-hover:text-primary transition-colors">{tech.name}</div>
          <div className="text-xs text-slate-500 mt-1">{tech.level}</div>
        </motion.div>
      ))}
    </div>
  );
};

// --- PROJECT CARD ---
interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  gradient: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, tags, gradient }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-slate-600 hover:shadow-xl transition-all duration-300"
    >
      {/* Image Placeholder with Gradient */}
      <div className={`h-48 w-full bg-gradient-to-br ${gradient} opacity-80 group-hover:opacity-100 transition-opacity relative`}>
         <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 backdrop-blur-sm">
             <button className="px-4 py-2 bg-white text-slate-900 rounded-full font-bold text-sm flex items-center gap-2 hover:scale-105 transition-transform">
                 View Demo <ExternalLink size={14} />
             </button>
         </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-slate-400 text-sm mb-4 line-clamp-3 leading-relaxed">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map(tag => (
            <span key={tag} className="px-2 py-1 bg-slate-900 rounded text-xs font-medium text-slate-300 border border-slate-700">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4 mt-auto pt-4 border-t border-slate-700/50">
           <a href="#" className="text-slate-500 hover:text-white transition-colors"><Github size={18} /></a>
           <a href="#" className="text-slate-500 hover:text-white transition-colors"><ExternalLink size={18} /></a>
        </div>
      </div>
    </motion.div>
  );
};

// --- EXPERIENCE ITEM ---
interface ExperienceItemProps {
  role: string;
  company: string;
  date: string;
  description: string;
  tags: string[];
}

export const ExperienceItem: React.FC<ExperienceItemProps> = ({ role, company, date, description, tags }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="relative pl-8 md:pl-12 py-2 group"
    >
      {/* Timeline Dot */}
      <div className="absolute -left-[9px] top-3 w-4 h-4 rounded-full bg-slate-800 border-2 border-slate-600 group-hover:border-primary group-hover:bg-primary transition-colors"></div>
      
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
        <h3 className="text-xl font-bold text-slate-100">{role}</h3>
        <span className="text-xs font-mono text-slate-500 flex items-center gap-1 bg-slate-900 px-2 py-1 rounded">
            <Calendar size={12} /> {date}
        </span>
      </div>
      
      <div className="text-primary font-medium mb-3 flex items-center gap-2">
        <Briefcase size={16} /> {company}
      </div>
      
      <p className="text-slate-400 leading-relaxed mb-4 max-w-2xl">
        {description}
      </p>
      
      <div className="flex flex-wrap gap-2">
         {tags.map(tag => (
             <span key={tag} className="text-xs text-slate-500 font-mono">#{tag}</span>
         ))}
      </div>
    </motion.div>
  );
};