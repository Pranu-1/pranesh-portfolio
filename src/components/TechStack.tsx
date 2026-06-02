import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiHtml5, SiCss, SiJavascript, 
  SiPython, SiFlask, 
  SiMysql, SiSqlite, 
  SiNetlify, SiRender, 
  SiGit, SiGithub 
} from 'react-icons/si';

export function TechStack() {
  const techGroups = [
    {
      title: "Frontend",
      color: "group-hover:text-pink-500",
      border: "hover:border-pink-500/50",
      glow: "group-hover:shadow-[0_0_20px_rgba(236,72,153,0.3)]",
      tech: [
        { name: "HTML5", icon: <SiHtml5 size={32} /> },
        { name: "CSS3", icon: <SiCss size={32} /> },
        { name: "JavaScript", icon: <SiJavascript size={32} /> }
      ]
    },
    {
      title: "Backend",
      color: "group-hover:text-primary",
      border: "hover:border-primary/50",
      glow: "group-hover:shadow-[0_0_20px_rgba(124,58,237,0.3)]",
      tech: [
        { name: "Python", icon: <SiPython size={32} /> },
        { name: "Flask", icon: <SiFlask size={32} /> }
      ]
    },
    {
      title: "Database",
      color: "group-hover:text-secondary",
      border: "hover:border-secondary/50",
      glow: "group-hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]",
      tech: [
        { name: "MySQL", icon: <SiMysql size={32} /> },
        { name: "SQLite", icon: <SiSqlite size={32} /> }
      ]
    },
    {
      title: "Deployment",
      color: "group-hover:text-purple-400",
      border: "hover:border-purple-400/50",
      glow: "group-hover:shadow-[0_0_20px_rgba(192,132,252,0.3)]",
      tech: [
        { name: "Netlify", icon: <SiNetlify size={32} /> },
        { name: "Render", icon: <SiRender size={32} /> },
        { name: "VPS", icon: <ServerIcon /> }
      ]
    },
    {
      title: "Tools",
      color: "group-hover:text-white",
      border: "hover:border-white/50",
      glow: "group-hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]",
      tech: [
        { name: "Git", icon: <SiGit size={32} /> },
        { name: "GitHub", icon: <SiGithub size={32} /> }
      ]
    }
  ];

  return (
    <section className="py-24 bg-black/30 border-y border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">My Tech <span className="text-gradient">Arsenal</span></h2>
          <p className="text-white/60 max-w-2xl mx-auto">The tools I use to build scalable, high-performance applications.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {techGroups.map((group, groupIndex) => (
            <motion.div
              key={groupIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
              className="flex flex-col gap-4"
            >
              <h3 className="text-sm uppercase tracking-widest font-semibold text-white/50 text-center mb-2">{group.title}</h3>
              {group.tech.map((tech, i) => (
                <div 
                  key={i} 
                  className={`glass-card p-6 rounded-xl flex flex-col items-center justify-center gap-3 transition-all duration-300 group ${group.border} cursor-default`}
                >
                  <div className={`text-white/40 transition-colors duration-300 ${group.color} ${group.glow} rounded-full p-2`}>
                    {tech.icon}
                  </div>
                  <span className="text-sm font-medium text-white/70 group-hover:text-white transition-colors">{tech.name}</span>
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Simple SVG icon for VPS
function ServerIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
      <line x1="6" y1="6" x2="6.01" y2="6"></line>
      <line x1="6" y1="18" x2="6.01" y2="18"></line>
    </svg>
  );
}
