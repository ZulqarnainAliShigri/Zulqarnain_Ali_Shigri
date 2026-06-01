import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import '../styles/App.css'

const Certifications = () => {
  const ref = useIntersectionObserver();

  const certificates = [
    {
      id: 'ceh',
      icon: 'fas fa-shield-alt',
      title: 'CEH (Ethical Hacking)',
      file: 'images/Certificate.jpg'
    },
    {
      id: 'cpa',
      icon: 'fas fa-code',
      title: 'CPA: C++ Programming',
      file: '/src/certificates/cpa-certificate.pdf'
    },
    {
      id: 'mern',
      icon: 'fas fa-layer-group',
      title: 'Full Stack with MERN',
      file: 'images/Certificate1.jpg'
    }
  ];

  const openCertificate = (file) => {
    window.open(file, '_blank');
  };

  return (
    <section id="certifications" className="section">
      <div ref={ref} className="container container-lg" data-animate>
        <h2>Certifications</h2>
        <div className="skills-grid">
          {certificates.map(cert => (
            <button 
              key={cert.id}
              className="certificate-btn" 
              onClick={() => openCertificate(cert.file)}
            >
              <i className={cert.icon}></i>
              <span className="btn-text">{cert.title}</span>
              <small style={{color: 'var(--muted)', fontSize: '12px'}}>Click to view</small>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;