import { useNavigate } from 'react-router-dom';
import './Home.css';

export default function Category() {
  const navigate = useNavigate();

  const categories = [
    {
      title: "Adventure & Expeditions",
      count: "540 Titles",
      desc: "Polar exploration diaries, Everest mountaineering sagas, deep sea oceanography, and wilderness survival guides.",
      icon: "🗺️",
      color: "#f59e0b"
    },
    {
      title: "Literary Stories & Fiction Anthologies",
      count: "820 Titles",
      desc: "Classic short stories, folklore tales, narrative prose, prose poetry, and contemporary fiction journals.",
      icon: "✍️",
      color: "#ec4899"
    },
    {
      title: "Geographical & Earth Sciences",
      count: "960 Titles",
      desc: "Physical geography, cartography maps, volcanic geology, climate dynamics, and satellite land surveying.",
      icon: "🌍",
      color: "#10b981"
    },
    {
      title: "Vedic Astrology & Celestial Astronomy",
      count: "410 Titles",
      desc: "Planetary movements, natal chart interpretations, celestial horoscopes, and ancient astronomical manuscripts.",
      icon: "✨",
      color: "#8b5cf6"
    },
    {
      title: "Scientific & Quantum Physics",
      count: "1,240 Titles",
      desc: "Peer-reviewed research in quantum mechanics, astrophysics, material science, and computational physics.",
      icon: "⚛️",
      color: "#6366f1"
    },
    {
      title: "Medical & Clinical Genomics",
      count: "890 Titles",
      desc: "Clinical trials, neuroscience, gene editing, therapeutics, and cardiovascular medicine.",
      icon: "🧬",
      color: "#059669"
    },
    {
      title: "History Chronicles & Biographies",
      count: "730 Titles",
      desc: "Ancient civilizational records, royal biographies, warfare archives, and cultural heritage journals.",
      icon: "🏛️",
      color: "#d97706"
    }
  ];

  return (
    <div className="home-container">
      <div className="ambient-glow glow-top-left"></div>
      <div className="ambient-glow glow-bottom-right"></div>

      <div className="dashboard-content">
        <div className="welcome-hero">
          <div>
            <span className="live-pill" style={{ marginBottom: '12px' }}>
              <span className="pulse-dot"></span>
              Explore Publishing Categories
            </span>
            <h1 className="welcome-title">Journal Categories & Specializations</h1>
            <p className="welcome-subtitle">Browse peer-reviewed scientific journals, medical volumes, technology papers, and custom leather notebooks.</p>
          </div>
          <button className="action-btn-primary" onClick={() => navigate('/journals')}>
            Browse Full Catalog
          </button>
        </div>

        <div className="metrics-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))' }}>
          {categories.map((cat, i) => (
            <div key={i} className="metric-card" style={{ cursor: 'pointer' }} onClick={() => navigate('/journals')}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '1rem' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: `${cat.color}20`, border: `1px solid ${cat.color}40`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>
                  {cat.icon}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700, margin: 0 }}>{cat.title}</h3>
                  <span style={{ fontSize: '0.8rem', color: cat.color, fontWeight: 700 }}>{cat.count}</span>
                </div>
              </div>
              <p style={{ fontSize: '0.875rem', color: '#94a3b8', lineHeight: 1.5, margin: 0 }}>{cat.desc}</p>
              <div style={{ marginTop: '1.25rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.06)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.825rem', fontWeight: 600, color: '#a5b4fc' }}>
                <span>Explore Titles →</span>
                <span>Direct Order Available</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
