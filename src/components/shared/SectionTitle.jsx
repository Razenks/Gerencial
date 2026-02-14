import React from 'react';
import { motion } from 'framer-motion';

export const SectionTitle = ({ title, subtitle, light = false }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="text-center mb-16 space-y-4"
  >
    <h2 className={`text-3xl md:text-5xl font-extrabold tracking-tight ${light ? 'text-white' : 'text-slate-900'}`}>
      {title}
    </h2>
    {subtitle && <p className={`max-w-2xl mx-auto text-lg ${light ? 'text-slate-300' : 'text-gray-500'}`}>{subtitle}</p>}
    <motion.div 
      initial={{ width: 0 }}
      whileInView={{ width: 80 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3, duration: 0.8 }}
      className="h-1.5 bg-indigo-600 mx-auto rounded-full"
    />
  </motion.div>
);