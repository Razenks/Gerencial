import React from 'react';
import { motion } from 'framer-motion';
import { Bot, TrendingUp, DollarSign, Factory, BarChart3, Users, Truck, FileText, ShieldCheck } from 'lucide-react';
import { SectionTitle } from '../shared/SectionTitle';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 } // Cada filho aparece 0.1s depois do anterior
  }
};

const itemAnim = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
};

export const BenefitsGrid = () => {
  const benefits = [
    { icon: Bot, title: "Automação Inteligente", text: "Reduza o trabalho manual em até 70% com rotinas automáticas." },
    { icon: TrendingUp, title: "Estoque em Tempo Real", text: "Evite perdas e rupturas monitorando cada item movimentado." },
    { icon: DollarSign, title: "Financeiro Blindado", text: "Conciliação bancária automática e previsão de fluxo de caixa." },
    { icon: Factory, title: "PCP Avançado", text: "Controle total do chão de fábrica e custos de produção." },
    { icon: Users, title: "Gestão de CRM", text: "Histórico completo de clientes para vender mais e melhor." },
    { icon: Truck, title: "Logística Conectada", text: "Emissão de documentos fiscais de transporte em segundos." },
    { icon: FileText, title: "Compliance Fiscal", text: "SPED, Sintegra e Blocos fiscais gerados sem dor de cabeça." },
    { icon: ShieldCheck, title: "Segurança na Nuvem", text: "Seus dados criptografados e com backup automático diário." },
  ];

  return (
    <section className="py-32 bg-slate-50 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <SectionTitle 
          title="Por que escolher o Albatroz?" 
          subtitle="Uma suíte completa de ferramentas projetada para escalabilidade." 
        />
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {benefits.map((item, i) => (
            <motion.div 
              key={i} 
              variants={itemAnim}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-2xl hover:shadow-indigo-100 transition-all border border-slate-100"
            >
              <div className="w-14 h-14 bg-linear-to-br from-indigo-500 to-blue-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-indigo-200">
                <item.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {item.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};