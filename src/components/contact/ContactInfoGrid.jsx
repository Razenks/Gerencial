import React from 'react';
import { Phone, MapPin, Clock, ArrowRight } from 'lucide-react';
import { InfoCard } from './InfoCard';

export const ContactInfoGrid = () => {
  return (
    <div className="grid lg:grid-cols-3 gap-8">
      
      {/* Card Telefones */}
      <InfoCard delay={0.4} icon={Phone} title="Nossos Telefones">
        <div className="space-y-3">
          <div className="flex flex-col">
            <span className="text-sm text-slate-400 uppercase font-bold tracking-wider">Fixo</span>
            <a href="tel:+556733160200" className="text-lg font-medium text-slate-700 hover:text-indigo-600 transition">(67) 3316-0200</a>
          </div>
          <div className="w-full h-px bg-slate-100"></div>
          <div className="flex flex-col">
            <span className="text-sm text-slate-400 uppercase font-bold tracking-wider">Celular</span>
            <a href="tel:+5567981190011" className="text-lg font-medium text-slate-700 hover:text-indigo-600 transition">(67) 98119-0011</a>
          </div>
        </div>
      </InfoCard>

      {/* Card Endereço */}
      <InfoCard delay={0.5} icon={MapPin} title="Localização">
        <p className="text-slate-600 leading-relaxed mb-4">
          R. Treze de Junho, 38<br />
          Centro<br />
          Campo Grande - MS<br />
          CEP: 79002-420
        </p>
        <a 
          href="https://maps.google.com/?q=Gerencial+Informatica+Campo+Grande" 
          target="_blank" 
          rel="noreferrer"
          className="text-sm font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1"
        >
          Ver no Google Maps <ArrowRight size={14} />
        </a>
      </InfoCard>

      {/* Card Horários */}
      <InfoCard delay={0.6} icon={Clock} title="Horário de Atendimento">
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-slate-600">Segunda a Sexta</span>
            <span className="font-bold text-slate-900">07:30h - 18h</span>
          </div>
          <div className="w-full h-px bg-slate-100"></div>
          <div className="flex justify-between items-center">
            <span className="text-slate-600">Sábados</span>
            <span className="font-bold text-slate-900">08h - 12h</span>
          </div>
        </div>
      </InfoCard>

    </div>
  );
};