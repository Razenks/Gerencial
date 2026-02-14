import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Wrench, ShieldCheck, Network, CheckCircle2, ArrowRight, Server, HardDrive, Radio, Users, FileText, Cpu } from 'lucide-react';

// Dados dos serviços baseados nas imagens fornecidas
const servicesData = [
  {
    id: 'assistencia',
    title: 'Assistência Técnica',
    icon: Wrench,
    description: 'Suporte especializado para manter sua infraestrutura de TI operando com desempenho máximo.',
    intro: 'O setor da Assistência Técnica desempenha uma vasta linha de serviços, cuidando da saúde física e lógica dos seus equipamentos.',
    features: [
      { icon: HardDrive, text: 'Backups de dados e segurança da informação.' },
      { icon: Server, text: 'Instalação e Configuração de Servidores Linux.' },
      { icon: Radio, text: 'Configuração de equipamentos de rede (modems, roteadores, switches).' },
      { icon: ShieldCheck, text: 'Venda, instalação e configuração de antivírus AVAST Business.' },
      { icon: Wrench, text: 'Manutenção em computadores, notebooks, impressoras e no-breaks.' },
      { icon: FileText, text: 'Reinstalação de sistemas operacionais (Windows ou Linux).' },
      { icon: Network, text: 'Profissionais especializados em rede estruturada e eletrônica.' },
      { icon: Users, text: 'Revenda autorizada TSPLUS para acesso remoto.' },
    ]
  },
  {
    id: 'seguranca',
    title: 'Segurança e Controle',
    icon: ShieldCheck,
    description: 'Proteção robusta contra ameaças digitais e controle de acesso para sua tranquilidade.',
    intro: 'Seus dados estão seguros? Proteja sua empresa contra sequestro de dados (Ransomware), perda de equipamentos e uso indevido da internet.',
    features: [
      { icon: ShieldCheck, text: 'Firewall (Parede de Fogo) - Software de Segurança Avançado.' },
      { icon: HardDrive, text: 'Backup Cloud - Cópia segura dos dados em nuvem.' },
      { icon: Radio, text: 'Monitoramento - Acesso remoto e relatório mensal de incidentes.' },
      { icon: Wrench, text: 'Antivírus Gerenciado - Licenças oficiais e atualizações automáticas.' },
      { icon: Network, text: 'Controle de uso da internet no ambiente de trabalho.' },
      { icon: Server, text: 'Prevenção contra perda de informações (roubo, vírus, falhas).' },
    ]
  },
  {
    id: 'outros',
    title: 'Projetos e Consultoria',
    icon: Cpu,
    description: 'Soluções estratégicas, infraestrutura de rede e treinamento para potencializar sua equipe.',
    intro: 'Vamos além da manutenção, oferecendo consultoria estratégica e projetos que preparam sua empresa para o futuro.',
    features: [
      { icon: Network, text: 'Projeto e Execução de Redes (Rack, Switch, Cabeamento estruturado).' },
      { icon: Server, text: 'Implementação e gestão de Servidores Linux.' },
      { icon: FileText, text: 'Consultoria: Revisão de cadastro de produtos (Tributária e Fiscal).' },
      { icon: CheckCircle2, text: 'Revisão de processos e Apuração de resultados.' },
      { icon: Users, text: 'Terceirização de Mão de Obra (Profissionais qualificados).' },
      { icon: Users, text: 'Treinamento e Capacitação dos usuários nos sistemas.' },
      { icon: FileText, text: 'Criação de manuais de rotinas por setor.' },
    ]
  }
];

export const ServiceTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-24 bg-slate-50 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Navegação das Abas */}
        <div className="flex flex-wrap justify-center gap-4 mb-16 bg-white p-2 rounded-4xl shadow-md border border-slate-100 max-w-4xl mx-auto">
          {servicesData.map((tab, index) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(index)}
              className={`relative z-10 flex items-center gap-3 px-8 py-4 rounded-3xl font-bold text-sm md:text-base transition-all duration-300 ${
                activeTab === index 
                  ? 'text-white' 
                  : 'text-slate-600 hover:text-indigo-600 hover:bg-slate-50'
              }`}
            >
              {activeTab === index && (
                <motion.div
                  layoutId="activeTabIndicator"
                  className="absolute inset-0 bg-indigo-900 rounded-3xl shadow-lg shadow-indigo-200 -z-10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <tab.icon size={20} />
              {tab.title}
            </button>
          ))}
        </div>

        {/* Conteúdo das Abas */}
        <div className="bg-white rounded-[3rem] shadow-xl border border-slate-100 overflow-hidden relative min-h-150">
          <AnimatePresence mode='wait'>
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="p-8 md:p-16"
            >
              <div className="flex flex-col lg:flex-row gap-16 items-start">
                
                {/* Lado Esquerdo: Descrição Principal */}
                <div className="lg:w-1/3 space-y-8">
                  <div className="w-20 h-20 bg-indigo-100 text-indigo-700 rounded-2xl flex items-center justify-center shadow-inner">
                    {React.createElement(servicesData[activeTab].icon, { size: 40 })}
                  </div>
                  <div>
                    <h2 className="text-3xl font-extrabold text-slate-900 mb-4">
                      {servicesData[activeTab].title}
                    </h2>
                    <p className="text-lg text-indigo-600 font-medium mb-6">
                      {servicesData[activeTab].description}
                    </p>
                    <p className="text-slate-600 leading-relaxed italic border-l-4 border-indigo-200 pl-4">
                      "{servicesData[activeTab].intro}"
                    </p>
                  </div>
                  
                  {/* CTA Mobile/Tablet */}
                  <div className="lg:hidden pt-8">
                    <MainCTAButton />
                  </div>
                </div>

                {/* Lado Direito: Lista de Funcionalidades */}
                <div className="lg:w-2/3 w-full bg-slate-50 rounded-4xl p-8 md:p-10 border border-slate-100">
                  <h3 className="text-xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                    <CheckCircle2 className="text-indigo-600" /> O que está incluído:
                  </h3>
                  <motion.ul 
                    className="grid md:grid-cols-2 gap-x-8 gap-y-6"
                    initial="hidden"
                    animate="show"
                    variants={{
                      show: { transition: { staggerChildren: 0.05 } }
                    }}
                  >
                    {servicesData[activeTab].features.map((feature, idx) => (
                      <motion.li 
                        key={idx}
                        variants={{
                          hidden: { opacity: 0, y: 10 },
                          show: { opacity: 1, y: 0 }
                        }}
                        className="flex items-start gap-4 group"
                      >
                        <div className="mt-1 p-2 bg-white text-indigo-600 rounded-lg shadow-sm border border-slate-100 group-hover:border-indigo-300 transition-colors">
                          <feature.icon size={18} />
                        </div>
                        <span className="text-slate-700 font-medium leading-snug group-hover:text-indigo-900 transition-colors">
                          {feature.text}
                        </span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
              </div>
              
              {/* CTA Desktop */}
              <div className="hidden lg:flex justify-end mt-12 pt-8 border-t border-slate-100">
                <MainCTAButton />
              </div>

            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

// Botão CTA reutilizável com animação
const MainCTAButton = () => (
  <Link to="https://api.whatsapp.com/send/?phone=5567984670721&text=Ol%C3%A1%2C+gostaria+de+solicitar+um+or%C3%A7amento%21&type=phone_number&app_absent=0">
    <motion.button
      whileHover={{ scale: 1.05, backgroundColor: '#312e81' }} // indigo-900 hovered
      whileTap={{ scale: 0.95 }}
      className="bg-indigo-600 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-xl shadow-indigo-200 flex items-center gap-3 group w-full md:w-auto justify-center"
    >
      Solicitar Orçamento Personalizado
      <ArrowRight className="group-hover:translate-x-1 transition-transform" />
    </motion.button>
  </Link>
);