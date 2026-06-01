import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Testimonials = () => {
  const ref = useIntersectionObserver();
  const testimonials = [
    {
      name: 'Aisha Khan',
      text: '"Delivered on time and exceeded expectations. Great communication."',
      image: 'images/testimonial1.jpeg'
    },
    {
      name: 'Bilal Ahmed',
      text: '"Impressive knowledge of AI integration — boosted our support automation."',
      image: 'images/testimonial.avif'
    }
  ];

  return (
    <section id="testimonials" className="section">
      <div ref={ref} className="container container-lg" data-animate>
        <h2>Testimonials</h2>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: '14px'}}>
          {testimonials.map(testimonial => (
            <div key={testimonial.name} className="card-glass">
              <div className="testi">
                <img src={testimonial.image} alt="client" />
                <div>
                  <strong style={{color: 'var(--text)'}}>{testimonial.name}</strong>
                  <p>{testimonial.text}</p>
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