// src/App.jsx

import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/Navbar';
import { Home, About, Works, Contact, CaseStudies } from './components/pages';
import Terminal from './components/Terminal';
import CaseStudiesDetail from './components/CaseStudiesDetails';
import './i18n';
import { useTranslation } from 'react-i18next';
import useTextShadow from './textShadow'; // Importa il custom hook

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fas);
library.add(fab);

function App() {
  useTextShadow(); // Usa il custom hook
  
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [showTerminal, setShowTerminal] = useState(false);

  const { t } = useTranslation();

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    document.addEventListener('mousemove', updateCursorPosition);

    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
    };
  }, []);

  useEffect(() => {
    const updateCursorPositionOnScroll = () => {
      setCursorPosition((prevPosition) => ({
        ...prevPosition,
        y: prevPosition.y + window.scrollY,
      }));
    };
    document.addEventListener('scroll', updateCursorPositionOnScroll);

    return () => {
      document.removeEventListener('scroll', updateCursorPositionOnScroll);
    };
  }, []);

  const toggleTerminal = () => {
    setShowTerminal(!showTerminal);
  };

  return (
    <div className="App bg-zinc-950 h-screen w-screen overflow-y-scroll px-10">
      <div className="custom-cursor" style={{ left: cursorPosition.x, top: cursorPosition.y }}></div>
      <Navbar />
      <button
        onClick={toggleTerminal}
        className="fixed bottom-10 right-10 bg-green-600 text-green-50 px-4 py-2 rounded hover:bg-green-50 hover:text-green-600 terminalButton"
      >
        {t('app.terminal')}
      </button>
      {showTerminal && <Terminal onClose={toggleTerminal} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/works" element={<Works />} />
        <Route path="/casestudies" element={<CaseStudies />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/casestudy/:id" element={<CaseStudiesDetail />} />
      </Routes>
    </div>
  );
}

export default App;