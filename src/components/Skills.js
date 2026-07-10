import React from 'react';

const Skills = () => {
  const marquee = [
    { name: 'HTML5', icon: 'fab fa-html5', color: '#e44d26' },
    { name: 'CSS3', icon: 'fab fa-css3-alt', color: '#2965f1' },
    { name: 'JavaScript', icon: 'fab fa-js', color: '#f0db4f' },
    { name: 'TypeScript', icon: 'fas fa-code', color: '#3178c6' },
    { name: 'React', icon: 'fab fa-react', color: '#61dafb' },
    { name: 'Redux', icon: 'fas fa-layer-group', color: '#764abc' },
    { name: 'Node.js', icon: 'fab fa-node-js', color: '#83cd29' },
    { name: 'Express', icon: 'fas fa-server', color: '#68a063' },
    { name: 'Next.js', icon: 'fas fa-forward', color: '#cfd2d6' },
    { name: 'Python', icon: 'fab fa-python', color: '#4b8bbe' },
    { name: 'Java', icon: 'fab fa-java', color: '#f89820' },
    { name: 'C++', icon: 'fas fa-code', color: '#00599c' },
    { name: 'C#', icon: 'fas fa-hashtag', color: '#9b4f96' },
    { name: 'MongoDB', icon: 'fas fa-database', color: '#4faa41' },
    { name: 'MySQL', icon: 'fas fa-table', color: '#00758f' },
    { name: 'SQL', icon: 'fas fa-server', color: '#e0982c' },
    { name: 'Tailwind', icon: 'fas fa-wind', color: '#38bdf8' },
    { name: 'Bootstrap', icon: 'fab fa-bootstrap', color: '#7952b3' },
    { name: 'Sass', icon: 'fab fa-sass', color: '#cc6699' },
    { name: 'Git', icon: 'fab fa-git-alt', color: '#f05032' },
    { name: 'GitHub', icon: 'fab fa-github', color: '#c9d1d9' },
    { name: 'Docker', icon: 'fab fa-docker', color: '#2496ed' },
    { name: 'AWS', icon: 'fab fa-aws', color: '#ff9900' },
    { name: 'REST APIs', icon: 'fas fa-plug', color: '#14b8a6' },
    { name: 'Figma', icon: 'fab fa-figma', color: '#f24e1e' },
    { name: 'AI / ML', icon: 'fas fa-robot', color: '#4dabf7' },
  ];

  return (
    <section id="skills" className="marquee-band">
      <div className="marquee" data-reveal>
        <div className="marquee-track">
          {[...marquee, ...marquee].map((m, i) => (
            <span className="marquee-chip" key={i} style={{ '--c': m.color }}>
              <i className={m.icon}></i>{m.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
