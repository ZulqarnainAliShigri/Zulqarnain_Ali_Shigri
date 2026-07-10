import React, { useState, useEffect } from 'react';
import '../styles/App.css';

const Navbar = ({ theme, toggleTheme }) => {
  const navItems = ['Home', 'Skills', 'Services', 'Projects', 'Experience', 'Certifications', 'Contact'];
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      <nav className="navbar navbar-expand-lg py-3">
        <div className="container container-lg">
          <a className="brand navbar-brand" href="#home">Zulqarnain_Ali</a>
          
          {/* Mobile Hamburger Button */}
          <button className="navbar-toggler d-lg-none" type="button" onClick={() => setIsOpen(true)}>
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Desktop Menu - Hidden on Mobile */}
          <div className="collapse navbar-collapse d-none d-lg-block" id="navMenu">
            <ul className="navbar-nav ms-auto align-items-center">
              {navItems.map(item => (
                <li key={item} className="nav-item">
                  <a className="nav-link" href={`#${item.toLowerCase()}`}>{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Backdrop */}
      <div className={`drawer-backdrop ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(false)}></div>

      {/* Mobile Side Drawer */}
      <div className={`drawer-menu ${isOpen ? 'active' : ''}`}>
        <div className="drawer-header">
          <span className="brand">Zulqarnain_Ali</span>
          <button className="btn-close-custom" onClick={() => setIsOpen(false)}>&times;</button>
        </div>
        <ul className="drawer-nav">
          {navItems.map(item => (
            <li key={item} className="drawer-item">
              <a className="drawer-link" href={`#${item.toLowerCase()}`} onClick={() => setIsOpen(false)}>
                {item}
              </a>
            </li>
          ))}
          <li className="drawer-item theme-toggle-item">
            <button onClick={() => { toggleTheme(); setIsOpen(false); }} className="btn btn-ghost theme-toggle-btn w-100 py-2">
              {theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;