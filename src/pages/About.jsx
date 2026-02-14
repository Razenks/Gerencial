import React from 'react';
import { SystemHero } from '../components/about/SystemHero';
import { BenefitsGrid } from '../components/about/BenefitsGrid';
import { FeaturesList } from '../components/about/FeaturesList';
import { ModularSystem } from '../components/about/ModularSystem';
import { Navbar } from '../components/Layout/Navbar'; 
import { Footer } from '../components/Layout/Footer'; 

// Se você estiver usando React Router, pode exportar como default
const About = () => {
  return (
    <main className="bg-white">
      <Navbar isDarkBg={true} />
      <SystemHero />
      <BenefitsGrid />
      <FeaturesList />
      <ModularSystem />
      <Footer/>
    </main>
  );
}

export default About;