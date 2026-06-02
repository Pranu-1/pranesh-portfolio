import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Smartphone, Target, Sparkles, Brain, Cloud, CircleDollarSign, MessageSquare } from 'lucide-react';

export function WhyMe() {
  const features = [
    { icon: <Zap />, title: "Fast Development", desc: "Rapid prototyping and agile delivery without compromising on quality." },
    { icon: <Smartphone />, title: "Responsive Design", desc: "Pixel-perfect layouts that look stunning on any device screen." },
    { icon: <Target />, title: "Business-Focused", desc: "Solutions engineered to drive metrics, capture leads, and increase ROI." },
    { icon: <Sparkles />, title: "Modern UI/UX", desc: "Aesthetic, intuitive interfaces that delight users and build trust." },
    { icon: <Brain />, title: "AI Integration", desc: "Smart features that automate workflows and personalize experiences." },
    { icon: <Cloud />, title: "Deployment Support", desc: "End-to-end setup ensuring your app is live, secure, and scalable." },
    { icon: <CircleDollarSign />, title: "Affordable Solutions", desc: "Premium engineering quality tailored to fit startup and SME budgets." },
    { icon: <MessageSquare />, title: "Reliable Communication", desc: "Transparent, consistent updates throughout the entire project lifecycle." },
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Why <span className="text-gradient">Choose Me</span></h2>
          <p className="text-white/60 max-w-2xl mx-auto">What you get when we collaborate on your next digital project.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="glass-card p-6 rounded-2xl group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-white/10 flex items-center justify-center text-white mb-4 group-hover:shadow-[0_0_20px_rgba(124,58,237,0.4)] transition-all">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold mb-2 font-display">{item.title}</h3>
              <p className="text-sm text-white/60 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
