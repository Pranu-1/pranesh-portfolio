import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code } from 'lucide-react';

const ProjectCard = ({ project, index }: { project: any, index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    
    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      style={{ perspective: 1000 }}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{ rotateX: rotate.x, rotateY: rotate.y }}
        transition={{ type: "spring", stiffness: 300, damping: 30, mass: 15 }}
        className="h-full glass-card border border-white/10 rounded-2xl overflow-hidden group flex flex-col transform-style-3d relative"
      >
        <div className="p-8 flex-1 flex flex-col">
          <div className="flex justify-between items-start mb-6">
            <span className="px-3 py-1 text-xs font-medium bg-primary/20 text-primary border border-primary/20 rounded-full">
              {project.category}
            </span>
            {project.url && (
              <a href={project.url} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors">
                <ExternalLink size={18} />
              </a>
            )}
          </div>
          
          <h3 className="text-2xl font-display font-bold mb-3">{project.title}</h3>
          
          <div className="mb-6 flex-1">
            <h4 className="text-sm font-semibold text-white/50 mb-2 flex items-center gap-2">
              <Code size={14} /> Features
            </h4>
            <p className="text-white/70 text-sm leading-relaxed">{project.features}</p>
          </div>
          
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.tech.map((t: string, i: number) => (
              <span key={i} className="text-xs px-2 py-1 bg-white/5 rounded border border-white/5 text-white/60">
                {t}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export function Portfolio() {
  const projects = [
    {
      title: "Paper Plate Manufacturing Website",
      category: "Manufacturing",
      features: "Google Auth, Product Catalog, Cloud Deployment",
      tech: ["Flask", "MySQL", "HTML", "CSS", "JS"],
      url: "https://paperplate.onrender.com"
    },
    {
      title: "AI-Powered Learning Platform",
      category: "EdTech",
      features: "AI Recommendations, Smart Learning Paths",
      tech: ["Python", "Flask", "AI APIs", "SQLite"]
    },
    {
      title: "Smart Agriculture Advisory System",
      category: "AgriTech",
      features: "Crop Recommendations, Irrigation Guidance",
      tech: ["Python", "Flask", "Database"]
    },
    {
      title: "NGO Website Development",
      category: "Non-Profit",
      features: "Donation Pages, Volunteer Registration",
      tech: ["HTML", "CSS", "JS", "Flask"]
    },
    {
      title: "B2B Lead Generation Website",
      category: "SaaS",
      features: "Landing Pages, SEO Optimization",
      tech: ["Flask", "MySQL", "JS"]
    },
    {
      title: "Custom Business Solutions",
      category: "Multi-Industry",
      features: "Custom development across industries",
      tech: ["Flask", "MySQL", "JS"]
    }
  ];

  return (
    <section id="work" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Featured <span className="text-gradient">Work</span></h2>
          <p className="text-white/60 max-w-2xl mx-auto">A selection of recent projects built for scale, performance, and user experience.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
