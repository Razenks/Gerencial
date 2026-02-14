import React from 'react';
import { Navbar } from '../components/Layout/Navbar'; 
import { Footer } from '../components/Layout/Footer'; 
import { ServicesHero } from '../components/services/ServicesHero';
import { ServiceTabs } from '../components/services/ServiceTabs';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      <Navbar isDarkBg={true} />
      <main>
        <ServicesHero />
        <ServiceTabs />
        {/* Seção extra de CTA final antes do rodapé */}
        <section className="py-24 px-6 bg-white relative overflow-hidden">
             <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
             <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
                 <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
                     Sua empresa precisa de uma solução específica?
                 </h2>
                 <p className="text-lg text-slate-600 leading-relaxed">
                     Nossos consultores estão prontos para entender seu cenário e desenhar o projeto ideal para sua necessidade.
                 </p>
                 <Link to="https://api.whatsapp.com/send/?phone=5567984670721&text=Ol%C3%A1%2C+gostaria+de+solicitar+um+or%C3%A7amento%21&type=phone_number&app_absent=0">
                   <button className="bg-green-600 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-green-700 transition shadow-xl shadow-green-200 animate-pulse">
                      Falar com um Especialista Agora
                   </button>
                 </Link>
             </div>
         </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;