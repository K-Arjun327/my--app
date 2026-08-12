import { useParams, useNavigate } from 'react-router-dom';
import AuthorAvatar from './AuthorAvatar';
import { authorDatabase } from './authorDatabase';
import './Home.css';

export default function AuthorDetail() {
  const { name } = useParams<{ name?: string }>();
  const navigate = useNavigate();

  // Decode or match selected author, fallback to William Shakespeare
  const decodedName = name ? decodeURIComponent(name).trim() : "William Shakespeare";
  const currentAuthor = authorDatabase[decodedName] || 
    Object.values(authorDatabase).find((a) => a.name.toLowerCase() === decodedName.toLowerCase()) || 
    authorDatabase["William Shakespeare"];

  return (
    <div className="home-container">
      <div className="ambient-glow glow-top-left"></div>
      <div className="ambient-glow glow-bottom-right"></div>

      <div className="dashboard-content">
        {/* Back Navigation Bar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.5rem' }}>
          <button
            type="button"
            className="action-btn-secondary"
            style={{ padding: '8px 16px', fontSize: '0.85rem', background: '#ffffff', borderColor: '#cbe6d7' }}
            onClick={() => navigate('/author')}
          >
            ← Back to All Authors
          </button>
          <span style={{ fontSize: '0.85rem', color: '#047857', fontWeight: 700 }}>
            Author Profile • {currentAuthor.name}
          </span>
        </div>

        {/* Author Header Banner */}
        <div className="welcome-hero" style={{ marginBottom: '2rem', display: 'flex', gap: '2rem', alignItems: 'flex-start', background: 'rgba(255, 255, 255, 0.9)' }}>
          <AuthorAvatar name={currentAuthor.name} size={90} style={{ borderRadius: '24px', boxShadow: '0 8px 24px rgba(16,185,129,0.3)' }} />

          <div style={{ flex: 1 }}>
            <div className="status-badge-row" style={{ marginBottom: '8px' }}>
              <span className="live-pill" style={{ background: '#d1fae5', color: '#047857', borderColor: '#10b981', fontWeight: 800 }}>
                Verified BookMart Author • Original Pencil Art Profile
              </span>
            </div>

            <h1 className="welcome-title" style={{ fontSize: '2rem', marginBottom: '4px' }}>{currentAuthor.name}</h1>
            <p style={{ fontSize: '0.95rem', color: '#047857', fontWeight: 800, margin: '0 0 8px 0' }}>{currentAuthor.role} • {currentAuthor.institution}</p>
            <p className="welcome-subtitle" style={{ fontSize: '0.95rem', color: '#0a3d24', fontWeight: 600, marginBottom: '1.25rem' }}>
              {currentAuthor.bio}
            </p>

            <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', paddingTop: '1rem', borderTop: '1px solid #cbe6d7' }}>
              <div>
                <span style={{ fontSize: '0.8rem', color: '#047857', fontWeight: 700, textTransform: 'uppercase' }}>Available Books</span>
                <p style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0c2b1c', margin: 0 }}>{currentAuthor.books.length} Books in Library</p>
              </div>
              <div>
                <span style={{ fontSize: '0.8rem', color: '#047857', fontWeight: 700, textTransform: 'uppercase' }}>Global Citations &amp; Readers</span>
                <p style={{ fontSize: '1.25rem', fontWeight: 800, color: '#10b981', margin: 0 }}>{currentAuthor.citations}</p>
              </div>
              <div>
                <span style={{ fontSize: '0.8rem', color: '#047857', fontWeight: 700, textTransform: 'uppercase' }}>Total Publications</span>
                <p style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0c2b1c', margin: 0 }}>{currentAuthor.publications} Volumes</p>
              </div>
            </div>
          </div>
        </div>

        {/* Author Switcher Quick Pills */}
        <div className="section-card" style={{ padding: '1.25rem', marginBottom: '1.75rem', background: '#ffffff', border: '1px solid #cbe6d7' }}>
          <span style={{ fontSize: '0.8rem', color: '#047857', fontWeight: 800, textTransform: 'uppercase', display: 'block', marginBottom: '10px' }}>
            Select Any Famous Author to Explore Their Complete 10+ Books Library:
          </span>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {Object.keys(authorDatabase).map((authName) => (
              <button
                key={authName}
                type="button"
                className={`nav-link ${authName === currentAuthor.name ? 'active' : ''}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '6px 14px',
                  borderRadius: '999px',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  background: authName === currentAuthor.name ? '#10b981' : '#f1f5f9',
                  color: authName === currentAuthor.name ? '#ffffff' : '#0c2b1c'
                }}
                onClick={() => navigate(`/author/${encodeURIComponent(authName)}`)}
              >
                <AuthorAvatar name={authName} size={22} animate={false} style={{ border: 'none', boxShadow: 'none' }} />
                <span>{authName}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Books List Written By This Author */}
        <div className="section-card" style={{ background: '#ffffff', border: '1px solid #cbe6d7', padding: '1.75rem' }}>
          <div className="section-title-row" style={{ marginBottom: '1.25rem' }}>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0c2b1c' }}>
              📚 Complete Books &amp; Masterworks by {currentAuthor.name} ({currentAuthor.books.length} Books Available)
            </h3>
            <span className="view-all-link" onClick={() => navigate('/journals')}>
              Browse Full Order Catalog →
            </span>
          </div>

          <div className="metrics-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '14px' }}>
            {currentAuthor.books.map((book, idx) => (
              <div key={idx} className="metric-card" style={{ display: 'flex', flexDirection: 'column', background: '#ffffff', border: '1px solid #cbe6d7', borderRadius: '16px', padding: '14px' }}>
                <div className="journal-cover-frame" style={{ height: '220px', borderRadius: '12px', overflow: 'hidden', marginBottom: '0.85rem', position: 'relative', background: '#0c2b1c', boxShadow: '0 4px 16px rgba(12, 43, 28, 0.1)' }}>
                  <img
                    src={book.image}
                    alt={book.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>

                <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                    <span style={{ fontSize: '0.75rem', color: '#047857', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      {book.category}
                    </span>
                    <span style={{ fontSize: '0.75rem', color: '#d97706', fontWeight: 800 }}>
                      ★ {book.rating}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.05rem', fontWeight: 800, margin: '4px 0 6px 0', lineHeight: 1.35, color: '#0c2b1c' }}>
                    {book.title}
                  </h3>

                  <div className="author-byline" style={{ marginBottom: '8px' }}>
                    <AuthorAvatar name={currentAuthor.name} size={20} animate={false} />
                    <span style={{ fontSize: '0.8rem', color: '#047857', fontWeight: 700 }}>
                      {currentAuthor.name}
                    </span>
                  </div>

                  <p style={{ fontSize: '0.825rem', color: '#0a3d24', fontWeight: 600, margin: '0 0 12px 0', lineHeight: 1.45 }}>
                    {book.description}
                  </p>

                  <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '10px', borderTop: '1px solid #cbe6d7' }}>
                    <div>
                      <span style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0c2b1c', display: 'block' }}>
                        ${book.price.toFixed(2)}
                      </span>
                      <span style={{ fontSize: '0.7rem', color: '#64748b', fontWeight: 600 }}>
                        {book.issn}
                      </span>
                    </div>

                    <button
                      type="button"
                      className="action-btn-primary"
                      style={{ padding: '8px 16px', fontSize: '0.825rem' }}
                      onClick={() => navigate('/journals')}
                    >
                      Order Copy
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
