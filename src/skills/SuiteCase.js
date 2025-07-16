import React, { useState } from 'react';
import './Suitcase.css';
import bootstrap from "../images/skills/bootstrap.svg";
import chrome from "../images/skills/chrome.svg";
import css3 from "../images/skills/css3.svg";
import git from "../images/skills/git.svg";
import github from "../images/skills/github.svg";
import html from "../images/skills/html.svg";
import js from "../images/skills/js.svg";
import react from "../images/skills/react.svg";
import redux from "../images/skills/redux.svg";

const Suitcase = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSuitcase = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="suitcase-container">
      <div className={`suitcase-body ${isOpen ? 'open' : ''}`} onClick={toggleSuitcase}>
        <div className="suitcase-handle"></div>
        <div className="suitcase-lock left-lock"></div>
        <div className="suitcase-lock right-lock"></div>

        <div className="suitcase-inside">
          <img src={html} alt="HTML" />
          <img src={css3} alt="CSS" />
          <img src={js} alt="JS" />
          <img src={react} alt="React" />
          {/* Add more logos as needed */}
        </div>
      </div>
    </div>
  );
};

export default Suitcase;
