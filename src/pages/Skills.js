// src/pages/Skills.js
import React from "react";
import "../styles/Skills.css"; // Assuming you have a Skills.css file for styling

function Skills() {
  return (
    <div className="skills">
      <div className="technical-skills">
        <h3>Technical</h3>
        <p>
          Figma, Adobe XD, Sketch, InVision, Canva, WordPress, HTML, CSS,
          Android Studio, Java, Python, MySQL
        </p>
      </div>
      <div className="design-skills">
        <h3>Design</h3>
        <p>
          Information Architecture, Wireframing, UI graphics, Prototyping,
          Design Thinking, Content Strategy, Storytelling, Responsive Web, App
          Design, Design for Accessibility, Human-Centered Design
        </p>
      </div>
      <div className="research-skills">
        <h3>Research</h3>
        <p>
          Data Analysis, Task Analysis & Persona Hypothesis, Usability Testing,
          User Research, Persona Development, User Journey Mapping, User Flow,
          A/B Testing and Experiment, Cognitive Walkthrough
        </p>
      </div>
      <div className="collaboration-skills">
        <h3>Collaboration</h3>
        <p>Agile Development, Monday, Asana, Slack</p>
      </div>
    </div>
  );
}

export default Skills;
