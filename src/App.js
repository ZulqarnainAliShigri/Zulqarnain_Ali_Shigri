import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Process from './components/Process';
import Skills from './components/Skills';
import Services from './components/Services';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/App.css';

const phrases = ["Web Developer", "MERN Developer", "AI Developer", "Frontend Engineer", "Problem Solver"];

function App() {
  const [theme, setTheme] = useState('dark');
  const [currentPhrase, setCurrentPhrase] = useState('');

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init('Odq-A2ns5VW9GrJL7');
  }, []);

  // Typing effect
  useEffect(() => {
    let pi = 0, ci = 0, forward = true;
    let timeoutId = null;

    const tick = () => {
      const word = phrases[pi];

      if (forward) {
        ci++;
        setCurrentPhrase(word.slice(0, ci));
        if (ci === word.length) {
          forward = false;
          timeoutId = setTimeout(tick, 1200);
          return;
        }
      } else {
        ci--;
        setCurrentPhrase(word.slice(0, ci));
        if (ci === 0) {
          forward = true;
          pi = (pi + 1) % phrases.length;
        }
      }
      timeoutId = setTimeout(tick, forward ? 100 : 36);
    };

    tick();

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  // Theme management
  useEffect(() => {
    const savedTheme = localStorage.getItem('pz_theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('pz_theme', theme);
  }, [theme]);

  // Global scroll-reveal engine with per-item stagger
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const els = Array.from(document.querySelectorAll('[data-reveal]'));

    if (prefersReduced) {
      els.forEach(el => el.classList.add('revealed'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const delay = Number(el.dataset.revealDelay || 0);
            el.style.transitionDelay = `${delay}ms`;
            el.classList.add('revealed');
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );

    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="App">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero currentPhrase={currentPhrase} />
      <Projects />
      <Process />
      <Skills />
      <Services />
      <Experience />
      <Education />
      <Certifications />
      <Testimonials />
      <Contact />
      <Footer />
      <a
        href="https://wa.me/923497001241"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="whatsapp-tooltip">Need help? Let's chat! 👋</span>
        <span className="whatsapp-icon-wrapper">
          <i className="fab fa-whatsapp"></i>
          <span className="online-dot"></span>
        </span>
        <span>Chat Online</span>
      </a>
    </div>
  );
}

export default App;