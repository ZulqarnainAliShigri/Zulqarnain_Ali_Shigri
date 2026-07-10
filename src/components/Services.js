import React, { useEffect, useRef, useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Services = () => {
  const ref = useIntersectionObserver();
  const services = [
    { icon: 'fas fa-code', title: 'Full-Stack Web Development', desc: 'End-to-end web apps with a React frontend and Node/Express backend — architected for speed, scale, and a flawless user experience.' },
    { icon: 'fas fa-robot', title: 'AI Integration', desc: 'Intelligent features that set products apart — chatbots, recommendation systems, and automation powered by modern ML toolkits and APIs.' },
    { icon: 'fas fa-server', title: 'API & Backend Engineering', desc: 'Robust RESTful APIs, secure authentication, clean database modeling, and deployment-ready backends built to handle real traffic.' },
    { icon: 'fas fa-shopping-cart', title: 'E-Commerce Solutions', desc: 'Conversion-focused storefronts and B2B portals with catalog browsing, bulk checkout, payments, and live inventory sync.' },
    { icon: 'fas fa-gauge-high', title: 'Performance Optimization', desc: 'Faster load times, better Core Web Vitals, and smoother interactions through code-splitting, caching, and smart refactoring.' },
    { icon: 'fas fa-people-group', title: 'Consulting & Mentorship', desc: 'Architecture reviews, code audits, and hands-on guidance to help teams and individuals ship better software with confidence.' },
    { icon: 'fas fa-pen-ruler', title: 'UI/UX Design & Prototyping', desc: 'Wireframes, design systems, and interactive prototypes that turn ideas into intuitive, on-brand, conversion-ready interfaces.' },
    { icon: 'fas fa-mobile-screen-button', title: 'Responsive & PWA Apps', desc: 'Mobile-first, installable progressive web apps that feel native and work flawlessly across every device and screen size.' },
    { icon: 'fas fa-screwdriver-wrench', title: 'Maintenance & Support', desc: 'Ongoing updates, bug fixes, monitoring, and continuous improvements that keep your product healthy, fast, and secure.' },
  ];

  const count = services.length;
  const items = [...services, ...services];
  const GAP = 20;

  const trackRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [step, setStep] = useState(360);
  const [animate, setAnimate] = useState(true);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const measure = () => {
      const first = trackRef.current && trackRef.current.children[0];
      if (first) setStep(first.offsetWidth + GAP);
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (paused || prefersReduced) return;
    const id = setInterval(() => setIndex(i => i + 1), 2000);
    return () => clearInterval(id);
  }, [paused]);

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

  const renderCard = (service, key, i) => (
    <div key={key} className="service">
      <span className="service-index">{String((i % count) + 1).padStart(2, '0')}</span>
      <div className="service-icon">
        <i className={service.icon}></i>
      </div>
      <h5>{service.title}</h5>
      <p>{service.desc}</p>
    </div>
  );

  return (
    <section id="services" className="section">
      <div ref={ref} className="container container-lg" data-animate>
        <h2>Services</h2>
      </div>

      <div
        className="services-carousel"
        data-reveal
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <button className="carousel-nav prev" onClick={goPrev} aria-label="Previous service">
          <i className="fas fa-chevron-left"></i>
        </button>

        <div
          className="services-track"
          ref={trackRef}
          onTransitionEnd={handleTransitionEnd}
          style={{
            transform: `translateX(-${index * step}px)`,
            transition: animate ? 'transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)' : 'none'
          }}
        >
          {items.map((s, i) => renderCard(s, i, i))}
        </div>

        <button className="carousel-nav next" onClick={goNext} aria-label="Next service">
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </section>
  );
};

export default Services;
