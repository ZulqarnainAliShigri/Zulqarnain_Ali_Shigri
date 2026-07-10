import React, { useEffect, useRef, useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Projects = () => {
  const ref = useIntersectionObserver();
  const projects = [
    {
      title: 'Al-Qavi Cosmetics',
      desc: 'Premium B2B cosmetics wholesale portal featuring catalog browsing and bulk checkout flows.',
      image: '/images/alqavi_cosmetics.png',
      url: 'https://alqavitraders.com/customer',
      tags: ['Next.js', 'E-Commerce', 'B2B'],
      gradient: 'linear-gradient(135deg,#ec4899,#8b5cf6)'
    },
    {
      title: 'ADO Travel',
      desc: 'A modern & high-performance booking portal for all-inclusive holidays with real-time deal comparisons.',
      image: '/images/ado_travel_mockup.png',
      url: 'https://ado.persuut.com',
      tags: ['React', 'Travel Tech', 'Booking API'],
      gradient: 'linear-gradient(135deg,#0ea5e9,#22d3ee)'
    },
    {
      title: 'Ticketvoordeel',
      desc: 'Sun holiday booking engine offering package deals and flights integrated with live pricing.',
      image: '/images/ticketvoordeel.png',
      url: 'https://ticketvoordeel.persuut.com/',
      tags: ['React', 'Flight Search', 'APIs'],
      gradient: 'linear-gradient(135deg,#f59e0b,#ef4444)'
    },
    {
      title: 'Signalscope',
      desc: 'AI-powered prediction engine analyzing historical crypto data for live forecasts with 95% accuracy.',
      image: '/images/signalscope.png',
      url: 'http://signalscope.persuut.com/',
      tags: ['AI', 'Crypto', 'Predictive Model'],
      gradient: 'linear-gradient(135deg,#10b981,#0ea5e9)'
    },
    {
      title: 'Coderaft AI',
      desc: 'AI-driven development platform that helps teams design, build and ship software faster with intelligent tooling.',
      image: 'https://image.thum.io/get/width/700/crop/440/noanimate/https://coderaft.ai/',
      url: 'https://coderaft.ai/',
      tags: ['AI', 'SaaS', 'Next.js'],
      gradient: 'linear-gradient(135deg,#6366f1,#06b6d4)'
    },
    {
      title: 'Ideal Tech',
      desc: 'A sleek corporate technology website with modern animations, clean UI and fully responsive layouts.',
      image: 'https://image.thum.io/get/width/700/crop/440/noanimate/https://ideal-tech.vercel.app/',
      url: 'https://ideal-tech.vercel.app/',
      tags: ['React', 'Corporate', 'UI/UX'],
      gradient: 'linear-gradient(135deg,#3b82f6,#8b5cf6)'
    },
    {
      title: 'Pakistan Travellers',
      desc: 'Travel & tour booking platform showcasing destinations, packages and seamless enquiry flows.',
      image: 'https://image.thum.io/get/width/700/crop/440/noanimate/https://pakistantravellers.com/',
      url: 'https://pakistantravellers.com/',
      tags: ['Travel', 'Booking', 'Web'],
      gradient: 'linear-gradient(135deg,#14b8a6,#f59e0b)'
    }
  ];

  const count = projects.length;
  const items = [...projects, ...projects]; // duplicate for seamless loop
  const GAP = 20;

  const trackRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [step, setStep] = useState(360);
  const [animate, setAnimate] = useState(true);
  const [paused, setPaused] = useState(false);

  // Measure card width + gap for pixel-accurate steps
  useEffect(() => {
    const measure = () => {
      const first = trackRef.current && trackRef.current.children[0];
      if (first) setStep(first.offsetWidth + GAP);
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  // Autoplay every 2 seconds
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (paused || prefersReduced) return;
    const id = setInterval(() => setIndex(i => i + 1), 2000);
    return () => clearInterval(id);
  }, [paused]);

  // Re-enable transition on next frame after an instant jump
  useEffect(() => {
    if (!animate) {
      const id = requestAnimationFrame(() => setAnimate(true));
      return () => cancelAnimationFrame(id);
    }
  }, [animate]);

  const handleTransitionEnd = () => {
    if (index >= count) {
      setAnimate(false);
      setIndex(index - count);
    }
  };

  const goNext = () => setIndex(i => i + 1);

  const goPrev = () => {
    if (index <= 0) {
      setAnimate(false);
      setIndex(count);
      requestAnimationFrame(() => requestAnimationFrame(() => {
        setAnimate(true);
        setIndex(count - 1);
      }));
    } else {
      setIndex(i => i - 1);
    }
  };

  const renderCard = (project, key) => (
    <div key={key} className="project">
      <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-media" style={{ background: project.gradient }}>
        <span className="project-fallback">
          <i className="fas fa-globe"></i>
          <span>{project.title}</span>
        </span>
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
        />
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
  );

  return (
    <section id="projects" className="section">
      <div ref={ref} className="container container-lg" data-animate>
        <h2>Selected Projects</h2>
      </div>

      <div
        className="projects-carousel"
        data-reveal
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <button className="carousel-nav prev" onClick={goPrev} aria-label="Previous project">
          <i className="fas fa-chevron-left"></i>
        </button>

        <div
          className="projects-track"
          ref={trackRef}
          onTransitionEnd={handleTransitionEnd}
          style={{
            transform: `translateX(-${index * step}px)`,
            transition: animate ? 'transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)' : 'none'
          }}
        >
          {items.map((p, i) => renderCard(p, i))}
        </div>

        <button className="carousel-nav next" onClick={goNext} aria-label="Next project">
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </section>
  );
};

export default Projects;
