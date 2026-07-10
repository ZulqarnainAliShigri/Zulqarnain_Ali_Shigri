import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Testimonials = () => {
  const ref = useIntersectionObserver();
  const testimonials = [
    {
      name: 'Aisha Khan',
      role: 'Product Manager, ADO Travel',
      text: 'Delivered on time and exceeded expectations. Communication was clear at every step and the final product was rock solid.',
      image: 'images/testimonial1.jpeg',
      rating: 5
    },
    {
      name: 'Bilal Ahmed',
      role: 'Founder, TechStart',
      text: 'Impressive knowledge of AI integration — his chatbot work boosted our support automation and cut response times dramatically.',
      image: 'images/testimonial.avif',
      rating: 5
    },
    {
      name: 'Sarah Malik',
      role: 'CTO, Alqavi Traders',
      text: 'Zulqarnain rebuilt our B2B portal from the ground up. Clean architecture, fast pages, and a team player throughout.',
      image: 'images/testimonial1.jpeg',
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="section">
      <div ref={ref} className="container container-lg" data-animate>
        <h2>Testimonials</h2>
        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div key={t.name} className="card-glass testimonial-card" data-reveal data-reveal-delay={i * 100}>
              <i className="fas fa-quote-right testimonial-quote"></i>
              <div className="testimonial-stars">
                {Array.from({ length: t.rating }).map((_, s) => (
                  <i className="fas fa-star" key={s}></i>
                ))}
              </div>
              <p className="testimonial-text">{t.text}</p>
              <div className="testi">
                <img src={t.image} alt="client" />
                <div>
                  <strong style={{ color: 'var(--text)' }}>{t.name}</strong>
                  <span className="testimonial-role">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
