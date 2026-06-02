import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

function AnimatedCounter({ end, duration = 2 }: { end: number, duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const increment = end / (duration * 60);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, 1000 / 60);
      return () => clearInterval(timer);
    }
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}</span>;
}

export function About() {
  const stats = [
    { num: 50, suffix: "+", label: "Projects Delivered", color: "text-primary" },
    { num: 3, suffix: "+", label: "Years Experience", color: "text-secondary" },
    { num: 15, suffix: "+", label: "Industries Served", color: "text-accent" },
    { num: 100, suffix: "%", label: "Client Satisfaction", color: "text-white" },
  ];

  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-8">
              Engineering <span className="text-gradient">growth</span> through code and AI.
            </h2>
            <div className="w-20 h-1 bg-primary mb-8 rounded-full"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-xl text-white/70 leading-relaxed mb-12 font-light">
              I combine web development, AI tools, and business-focused design to create websites that attract customers and generate results. I specialize in helping businesses establish a strong online presence through custom websites, AI-powered solutions, automation systems, and lead-generation focused digital experiences.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, i) => (
                <div key={i} className="glass-card p-6 rounded-2xl border-white/5 relative overflow-hidden group">
                  <div className={`absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  <div className={`text-4xl md:text-5xl font-display font-bold mb-2 ${stat.color}`}>
                    <AnimatedCounter end={stat.num} />{stat.suffix}
                  </div>
                  <div className="text-sm text-white/50 uppercase tracking-widest font-semibold">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
