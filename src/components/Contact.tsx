import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="mb-12">
      <h2 className="text-2xl font-bold mb-4">Contato</h2>
      <div className="bg-white shadow-md rounded-lg p-6">
        <p className="mb-4">
          Estou aberto a novas oportunidades e ansioso para contribuir em desafios estimulantes. Entre em contato para discutir como posso agregar valor à sua equipe.
        </p>
        <div className="flex space-x-4">
          <a href="mailto:natan.pereira.mendes@example.com" className="flex items-center text-blue-600 hover:underline">
            <Mail size={20} className="mr-2" />
            Email
          </a>
          <a href="https://www.linkedin.com/in/natanpereiramendes" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 hover:underline">
            <Linkedin size={20} className="mr-2" />
            LinkedIn
          </a>
          <a href="https://github.com/natanpereiramendes" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 hover:underline">
            <Github size={20} className="mr-2" />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;