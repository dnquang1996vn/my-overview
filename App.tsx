/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import { HeroScene } from './components/QuantumScene';
import { TechStack, ProjectCard, ExperienceItem } from './components/Diagrams';
import { Github, Linkedin, Mail, Terminal, Code2, Cpu, Globe, Menu, X, ExternalLink, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-md border-b border-slate-800 py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-xl font-bold tracking-tighter flex items-center gap-2">
          <div className="bg-primary/20 p-2 rounded-lg text-primary">
            <Terminal size={20} />
          </div>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">ALEX.DEV</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-slate-400 hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://github.com" 
            target="_blank"
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white text-sm font-medium rounded-full transition-all border border-slate-700 hover:border-primary/50"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-slate-300" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-background border-b border-slate-800 p-6 flex flex-col gap-4 md:hidden shadow-2xl">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-lg font-medium text-slate-300 hover:text-primary"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-slate-200 selection:bg-primary/30 selection:text-primary">
      <Navbar />
      
      {/* HERO SECTION */}
      <header className="relative min-h-screen flex items-center pt-20 overflow-hidden" id="home">
        {/* 3D Background */}
        <div className="absolute inset-0 z-0">
          <HeroScene />
        </div>
        
        {/* Gradient Mesh Overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />

        <div className="container mx-auto px-6 relative z-20">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-primary text-sm font-mono mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Available for new opportunities
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight"
            >
              Building digital <br/>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-purple-400">
                experiences that matter.
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-400 mb-8 leading-relaxed max-w-2xl"
            >
              I'm a Full Stack Engineer specializing in modern web technologies. 
              I transform complex problems into elegant, scalable, and user-centric solutions.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <a href="#projects" className="group flex items-center gap-2 px-6 py-3 bg-primary text-background font-bold rounded-lg hover:bg-primary/90 transition-all">
                View Work <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="https://github.com" target="_blank" className="flex items-center gap-2 px-6 py-3 bg-slate-800 text-white font-medium rounded-lg hover:bg-slate-700 transition-all border border-slate-700">
                <Github size={20} /> GitHub
              </a>
              <a href="https://linkedin.com" target="_blank" className="flex items-center gap-2 px-6 py-3 bg-slate-800 text-white font-medium rounded-lg hover:bg-slate-700 transition-all border border-slate-700">
                <Linkedin size={20} /> LinkedIn
              </a>
            </motion.div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-slate-500"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent"></div>
        </motion.div>
      </header>

      <main>
        {/* ABOUT / STACK SECTION */}
        <section id="about" className="py-24 bg-slate-900/50 relative">
          <div className="container mx-auto px-6">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div>
                  <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                    <Code2 className="text-primary" /> 
                    Engineering Philosophy
                  </h2>
                  <div className="space-y-4 text-slate-400 leading-relaxed">
                    <p>
                      I believe that great software is a blend of robust engineering and intuitive design. 
                      My approach involves deep-diving into the problem domain before writing a single line of code.
                    </p>
                    <p>
                      Whether I'm optimizing database queries, architecting microservices, or crafting 
                      pixel-perfect UIs, I focus on <strong className="text-slate-200">performance</strong>, <strong className="text-slate-200">accessibility</strong>, and <strong className="text-slate-200">maintainability</strong>.
                    </p>
                  </div>
                  
                  <div className="mt-8 grid grid-cols-2 gap-4">
                     <div className="p-4 bg-slate-800 rounded-xl border border-slate-700">
                        <div className="text-3xl font-bold text-white mb-1">5+</div>
                        <div className="text-sm text-slate-400">Years Experience</div>
                     </div>
                     <div className="p-4 bg-slate-800 rounded-xl border border-slate-700">
                        <div className="text-3xl font-bold text-white mb-1">50+</div>
                        <div className="text-sm text-slate-400">Projects Delivered</div>
                     </div>
                  </div>
                </div>
                
                <div>
                   <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                    <Cpu className="text-secondary" />
                    Tech Stack
                   </h2>
                   <TechStack />
                </div>
             </div>
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="py-24">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
              <p className="text-slate-400">My professional journey in the tech industry.</p>
            </div>
            
            <div className="relative border-l-2 border-slate-800 ml-3 md:ml-6 space-y-12">
              <ExperienceItem 
                role="Senior Frontend Engineer"
                company="TechFlow Systems"
                date="2022 - Present"
                description="Leading the frontend migration to Next.js. Improved core web vitals by 40%. Mentoring junior developers and establishing coding standards."
                tags={['React', 'TypeScript', 'GraphQL', 'AWS']}
              />
              <ExperienceItem 
                role="Full Stack Developer"
                company="Creative Solutions Agency"
                date="2020 - 2022"
                description="Developed custom e-commerce platforms for high-profile clients. Integrated payment gateways and headless CMS solutions."
                tags={['Vue.js', 'Node.js', 'PostgreSQL', 'Stripe']}
              />
              <ExperienceItem 
                role="Junior Web Developer"
                company="StartUp Inc"
                date="2018 - 2020"
                description="Collaborated with UI/UX designers to implement responsive interfaces. Built RESTful APIs for mobile applications."
                tags={['JavaScript', 'Express', 'MongoDB']}
              />
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="py-24 bg-surface/30">
          <div className="container mx-auto px-6">
             <div className="flex justify-between items-end mb-12">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
                  <p className="text-slate-400">A selection of my recent work.</p>
                </div>
                <a href="https://github.com" className="hidden md:flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium">
                  View all on GitHub <ExternalLink size={16} />
                </a>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ProjectCard 
                   title="Nebula Dashboard"
                   description="A real-time analytics dashboard for cloud infrastructure monitoring. Features customizable widgets and alert systems."
                   tags={['Next.js', 'Tailwind', 'Recharts', 'Supabase']}
                   gradient="from-blue-500 to-purple-600"
                />
                <ProjectCard 
                   title="Quantum Chat"
                   description="End-to-end encrypted messaging application with support for rich media and voice messages."
                   tags={['React Native', 'WebRTC', 'Socket.io', 'Redis']}
                   gradient="from-emerald-500 to-teal-600"
                />
                <ProjectCard 
                   title="ArchiText AI"
                   description="An AI-powered architecture diagram generator that converts natural language descriptions into system designs."
                   tags={['Python', 'FastAPI', 'OpenAI', 'React Flow']}
                   gradient="from-orange-500 to-red-600"
                />
             </div>
             
             <div className="mt-12 text-center md:hidden">
                <a href="https://github.com" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium">
                  View all on GitHub <ExternalLink size={16} />
                </a>
             </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-24 relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10 text-center">
             <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's work together</h2>
             <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
               I'm currently available for freelance work and full-time positions. 
               If you have a project that needs some creative engineering, I'd love to hear about it.
             </p>
             
             <a 
               href="mailto:hello@alex.dev" 
               className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-background text-lg font-bold rounded-full hover:bg-primary/90 hover:scale-105 transition-all shadow-lg shadow-primary/25"
             >
               <Mail /> Say Hello
             </a>

             <div className="mt-16 flex justify-center gap-8">
                <a href="#" className="text-slate-500 hover:text-white transition-colors"><Github size={24} /></a>
                <a href="#" className="text-slate-500 hover:text-white transition-colors"><Linkedin size={24} /></a>
                <a href="#" className="text-slate-500 hover:text-white transition-colors"><Globe size={24} /></a>
             </div>
          </div>
          
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
        </section>
      </main>

      <footer className="py-8 border-t border-slate-800 text-center text-slate-500 text-sm">
        <div className="container mx-auto px-6">
          <p>© {new Date().getFullYear()} Alex Dev. Built with React & Tailwind.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;