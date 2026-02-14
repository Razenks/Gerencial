import React from 'react';

export const MapSection = () => {
  return (
    <section className="h-96 w-full bg-slate-200 grayscale hover:grayscale-0 transition-all duration-700">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3738.167383790938!2d-54.61868392388701!3d-20.45831968105273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9486e8869f20952d%3A0x6283724e03d42c3d!2sR.%2013%20de%20Junho%2C%2038%20-%20Centro%2C%20Campo%20Grande%20-%20MS%2C%2079002-420!5e0!3m2!1spt-BR!2sbr!4v1708450000000!5m2!1spt-BR!2sbr" 
        width="100%" 
        height="100%" 
        style={{ border: 0 }} 
        allowFullScreen="" 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        title="Mapa Gerencial Informática"
      ></iframe>
    </section>
  );
};