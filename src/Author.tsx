import { useNavigate } from 'react-router-dom';
import AuthorAvatar from './AuthorAvatar';
import { authorDatabase } from './authorDatabase';
import './Home.css';

export default function Author() {
  const navigate = useNavigate();
  const authorsList = Object.values(authorDatabase);

  return (
    <div className="home-container">
      <div className="ambient-glow glow-top-left"></div>
      <div className="ambient-glow glow-bottom-right"></div>

      <div className="dashboard-content">
        <div className="welcome-hero">
          <div>
            <span className="live-pill" style={{ marginBottom: '12px' }}>
              <span className="pulse-dot"></span>
              Famous Writers &amp; Authors Board • Original Pencil Art
            </span>
            <h1 className="welcome-title">World-Famous Authors &amp; Masterworks</h1>
            <p className="welcome-subtitle">
              Explore legendary writers across classic literature, science, philosophy, and history. Every author features their dedicated pencil art portrait and at least 10 complete masterwork books.
            </p>
          </div>
          <button className="action-btn-primary" onClick={() => navigate('/journals')}>
            Browse Full Order Catalog
          </button>
        </div>

        <div className="metrics-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.25rem' }}>
          {authorsList.map((auth, i) => (
            <div
              key={i}
              className="metric-card"
              style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', background: '#ffffff', border: '1px solid #cbe6d7', borderRadius: '18px', padding: '1.5rem' }}
              onClick={() => navigate(`/author/${encodeURIComponent(auth.name)}`)}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '1.25rem' }}>
                <AuthorAvatar name={auth.name} size={64} style={{ borderRadius: '18px' }} />
                <div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, margin: 0, color: '#0c2b1c' }}>{auth.name}</h3>
                  <p style={{ fontSize: '0.825rem', color: '#047857', margin: '2px 0 0 0', fontWeight: 800 }}>{auth.role}</p>
                  <p style={{ fontSize: '0.775rem', color: '#0a3d24', margin: 0, fontWeight: 600 }}>{auth.institution}</p>
                </div>
              </div>

              <p style={{ fontSize: '0.875rem', color: '#0a3d24', fontWeight: 600, lineHeight: 1.5, marginBottom: '1.25rem' }}>
                {auth.bio}
              </p>

              <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1rem', borderTop: '1px solid #cbe6d7', fontSize: '0.825rem' }}>
                <div>
                  <span style={{ color: '#047857', fontWeight: 700 }}>Library: </span>
                  <strong style={{ color: '#0c2b1c' }}>{auth.books.length} Books Available</strong>
                </div>
                <button
                  type="button"
                  className="action-btn-primary"
                  style={{ padding: '6px 14px', fontSize: '0.8rem' }}
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/author/${encodeURIComponent(auth.name)}`);
                  }}
                >
                  View All {auth.books.length} Books →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
