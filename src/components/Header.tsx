import React from 'react';
import { User } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white py-6">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <User size={32} className="mr-4" />
          <h1 className="text-3xl font-bold">Natan Pereira Mendes</h1>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#about" className="hover:underline">Sobre</a></li>
            <li><a href="#skills" className="hover:underline">Habilidades</a></li>
            <li><a href="#experience" className="hover:underline">Experiência</a></li>
            <li><a href="#education" className="hover:underline">Formação</a></li>
            <li><a href="#contact" className="hover:underline">Contato</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;