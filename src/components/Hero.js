import React, { useRef, useState } from 'react';
import '../styles/App.css';

const Hero = ({ currentPhrase }) => {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);

  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    if (!video.muted) {
      video.volume = 1;
      video.play().catch(() => {});
    }
    setMuted(video.muted);
  };

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = 'images/zulfiCV.pdf';
    link.download = 'Zulqarnain_Ali_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header id="home" className="hero">
      <video
        ref={videoRef}
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/images/profile-pic.png"
      >
        <source src="/images/ideal-studio.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay" aria-hidden="true"></div>

      <div className="hero-controls">
        <div className="social-links">
          <a href="https://github.com/ZulqarnainAliShigri" title="GitHub"><i className="fab fa-github"></i></a>
          <a href="https://www.linkedin.com/in/zulqarnain-ali-16829b286/?skipRedirect=true" title="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
          <a href="https://x.com/zulqarn96078131" title="Twitter"><i className="fab fa-twitter"></i></a>
          <a href="https://www.fiverr.com/users/zulfi_dev/seller_dashboard" title="Fiverr"><i className="fas fa-briefcase"></i></a>
        </div>

        <button
          type="button"
          className={`hero-sound-toggle ${muted ? 'is-muted' : ''}`}
          onClick={toggleSound}
          aria-label={muted ? 'Unmute background video' : 'Mute background video'}
          title={muted ? 'Unmute' : 'Mute'}
        >
          <i className={muted ? 'fas fa-volume-mute' : 'fas fa-volume-up'}></i>
          <span className="hero-sound-label">{muted ? 'Tap for sound' : 'Sound on'}</span>
        </button>
      </div>

      <div className="container container-lg">
        <div className="hero-grid">
          <div className="hero-card">
            <span className="hero-badge"><span className="hero-badge-dot"></span>Available for freelance & full-time</span>
            <div className="h1">Hi, I'm <span className="accent">Zulqarnain</span></div>
            <p className="lead">A <span className="type">{currentPhrase}</span> building modern web experiences and AI solutions.</p>
            <div className="cta-row">
              <a href="#projects" className="btn btn-primary-custom me-2">View Projects</a>
              <a href="#contact" className="btn btn-ghost">Hire Me</a>
              <button onClick={downloadCV} className="btn btn-ghost ms-2">Download CV</button>
            </div>
          </div>

          <aside className="profile-container">
            <div className="about-card-glass card-glass">
              <h5 style={{ color: 'var(--text)', margin: '0 0 6px' }}>About</h5>
              <p style={{ margin: '0', color: 'var(--muted)', fontSize: '14px', lineHeight: '1.5' }}>
                MERN & AI developer focused on building robust web apps and intelligent systems. I turn ideas into high‑quality products.
              </p>
              <div className="profile-meta-row">
                <div>
                  <strong>Location</strong>
                  <span>Double Road Rawalpindi Pakistan</span>
                </div>
                <div>
                  <strong>Email</strong>
                  <span>
                    <a href="mailto:zulqarnaiahishigri@gmail.com" className="email-link">
                      zulqarnaiahishigri@gmail.com
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </header>
  );
};

export default Hero;