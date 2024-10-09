import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const ContactSection = styled(animated.section)`
  padding: 4rem 0;
  background-color: var(--primary-color);
  color: white;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
`;

const ContactIcon = styled.div`
  font-size: 1.5rem;
  margin-right: 1rem;
`;

const ContactLink = styled.a`
  color: white;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: var(--secondary-color); /* Mudar cor no hover */
  }
`;

const Contact: React.FC = () => {
  const props = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { tension: 300, friction: 10 },
  });

  return (
    <ContactSection style={props}>
      <div className="container">
        <h2>Contato</h2>
        <ContactGrid>
          <ContactItem>
            <ContactIcon><FaEnvelope /></ContactIcon>
            <div>
              <h3>Email</h3>
              <ContactLink href="mailto:natanmendes09@outlook.com">
                natanmendes09@outlook.com
              </ContactLink>
            </div>
          </ContactItem>
          <ContactItem>
            <ContactIcon><FaPhone /></ContactIcon>
            <div>
              <h3>Telefone</h3>
              <ContactLink href="tel:+5543991802284">
                +55 43 99180 2284
              </ContactLink>
            </div>
          </ContactItem>
          <ContactItem>
            <ContactIcon><FaMapMarkerAlt /></ContactIcon>
            <div>
              <h3>Localização</h3>
              <p>Cambé, PR</p>
            </div>
          </ContactItem>
        </ContactGrid>
      </div>
    </ContactSection>
  );
};

export default Contact;
