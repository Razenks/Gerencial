import React, { useState } from 'react'; // Adicione useState
import { motion } from 'framer-motion';
import { MessageCircle, Mail, ArrowRight, Send } from 'lucide-react';
import { EmailModal } from './EmailModal'; // Importe o Modal

const ActionCard = ({ onClick, href, color, icon: Icon, title, desc, buttonText, buttonIcon: ButtonIcon, delay }) => {
  const isGreen = color === 'green';
  const colors = {
    bgHover: isGreen ? 'group-hover:bg-green-600' : 'group-hover:bg-indigo-600',
    iconBg: isGreen ? 'bg-green-100 text-green-600' : 'bg-indigo-100 text-indigo-600',
    shadow: isGreen ? 'shadow-green-200' : 'shadow-indigo-200',
    blob: isGreen ? 'bg-green-500/10' : 'bg-indigo-500/10',
    btn: isGreen ? 'bg-green-600 hover:bg-green-700' : 'bg-indigo-900 hover:bg-indigo-800'
  };

  // Se tiver onClick (Modal), usa div/button. Se tiver href, usa tag 'a'
  const Component = href ? motion.a : motion.div;

  return (
    <Component
      href={href}
      onClick={onClick} // Adiciona o evento de clique
      target={href && isGreen ? "_blank" : undefined}
      rel={href && isGreen ? "noopener noreferrer" : undefined}
      initial={{ opacity: 0, x: isGreen ? -20 : 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay }}
      whileHover={{ y: -5 }}
      className="group relative overflow-hidden bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-100 flex flex-col items-center justify-center text-center cursor-pointer"
    >
      <div className={`absolute top-0 right-0 w-32 h-32 ${colors.blob} rounded-bl-full transition-transform group-hover:scale-110`}></div>

      <div className={`w-20 h-20 ${colors.iconBg} rounded-2xl flex items-center justify-center mb-6 ${colors.bgHover} group-hover:text-white transition-colors duration-300 shadow-lg ${colors.shadow}`}>
        <Icon size={40} />
      </div>
      <h3 className="text-2xl font-bold text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-500 mb-8">{desc}</p>

      <span className={`inline-flex items-center gap-2 ${colors.btn} text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg transition-all w-full md:w-auto justify-center`}>
        {buttonText} <ButtonIcon size={20} />
      </span>
    </Component>
  );
};

export const ActionCards = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado do Modal

  return (
    <>
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <ActionCard
          href="https://wa.me/5567981190011?text=Olá,%20vim%20pelo%20site%20e%20gostaria%20de%20falar%20com%20um%20consultor."
          color="green"
          icon={MessageCircle}
          title="WhatsApp"
          desc="Resposta rápida e atendimento personalizado."
          buttonText="Enviar Mensagem"
          buttonIcon={ArrowRight}
          delay={0.2}
        />

        {/* Card de Email alterado para abrir Modal */}
        <ActionCard
          onClick={() => setIsModalOpen(true)} // Abre o Modal
          color="indigo"
          icon={Mail}
          title="E-mail"
          desc="Para orçamentos detalhados ou parcerias."
          buttonText="Enviar E-mail"
          buttonIcon={Send}
          delay={0.3}
        />
      </div>

      {/* Renderiza o Modal */}
      <EmailModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};