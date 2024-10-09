import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

const AboutSection = styled(animated.section)`
  padding: 6rem 0;
  background: linear-gradient(135deg, #f0f0f0, #ffffff);
  color: var(--text-color);
`;

const AboutContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1200px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const AboutText = styled.div`
  flex: 1;
  padding-right: 3rem;

  h2 {
    font-size: 2.5rem;
    color: var(--primary-color);
    margin-bottom: 1.5rem;
    position: relative;

    &::after {
      content: '';
      display: block;
      width: 60px;
      height: 4px;
      background: var(--secondary-color);
      margin-top: 0.5rem;
      border-radius: 2px;
    }
  }

  p {
    margin-bottom: 1.5rem;
    line-height: 1.6;
    font-size: 1.125rem;
    color: #555;
  }

  @media (max-width: 768px) {
    padding-right: 0;
    padding-bottom: 2rem;
  }
`;

// Using animated.img directly
const AboutImage = styled(animated.img)`
  width: 350px;
  height: 350px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  border: 6px solid var(--secondary-color);

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: 250px;
    height: 250px;
  }
`;

const About: React.FC = () => {
  const textProps = useSpring({
    from: { opacity: 0, transform: 'translateX(-50px)' },
    to: { opacity: 1, transform: 'translateX(0)' },
    config: { tension: 300, friction: 20 },
  });

  const imageProps = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { tension: 300, friction: 20 },
  });

  // Wrap the AboutText with animated.div
  return (
    <AboutSection>
      <div className="container">
        <AboutContent>
          <animated.div style={textProps}>
            <AboutText>
              <h2>Sobre Mim</h2>
              <p>
                Sou um desenvolvedor com 3 anos de experiência no mercado e uma forte paixão por tecnologia aos 19 anos de idade. Atualmente, busco novas oportunidades no mercado de TI, enquanto curso Análise e Desenvolvimento de Sistemas.
              </p>
              <p>
                Minha paixão por software vem de transformar ideias em realidade através de interfaces funcionais e elegantes. Procuro criar produtos de alta qualidade e estou sempre disposto a aprender novas tecnologias e ajudar quem precisa de orientação.
              </p>
            </AboutText>
          </animated.div>
          <AboutImage style={imageProps} src="src/assets/foto-natan.webp" alt="Natan Pereira Mendes" />
        </AboutContent>
      </div>
    </AboutSection>
  );
};

export default About;
