import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, Shield, Cpu } from 'lucide-react';

export const ServicesHero = () => {
  // Animação para os ícones flutuantes
  const floatingIcon = {
    initial: { y: 0 },
    animate: { 
      y: [-10, 10, -10],
      rotate: [-5, 5, -5],
      transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
    }
  };

  return (
    <section className="relative pt-40 pb-24 overflow-hidden bg-slate-900">
      {/* Background Tech Animado */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')]"></div>
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 right-1/4 w-96 h-96 bg-indigo-600/30 blur-[120px] rounded-full"
        />
        <motion.div 
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          className="absolute bottom-20 left-1/3 w-80 h-80 bg-blue-500/30 blur-[100px] rounded-full"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 px-4 py-1.5 rounded-full text-sm font-bold tracking-widest uppercase mb-6">
            Expertise Técnica
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            Nossos Serviços <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-cyan-400">
              Soluções de Ponta a Ponta
            </span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Da infraestrutura física à segurança digital. Oferecemos um portfólio completo para garantir que a tecnologia da sua empresa nunca pare.
          </p>
        </motion.div>

        {/* Ícones Flutuantes Decorativos */}
        <div className="mt-16 flex justify-center gap-8 sm:gap-16 opacity-80">
          <motion.div variants={floatingIcon} initial="initial" animate="animate" className="p-4 bg-white/10 rounded-2xl text-indigo-400 backdrop-blur-sm border border-white/20">
            <Wrench size={32} />
          </motion.div>
          <motion.div variants={floatingIcon} initial="initial" animate="animate" transition={{ delay: 0.2 }} className="p-4 bg-white/10 rounded-2xl text-cyan-400 backdrop-blur-sm border border-white/20">
            <Shield size={32} />
          </motion.div>
          <motion.div variants={floatingIcon} initial="initial" animate="animate" transition={{ delay: 0.4 }} className="p-4 bg-white/10 rounded-2xl text-blue-400 backdrop-blur-sm border border-white/20">
            <Cpu size={32} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};