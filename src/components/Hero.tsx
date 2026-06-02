import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { ParticleBackground } from './ParticleBackground';

export function Hero() {
  const buttonRef = useRef<HTMLAnchorElement>(null);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    buttonRef.current.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  };

  const handleMouseLeave = () => {
    if (!buttonRef.current) return;
    buttonRef.current.style.transform = 'translate(0px, 0px)';
  };

  const titleLines = ["I BUILD WEBSITES", "THAT GROW", "BUSINESSES"];

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <ParticleBackground />
      
      {/* Circuit background overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" 
           style={{
             backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
             backgroundSize: '40px 40px'
           }}
      />

      <div className="container relative z-10 mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-primary/30"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          <span className="text-sm font-medium tracking-wide text-primary-foreground">Websites. Automation. AI. Growth.</span>
        </motion.div>

        <div className="mb-8 font-display font-bold leading-[0.9] tracking-tighter">
          {titleLines.map((line, i) => (
            <div key={i} className="overflow-hidden">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="text-[12vw] md:text-[8vw] lg:text-[7vw] text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/70"
              >
                {line}
              </motion.h1>
            </div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="max-w-2xl text-lg md:text-xl text-white/60 mb-12 font-sans"
        >
          Full Stack Developer building modern websites, AI solutions, and digital experiences for growing businesses.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex flex-col sm:flex-row gap-6 items-center"
        >
          <a
            ref={buttonRef}
            href="#contact"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="hover-magnetic relative group overflow-hidden px-8 py-4 rounded-full bg-primary text-white font-medium text-lg border border-primary/50 shadow-[0_0_40px_rgba(124,58,237,0.3)] hover:shadow-[0_0_60px_rgba(124,58,237,0.5)] transition-all flex items-center gap-2"
          >
            <span className="relative z-10">Book A Free Consultation</span>
            <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
          
          <a
            href="#work"
            className="px-8 py-4 rounded-full border border-white/20 text-white/80 hover:bg-white/5 hover:text-white transition-all font-medium"
          >
            View Projects
          </a>
        </motion.div>
      </div>

      {/* Floating Stat Cards */}
      <motion.div 
        animate={{ y: [0, -15, 0] }} 
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="hidden lg:flex absolute left-[10%] top-[30%] glass-card p-4 rounded-2xl border-white/10 items-center gap-4"
      >
        <div className="text-3xl font-display font-bold text-accent">50+</div>
        <div className="text-xs text-white/60 uppercase tracking-wider font-semibold">Projects<br/>Delivered</div>
      </motion.div>

      <motion.div 
        animate={{ y: [0, 20, 0] }} 
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1 }}
        className="hidden lg:flex absolute right-[12%] top-[40%] glass-card p-4 rounded-2xl border-white/10 items-center gap-4"
      >
        <div className="text-3xl font-display font-bold text-secondary">3+</div>
        <div className="text-xs text-white/60 uppercase tracking-wider font-semibold">Years<br/>Experience</div>
      </motion.div>

      <motion.div 
        animate={{ y: [0, -10, 0] }} 
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 2 }}
        className="hidden lg:flex absolute left-[15%] bottom-[20%] glass-card p-4 rounded-2xl border-white/10 items-center gap-4"
      >
        <div className="text-3xl font-display font-bold text-primary">100%</div>
        <div className="text-xs text-white/60 uppercase tracking-wider font-semibold">Client<br/>Satisfaction</div>
      </motion.div>
      
      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10"></div>
    </section>
  );
}
