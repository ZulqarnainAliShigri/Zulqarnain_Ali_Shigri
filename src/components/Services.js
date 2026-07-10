import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Services = () => {
  const ref = useIntersectionObserver();
  const services = [
    {
      icon: 'fas fa-code',
      title: 'Full-Stack Web Development',
      desc: 'End-to-end web apps with a React frontend and Node/Express backend — architected for speed, scale, and a flawless user experience.'
    },
    {
      icon: 'fas fa-robot',
      title: 'AI Integration',
      desc: 'Intelligent features that set products apart — chatbots, recommendation systems, and automation powered by modern ML toolkits and APIs.'
    },
    {
      icon: 'fas fa-server',
      title: 'API & Backend Engineering',
      desc: 'Robust RESTful APIs, secure authentication, clean database modeling, and deployment-ready backends built to handle real traffic.'
    },
    {
      icon: 'fas fa-shopping-cart',
      title: 'E-Commerce Solutions',
      desc: 'Conversion-focused storefronts and B2B portals with catalog browsing, bulk checkout, payments, and live inventory sync.'
    },
    {
      icon: 'fas fa-gauge-high',
      title: 'Performance Optimization',
      desc: 'Faster load times, better Core Web Vitals, and smoother interactions through code-splitting, caching, and smart refactoring.'
    },
    {
      icon: 'fas fa-people-group',
      title: 'Consulting & Mentorship',
      desc: 'Architecture reviews, code audits, and hands-on guidance to help teams and individuals ship better software with confidence.'
    }
  ];

  return (
    <section id="services" className="section bg">
      <div ref={ref} className="container container-lg" data-animate>
        <h2>Services</h2>
        <div className="services">
          {services.map((service, i) => (
            <div key={service.title} className="service" data-reveal data-reveal-delay={i * 90}>
              <div className="service-icon">
                <i className={service.icon}></i>
              </div>
              <h5>{service.title}</h5>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
