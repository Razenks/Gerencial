import React from 'react';
import { motion } from 'framer-motion';
import { Store, Hammer, Factory, Plane, ArrowRight } from 'lucide-react';
import { SectionTitle } from '../shared/SectionTitle';
import { Link } from 'react-router-dom';

export const ModularSystem = () => {
  const modules = [
    {
      title: "Caixa Super",
      icon: Store,
      desc: "Frente de caixa ultra-rápido para varejo. Emissão de NFC-e em 2 segundos.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Construção",
      icon: Hammer,
      desc: "Controle de metros quadrados, orçamentos complexos e entrega fracionada.",
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Indústria",
      icon: Factory,
      desc: "Transformação de matéria-prima com controle rigoroso de perdas e custos.",
      color: "from-slate-700 to-slate-900"
    },
    {
      title: "Transporte",
      icon: Plane,
      desc: "Gestão de carga e descarga, averbação de seguro e manutenção preventiva.",
      color: "from-emerald-500 to-green-600"
    }
  ];

  return (
    <section className="py-32 bg-slate-50 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Módulos Especializados"
          subtitle="O Albatroz se molda perfeitamente ao DNA da sua empresa."
        />

        <div className="grid md:grid-cols-2 gap-8">
          {modules.map((mod, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.02 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="relative overflow-hidden bg-white p-10 rounded-4xl shadow-xl border border-slate-100 group cursor-pointer"
            >
              {/* Efeito de Gradiente no Hover */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-linear-to-br ${mod.color} opacity-10 rounded-bl-[100px] transition-all group-hover:scale-150 group-hover:opacity-20`} />

              <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
                <div className={`p-4 rounded-2xl bg-linear-to-br ${mod.color} text-white shadow-lg`}>
                  <mod.icon size={32} />
                </div>
                <div className="space-y-4 flex-1">
                  <h3 className="text-2xl font-bold text-slate-900">{mod.title}</h3>
                  <p className="text-slate-600 leading-relaxed">
                    {mod.desc}
                  </p>
                  <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-indigo-600 mt-4 group-hover:translate-x-2 transition-transform">
                    Saiba Mais <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Final */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 text-center bg-indigo-900 rounded-[3rem] p-12 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="relative z-10 max-w-2xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Pronto para evoluir sua gestão?</h2>
            <p className="text-indigo-200 text-lg">Junte-se a mais de 1.500 empresas que transformaram seus resultados com o Albatroz.</p>
            <a
              href="https://wa.me/5567981190011?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento!"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-indigo-900 px-12 py-5 rounded-full font-bold text-lg shadow-2xl hover:bg-indigo-50 transition-colors"
              >
                Solicitar uma Demonstração Comercial
              </motion.button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};