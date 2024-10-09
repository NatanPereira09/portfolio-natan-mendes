import React from 'react';
import { Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      company: 'Webhouse.pt',
      position: 'Desenvolvedor web',
      period: 'novembro de 2023 - outubro de 2024 (1 ano)'
    },
    {
      company: 'SPRO IT Solutions',
      position: 'Desenvolvedor full stack',
      period: 'fevereiro de 2022 - junho de 2023 (1 ano 5 meses)'
    }
  ];

  return (
    <section id="experience" className="mb-12">
      <h2 className="text-2xl font-bold mb-4">Experiência Profissional</h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6">
            <div className="flex items-center mb-2">
              <Briefcase size={20} className="mr-2 text-blue-600" />
              <h3 className="text-xl font-semibold">{exp.company}</h3>
            </div>
            <p className="text-lg">{exp.position}</p>
            <p className="text-gray-600">{exp.period}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;