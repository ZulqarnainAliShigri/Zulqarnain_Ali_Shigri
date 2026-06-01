import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import '../styles/App.css';
const Contact = () => {
  const ref = useIntersectionObserver();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({
    loading: false,
    message: '',
    type: '' // 'success' or 'error'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ loading: true, message: '', type: '' });

    try {
      await emailjs.send(
        'service_rj37wim',
        'template_0xj9p4v',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject || 'No Subject',
          message: formData.message,
          to_email: "zulqarnaiahishigri@gmail.com",
          reply_to: formData.email
        },
        'Odq-A2ns5VW9GrJL7'
      );

      setFormStatus({
        loading: false,
        message: '✅ Message sent successfully! I\'ll get back to you soon.',
        type: 'success'
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Email sending failed:', error);
      setFormStatus({
        loading: false,
        message: `Failed to send message. Please try again or contact me directly at zulqarnaiahishigri@gmail.com.`,
        type: 'error'
      });
    }
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setFormStatus({ loading: false, message: '', type: '' });
  };

  return (
    <section id="contact" className="section">
      <div ref={ref} className="container container-lg" data-animate>
        <h2>Contact</h2>
        <div className="contact-grid">
          <form onSubmit={handleSubmit} className="card-glass">
            {formStatus.message && (
              <div className={`alert alert-${formStatus.type === 'success' ? 'success' : 'danger'}`} role="alert">
                {formStatus.message}
              </div>
            )}
            <div style={{ display: 'grid', gap: '12px' }}>
              <input
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="form-control"
                placeholder="Your name"
                required
              />
              <input
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="form-control"
                type="email"
                placeholder="Your email"
                required
              />
              <input
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="form-control"
                placeholder="Subject"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="form-control"
                rows="5"
                placeholder="Message"
                required
              ></textarea>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button type="submit" className="btn btn-primary-custom" disabled={formStatus.loading}>
                  {formStatus.loading ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
                <button type="button" onClick={handleReset} className="btn btn-ghost">Reset</button>
              </div>
            </div>
          </form>

          <aside className="card-glass">
            <h5 style={{ color: 'var(--text)' }}>Get in touch</h5>
            <p style={{ color: 'var(--muted)' }}>
              <strong style={{ color: 'var(--text)' }}>Email:</strong> zulqarnaiahishigri@gmail.com<br />
              <strong style={{ color: 'var(--text)' }}>Phone:</strong> +92‑3497001241
            </p>
            <hr style={{ border: 'none', height: '1px', background: 'var(--glass)', margin: '12px 0' }} />
            <h6 style={{ color: 'var(--text)' }}>Location</h6>
            <p style={{ color: 'var(--muted)', margin: '0' }}>Skardu / Gilgit‑Baltistan, Pakistan</p>
            <div style={{ marginTop: '12px' }}>
              <a href="https://github.com/ZulqarnainAliShigri" className="btn btn-ghost">
                <i className="fab fa-github me-2"></i>GitHub
              </a>
              <a href="https://www.linkedin.com/in/zulqarnain-ali-16829b286/?skipRedirect=true" className="btn btn-ghost ms-2">
                <i className="fab fa-linkedin-in me-2"></i>LinkedIn
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Contact;