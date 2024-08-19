import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
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


// Define your front page component
// function FrontPage() {
//   return (
//     <div className="front-page">
//       <h1>Welcome to My Portfolio Selection Page</h1>
//       <div className="button-container">
//         <Link to="/Portfolio/handmade-portfolio">
//           <button className="portfolio-button">Go to HandMade Portfolio</button>
//         </Link>
//         <a href="https://sites.google.com/view/naveenkg/home">
//           <button className="other-page-button">Go to Automated Portfolio</button>
//         </a>
//       </div>
//     </div>
//   );
// }

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
