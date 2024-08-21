import React, { useState, useEffect } from 'react';
import '../css/PortfolioText.css'; // Import CSS file for animations

const PortfolioText: React.FC = () => {
    const roles = ['Software Developer', 'Full Stack Developer', 'Data Science Graduate', 'Teaching Assistant'];
    const [roleIndex, setRoleIndex] = useState<number>(0);
    const [isFading, setIsFading] = useState<boolean>(false);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setIsFading(true);
        setTimeout(() => {
          setRoleIndex(prevIndex => (prevIndex + 1) % roles.length);
          setIsFading(false);
        }, 500); // Change role after fade-out animation (500 milliseconds)
      }, 3000); // Change role every 3 seconds (3000 milliseconds)
      return () => clearInterval(interval); // Cleanup function to clear the interval when the component unmounts
    }, []); // Empty dependency array ensures the effect runs only once after the initial render
  
    return (
      <div>
        <div id="portfolioText" className={isFading ? "fade-out" : "fade-in"}>
          <span style={{ textAlign: 'center', marginTop: 'calc(50px + 2%)', paddingLeft: '5%', paddingRight: '5%' }}>I am a {roles[roleIndex]}</span>
        </div>
      </div>
    );
  };
  
  export default PortfolioText;