import React from 'react';
import { Navbar } from '../components/Layout/Navbar'; 
import { Footer } from '../components/Layout/Footer'; 
import Hero from '../components/home/Hero';
import { Solutions } from '../components/home/Solutions';
import { Industries } from '../components/home/Industries';

// Simulação da VideoSection integrada
const VideoPresentation = () => (
  <section className="py-20 bg-indigo-950 text-white">
    <div className="max-w-7xl mx-auto px-6 text-center">
      <h2 className="text-3xl font-bold mb-10">Conheça o Albatroz em Ação</h2>
      <div className="max-w-4xl mx-auto aspect-video bg-slate-800 rounded-3xl overflow-hidden shadow-2xl border border-indigo-900/50">
        <iframe 
          className="w-full h-full"
          src="https://www.youtube.com/embed/jyNtkh7yqJg?rel=0" // Substituir pelo seu vídeo
          title="Apresentação Albatroz"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  </section>
);

const Home = () => {
  return (
    <div className="antialiased text-slate-900">
      <Navbar />
      <Hero />
      <Solutions />
      <VideoPresentation />
      <Industries />
      <Footer />
    </div>
  );
};

export default Home;