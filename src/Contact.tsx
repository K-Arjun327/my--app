import React, { useState } from 'react';
import './Home.css';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: 'Institutional License', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: 'Institutional License', message: '' });
    }, 4000);
  };

  return (
    <div className="home-container">
      <div className="ambient-glow glow-top-left"></div>
      <div className="ambient-glow glow-bottom-right"></div>

      <div className="dashboard-content">
        {/* Contact Hero Banner with Graphic Office Photo */}
        <div className="welcome-hero" style={{ marginBottom: '2rem', display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <div style={{ flex: 1 }}>
            <span className="live-pill" style={{ marginBottom: '12px', background: '#d1fae5', color: '#047857', borderColor: '#10b981', fontWeight: 800 }}>
              <span className="pulse-dot"></span>
              24/7 Editorial & Publishing Support Desk
            </span>
            <h1 className="welcome-title" style={{ fontSize: '2.2rem', color: '#0c2b1c' }}>Contact Publishing & Support Desk</h1>
            <p className="welcome-subtitle" style={{ fontSize: '1rem', color: '#0a3d24', fontWeight: 600 }}>
              Have a question about journal orders, manuscript submissions, or institutional library licensing? Our global support desk is ready to assist you.
            </p>
          </div>
          <div style={{ width: '220px', height: '140px', borderRadius: '20px', overflow: 'hidden', flexShrink: 0, boxShadow: '0 10px 25px rgba(12, 43, 28, 0.15)', border: '2px solid #ffffff' }}>
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80"
              alt="Editorial Headquarters"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>

        <div className="dashboard-grid" style={{ gridTemplateColumns: '1.2fr 0.8fr', gap: '1.5rem' }}>
          {/* Contact Form with Crystal Clear High-Contrast Text */}
          <div className="section-card" style={{ background: '#ffffff', border: '1px solid #cbe6d7', padding: '1.75rem' }}>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0c2b1c', marginBottom: '1.25rem' }}>
              ✉️ Send Us a Message
            </h3>

            {submitted ? (
              <div style={{ background: '#d1fae5', border: '2px solid #10b981', padding: '2rem', borderRadius: '20px', color: '#047857', textAlign: 'center' }}>
                <span style={{ fontSize: '2.5rem' }}>✅</span>
                <h4 style={{ margin: '10px 0 6px 0', fontSize: '1.3rem', fontWeight: 800, color: '#0c2b1c' }}>Message Sent Successfully!</h4>
                <p style={{ margin: 0, fontSize: '0.95rem', color: '#0a3d24', fontWeight: 700 }}>
                  Our editorial support desk has received your request and will respond within 24 business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                <div>
                  <label style={{ fontSize: '0.9rem', color: '#0c2b1c', fontWeight: 800, display: 'block', marginBottom: '6px' }}>
                    Your Full Name / Institution Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Dr. Alex Morgan / MIT Research Library"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{ width: '100%', padding: '12px 16px', background: '#f8faf9', border: '1.5px solid #cbe6d7', borderRadius: '12px', color: '#0c2b1c', fontWeight: 700, fontSize: '0.95rem' }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: '0.9rem', color: '#0c2b1c', fontWeight: 800, display: 'block', marginBottom: '6px' }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex.morgan@institution.edu"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{ width: '100%', padding: '12px 16px', background: '#f8faf9', border: '1.5px solid #cbe6d7', borderRadius: '12px', color: '#0c2b1c', fontWeight: 700, fontSize: '0.95rem' }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: '0.9rem', color: '#0c2b1c', fontWeight: 800, display: 'block', marginBottom: '6px' }}>
                    Inquiry Category *
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    style={{ width: '100%', padding: '12px 16px', background: '#f8faf9', border: '1.5px solid #cbe6d7', borderRadius: '12px', color: '#0c2b1c', fontWeight: 700, fontSize: '0.95rem' }}
                  >
                    <option>Institutional Library License</option>
                    <option>Manuscript Submission Guidelines</option>
                    <option>Custom Book & Journal Order Status</option>
                    <option>Bulk Order Discount Request</option>
                  </select>
                </div>

                <div>
                  <label style={{ fontSize: '0.9rem', color: '#0c2b1c', fontWeight: 800, display: 'block', marginBottom: '6px' }}>
                    Message Details *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your inquiry, volume request, or manuscript details..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{ width: '100%', padding: '12px 16px', background: '#f8faf9', border: '1.5px solid #cbe6d7', borderRadius: '12px', color: '#0c2b1c', fontWeight: 700, fontSize: '0.95rem', resize: 'vertical' }}
                  ></textarea>
                </div>

                <button type="submit" className="action-btn-primary" style={{ padding: '14px', justifyContent: 'center', fontSize: '1rem', fontWeight: 800 }}>
                  Submit Inquiry Now →
                </button>
              </form>
            )}
          </div>

          {/* Direct Support & Graphic Cards with Bold Text */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div className="section-card" style={{ background: '#ffffff', border: '1px solid #cbe6d7', padding: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: '#d1fae5', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem' }}>
                  🏛️
                </div>
                <h4 style={{ margin: 0, fontSize: '1.15rem', fontWeight: 800, color: '#0c2b1c' }}>Editorial Headquarters</h4>
              </div>
              <p style={{ color: '#0a3d24', fontSize: '0.9rem', fontWeight: 700, lineHeight: 1.6, margin: 0 }}>
                Lumina Publishing Group Headquarters<br />
                500 Academic Plaza, Suite 1200<br />
                Boston, MA 02108, United States
              </p>
            </div>

            <div className="section-card" style={{ background: '#ffffff', border: '1px solid #cbe6d7', padding: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: '#d1fae5', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem' }}>
                  📞
                </div>
                <h4 style={{ margin: 0, fontSize: '1.15rem', fontWeight: 800, color: '#0c2b1c' }}>Phone & Support Desk</h4>
              </div>
              <p style={{ color: '#0a3d24', fontSize: '0.9rem', fontWeight: 700, lineHeight: 1.6, margin: 0 }}>
                Toll-Free Hotline: <strong style={{ color: '#047857' }}>+1 (800) 555-LUMINA</strong><br />
                International Desk: <strong style={{ color: '#047857' }}>+1 (617) 555-0199</strong><br />
                Support Hours: Mon – Fri (8:00 AM – 6:00 PM EST)
              </p>
            </div>

            <div className="section-card" style={{ background: '#ffffff', border: '1px solid #cbe6d7', padding: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: '#d1fae5', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem' }}>
                  ✉️
                </div>
                <h4 style={{ margin: 0, fontSize: '1.15rem', fontWeight: 800, color: '#0c2b1c' }}>Official Email Desks</h4>
              </div>
              <p style={{ color: '#0a3d24', fontSize: '0.9rem', fontWeight: 700, lineHeight: 1.6, margin: 0 }}>
                Orders Desk: <strong style={{ color: '#047857' }}>orders@luminajournals.org</strong><br />
                Submissions Desk: <strong style={{ color: '#047857' }}>editor@luminajournals.org</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
