import React from 'react';
import { motion } from 'framer-motion';

export function Marquee() {
  const items = [
    "Business Websites", "E-Commerce", "AI Chatbots", "Lead Generation", 
    "Restaurant Sites", "Healthcare", "Manufacturing", "NGOs", "Automation"
  ];
  
  // Duplicate for seamless loop
  const marqueeItems = [...items, ...items, ...items];

  return (
    <div className="py-8 bg-background border-y border-white/5 overflow-hidden relative flex items-center">
      {/* Edge Gradients */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10"></div>

      <motion.div
        className="flex whitespace-nowrap items-center gap-12"
        animate={{
          x: [0, -1000]
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 20
        }}
      >
        {marqueeItems.map((item, index) => (
          <div key={index} className="flex items-center gap-12">
            <span className="text-2xl md:text-4xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-white/20 to-white/40 uppercase tracking-widest">
              {item}
            </span>
            <span className="w-3 h-3 rounded-full bg-primary/50 shadow-[0_0_15px_rgba(124,58,237,0.5)]"></span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
