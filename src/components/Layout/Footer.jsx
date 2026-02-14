import React from 'react';
import { Facebook, Youtube, Linkedin, Instagram, MapPin, Phone, Mail, Clock } from 'lucide-react';

export const Footer = () => {
  
  // Lista de redes sociais com seus respectivos links
  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/Gerencial.Informatica.CG/?locale=pt_BR" },
    { icon: Youtube, href: "https://www.youtube.com/@gerencialinformatica1963" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/gerencialinformatica/" },
    { icon: Instagram, href: "https://www.instagram.com/gerencialinformaticaoficial/" }
  ];

  return (
    <footer id="contato" className="bg-slate-900 text-slate-400 pt-20 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-slate-800">
        
        {/* Sobre */}
        <div className="space-y-6">
          <div className="text-2xl font-bold text-white uppercase tracking-tighter">Gerencial</div>
          <p className="text-sm leading-relaxed">
            Evoluindo constantemente para oferecer as melhores soluções em software do Mato Grosso do Sul.
          </p>
          <div className="flex gap-4">
            {socialLinks.map((social, i) => (
              <a 
                key={i} 
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-indigo-600 hover:text-white transition"
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Endereço */}
        <div className="space-y-6">
          <h4 className="text-white font-bold text-sm uppercase tracking-widest">Onde Estamos</h4>
          <div className="flex gap-3">
            <MapPin className="text-indigo-500 shrink-0" size={20} />
            <p className="text-sm leading-relaxed">
              R. Treze de Junho, 38<br />
              Centro, Campo Grande - MS<br />
              CEP: 79002-420
            </p>
          </div>
        </div>

        {/* Contato */}
        <div className="space-y-6">
          <h4 className="text-white font-bold text-sm uppercase tracking-widest">Fale Conosco</h4>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Phone size={18} className="text-indigo-500" />
              <span className="text-sm">(67) 3316-0200</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-bold text-slate-200">(67) 98119-0011</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={18} className="text-indigo-500" />
              <span className="text-sm truncate">francisco@gerencialinfo.com.br</span>
            </div>
          </div>
        </div>

        {/* Horários */}
        <div className="space-y-6">
          <h4 className="text-white font-bold text-sm uppercase tracking-widest">Atendimento</h4>
          <div className="flex gap-3">
            <Clock size={18} className="text-indigo-500" />
            <div className="text-sm space-y-1">
              <p>Segunda a Sexta: 07:30h - 18h</p>
              <p>Sábados: 08h - 12h</p>
            </div>
          </div>
        </div>

      </div>
      
      <div className="max-w-7xl mx-auto pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
        <p>© 2026 Gerencial Informática. Todos os direitos reservados.</p>
        <div className="flex gap-6">
          <a href="/gerencial/termos" className="hover:text-white transition">Termos e Condições</a>
        </div>
      </div>
    </footer>
  );
};