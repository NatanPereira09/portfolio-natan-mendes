import React from 'react';
import { Code, Database, Wrench, Server } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Front-end',
      icon: <Code size={24} className="text-blue-600" />,
      skills: ['HTML5', 'CSS3', 'JavaScript', 'JSX', 'React Native', 'TailwindCSS', 'Bootstrap']
    },
    {
      title: 'Back-end',
      icon: <Server size={24} className="text-green-600" />,
      skills: ['Node.js', 'PHP', 'Laravel', 'TypeScript']
    },
    {
      title: 'Banco de Dados',
      icon: <Database size={24} className="text-purple-600" />,
      skills: ['SQL', 'MongoDB']
    },
    {
      title: 'Ferramentas',
      icon: <Wrench size={24} className="text-orange-600" />,
      skills: ['Git', 'Microsoft Azure', 'cPanel', 'Material UI', 'React-Query']
    }
  ];

  return (
    <section id="skills" className="mb-12">
      <h2 className="text-2xl font-bold mb-4">Habilidades</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6">
            <div className="flex items-center mb-4">
              {category.icon}
              <h3 className="text-xl font-semibold ml-2">{category.title}</h3>
            </div>
            <ul className="list-disc list-inside">
              {category.skills.map((skill, skillIndex) => (
                <li key={skillIndex}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;