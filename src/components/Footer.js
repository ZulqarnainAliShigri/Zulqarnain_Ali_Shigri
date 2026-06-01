import React from 'react';
import '../styles/App.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container container-lg">
        <small style={{color: 'var(--muted)'}}>
          © {new Date().getFullYear()} Zulqarnain • Built with passion
        </small>
      </div>
    </footer>
  );
};

export default Footer;