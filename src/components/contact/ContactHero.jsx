import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export const ContactHero = () => {
  return (
    <section className="pt-40 pb-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Decorativo */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-20 right-10 w-96 h-96 bg-indigo-600/30 blur-[120px] rounded-full pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 px-4 py-1.5 rounded-full text-sm font-bold tracking-widest uppercase mb-6">
            <MessageCircle size={16} /> Fale Conosco
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Vamos impulsionar o seu negócio?
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Nossa equipe está pronta para atender você. Escolha o canal de sua preferência abaixo.
          </p>
        </motion.div>
      </div>
    </section>
  );
};