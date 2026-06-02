import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export function Process() {
  const steps = [
    { title: "Requirement Discussion", desc: "Understanding your business goals." },
    { title: "Wireframe & Planning", desc: "Mapping out the structure." },
    { title: "Design & Development", desc: "Bringing the vision to life." },
    { title: "Testing & Optimization", desc: "Ensuring flawless performance." },
    { title: "Deployment", desc: "Launching to the world." },
    { title: "Support & Maintenance", desc: "Ongoing updates & monitoring." },
  ];

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="process" className="py-24 bg-black/40 relative border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">How We <span className="text-gradient">Work Together</span></h2>
          <p className="text-white/60 max-w-2xl mx-auto">A streamlined process to turn your ideas into a fully functional product.</p>
        </motion.div>

        <div ref={containerRef} className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-6 left-[8%] right-[8%] h-0.5 bg-white/10">
            <motion.div 
              initial={{ width: 0 }}
              animate={isInView ? { width: "100%" } : { width: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary via-secondary to-accent"
            />
          </div>

          {/* Connecting Line (Mobile) */}
          <div className="lg:hidden absolute top-0 bottom-0 left-6 w-0.5 bg-white/10">
            <motion.div 
              initial={{ height: 0 }}
              animate={isInView ? { height: "100%" } : { height: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-primary via-secondary to-accent"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex flex-row lg:flex-col items-start lg:items-center relative"
              >
                <div className="w-12 h-12 shrink-0 rounded-full bg-background border-2 border-white/20 flex items-center justify-center font-display font-bold text-lg mb-0 lg:mb-6 mr-6 lg:mr-0 z-10 group relative transition-colors duration-300 hover:border-primary">
                  <div className="absolute inset-0 rounded-full bg-primary/20 scale-0 transition-transform duration-300 group-hover:scale-100" />
                  <span className="relative z-10">{index + 1}</span>
                </div>
                
                <div className="text-left lg:text-center mt-2 lg:mt-0">
                  <h3 className="font-bold font-display text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-white/50">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
