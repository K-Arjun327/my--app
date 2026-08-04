import { useNavigate } from 'react-router-dom';
import './Home.css';

export default function NewArrivals() {
  const navigate = useNavigate();

  const newReleases = [
    {
      title: "The Wide Wide Sea: Imperial Expeditions of Captain Cook",
      author: "Hampton Sides",
      releaseDate: "Published July 2026",
      category: "Maritime Expeditions",
      price: "$30.00",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80",
      badge: "2026 EXPEDITION",
      isbn: "ISBN 978-0385544856"
    },
    {
      title: "Co-Intelligence: Living and Working with AI",
      author: "Ethan Mollick",
      releaseDate: "Published August 2026",
      category: "Artificial Intelligence",
      price: "$29.00",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80",
      badge: "2026 TECH RELEASE",
      isbn: "ISBN 978-0593716717"
    },
    {
      title: "Clear Thinking: Turning Moments into Extraordinary Results",
      author: "Shane Parrish",
      releaseDate: "Published August 2026",
      category: "Cognitive Philosophy",
      price: "$27.00",
      image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=600&q=80",
      badge: "BESTSELLER 2026",
      isbn: "ISBN 978-0593086117"
    },
    {
      title: "The Demon of Unrest: Siege of Fort Sumter & Civil War",
      author: "Erik Larson",
      releaseDate: "Published July 2026",
      category: "Historical Warfare",
      price: "$32.00",
      image: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?auto=format&fit=crop&w=600&q=80",
      badge: "HISTORY HARDBACK",
      isbn: "ISBN 978-0385348744"
    },
    {
      title: "Supercommunicators: Unlock the Secret Language of Connection",
      author: "Charles Duhigg",
      releaseDate: "Published June 2026",
      category: "Behavioral Science",
      price: "$28.00",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80",
      badge: "CRITICS CHOICE",
      isbn: "ISBN 978-0593243916"
    },
    {
      title: "Filterworld: How Algorithms Flattened Modern Culture",
      author: "Kyle Chayka",
      releaseDate: "Published July 2026",
      category: "Digital Culture",
      price: "$26.50",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80",
      badge: "2026 ESSAY",
      isbn: "ISBN 978-0385548564"
    },
    {
      title: "The Coming Wave: Technology, Power, and 21st Century Dilemma",
      author: "Mustafa Suleyman",
      releaseDate: "Published August 2026",
      category: "Quantum & Biotech",
      price: "$32.50",
      image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=600&q=80",
      badge: "POLICY RELEASE",
      isbn: "ISBN 978-0593593950"
    },
    {
      title: "Slow Productivity: Accomplishment Without Burnout",
      author: "Cal Newport",
      releaseDate: "Published July 2026",
      category: "Professional Philosophy",
      price: "$27.99",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=600&q=80",
      badge: "NEW HARDBACK",
      isbn: "ISBN 978-0593544853"
    }
  ];

  return (
    <div className="home-container">
      <div className="ambient-glow glow-top-left"></div>
      <div className="ambient-glow glow-bottom-right"></div>

      <div className="dashboard-content">
        <div className="welcome-hero" style={{ marginBottom: '1.75rem' }}>
          <div>
            <span className="live-pill" style={{ marginBottom: '12px' }}>
              <span className="pulse-dot"></span>
              Just Published • August 2026
            </span>
            <h1 className="welcome-title">New Book Arrivals & Fresh Volumes</h1>
            <p className="welcome-subtitle">Explore the latest newly published original books, peer-reviewed releases, and new hardcover editions.</p>
          </div>
          <button className="action-btn-primary" onClick={() => navigate('/journals')}>
            Order New Releases
          </button>
        </div>

        {/* 5px Gap & High-Definition Image Cards */}
        <div className="metrics-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '5px' }}>
          {newReleases.map((item, i) => (
            <div key={i} className="metric-card" style={{ display: 'flex', flexDirection: 'column', background: 'transparent', border: 'none', boxShadow: 'none', padding: '10px' }}>
              <div className="journal-cover-frame" style={{ height: '260px', borderRadius: '16px', overflow: 'hidden', marginBottom: '0.85rem', position: 'relative', background: '#0c2b1c', boxShadow: '0 8px 24px rgba(12, 43, 28, 0.12)' }}>
                <img src={item.image} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s ease' }} />
                <span className="live-pill" style={{ position: 'absolute', top: '10px', right: '10px', background: 'rgba(255, 255, 255, 0.95)', color: '#047857', fontWeight: 800, backdropFilter: 'blur(8px)', borderColor: '#cbe6d7', padding: '4px 10px', fontSize: '0.725rem' }}>
                  {item.badge}
                </span>
              </div>

              <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '0.75rem', color: '#047857', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {item.releaseDate} • {item.isbn}
                </span>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 800, margin: '6px 0', lineHeight: 1.35, color: '#0c2b1c' }}>
                  {item.title}
                </h3>
                <p
                  style={{ fontSize: '0.85rem', color: '#047857', fontWeight: 700, margin: '0 0 10px 0', cursor: 'pointer', textDecoration: 'underline' }}
                  onClick={() => navigate(`/author/${encodeURIComponent(item.author)}`)}
                >
                  By {item.author} →
                </p>

                <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '10px', borderTop: '1px solid #cbe6d7' }}>
                  <span style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0c2b1c' }}>{item.price}</span>
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
  );
}
