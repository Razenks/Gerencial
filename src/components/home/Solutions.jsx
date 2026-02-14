import React from 'react';
import { Settings, Users, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

const SolutionCard = ({ icon: Icon, title, text, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    whileHover={{ scale: 1.02 }}
    className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-start"
  >
    <div className="w-14 h-14 bg-indigo-50 text-indigo-700 rounded-2xl flex items-center justify-center mb-6">
      <Icon size={28} />
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
    <p className="text-slate-600 text-sm leading-relaxed">{text}</p>
  </motion.div>
);

export const Solutions = () => (
  <section className="py-24 max-w-7xl mx-auto px-6">
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="grid md:grid-cols-3 gap-8"
    >
      <SolutionCard 
        delay={0}
        icon={Settings} 
        title="ERP Albatroz" 
        text="Nosso ERP integra todos os processos da sua empresa, proporcionando eficiência e controle total com licenças instaladas em todo o país."
      />
      <SolutionCard 
        delay={0.2}
        icon={Users} 
        title="CRM Estratégico" 
        text="Aprimore o relacionamento, facilite a gestão de contatos e garanta uma experiência personalizada e única para seus clientes."
      />
      <SolutionCard 
        delay={0.4}
        icon={Cpu} 
        title="Automações Inteligentes" 
        text="Automatize operações comerciais repetitivas, reduza erros humanos e otimize processos, garantindo desempenho superior."
      />
    </motion.div>
  </section>
);