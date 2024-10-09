import React, { useState } from 'react';
import styled from 'styled-components';
import { useSpring, animated, config } from 'react-spring';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaVuejs, FaNodeJs, FaPhp, FaDatabase } from 'react-icons/fa';
import { SiTailwindcss, SiTypescript, SiMongodb, SiRedux } from 'react-icons/si';
import { FaLaravel, FaBootstrap } from 'react-icons/fa';

const SkillsSection = styled(animated.section)`
  padding: 4rem 0;
  background-color: white;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
  gap: 2rem;
`;

const SkillItem = styled(animated.div)`
  text-align: center;
  padding: 1.5rem;
  border-radius: 8px;
  transition: box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`;

const SkillIcon = styled(animated.div)`
  font-size: 3rem;
  color: var(--secondary-color);
  margin-bottom: 1rem;
`;

const SkillName = styled.p`
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const ExperienceText = styled(animated.p)`
  font-size: 0.9rem;
  color: var(--secondary-color);
  opacity: 0.8;
`;

const Skills: React.FC = () => {
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);

  const sectionProps = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { tension: 300, friction: 10 },
  });

  const skills = [
    { name: 'HTML5', icon: <FaHtml5 />, experience: '3 Anos' },
    { name: 'CSS3', icon: <FaCss3Alt />, experience: '3 Anos' },
    { name: 'JavaScript', icon: <FaJs />, experience: '3 Anos' },
    { name: 'React', icon: <FaReact />, experience: '2 Anos' },
    { name: 'Vue.js', icon: <FaVuejs />, experience: '2 Anos' },
    { name: 'Node.js', icon: <FaNodeJs />, experience: '1 Ano' },
    { name: 'PHP', icon: <FaPhp />, experience: '3 Anos' },
    { name: 'Databases', icon: <FaDatabase />, experience: '2,5 Anos' },
    { name: 'Laravel', icon: <FaLaravel />, experience: '1 ANO' },
    { name: 'TailwindCSS', icon: <SiTailwindcss />, experience: '3 Anos' },
    { name: 'Bootstrap', icon: <FaBootstrap />, experience: '3 Anos' },
    { name: 'TypeScript', icon: <SiTypescript />, experience: '3 Anos' },
    { name: 'MongoDB', icon: <SiMongodb />, experience: '1,5 Anos' },
    { name: 'Redux', icon: <SiRedux />, experience: '2 Anos' },
  ];

  return (
    <SkillsSection style={sectionProps}>
      <div className="container">
        <h2>Habilidades</h2>
        <SkillsGrid>
          {skills.map((skill, index) => {
            const isHovered = hoveredSkill === index;

            const itemProps = useSpring({
              transform: isHovered ? 'scale(1.05)' : 'scale(1)',
              config: config.wobbly,
            });

            const iconProps = useSpring({
              transform: isHovered ? 'rotate(360deg)' : 'rotate(0deg)',
              config: { tension: 300, friction: 10 },
            });

            const experienceProps = useSpring({
              opacity: isHovered ? 1 : 0,
              transform: isHovered ? 'translateY(0)' : 'translateY(10px)',
              config: config.gentle,
            });

            return (
              <SkillItem
                key={index}
                style={itemProps}
                onMouseEnter={() => setHoveredSkill(index)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <SkillIcon style={iconProps}>{skill.icon}</SkillIcon>
                <SkillName>{skill.name}</SkillName>
                <ExperienceText style={experienceProps}>
                  Experiência: {skill.experience}
                </ExperienceText>
              </SkillItem>
            );
          })}
        </SkillsGrid>
      </div>
    </SkillsSection>
  );
};

export default Skills;