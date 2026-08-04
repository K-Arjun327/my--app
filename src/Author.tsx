import { useNavigate } from 'react-router-dom';
import './Home.css';

export default function Author() {
  const navigate = useNavigate();

  const authors = [
    {
      name: "Alfred Lansing",
      role: "Historical Journalist & Survival Explorer Biographer",
      institution: "Royal Geographical Archive",
      publications: 12,
      citations: "45,000+",
      bio: "Renowned American journalist and author known for his masterwork 'Endurance', chronicling Sir Ernest Shackleton's harrowing 1914 Antarctic expedition.",
      avatar: "🏔️"
    },
    {
      name: "Carl Sagan",
      role: "Professor of Astronomy & Space Sciences",
      institution: "Cornell University & NASA JPL",
      publications: 600,
      citations: "120,000+",
      bio: "World-famous astronomer, astrophysicist, and author who popularized science globally through his television series and books on planetary science and astrobiology.",
      avatar: "🌌"
    },
    {
      name: "Yuval Noah Harari",
      role: "Professor of History & Macro-Historian",
      institution: "Hebrew University of Jerusalem",
      publications: 28,
      citations: "85,000+",
      bio: "Historian, philosopher, and bestselling author of Sapiens, Homo Deus, and 21 Lessons for the 21st Century, exploring human cognitive evolution and future technology.",
      avatar: "🏛️"
    },
    {
      name: "F. Scott Fitzgerald",
      role: "Master Novelist & Jazz Age Chronicler",
      institution: "Princeton University Literature Guild",
      publications: 18,
      citations: "95,000+",
      bio: "Celebrated 20th-century American author whose novels depicted the flamboyance, idealism, and tragic excess of the Jazz Age.",
      avatar: "✍️"
    },
    {
      name: "Tim Marshall",
      role: "Foreign Affairs Editor & Geopolitics Analyst",
      institution: "Royal Diplomatic & Geographical Society",
      publications: 15,
      citations: "32,000+",
      bio: "Leading British journalist, author, and broadcaster specializing in foreign affairs, international diplomacy, and physical geography.",
      avatar: "🌍"
    },
    {
      name: "Siddhartha Mukherjee",
      role: "Associate Professor of Medicine & Oncologist",
      institution: "Columbia University Medical Center",
      publications: 45,
      citations: "52,000+",
      bio: "Pulitzer Prize-winning physician, oncologist, and author renowned for his biographical history of cancer and genetic medicine.",
      avatar: "🧬"
    },
    {
      name: "Brian Greene",
      role: "Professor of Physics & Mathematics",
      institution: "Columbia University String Theory Institute",
      publications: 85,
      citations: "64,000+",
      bio: "Theoretical physicist and superstring theorist celebrated for explaining complex quantum physics, multi-dimensional space, and cosmology.",
      avatar: "⚛️"
    },
    {
      name: "Walter Isaacson",
      role: "Professor of History & Master Biographer",
      institution: "Tulane University & Aspen Institute",
      publications: 32,
      citations: "78,000+",
      bio: "Renowned biographer and historian who authored the definitive biographies of Steve Jobs, Leonardo da Vinci, Albert Einstein, and Benjamin Franklin.",
      avatar: "📚"
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
              Editorial Boards & Authors
            </span>
            <h1 className="welcome-title">Featured Journal Editors & Authors</h1>
            <p className="welcome-subtitle">Meet the world-renowned scientists, researchers, and professors who edit and publish our peer-reviewed titles. Click any author to view their published books catalog.</p>
          </div>
          <button className="action-btn-primary" onClick={() => navigate('/contact')}>
            Submit Your Manuscript
          </button>
        </div>

        <div className="metrics-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.25rem' }}>
          {authors.map((auth, i) => (
            <div
              key={i}
              className="metric-card"
              style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column' }}
              onClick={() => navigate(`/author/${encodeURIComponent(auth.name)}`)}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '1.25rem' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: '#10b981', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.85rem' }}>
                  {auth.avatar}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 800, margin: 0, color: '#0c2b1c' }}>{auth.name}</h3>
                  <p style={{ fontSize: '0.825rem', color: '#047857', margin: '2px 0 0 0', fontWeight: 800 }}>{auth.role}</p>
                  <p style={{ fontSize: '0.775rem', color: '#0a3d24', margin: 0, fontWeight: 600 }}>{auth.institution}</p>
                </div>
              </div>

              <p style={{ fontSize: '0.875rem', color: '#0a3d24', fontWeight: 600, lineHeight: 1.5, marginBottom: '1.25rem' }}>
                {auth.bio}
              </p>

              <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1rem', borderTop: '1px solid #cbe6d7', fontSize: '0.825rem' }}>
                <div>
                  <span style={{ color: '#047857', fontWeight: 700 }}>Works: </span>
                  <strong style={{ color: '#0c2b1c' }}>{auth.publications} Books</strong>
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
                  View Author Books →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
