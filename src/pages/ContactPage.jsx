import React from 'react';
import { Navbar } from '../components/Layout/Navbar';
import { Footer } from '../components/Layout/Footer';
import { ContactHero } from '../components/contact/ContactHero';
import { ActionCards } from '../components/contact/ActionCards';
import { ContactInfoGrid } from '../components/contact/ContactInfoGrid';
import { MapSection } from '../components/contact/MapSection';

const ContactPage = () => {
  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      <Navbar isDarkBg={true} />

      <main>
        {/* Topo Roxo */}
        <ContactHero />

        {/* Conteúdo sobreposto (Botões e Infos) */}
        <section className="py-20 px-6 max-w-7xl mx-auto -mt-16 relative z-20">
          <ActionCards />
          <ContactInfoGrid />
        </section>

        {/* Mapa no final */}
        <MapSection />
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;