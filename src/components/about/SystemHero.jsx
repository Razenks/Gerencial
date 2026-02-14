import React from 'react';
import { ChevronRight, ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const SystemHero = () => {
  return (
    <section className="min-h-screen flex items-center pt-20 pb-20 bg-slate-900 text-white relative overflow-hidden">

      {/* Background Animado (Blobs) */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -top-20 -right-20 w-150 h-150 bg-indigo-600/20 blur-[100px] rounded-full"
      />
      <motion.div
        animate={{ scale: [1, 1.5, 1], x: [0, 50, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 -left-20 w-125 h-125 bg-blue-600/20 blur-[100px] rounded-full"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center flex flex-col items-center">

        <motion.span
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-block bg-indigo-500/10 text-indigo-300 border border-indigo-500/30 px-6 py-2 rounded-full text-sm font-bold tracking-widest mb-8 backdrop-blur-sm"
        >
          SISTEMA DE GESTÃO 4.0
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tight"
        >
          Albatroz ERP: A Evolução <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-cyan-400">
            Inteligente do Seu Negócio
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Não é apenas um sistema. É o controle total da sua operação, automatizando processos complexos para que você foque apenas no crescimento.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="https://wa.me/5567981190011?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento!"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-indigo-600 text-white px-10 py-5 rounded-2xl font-bold hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-900/50 flex items-center gap-2 group">
              Começar Agora
              <ChevronRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
          </a>
          <button className="px-10 py-5 rounded-2xl font-bold text-white border border-slate-700 hover:bg-slate-800 transition-all">
            Ver Recursos
          </button>
        </motion.div>
      </div>

      {/* Indicador de Scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500"
      >
        <ArrowDown size={24} />
      </motion.div>
    </section>
  );
};