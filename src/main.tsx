import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// Define your front page component
function FrontPage({ handlePortfolioClick, handleOtherPageClick }) {
  return (
    <div className="front-page">
      <h1>Welcome to My Portfolio Selection Page</h1>
      <div className="button-container">
        <button className="portfolio-button" onClick={handlePortfolioClick}>Go to HandMade Portfolio</button>
        <button className="other-page-button" onClick={handleOtherPageClick}>Go to Automated Portfolio</button>
      </div>
    </div>
  );
}

// Your existing components
import Header from './components/Header.tsx';
import TitleCard from './components/TitleCard.tsx';
import Projects from './components/Projects.tsx';
import Experience from './components/Experience.tsx';
import Skills from './components/Skills.tsx';
import Certifications from './components/Certifications.tsx';
import Contact from './components/Contact.tsx';
import PortfolioText from './components/PortfolioText.tsx';

function App() {
  const [showFrontPage, setShowFrontPage] = useState(true);

  const handlePortfolioClick = () => {
    setShowFrontPage(false);
  };

  const handleOtherPageClick = () => {
    window.location.href = 'https://sites.google.com/view/naveenkg/home'; // Change this to the URL of your other page
  };

  return (
    <React.StrictMode>
      
      {showFrontPage ? (
        <FrontPage
          handlePortfolioClick={handlePortfolioClick}
          handleOtherPageClick={handleOtherPageClick}
        />
      ) : (
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
      )}
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
