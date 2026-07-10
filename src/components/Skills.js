import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Skills = () => {
  const ref = useIntersectionObserver();
  const skills = [
    { name: 'HTML & CSS', icon: 'fab fa-html5' },
    { name: 'JavaScript (ES6+)', icon: 'fab fa-js' },
    { name: 'React & Redux', icon: 'fab fa-react' },
    { name: 'Node.js & Express', icon: 'fab fa-node-js' },
    { name: 'MongoDB', icon: 'fas fa-database' },
    { name: 'Python & AI', icon: 'fab fa-python' },
    { name: 'Bootstrap & Tailwind', icon: 'fab fa-bootstrap' },
    { name: 'Git, CI/CD', icon: 'fab fa-git-alt' },
    { name: 'C++ & C#', icon: 'fas fa-code' },
    { name: 'SQL', icon: 'fas fa-server' },
    { name: 'MySQL', icon: 'fas fa-table' },
    { name: 'REST APIs', icon: 'fas fa-plug' },
  ];

  const marquee = [
    { name: 'React', icon: 'fab fa-react' },
    { name: 'Node.js', icon: 'fab fa-node-js' },
    { name: 'JavaScript', icon: 'fab fa-js' },
    { name: 'Python', icon: 'fab fa-python' },
    { name: 'MongoDB', icon: 'fas fa-database' },
    { name: 'Git', icon: 'fab fa-git-alt' },
    { name: 'Docker', icon: 'fab fa-docker' },
    { name: 'AWS', icon: 'fab fa-aws' },
    { name: 'Bootstrap', icon: 'fab fa-bootstrap' },
    { name: 'AI / ML', icon: 'fas fa-robot' },
  ];

  return (
    <section id="skills" className="section">
      <div ref={ref} className="container container-lg" data-animate>
        <h2>Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, i) => (
            <div key={skill.name} className="skill" data-reveal="zoom" data-reveal-delay={i * 55}>
              <i className={skill.icon}></i>
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="marquee" data-reveal>
        <div className="marquee-track">
          {[...marquee, ...marquee].map((m, i) => (
            <span className="marquee-chip" key={i}>
              <i className={m.icon}></i>{m.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
