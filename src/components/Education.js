import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import '../styles/App.css'

const Education = () => {
  const ref = useIntersectionObserver();
  const education = [
    {
      institution: 'Virtual University',
      period: '2022-Present',
      desc: 'Bachelor of Science in Software Engineering (Current CGPA 3.4)'
    },
    {
      institution: 'IMCB I/IO ISLAMABAD',
      period: '2020-2022',
      desc: 'Intermediate in Computer Science (Pass with 73%)'
    }
  ];

  return (
    <section id="education" className="section">
      <div ref={ref} className="container container-lg" data-animate>
        <h2>Education</h2>
        <div className="timeline">
          {education.map((edu, index) => (
            <div key={index} className="timeline-item">
              <h6>{edu.institution}</h6>
              <p>{edu.period} · {edu.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;