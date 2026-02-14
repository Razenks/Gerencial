import React from 'react';
import { ChevronRight, Users, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-slate-50">
      {/* Background Decorativo Suave */}
      <div className="absolute top-0 right-0 w-125 h-125 bg-indigo-200/20 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-100 h-100 bg-blue-200/20 blur-[80px] rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-16">

          {/* Lado Esquerdo: Texto */}
          <div className="flex-1 text-center md:text-left space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block bg-indigo-50 text-indigo-700 border border-indigo-100 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
                Tecnologia desde 1998
              </span>
              <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-[1.15]">
                Sua empresa em <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-blue-500">
                  constante evolução
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-lg text-slate-600 leading-relaxed max-w-xl mx-auto md:mx-0"
            >
              Especialistas em ERP, CRM e Automação. Transformamos a complexidade da gestão em resultados simples e eficientes.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start"
            >
              <button className="bg-indigo-900 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-indigo-800 hover:scale-105 transition-all shadow-xl shadow-indigo-900/20 group">
                Ver Soluções
                <ChevronRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <a
                href="https://wa.me/5567981190011?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento!"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="text-indigo-900 font-semibold px-8 py-4 rounded-xl hover:bg-indigo-50 transition-colors flex items-center gap-2">
                  Falar com Comercial <ArrowRight size={18} />
                </button>
              </a>
            </motion.div>
          </div>

          {/* Lado Direito: Imagem com Animação */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative w-full max-w-lg md:max-w-none"
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white ring-1 ring-slate-100"
            >
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80"
                alt="Tech Business"
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>

            {/* Card Flutuante */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.8, type: "spring" }}
              whileHover={{ scale: 1.05 }}
              className="absolute -bottom-8 -left-8 bg-white p-5 rounded-2xl shadow-xl border border-slate-100 hidden sm:flex items-center gap-4 z-20"
            >
              <div className="bg-indigo-100 p-3 rounded-full text-indigo-600">
                <Users size={24} />
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900 leading-none">+1.500</p>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mt-1">Clientes</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;