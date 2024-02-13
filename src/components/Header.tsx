import 'bootstrap/dist/css/bootstrap.css';
import React, { useState, useEffect } from 'react';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import '../css/Header.css';



function Header() {
    return (
        <div className='Navbar' style = {{position: 'fixed', top: 0, width: '100%', zIndex: 1000 }}>     
                <JustifiedExample/>
        </div>
    )
}


function JustifiedExample() {
  const [activeTab, setActiveTab] = useState("home");

  useEffect(() => {
    // Scroll to the specified section when activeTab changes
    const section = document.getElementById(activeTab);
    console.log("activeTab = "+activeTab);
    console.log("section = "+section);
    
    if (section) {
      window.scrollTo({
        top: section.offsetTop-120,
        behavior: "smooth" // Smooth scrolling animation
      });
    }
  }, [activeTab]);

  const handleSelect = (tabKey:string | null) => {
    console.log(tabKey)
    if (typeof tabKey === "string") {
      setActiveTab(tabKey);
    }
  };

  return (
    <Tabs
      defaultActiveKey="home"
      activeKey={activeTab}
      onSelect={handleSelect}
      justify
      variant='pills'
    >
      <Tab eventKey="home" title={<span style={{ color: 'blanchedalmond' }}>Home</span>} >
      </Tab>
      <Tab eventKey="projects" title={<span style={{ color: 'blanchedalmond' }}>Projects</span>}>
      </Tab>
      <Tab eventKey="experiences" title={<span style={{ color: 'blanchedalmond' }}>Experiences</span>}>
      </Tab>
      <Tab eventKey="skills" title={<span style={{ color: 'blanchedalmond' }}>Skills</span>} >
      </Tab>
      <Tab eventKey="certifications" title={<span style={{ color: 'blanchedalmond' }}>Certifications</span>} >
      </Tab>
      <Tab eventKey="contact" title={<span style={{ color: 'blanchedalmond' }}>Contact</span>} >
      </Tab>
    </Tabs>
  );
}


export default Header;