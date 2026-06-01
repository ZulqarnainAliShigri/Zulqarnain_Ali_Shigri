import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Services = () => {
  const ref = useIntersectionObserver();
  const services = [
    {
      title: 'Full-Stack Web Development',
      desc: 'End-to-end web apps with React frontend and Node/Express backend. Focus on performance and UX.'
    },
    {
      title: 'AI Integration',
      desc: 'Build intelligent features — chatbots, recommendation systems, and automation using ML toolkits and APIs.'
    },
    {
      title: 'API & Backend Engineering',
      desc: 'Design RESTful APIs, authentication, database modeling and deployment-ready backends.'
    },
    {
      title: 'Consulting & Mentorship',
      desc: 'Architect systems, review code, and guide teams or individuals in building better software.'
    }
  ];

  return (
    <section id="services" className="section bg">
      <div ref={ref} className="container container-lg" data-animate>
        <h2>Services</h2>
        <div className="services">
          {services.map(service => (
            <div key={service.title} className="service">
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