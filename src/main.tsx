
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './main.css';
import FrontPage from './FrontPage.tsx';

import Header from './components/Header.tsx';
import TitleCard from './components/TitleCard.tsx';
import Projects from './components/Projects.tsx';
import Experience from './components/Experience.tsx';
import Skills from './components/Skills.tsx';
import Certifications from './components/Certifications.tsx';
import Contact from './components/Contact.tsx';
import PortfolioText from './components/PortfolioText.tsx';


function HandMadePortfolio() {
  return (
    <>
      <Header />
      <TitleCard />
      <Projects />
      <Experience />
      <Skills />
      <Certifications />
      <Contact />
      <PortfolioText />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Portfolio/" element={<FrontPage />} />
        <Route path="/Portfolio/handmade-portfolio" element={<HandMadePortfolio />} />
      </Routes>
    </Router>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
