import React from 'react';
import { Play, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../shared/SectionTitle';

export const VideoPresentation = () => {
  const benefits = [
    "Redução drástica de custos operacionais",
    "Segurança de dados com criptografia de ponta",
    "Suporte técnico humanizado e ágil",
    "Relatórios gerenciais automáticos em tempo real"
  ];

  return (
    <section id="albatroz" className="py-24 bg-slate-50 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionTitle 
          title="Conheça o Albatroz" 
          subtitle="Veja como transformamos a gestão da sua empresa em algo simples e eficiente."
        />
        
        <div className="flex flex-col lg:flex-row items-center gap-16 mt-12">
          
          {/* Lado do Vídeo */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-3/5 relative group"
          >
            {/* Glow Effect no fundo */}
            <div className="absolute -inset-2 bg-linear-to-r from-indigo-500 to-blue-500 rounded-4xl blur-xl opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            
            <div className="relative aspect-video bg-slate-900 rounded-3xl overflow-hidden shadow-2xl group cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bbbda5366991?auto=format&fit=crop&q=80&w=1000" 
                alt="Thumbnail Sistema" 
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.button 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="relative flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg text-indigo-600 pl-1"
                >
                  <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-30"></div>
                  <Play size={32} fill="currentColor" />
                </motion.button>
              </div>
              
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-white/80 text-sm font-bold tracking-widest uppercase">Assistir Demonstração</span>
              </div>
            </div>
          </motion.div>

          {/* Lado do Texto/Benefícios */}
          <div className="w-full lg:w-2/5 space-y-8">
            <motion.h3 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-slate-900 leading-tight"
            >
              O que é um Sistema ERP? <br/>
              <span className="text-indigo-600">Quais benefícios ele traz?</span>
            </motion.h3>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-600 leading-relaxed italic border-l-4 border-indigo-200 pl-4"
            >
              "Nosso sistema integra todos os departamentos, permitindo que você foque no crescimento enquanto a tecnologia cuida da operação."
            </motion.p>
            
            <div className="space-y-4">
              {benefits.map((item, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (idx * 0.1) }}
                  className="flex items-center gap-3 group"
                >
                  <div className="p-1 rounded-full bg-green-100 text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors">
                    <CheckCircle2 size={16} />
                  </div>
                  <span className="font-medium text-slate-700 group-hover:text-slate-900 transition-colors">{item}</span>
                </motion.div>
              ))}
            </div>

            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 bg-white border-2 border-indigo-900 text-indigo-900 rounded-xl font-bold hover:bg-indigo-900 hover:text-white transition-all shadow-sm hover:shadow-lg"
            >
              Agendar uma Reunião Gratuita
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};