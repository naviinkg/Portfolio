import React from 'react';
import { Link } from 'react-router-dom';
import BreakoutGame from './components/BreakoutGame'; // Make sure this path is correct
import './FrontPage.css';

const FrontPage: React.FC = () => {
  return (
    <div className="front-page">
      <h1>Choose a Portfolio</h1>
      
      <div className="button-container">
        <Link to="/Portfolio/handmade-portfolio" className="btn">
          Handmade Portfolio
        </Link>
        <Link to="https://sites.google.com/view/naveenkg/home" className="btn">
          Automated Portfolio
        </Link>
      </div>
      <div className="game-container">
        <BreakoutGame />
      </div>
    </div>
  );
};

export default FrontPage;
