import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About"
import ServicesPage from './pages/ServicesPage';
import TermsPage from './pages/TermsPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/albatroz" element={<About />} />
      <Route path="/servicos" element={<ServicesPage />} />
      <Route path="/termos" element={<TermsPage />} />
    </Routes>
  );
}

export default App;