import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Skills = () => {
  const ref = useIntersectionObserver();
  const skills = [
    'HTML & CSS', 'JavaScript (ES6+)', 'React & Redux', 'Node.js & Express', 
    'MongoDB', 'Python & AI', 'Bootstrap & Tailwind', 'Git, CI/CD', 
    'C++ & C#', 'SQL', 'MySQL'
  ];

  return (
    <section id="skills" className="section">
      <div ref={ref} className="container container-lg" data-animate>
        <h2>Skills</h2>
        <div className="skills-grid">
          {skills.map(skill => (
            <div key={skill} className="skill">{skill}</div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;