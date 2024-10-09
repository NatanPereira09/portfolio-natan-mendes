import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import { FaCode, FaDatabase, FaTools } from 'react-icons/fa';

const ExperienceSection = styled(animated.section)`
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #f9f9f9, #e3e3e3);
  color: var(--text-color);
`;

const ExperienceItem = styled.div`
  background: white;
  border-radius: 12px;
  padding: 2.5rem;
  margin-bottom: 3rem;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.2);
  }
`;

const JobTitle = styled.h3`
  color: var(--primary-color);
  font-size: 1.75rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const Company = styled.h4`
  color: var(--secondary-color);
  font-size: 1.25rem;
  margin-bottom: 1.25rem;
`;

const DateRange = styled.p`
  font-style: italic;
  color: #888;
  margin-bottom: 1.5rem;
`;

const TechList = styled.ul`
  list-style: none;
  padding-left: 0;
  margin-top: 1rem;

  li {
    margin-bottom: 0.75rem;
    display: flex;
    align-items: center;

    svg {
      margin-right: 0.5rem;
      color: var(--secondary-color);
    }
  }
`;

const Experience: React.FC = () => {
  const props = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { tension: 300, friction: 20 },
  });

  return (
    <ExperienceSection style={props}>
      <div className="container">
        <h2 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2.5rem', color: 'var(--primary-color)' }}>Experiência Profissional</h2>

        <ExperienceItem>
          <JobTitle>Desenvolvedor Web</JobTitle>
          <Company>Webhouse.pt, Remoto (Portugal)</Company>
          <DateRange>Novembro de 2023 a Outubro de 2024</DateRange>
          <TechList>
            <li><FaCode /> Front-end: HTML5, CSS3, JavaScript, Vue.js, Redux.js, Typescript, TailwindCSS, Vite</li>
            <li><FaCode /> Back-end: PHP (Laravel), Node.js</li>
            <li><FaDatabase /> Bancos de Dados: MySQL, MongoDB</li>
            <li><FaTools /> Outras tecnologias: Git, PowerBI, Figma</li>
            <li><FaTools /> Metodologia ágil: Kanban</li>
          </TechList>
        </ExperienceItem>

        <ExperienceItem>
          <JobTitle>Desenvolvedor Full Stack</JobTitle>
          <Company>SPRO IT Solutions, Remoto (Curitiba-PR)</Company>
          <DateRange>Fevereiro de 2022 a Junho de 2023</DateRange>
          <TechList>
            <li><FaCode /> Front-end: HTML5, CSS3, JavaScript, React Native, JSX, Redux.js, Typescript, Bootstrap</li>
            <li><FaCode /> Back-end: PHP, Node.js</li>
            <li><FaDatabase /> Bancos de Dados: MySQL, MongoDB</li>
            <li><FaTools /> Outras tecnologias: Git, PowerBI, Figma</li>
            <li><FaTools /> Metodologia ágil: Scrum</li>
          </TechList>
        </ExperienceItem>
      </div>
    </ExperienceSection>
  );
};

export default Experience;
