import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Projects = () => {
  const ref = useIntersectionObserver();
  const projects = [
    {
      title: 'Al-Qavi Cosmetics',
      desc: 'Premium B2B cosmetics wholesale portal featuring catalog browsing and bulk checkout flows.',
      image: '/images/alqavi_cosmetics.png',
      url: 'https://alqavitraders.com/customer',
      tags: ['Next.js', 'E-Commerce', 'B2B']
    },
    {
      title: 'ADO Travel',
      desc: 'A modern & high-performance booking portal for all-inclusive holidays with real-time deal comparisons.',
      image: '/images/ado_travel_mockup.png',
      url: 'https://ado.persuut.com',
      tags: ['React', 'Travel Tech', 'Booking API']
    },
    {
      title: 'Ticketvoordeel',
      desc: 'Sun holiday booking engine offering package deals and flights integrated with live pricing.',
      image: '/images/ticketvoordeel.png',
      url: 'https://ticketvoordeel.persuut.com/',
      tags: ['React', 'Flight Search', 'APIs']
    },
    {
      title: 'Signalscope',
      desc: 'AI-powered prediction engine analyzing historical crypto data for live forecasts with 95% accuracy.',
      image: '/images/signalscope.png',
      url: 'http://signalscope.persuut.com/',
      tags: ['AI', 'Crypto', 'Predictive Model']
    }
  ];

  return (
    <section id="projects" className="section">
      <div ref={ref} className="container container-lg" data-animate>
        <h2>Selected Projects</h2>
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.title} className="project">
              <a href={project.url} target="_blank" rel="noopener noreferrer" style={{ display: 'block', overflow: 'hidden' }}>
                <img src={project.image} alt={project.title} />
              </a>
              <div className="project-body">
                <a href={project.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                  <h5 style={{ color: 'var(--text)', margin: '0 0 6px', transition: 'color 0.2s ease' }} className="project-title-hover">{project.title}</h5>
                </a>
                <p>{project.desc}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '14px', flexWrap: 'wrap', gap: '8px' }}>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    {project.tags.map(tag => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="btn-ghost" style={{ padding: '6px 12px', fontSize: '12px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                    Live Demo ↗
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;