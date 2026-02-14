import React from 'react';
import { Factory, ShoppingCart, Handshake } from 'lucide-react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../shared/SectionTitle';

export const Industries = () => {
  const industries = [
    { icon: Factory, label: 'Indústria', desc: 'Gestão de produção, PCP e controle de estoque rigoroso.' },
    { icon: ShoppingCart, label: 'Comércio', desc: 'Frente de caixa ágil (PDV) e integração total de vendas.' },
    { icon: Handshake, label: 'Serviço', desc: 'Gestão de contratos, recorrência e satisfação de clientes.' }
  ];

  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="Áreas de Atuação" subtitle="Soluções moldadas para o seu segmento" />
        
        <div className="grid md:grid-cols-3 gap-8">
          {industries.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ y: -8 }}
              className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-indigo-100 transition-all duration-300 text-center"
            >
              <div className="mx-auto w-20 h-20 bg-white shadow-md text-slate-700 group-hover:bg-indigo-600 group-hover:text-white rounded-2xl flex items-center justify-center transition-colors duration-300 mb-6">
                <item.icon size={32} strokeWidth={1.5} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{item.label}</h4>
              <p className="text-slate-500 text-sm leading-relaxed px-4">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};