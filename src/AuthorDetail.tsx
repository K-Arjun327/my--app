import { useParams, useNavigate } from 'react-router-dom';
import './Home.css';

interface AuthorBook {
  title: string;
  category: string;
  price: number;
  image: string;
  issn: string;
  description: string;
  rating: number;
}

interface AuthorProfile {
  name: string;
  role: string;
  institution: string;
  publications: number;
  citations: string;
  bio: string;
  avatar: string;
  books: AuthorBook[];
}

export default function AuthorDetail() {
  const { name } = useParams<{ name?: string }>();
  const navigate = useNavigate();

  const authorDatabase: Record<string, AuthorProfile> = {
    "Alfred Lansing": {
      name: "Alfred Lansing",
      role: "Historical Journalist & Explorer Biographer",
      institution: "Royal Geographical & Survival Archive",
      publications: 12,
      citations: "45,000+",
      bio: "Renowned American journalist and author known for his masterwork 'Endurance', chronicling Sir Ernest Shackleton's harrowing 1914 Antarctic expedition.",
      avatar: "🏔️",
      books: [
        {
          title: "Endurance: Shackleton's Incredible Voyage",
          category: "Adventure",
          price: 24.99,
          image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80",
          issn: "ISBN 978-0465062294",
          description: "The harrowing authentic account of Sir Ernest Shackleton's 1914 Antarctic expedition trapped in pack ice.",
          rating: 4.9
        }
      ]
    },
    "Carl Sagan": {
      name: "Carl Sagan",
      role: "Professor of Astronomy & Space Sciences",
      institution: "Cornell University & NASA JPL",
      publications: 600,
      citations: "120,000+",
      bio: "World-famous astronomer, astrophysicist, and author who popularized science globally through his television series and books on planetary science and astrobiology.",
      avatar: "🌌",
      books: [
        {
          title: "Cosmos: A Personal Voyage",
          category: "Astrology & Astronomy",
          price: 28.00,
          image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80",
          issn: "ISBN 978-0345331359",
          description: "Carl Sagan's iconic exploration of space, human civilization, science, and the universe.",
          rating: 5.0
        }
      ]
    },
    "Yuval Noah Harari": {
      name: "Yuval Noah Harari",
      role: "Professor of History & Macro-Historian",
      institution: "Hebrew University of Jerusalem",
      publications: 28,
      citations: "85,000+",
      bio: "Historian, philosopher, and bestselling author of Sapiens, Homo Deus, and 21 Lessons for the 21st Century, exploring human cognitive evolution and future technology.",
      avatar: "🏛️",
      books: [
        {
          title: "Sapiens: A Brief History of Humankind",
          category: "History",
          price: 26.99,
          image: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?auto=format&fit=crop&w=600&q=80",
          issn: "ISBN 978-0062316097",
          description: "A groundbreaking journey through human history from ancient foraging hominids to modern technological society.",
          rating: 4.9
        }
      ]
    },
    "F. Scott Fitzgerald": {
      name: "F. Scott Fitzgerald",
      role: "Master Novelist & Jazz Age Chronicler",
      institution: "Princeton University Literature Guild",
      publications: 18,
      citations: "95,000+",
      bio: "Celebrated 20th-century American author whose novels depicted the flamboyance, idealism, and tragic excess of the Jazz Age.",
      avatar: "✍️",
      books: [
        {
          title: "The Great Gatsby",
          category: "Classic Literature",
          price: 15.99,
          image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80",
          issn: "ISBN 978-0743273565",
          description: "The quintessential novel of the Jazz Age, exploring ambition, love, and the American Dream.",
          rating: 4.8
        }
      ]
    },
    "Tim Marshall": {
      name: "Tim Marshall",
      role: "Foreign Affairs Editor & Geopolitics Analyst",
      institution: "Royal Diplomatic & Geographical Society",
      publications: 15,
      citations: "32,000+",
      bio: "Leading British journalist, author, and broadcaster specializing in foreign affairs, international diplomacy, and physical geography.",
      avatar: "🌍",
      books: [
        {
          title: "Prisoners of Geography",
          category: "Geographical",
          price: 22.00,
          image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=600&q=80",
          issn: "ISBN 978-1501121470",
          description: "Ten maps that explain everything about world history, geopolitical conflicts, and natural land barriers.",
          rating: 4.85
        }
      ]
    },
    "Siddhartha Mukherjee": {
      name: "Siddhartha Mukherjee, MD",
      role: "Associate Professor of Medicine & Oncologist",
      institution: "Columbia University Medical Center",
      publications: 45,
      citations: "52,000+",
      bio: "Pulitzer Prize-winning physician, oncologist, and author renowned for his biographical history of cancer and genetic medicine.",
      avatar: "🧬",
      books: [
        {
          title: "The Emperor of All Maladies: A Biography of Cancer",
          category: "Medical Research",
          price: 27.95,
          image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80",
          issn: "ISBN 978-1439170915",
          description: "A magnificent history of cancer treatment, medical research discoveries, and clinical breakthroughs.",
          rating: 4.95
        }
      ]
    },
    "Brian Greene": {
      name: "Brian Greene",
      role: "Professor of Physics & Mathematics",
      institution: "Columbia University String Theory Institute",
      publications: 85,
      citations: "64,000+",
      bio: "Theoretical physicist and superstring theorist celebrated for explaining complex quantum physics, multi-dimensional space, and cosmology.",
      avatar: "⚛️",
      books: [
        {
          title: "The Elegant Universe: Superstrings & Hidden Dimensions",
          category: "Quantum Physics",
          price: 24.50,
          image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=600&q=80",
          issn: "ISBN 978-0393058581",
          description: "String theory, quantum mechanics, spacetime fabric, and the search for the ultimate theory of everything.",
          rating: 4.9
        }
      ]
    },
    "Jon Krakauer": {
      name: "Jon Krakauer",
      role: "Mountaineer & Investigative Journalist",
      institution: "American Alpine Journal Board",
      publications: 22,
      citations: "38,000+",
      bio: "Acclaimed mountaineer and investigative author famous for his harrowing firsthand account of the 1996 Mount Everest disaster.",
      avatar: "⛰️",
      books: [
        {
          title: "Into Thin Air: Mt. Everest Disaster",
          category: "Adventure",
          price: 18.99,
          image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80",
          issn: "ISBN 978-0385494786",
          description: "The gripping firsthand account of the 1996 Mount Everest tragedy on the roof of the world.",
          rating: 4.9
        }
      ]
    },
    "Stephen Hawking": {
      name: "Stephen Hawking",
      role: "Lucasian Professor of Mathematics",
      institution: "University of Cambridge Cosmology Center",
      publications: 140,
      citations: "210,000+",
      bio: "Theoretical physicist and cosmologist whose groundbreaking work on black holes, quantum gravity, and general relativity revolutionized physics.",
      avatar: "🌌",
      books: [
        {
          title: "A Brief History of Time",
          category: "Astrology & Astronomy",
          price: 25.00,
          image: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=600&q=80",
          issn: "ISBN 978-0553380163",
          description: "Stephen Hawking's landmark book on black holes, cosmic origin, time dilation, and the universe.",
          rating: 4.88
        }
      ]
    },
    "Walter Isaacson": {
      name: "Walter Isaacson",
      role: "Professor of History & Master Biographer",
      institution: "Tulane University & Aspen Institute",
      publications: 32,
      citations: "78,000+",
      bio: "Renowned biographer and historian who authored the definitive biographies of Steve Jobs, Leonardo da Vinci, Albert Einstein, and Benjamin Franklin.",
      avatar: "📚",
      books: [
        {
          title: "Steve Jobs: The Exclusive Biography",
          category: "History & Biography",
          price: 32.00,
          image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=600&q=80",
          issn: "ISBN 978-1451648539",
          description: "The riveting biography based on forty interviews with Apple co-founder Steve Jobs.",
          rating: 4.92
        },
        {
          title: "Leonardo da Vinci: Genius Biography",
          category: "History & Art",
          price: 35.00,
          image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=600&q=80",
          issn: "ISBN 978-1501139154",
          description: "Walter Isaacson's masterwork biography connecting Leonardo's art, science, anatomy, and creative genius.",
          rating: 4.95
        }
      ]
    }
  };

  // Decode or match selected author
  const decodedName = name ? decodeURIComponent(name) : "Alfred Lansing";
  const currentAuthor = authorDatabase[decodedName] || authorDatabase["Alfred Lansing"];

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
          <div style={{ width: '80px', height: '80px', borderRadius: '24px', background: '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem', flexShrink: 0, boxShadow: '0 8px 20px rgba(16,185,129,0.2)' }}>
            {currentAuthor.avatar}
          </div>

          <div style={{ flex: 1 }}>
            <div className="status-badge-row" style={{ marginBottom: '8px' }}>
              <span className="live-pill" style={{ background: '#d1fae5', color: '#047857', borderColor: '#10b981', fontWeight: 800 }}>
                Verified Lumina Publishing Author
              </span>
            </div>

            <h1 className="welcome-title" style={{ fontSize: '2rem', marginBottom: '4px' }}>{currentAuthor.name}</h1>
            <p style={{ fontSize: '0.95rem', color: '#047857', fontWeight: 800, margin: '0 0 8px 0' }}>{currentAuthor.role} • {currentAuthor.institution}</p>
            <p className="welcome-subtitle" style={{ fontSize: '0.95rem', color: '#0a3d24', fontWeight: 600, marginBottom: '1.25rem' }}>
              {currentAuthor.bio}
            </p>

            <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', paddingTop: '1rem', borderTop: '1px solid #cbe6d7' }}>
              <div>
                <span style={{ fontSize: '0.8rem', color: '#047857', fontWeight: 700, textTransform: 'uppercase' }}>Published Works</span>
                <p style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0c2b1c', margin: 0 }}>{currentAuthor.publications} Volumes</p>
              </div>
              <div>
                <span style={{ fontSize: '0.8rem', color: '#047857', fontWeight: 700, textTransform: 'uppercase' }}>Citations & Reviews</span>
                <p style={{ fontSize: '1.25rem', fontWeight: 800, color: '#10b981', margin: 0 }}>{currentAuthor.citations}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Author Switcher Quick Pills */}
        <div className="section-card" style={{ padding: '1.25rem', marginBottom: '1.75rem', background: '#ffffff', border: '1px solid #cbe6d7' }}>
          <span style={{ fontSize: '0.8rem', color: '#047857', fontWeight: 800, textTransform: 'uppercase', display: 'block', marginBottom: '10px' }}>
            Select Author to Explore Their Library:
          </span>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
            {Object.keys(authorDatabase).map((authName) => (
              <button
                key={authName}
                type="button"
                className={`nav-link ${authName === currentAuthor.name ? 'active' : ''}`}
                style={{
                  padding: '6px 14px',
                  borderRadius: '999px',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  background: authName === currentAuthor.name ? '#10b981' : '#f1f5f9',
                  color: authName === currentAuthor.name ? '#ffffff' : '#0c2b1c'
                }}
                onClick={() => navigate(`/author/${encodeURIComponent(authName)}`)}
              >
                <span>{authName}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Books List Written By This Author */}
        <div className="section-card" style={{ background: '#ffffff', border: '1px solid #cbe6d7', padding: '1.75rem' }}>
          <div className="section-title-row" style={{ marginBottom: '1.25rem' }}>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0c2b1c' }}>
              📚 Books & Publications by {currentAuthor.name} ({currentAuthor.books.length})
            </h3>
            <span className="view-all-link" onClick={() => navigate('/journals')}>
              Browse All Order Catalog →
            </span>
          </div>

          <div className="metrics-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '5px' }}>
            {currentAuthor.books.map((book, idx) => (
              <div key={idx} className="metric-card" style={{ display: 'flex', flexDirection: 'column', background: 'transparent', border: 'none', boxShadow: 'none', padding: '10px' }}>
                <div className="journal-cover-frame" style={{ height: '260px', borderRadius: '16px', overflow: 'hidden', marginBottom: '0.85rem', position: 'relative', background: '#0c2b1c', boxShadow: '0 8px 24px rgba(12, 43, 28, 0.12)' }}>
                  <img
                    src={book.image}
                    alt={book.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <span className="live-pill" style={{ position: 'absolute', top: '10px', right: '10px', background: 'rgba(255, 255, 255, 0.95)', color: '#047857', fontWeight: 800, backdropFilter: 'blur(8px)', borderColor: '#cbe6d7', padding: '4px 10px', fontSize: '0.725rem' }}>
                    Author Original
                  </span>
                </div>

                <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: '0.75rem', color: '#047857', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {book.category} • {book.issn}
                  </span>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 800, margin: '6px 0', lineHeight: 1.35, color: '#0c2b1c' }}>
                    {book.title}
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: '#0a3d24', fontWeight: 600, margin: '0 0 12px 0' }}>
                    {book.description}
                  </p>

                  <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '10px', borderTop: '1px solid #cbe6d7' }}>
                    <span style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0c2b1c' }}>
                      ${book.price.toFixed(2)}
                    </span>

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
