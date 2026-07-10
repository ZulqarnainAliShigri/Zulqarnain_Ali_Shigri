import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Timeline = ({ items }) => (
  <div className="timeline">
    {items.map((item, i) => (
      <div key={i} className="timeline-item" data-reveal="left" data-reveal-delay={i * 80}>
        <span className="timeline-period">{item.period}</span>
        <h6>{item.title}</h6>
        <span className="timeline-org">{item.org}</span>
        <p>{item.desc}</p>
      </div>
    ))}
  </div>
);

const Resume = () => {
  const ref = useIntersectionObserver();

  const experiences = [
    { title: 'Full Stack Web Developer', org: 'Persuut', period: '2024 — Present', desc: 'Built and optimized high-scale travel platforms (ADO Travel, Ticketvoordeel) and the Signalscope AI crypto prediction system — flight APIs, live pricing engines, AI market models and secure checkout.' },
    { title: 'Web Application Developer', org: 'Al-Qavi Traders', period: '2024', desc: 'Engineered a premium B2B wholesale cosmetics e-commerce portal with optimized catalog navigation, bulk ordering and real-time inventory sync.' },
    { title: 'Front-end Developer', org: 'Techsolab', period: '2020 — 2024', desc: 'Built highly responsive interfaces, converted design mockups into interactive pages with HTML5, CSS3, JavaScript, Bootstrap & jQuery, and optimized load speeds.' },
    { title: 'Back-end & Database Developer', org: 'Techsolab', period: '2023 — 2024', desc: 'Programmed server-side logic in C++ and C#, designed SQL schemas, optimized queries and implemented RESTful API web services.' },
  ];

  const education = [
    { title: 'BS Software Engineering', org: 'Virtual University', period: '2022 — Present', desc: 'Current CGPA 3.4 — focused on full-stack development, algorithms and software design.' },
    { title: 'Intermediate — Computer Science', org: 'IMCB I/IO Islamabad', period: '2020 — 2022', desc: 'Passed with 73%, building foundations in programming and mathematics.' },
  ];

  const certificates = [
    { id: 'ceh', icon: 'fas fa-shield-halved', title: 'CEH — Ethical Hacking', file: 'images/Certificate.jpg' },
    { id: 'cpa', icon: 'fas fa-code', title: 'CPA: C++ Certified Associate', file: '/src/certificates/cpa-certificate.pdf' },
    { id: 'mern', icon: 'fas fa-layer-group', title: 'Full Stack Development with MERN', file: 'images/Certificate1.jpg' },
  ];

  const openCertificate = (file) => window.open(file, '_blank');

  return (
    <section id="resume" className="section">
      <div ref={ref} className="container container-lg" data-animate>
        <h2>Résumé</h2>

        <div className="resume-layout">
          <div className="resume-col">
            <h3 className="resume-subhead"><i className="fas fa-briefcase"></i>Experience</h3>
            <Timeline items={experiences} />
          </div>

          <div className="resume-col">
            <h3 className="resume-subhead"><i className="fas fa-graduation-cap"></i>Education</h3>
            <Timeline items={education} />

            <h3 className="resume-subhead resume-subhead-gap"><i className="fas fa-award"></i>Certifications</h3>
            <div className="cert-list">
              {certificates.map((cert, i) => (
                <button
                  key={cert.id}
                  className="cert-item"
                  onClick={() => openCertificate(cert.file)}
                  data-reveal="right"
                  data-reveal-delay={i * 80}
                >
                  <span className="cert-item-icon"><i className={cert.icon}></i></span>
                  <span className="cert-item-info">
                    <strong>{cert.title}</strong>
                    <small>Click to view certificate</small>
                  </span>
                  <i className="fas fa-arrow-up-right-from-square cert-item-arrow"></i>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
