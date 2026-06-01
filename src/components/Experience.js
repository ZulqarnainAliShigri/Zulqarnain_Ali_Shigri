import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import '../styles/App.css'

const Experience = () => {
  const ref = useIntersectionObserver();
  const experiences = [
    {
      title: 'Full Stack Web Developer — Persuut',
      period: '2024 — Present',
      desc: 'Developed and optimized high-scale travel platforms (ADO Travel, Ticketvoordeel) and the Signalscope AI crypto prediction system. Integrated flight booking APIs, live pricing engines, AI market data models, and secure checkout solutions.'
    },
    {
      title: 'Web Application Developer — Al-Qavi Traders',
      period: '2024',
      desc: 'Engineered a premium B2B wholesale cosmetics e-commerce portal, building optimized catalog navigation, bulk ordering systems, and real-time inventory sync.'
    },
    {
      title: 'Front-end Developer — Techsolab',
      period: '2020 — 2024',
      desc: 'Built highly responsive web interfaces, transformed design mockups into interactive web pages using HTML5, CSS3, JavaScript, Bootstrap, and jQuery, and optimized load speeds.'
    },
    {
      title: 'Back-end & Database Developer — Techsolab',
      period: '2023 — 2024',
      desc: 'Programmed server-side logic using C++ and C# for database-driven software. Designed SQL database schemas, optimized queries, and implemented RESTful API web services.'
    }
  ];

  return (
    <section id="experience" className="section">
      <div ref={ref} className="container container-lg" data-animate>
        <h2>Experience</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <h6>{exp.title}</h6>
              <p>{exp.period} · {exp.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;