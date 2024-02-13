import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Header from './components/Header.tsx'
import TitleCard from './components/TitleCard.tsx'
import './index.css';
import Projects from './components/Projects.tsx'
import Experience from './components/Experience.tsx'
import Skills from './components/Skills.tsx'
import Certifications from './components/Certifications.tsx'
import Contact from './components/Contact.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>

    {/* <App /> */}
    <Header />
    <TitleCard/>
    <Projects/>
    <Experience/>
    <Skills/>
    <Certifications/>
    <Contact/>
  
  </React.StrictMode>,
)
