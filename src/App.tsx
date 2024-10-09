import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.main`
  flex: 1;
  padding: 2rem 0;
`;

const App: React.FC = () => {
  return (
    <AppContainer>
      <Header />
      <Main>
        <About />
        <Experience />
        <Skills />
        <Contact />
      </Main>
    </AppContainer>
  );
};

export default App;