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
  const [activeTab, setActiveTab] = useState<string>("home");
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // Handle window resize to toggle mobile view
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

  // Handle scroll events to update the active tab
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observerOptions = {
      rootMargin: '0px',
      threshold: 0.5 // Adjust this value to determine when a section is considered in view
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveTab(entry.target.getAttribute("id") || "home");
        }
      });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  // Scroll to the section when a tab is selected
  useEffect(() => {
    if (activeTab === "resume") {
      window.open("https://drive.google.com/file/d/1ggxjW6UJu05E5tlQ9DPGFpEMOF_mWsHL/view?usp=sharing", "_blank");
    } else {
      const section = document.getElementById(activeTab);
      if (section) {
        window.scrollTo({
          top: section.offsetTop - 60, // Adjust for header height
          behavior: "smooth"
        });
      }
    }
  }, [activeTab]);

  const handleSelect = (tabKey: string | null) => {
    setActiveTab(tabKey || "home");
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
        <Dropdown.Item eventKey="resume">Resume</Dropdown.Item> {/* New Resume item */}
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
      <Tab eventKey="resume" title={<span>Resume</span>} /> {/* New Resume tab */}
    </Tabs>
  );
}

export default Header;
