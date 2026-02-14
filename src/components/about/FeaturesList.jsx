import React from 'react';
import { motion } from 'framer-motion';
import { Check, ShoppingCart, Boxes, DollarSign, Banknote, Truck, Factory, PieChart, FileSpreadsheet, HeartHandshake } from 'lucide-react';
import { SectionTitle } from '../shared/SectionTitle';

export const FeaturesList = () => {
  const modules = [
    { title: "Compras", icon: ShoppingCart, items: ["Importação XML", "Histórico Fornecedor", "Sugestão Automática", "Cotação Online"] },
    { title: "Estoque", icon: Boxes, items: ["Curva ABC", "Rastreabilidade", "Ponto de Pedido", "Inventário Mobile"] },
    { title: "Financeiro", icon: DollarSign, items: ["DRE Gerencial", "Fluxo de Caixa", "Boletos Híbridos", "Conciliação OFX"] },
    { title: "RH & DP", icon: Banknote, items: ["Lançamentos de Vale", "Cálculo Automático", "Férias e 13º", "Relatórios"] },
    { title: "Logística", icon: Truck, items: ["Roteirização", "CT-e e MDF-e", "Gestão de Frota", "Comprovante Digital"] },
    { title: "Indústria", icon: Factory, items: ["Ficha Técnica", "Custo Standard", "Apontamento", "Bloco K"] },
    { title: "Custos", icon: PieChart, items: ["Mark-up", "Margem de Contribuição", "Rateio por Centro", "Break-even"] },
    { title: "Fiscal", icon: FileSpreadsheet, items: ["Validador SPED", "Regras de ICMS/IPI", "Apuração Automática", "Integração Contábil"] },
    { title: "Vendas", icon: HeartHandshake, items: ["Funil de Vendas", "Meta por Vendedor", "Comissionamento", "App de Força de Vendas"] }
  ];

  return (
    <section className="py-32 bg-white px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionTitle 
          title="Um Ecossistema de Recursos" 
          subtitle="Cada detalhe pensado para a eficiência da sua operação." 
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {modules.map((mod, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-slate-50 rounded-xl text-indigo-600 border border-slate-100">
                  <mod.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{mod.title}</h3>
              </div>
              <ul className="space-y-3 pl-2 border-l-2 border-slate-100">
                {mod.items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-slate-600 group hover:text-indigo-600 transition-colors cursor-default">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-indigo-500 transition-colors" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};