import logo from './logo.svg';
import './App.css';
import Navbar from './page/Navbar';
import About from './page/About';
import { Skills } from './page/Skils';
import Project from './page/Project';
import Education from './page/Education';
import Contact from './page/Contact';
import Endpoint from './page/Endpoint';
import Experience from './page/Experience';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from './utils/Themes';
import styled from "styled-components";


function App() {

  const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`;

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Navbar />
        <Body>
          <About />
          <Skills />
          <Experience />
          <Project />
          <Education />
          <Contact />
          <Endpoint />
        </Body>
      </ThemeProvider>
    </>
  );
}

export default App;
