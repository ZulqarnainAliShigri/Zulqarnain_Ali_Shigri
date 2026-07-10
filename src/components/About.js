import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import '../styles/App.css'

const About = () => {
  const ref = useIntersectionObserver();

  return (
    <section id="about" className="section">
      <div ref={ref} className="container container-lg" data-animate>
        <h2>Who I Am</h2>
        <div className="card-glass about-card">
          <p style={{color: 'var(--muted)', margin: 0, fontSize: '16px', lineHeight: 1.75}}>
            I am <strong style={{color: 'var(--text)'}}>Zulqarnain</strong>, a Web Developer, MERN Developer and AI Developer.
            I specialize in building scalable full‑stack applications, integrating AI features and delivering clean user experiences.
            I enjoy turning complex problems into elegant solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;