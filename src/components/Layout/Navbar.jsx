import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

export const Navbar = ({ isDarkBg = false }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 2. IMPORTANTE: Remova o "/gerencial" do início. 
  // Use apenas "/" para a raiz, pois o basename já sabe que raiz = /gerencial
  const navLinks = [
    { name: 'Início', href: '/' },
    { name: 'Sistema Albatroz', href: '/albatroz' },
    { name: 'Serviços', href: '/servicos' },
    { name: 'Contato', href: '#contato' }, // Links com # (hash) continuam normais
  ];

  const textColorClass = isScrolled
    ? 'text-slate-600 hover:text-indigo-600'
    : isDarkBg
      ? 'text-white/90 hover:text-white'
      : 'text-slate-500 hover:text-indigo-600';

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
      }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

        {/* LOGO */}
        <div className="shrink-0">
          {/* Troque <a> por <Link> e href por to */}
          <Link to="/">
            <img
              src={logo}
              alt="Gerencial Informática"
              className="h-12 w-auto object-contain hover:opacity-90 transition-opacity"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            // Lógica para links internos vs âncoras (#)
            const isAnchor = link.href.startsWith('#');

            if (isAnchor) {
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-bold transition-colors ${textColorClass}`}
                >
                  {link.name}
                </a>
              )
            }

            return (
              <Link
                key={link.name}
                to={link.href}
                className={`text-sm font-bold transition-colors ${textColorClass}`}
              >
                {link.name}
              </Link>
            );
          })}

          {/* Botão Comercial (Link Externo continua com <a>) */}
          <a
            href="https://wa.me/5567981190011?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento!"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className={`px-6 py-2.5 rounded-full text-sm font-bold transition shadow-lg ${!isScrolled && isDarkBg
                ? 'bg-white text-indigo-900 hover:bg-indigo-50'
                : 'bg-indigo-900 text-white hover:bg-indigo-800'
              }`}>
              Falar com Comercial
            </button>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden transition-colors ${isScrolled ? 'text-slate-900' : (isDarkBg ? 'text-white' : 'text-slate-900')
            }`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full border-t border-slate-100 shadow-xl p-6 flex flex-col gap-4">
          {navLinks.map((link) => {
            const isAnchor = link.href.startsWith('#');
            if (isAnchor) {
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-slate-700 hover:text-indigo-600"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              )
            }
            return (
              <Link
                key={link.name}
                to={link.href}
                className="text-lg font-medium text-slate-700 hover:text-indigo-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            )
          })}
        </div>
      )}
    </nav>
  );
};