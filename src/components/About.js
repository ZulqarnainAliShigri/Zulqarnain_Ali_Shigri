import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import AnimatedCounter from './AnimatedCounter';
import '../styles/App.css'

const About = () => {
  const ref = useIntersectionObserver();

  const stats = [
    { end: 20, suffix: '+', label: 'Projects Delivered' },
    { end: 4, suffix: '+', label: 'Years Experience' },
    { end: 15, suffix: '+', label: 'Technologies' },
    { end: 100, suffix: '%', label: 'Client Satisfaction' },
  ];

  const highlights = [
    { icon: 'fas fa-layer-group', text: 'Full-Stack MERN' },
    { icon: 'fas fa-robot', text: 'AI Integration' },
    { icon: 'fas fa-gauge-high', text: 'Performance First' },
    { icon: 'fas fa-mobile-screen', text: 'Responsive Design' },
    { icon: 'fas fa-shield-halved', text: 'Secure APIs' },
    { icon: 'fas fa-pen-ruler', text: 'Clean UI/UX' },
  ];

  return (
    <section id="about" className="section">
      <div ref={ref} className="container container-lg" data-animate>
        <h2>Who I Am</h2>

        <div className="about-card card-glass" data-reveal>
          <p style={{ color: 'var(--muted)', margin: 0, fontSize: '16px', lineHeight: 1.8 }}>
            I am <strong style={{ color: 'var(--text)' }}>Zulqarnain</strong>, a Web Developer, MERN Developer and AI Developer.
            I specialize in building scalable full‑stack applications, integrating AI features and delivering clean,
            high-performance user experiences. From concept to deployment, I turn complex problems into elegant,
            production-ready solutions that businesses can rely on.
          </p>

          <div className="highlight-chips">
            {highlights.map((h, i) => (
              <span className="highlight-chip" key={h.text} data-reveal data-reveal-delay={i * 70}>
                <i className={h.icon}></i>{h.text}
              </span>
            ))}
          </div>
        </div>

        <div className="stats-grid">
          {stats.map((s, i) => (
            <div className="stat-card" key={s.label} data-reveal data-reveal-delay={i * 110}>
              <div className="stat-number">
                <AnimatedCounter end={s.end} suffix={s.suffix} />
              </div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
