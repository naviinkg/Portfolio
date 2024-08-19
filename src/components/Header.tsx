import 'bootstrap/dist/css/bootstrap.css';
import { useState, useEffect } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Dropdown from 'react-bootstrap/Dropdown';
import '../css/Header.css';

function Header() {
    return (
        <div className='Navbar'>
            <ResponsiveTabs />
        </div>
    );
}

function ResponsiveTabs() {
  const [activeTab, setActiveTab] = useState("home");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const section = document.getElementById(activeTab);

    if (section) {
      window.scrollTo({
        top: section.offsetTop - 120,
        behavior: "smooth"
      });
    }
  }, [activeTab]);

  const handleSelect = (tabKey: string | null) => {
    if (typeof tabKey === "string") {
      setActiveTab(tabKey);
    }
  };

  return isMobile ? (
    <Dropdown onSelect={handleSelect}>
      <Dropdown.Toggle className="nav-dropdown" variant="dark" id="dropdown-basic">
        {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item eventKey="home">Home</Dropdown.Item>
        <Dropdown.Item eventKey="projects">Projects</Dropdown.Item>
        <Dropdown.Item eventKey="experiences">Experiences</Dropdown.Item>
        <Dropdown.Item eventKey="skills">Skills</Dropdown.Item>
        <Dropdown.Item eventKey="certifications">Certifications</Dropdown.Item>
        <Dropdown.Item eventKey="contact">Contact</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  ) : (
    <Tabs
      defaultActiveKey="home"
      activeKey={activeTab}
      onSelect={handleSelect}
      justify
      variant='pills'
      className="nav-tabs"
    >
      <Tab eventKey="home" title={<span>Home</span>} />
      <Tab eventKey="projects" title={<span>Projects</span>} />
      <Tab eventKey="experiences" title={<span>Experiences</span>} />
      <Tab eventKey="skills" title={<span>Skills</span>} />
      <Tab eventKey="certifications" title={<span>Certifications</span>} />
      <Tab eventKey="contact" title={<span>Contact</span>} />
    </Tabs>
  );
}

export default Header;
