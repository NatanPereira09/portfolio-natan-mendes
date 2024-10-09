import React from 'react';
import { MapPin } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="mb-12">
      <h2 className="text-2xl font-bold mb-4">Sobre Mim</h2>
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="flex items-center mb-4">
          <MapPin size={20} className="mr-2 text-blue-600" />
          <span>Cambé, Paraná, Brasil</span>
        </div>
        <p className="mb-4">
          Olá, sou um programador apaixonado com aproximadamente 3 anos de experiência em desenvolvimento Full-Stack. Possuo sólidos conhecimentos em tecnologias essenciais, incluindo HTML5, CSS3, Laravel, PHP, JSX, e bancos de dados como SQL e MongoDB. Minha expertise se estende ao desenvolvimento em React Native, Git, Microsoft Azure e Laravel.
        </p>
        <p>
          Busco oportunidades para aplicar meu conhecimento técnico e criatividade, contribuindo para o crescimento de projetos inovadores.
        </p>
      </div>
    </section>
  );
};

export default About;