import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const steps = [
  { n: 1, icon: 'fas fa-laptop-code', title: 'Frontend', color: '#4dabf7', desc: 'Responsive, accessible interfaces built with React — pixel-perfect, fast and delightful to use.' },
  { n: 2, icon: 'fas fa-server', title: 'Backend', color: '#8b5cf6', desc: 'Robust APIs, authentication and business logic engineered with Node.js & Express.' },
  { n: 3, icon: 'fas fa-database', title: 'Database', color: '#10b981', desc: 'Clean data modeling, relationships and storage using MongoDB / SQL.' },
  { n: 4, icon: 'fas fa-rocket', title: 'Deployment', color: '#f59e0b', desc: 'CI/CD pipelines, cloud hosting and a secure, monitored go-live.' },
  { n: 5, icon: 'fas fa-bullhorn', title: 'Marketing', color: '#ec4899', desc: 'SEO, analytics and growth strategy so the product actually reaches users.' },
];

const Process = () => {
  const ref = useIntersectionObserver();
  const R = 44; // radius (% of circle box)

  return (
    <section id="process" className="section">
      <div ref={ref} className="container container-lg" data-animate>
        <h2>How I Build</h2>

        <div className="process-wrap">
          {/* Round diagram */}
          <div className="process-circle" data-reveal="zoom">
            <div className="process-ring" aria-hidden="true"></div>
            <div className="process-ring process-ring-2" aria-hidden="true"></div>

            <div className="process-hub">
              <i className="fas fa-code"></i>
              <span>Full-Stack<br />Flow</span>
            </div>

            {steps.map((s, i) => {
              const angle = (-90 + i * (360 / steps.length)) * (Math.PI / 180);
              const left = 50 + R * Math.cos(angle);
              const top = 50 + R * Math.sin(angle);
              return (
                <div
                  className="process-node"
                  key={s.n}
                  style={{ left: `${left}%`, top: `${top}%`, '--c': s.color }}
                >
                  <div className="process-node-icon" style={{ animationDelay: `${i * 0.4}s` }}>
                    <i className={s.icon}></i>
                    <span className="process-node-num">{s.n}</span>
                  </div>
                  <span className="process-node-title">{s.title}</span>
                </div>
              );
            })}
          </div>

          {/* Step-by-step explanation */}
          <div className="process-steps">
            {steps.map((s, i) => (
              <div
                className="process-step"
                key={s.n}
                style={{ '--c': s.color }}
                data-reveal="left"
                data-reveal-delay={i * 90}
              >
                <div className="process-step-badge">
                  <i className={s.icon}></i>
                </div>
                <div className="process-step-body">
                  <h5><span className="process-step-n">Step {s.n}</span> — {s.title}</h5>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
