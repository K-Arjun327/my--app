import { useNavigate } from 'react-router-dom';
import AuthorAvatar from './AuthorAvatar';
import './Home.css';

export default function Home() {
  const navigate = useNavigate();

  const metrics = [
    { title: "Catalog Titles", value: "50,000+", trend: "+12.4%", trendClass: "trend-up", icon: "📚" },
    { title: "Peer-Reviewed Journals", value: "1,240 Vol", trend: "Verified", trendClass: "trend-neutral", icon: "🔬" },
    { title: "Subscribed Libraries", value: "3,800+", trend: "Worldwide", trendClass: "trend-up", icon: "🏛️" },
    { title: "Average Delivery", value: "48 Hours", trend: "Express ⚡", trendClass: "trend-up", icon: "🚀" }
  ];

  const featuredBooks = [
    { title: "Endurance: Shackleton's Incredible Voyage", category: "Adventure", price: "₹699", image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80", author: "Alfred Lansing", rating: 4.9, stockStatus: "In Stock" },
    { title: "Cosmos: A Personal Voyage", category: "Astronomy", price: "₹899", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80", author: "Carl Sagan", rating: 5.0, stockStatus: "In Stock" },
    { title: "Sapiens: A Brief History of Humankind", category: "History", price: "₹799", image: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?auto=format&fit=crop&w=600&q=80", author: "Yuval Noah Harari", rating: 4.9, stockStatus: "In Stock" },
    { title: "The Great Gatsby", category: "Classic Literature", price: "₹499", image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80", author: "F. Scott Fitzgerald", rating: 4.8, stockStatus: "In Stock" },
    { title: "Prisoners of Geography", category: "Geographical", price: "₹649", image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=600&q=80", author: "Tim Marshall", rating: 4.8, stockStatus: "In Stock" },
    { title: "The Emperor of All Maladies", category: "Medical Research", price: "₹849", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80", author: "Siddhartha Mukherjee", rating: 4.9, stockStatus: "In Stock" },
    { title: "The Elegant Universe", category: "Quantum Physics", price: "₹749", image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=600&q=80", author: "Brian Greene", rating: 4.8, stockStatus: "In Stock" },
    { title: "Into Thin Air: Everest Disaster", category: "Adventure", price: "₹599", image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80", author: "Jon Krakauer", rating: 4.9, stockStatus: "In Stock" }
  ];

  return (
    <div className="home-container">
      <div className="ambient-glow glow-top-left"></div>
      <div className="ambient-glow glow-bottom-right"></div>

      <div className="dashboard-content">
        {/* Welcome Hero Banner */}
        <div className="welcome-hero">
          <div>
            <span className="live-pill" style={{ marginBottom: '12px' }}>
              <span className="pulse-dot"></span>
              Welcome to BookMart
            </span>
            <h1 className="welcome-title">
              Order Every Journal & <br />
              <span className="gradient-text">Academic Research Book.</span>
            </h1>
            <p className="welcome-subtitle">
              Browse world-class scientific journals, peer-reviewed medical publications, quantum physics papers, and custom leather notebooks.
            </p>
            <div className="status-badge-row">
              <span className="live-pill" style={{ background: 'rgba(245, 158, 11, 0.15)', color: '#0c2b1c', borderColor: 'rgba(245, 158, 11, 0.4)', fontWeight: 700 }}>
                ⭐ 4.98/5 Rating Across 50,000+ Readers
              </span>
            </div>
          </div>

          <div className="hero-actions" style={{ flexDirection: 'column', gap: '12px' }}>
            <button className="action-btn-primary" onClick={() => navigate('/journals')}>
              <span>📖 Browse All Journals</span>
            </button>
            <button className="action-btn-secondary" onClick={() => navigate('/category')}>
              <span>🏷️ Explore Categories</span>
            </button>
          </div>
        </div>

        {/* Metric Cards Grid */}
        <div className="metrics-grid">
          {metrics.map((m, idx) => (
            <div key={idx} className="metric-card">
              <div className="metric-header">
                <span className="metric-title">{m.title}</span>
                <div className="metric-icon-wrapper" style={{ fontSize: '1.2rem' }}>{m.icon}</div>
              </div>
              <div className="metric-value">{m.value}</div>
              <span className={`metric-trend ${m.trendClass}`}>{m.trend}</span>
            </div>
          ))}
        </div>

        {/* Featured Publications Grid */}
        <div className="section-card">
          <div className="section-title-row">
            <h3>🔥 Featured & Best-Selling Journals</h3>
            <span className="view-all-link" onClick={() => navigate('/journals')}>
              View Full Order Catalog →
            </span>
          </div>

          <div className="metrics-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))', gap: '1.5rem', marginBottom: 0, overflow: 'visible' }}>
            {featuredBooks.map((b, i) => (
              <div key={i} className="metric-card" style={{ display: 'flex', flexDirection: 'column', padding: '1.25rem' }}>
                <div style={{ height: '200px', borderRadius: '14px', overflow: 'hidden', marginBottom: '1rem', background: '#0c2b1c' }}>
                  <img src={b.image} alt={b.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <span style={{ fontSize: '0.775rem', color: '#047857', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', height: '18px', overflow: 'hidden' }}>{b.category}</span>
                
                {/* Fixed Height Title to Align Author Byline Perfectly */}
                <h4
                  style={{
                    fontSize: '1.05rem',
                    fontWeight: 800,
                    color: '#0c2b1c',
                    margin: '6px 0',
                    height: '46px',
                    minHeight: '46px',
                    maxHeight: '46px',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}
                  title={b.title}
                >
                  {b.title}
                </h4>

                {/* Standardized Author Byline Row */}
                <div
                  className="author-byline"
                  style={{ height: '32px', display: 'inline-flex', alignItems: 'center', marginBottom: '12px' }}
                  onClick={() => navigate(`/author/${encodeURIComponent(b.author)}`)}
                >
                  <AuthorAvatar name={b.author} size={24} />
                  <span className="author-name-text" style={{ fontSize: '0.85rem', color: '#047857', fontWeight: 700, textDecoration: 'underline' }}>
                    By {b.author} →
                  </span>
                </div>

                {/* Rating and Stock Details at Bottom */}
                <div style={{ marginTop: 'auto', paddingTop: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.825rem', marginBottom: '10px', background: '#f0fdf4', padding: '6px 10px', borderRadius: '8px', border: '1px solid #bbf7d0' }}>
                    <span style={{ color: '#d97706', fontWeight: 800 }}>★ {b.rating}</span>
                    <span style={{ color: '#047857', fontSize: '0.75rem', fontWeight: 800, display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981', display: 'inline-block' }}></span>
                      {b.stockStatus}
                    </span>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '10px', borderTop: '1px solid #cbe6d7' }}>
                    <span style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0c2b1c' }}>{b.price}</span>
                    <button className="action-btn-primary" style={{ padding: '8px 16px', fontSize: '0.825rem' }} onClick={() => navigate('/journals')}>
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