import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Globe, 
  ShoppingCart, 
  Bot, 
  Target, 
  Utensils, 
  Stethoscope, 
  Factory, 
  HeartHandshake, 
  Server, 
  Wrench 
} from 'lucide-react';

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    { icon: <Globe />, title: "Business Website Development", desc: "Custom websites built to generate leads and establish a strong digital presence." },
    { icon: <ShoppingCart />, title: "E-Commerce Development", desc: "Online stores optimized for conversions and customer experience." },
    { icon: <Bot />, title: "AI Chatbot Development", desc: "Custom AI assistants for customer support, lead generation, and automation." },
    { icon: <Target />, title: "Lead Generation Websites", desc: "High-converting landing pages and sales funnels designed to capture leads." },
    { icon: <Utensils />, title: "Restaurant Websites", desc: "Menu systems, reservations, customer engagement, and online visibility." },
    { icon: <Stethoscope />, title: "Hospital & Clinic Websites", desc: "Professional healthcare websites with appointment and inquiry systems." },
    { icon: <Factory />, title: "Manufacturing Business Websites", desc: "Product showcase platforms for industrial and manufacturing companies." },
    { icon: <HeartHandshake />, title: "NGO Websites", desc: "Impact-driven websites for donations, volunteer engagement, and awareness." },
    { icon: <Server />, title: "Hosting & Deployment", desc: "Website deployment, hosting setup, and maintenance support." },
    { icon: <Wrench />, title: "Website Maintenance", desc: "Ongoing updates, security improvements, and technical support." }
  ];

  return (
    <section id="services" className="py-24 relative bg-black/50 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">What I <span className="text-gradient">Build</span></h2>
          <p className="text-white/60 max-w-2xl mx-auto">Comprehensive digital solutions engineered for growth and automation.</p>
        </motion.div>

        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 rounded-2xl group hover:border-primary/50 transition-all duration-300 relative overflow-hidden"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-secondary mb-6 group-hover:text-primary group-hover:shadow-[0_0_20px_rgba(124,58,237,0.4)] transition-all duration-300 relative z-10">
                {React.cloneElement(service.icon as React.ReactElement, { size: 28 })}
              </div>
              
              <h3 className="text-xl font-display font-semibold mb-3 text-white relative z-10">{service.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed relative z-10">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
