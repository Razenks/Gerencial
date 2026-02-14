import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // 1. Tenta rolar 'html' e 'body' manualmente (funciona em navegadores antigos/teimosos)
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    // 2. Tenta o método padrão da janela
    window.scrollTo(0, 0);

    // 3. (O Pulo do Gato) Força novamente após um milissegundo 
    // para vencer a restauração de scroll automática do navegador
    const timer = setTimeout(() => {
        window.scrollTo(0, 0);
    }, 10);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
};

export default ScrollToTop;