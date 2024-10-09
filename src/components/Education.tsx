import React from 'react';
import { GraduationCap, BookOpen } from 'lucide-react';

const Education: React.FC = () => {
  const education = [
    {
      institution: 'UniCesumar',
      degree: 'Bacharelado, Análise de Sistemas de Computação',
      period: 'fevereiro de 2023 - junho de 2025'
    },
    {
      institution: 'Kenzie Academy Brasil',
      degree: 'Desenvolvedor Full-Stack',
      period: 'junho de 2023 - junho de 2024'
    },
    {
      institution: 'Instituto Nossa Senhora Auxiliadora',
      degree: 'Ensino Médio',
      period: '2020 - 2022'
    },
    {
      institution: 'Influx Escola de Idiomas',
      degree: 'Curso de Inglês',
      period: 'março de 2018 - abril de 2021'
    }
  ];

  return (
    <section id="education" className="mb-12">
      <h2 className="text-2xl font-bold mb-4">Formação Acadêmica</h2>
      <div className="space-y-6">
        {education.map((edu, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6">
            <div className="flex items-center mb-2">
              {index < 2 ? (
                <GraduationCap size={20} className="mr-2 text-blue-600" />
              ) : (
                <BookOpen size={20} className="mr-2 text-green-600" />
              )}
              <h3 className="text-xl font-semibold">{edu.institution}</h3>
            </div>
            <p className="text-lg">{edu.degree}</p>
            <p className="text-gray-600">{edu.period}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;