import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import { FaGithub, FaInstagram, FaLinkedin, FaDownload } from 'react-icons/fa';

const HeaderContainer = styled(animated.header)`
  background-color: var(--primary-color);
  color: white;
  padding: 2rem 0;
  text-align: center;
  position: relative;
`;

const DownloadLink = styled.a`
  position: absolute;
  top: 1rem;
  left: 1rem;
  background-color: white;
  color: var(--primary-color);
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: var(--secondary-color);
    color: white;
    transform: translateY(-3px);
    box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(0);
    box-shadow: none;
  }
`;

const Name = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
`;

const Title = styled.p`
  font-size: 1.2rem;
  opacity: 0.8;
`;

const SocialLinks = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
`;

const IconWrapper = styled.a`
  color: white;
  font-size: 2rem;
  transition: transform 0.3s ease, color 0.3s ease;
  
  &:hover {
    transform: scale(1.2);
    color: var(--secondary-color);
  }
`;

const Header: React.FC = () => {
  const props = useSpring({
    from: { opacity: 0, transform: 'translateY(-50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { tension: 300, friction: 10 },
  });

  return (
    <HeaderContainer style={props}>
      <DownloadLink href="src/assets/npm.pdf" target="_blank" aria-label="Baixar Currículo">
        <FaDownload />
        Baixar Currículo
      </DownloadLink>
      <div className="container">
        <Name>Natan Pereira Mendes</Name>
        <Title>Desenvolvedor Full Stack</Title>
        <SocialLinks>
          <IconWrapper href="https://github.com/NatanPereira09" target="_blank" aria-label="GitHub">
            <FaGithub />
          </IconWrapper>
          <IconWrapper href="https://www.instagram.com/natanmendes09/" target="_blank" aria-label="Instagram">
            <FaInstagram />
          </IconWrapper>
          <IconWrapper href="https://www.linkedin.com/in/natan-pereira-mendes-4548bb220/" target="_blank" aria-label="LinkedIn">
            <FaLinkedin />
          </IconWrapper>
        </SocialLinks>
      </div>
    </HeaderContainer>
  );
};

export default Header;
