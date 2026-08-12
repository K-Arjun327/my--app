import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthorAvatar from './AuthorAvatar';
import './Home.css';

interface JournalBook {
  id: number;
  title: string;
  author: string;
  category: string;
  price: number;
  rating: number;
  reviewsCount: number;
  issn: string;
  badge: string;
  image: string;
  description: string;
  stockStatus: string;
}

export default function Journals() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [cart, setCart] = useState<{ book: JournalBook; qty: number }[]>([
    {
      book: {
        id: 1,
        title: "Quantum Physics & AI Intelligence",
        author: "Dr. Eliza Reed & Dr. Alan Chen",
        category: "Scientific",
        price: 1499.00,
        rating: 4.9,
        reviewsCount: 128,
        issn: "ISSN 2049-3821",
        badge: "Best Seller",
        image: "/journal_cover_science.svg",
        description: "Exploring the synergy between advanced quantum computation, neural network models, and fundamental physics. Hardcover Edition.",
        stockStatus: "In Stock"
      },
      qty: 1
    }
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [trackingId, setTrackingId] = useState('BM-849201');
  const [selectedBookModal, setSelectedBookModal] = useState<JournalBook | null>(null);

  const sampleJournals: JournalBook[] = [
    {
      id: 1,
      title: "Endurance: Shackleton's Incredible Voyage",
      author: "Alfred Lansing",
      category: "Adventure",
      price: 869,
      rating: 4.9,
      reviewsCount: 1540,
      issn: "ISBN 978-0465062294",
      badge: "Classic Survival",
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80",
      description: "The harrowing authentic account of Sir Ernest Shackleton's 1914 Antarctic expedition trapped in pack ice.",
      stockStatus: "In Stock - Ships Today"
    },
    {
      id: 2,
      title: "Cosmos: A Personal Voyage",
      author: "Carl Sagan",
      category: "Astrology",
      price: 979,
      rating: 5.0,
      reviewsCount: 3200,
      issn: "ISBN 978-0345331359",
      badge: "Bestseller",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80",
      description: "Carl Sagan's iconic exploration of space, human civilization, science, and the universe.",
      stockStatus: "In Stock"
    },
    {
      id: 3,
      title: "Sapiens: A Brief History of Humankind",
      author: "Yuval Noah Harari",
      category: "History",
      price: 939,
      rating: 4.9,
      reviewsCount: 4800,
      issn: "ISBN 978-0062316097",
      badge: "World Bestseller",
      image: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?auto=format&fit=crop&w=600&q=80",
      description: "A groundbreaking journey through human history from ancient foraging hominids to modern technological society.",
      stockStatus: "In Stock"
    },
    {
      id: 4,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      category: "Stories",
      price: 559,
      rating: 4.8,
      reviewsCount: 2900,
      issn: "ISBN 978-0743273565",
      badge: "Literary Classic",
      image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80",
      description: "The quintessential novel of the Jazz Age, exploring ambition, love, and the American Dream.",
      stockStatus: "In Stock"
    },
    {
      id: 5,
      title: "Prisoners of Geography",
      author: "Tim Marshall",
      category: "Geographical",
      price: 769,
      rating: 4.85,
      reviewsCount: 1850,
      issn: "ISBN 978-1501121470",
      badge: "Global Geopolitics",
      image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=600&q=80",
      description: "Ten maps that explain everything about world history, geopolitical conflicts, and natural land barriers.",
      stockStatus: "In Stock"
    },
    {
      id: 6,
      title: "The Emperor of All Maladies: A Biography of Cancer",
      author: "Siddhartha Mukherjee",
      category: "Medical",
      price: 979,
      rating: 4.95,
      reviewsCount: 2100,
      issn: "ISBN 978-1439170915",
      badge: "Pulitzer Prize Winner",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80",
      description: "A magnificent history of cancer treatment, medical research discoveries, and clinical breakthroughs.",
      stockStatus: "In Stock"
    },
    {
      id: 7,
      title: "The Elegant Universe: Superstrings & Hidden Dimensions",
      author: "Brian Greene",
      category: "Scientific",
      price: 859,
      rating: 4.9,
      reviewsCount: 1640,
      issn: "ISBN 978-0393058581",
      badge: "Quantum Theory",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=600&q=80",
      description: "String theory, quantum mechanics, spacetime fabric, and the search for the ultimate theory of everything.",
      stockStatus: "In Stock"
    },
    {
      id: 8,
      title: "Into Thin Air: Mt. Everest Disaster",
      author: "Jon Krakauer",
      category: "Adventure",
      price: 659,
      rating: 4.9,
      reviewsCount: 2750,
      issn: "ISBN 978-0385494786",
      badge: "Mountaineering Classic",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80",
      description: "The gripping firsthand account of the 1996 Mount Everest tragedy on the roof of the world.",
      stockStatus: "In Stock"
    },
    {
      id: 9,
      title: "A Brief History of Time",
      author: "Stephen Hawking",
      category: "Astrology",
      price: 879,
      rating: 4.88,
      reviewsCount: 3900,
      issn: "ISBN 978-0553380163",
      badge: "Astronomy Classic",
      image: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=600&q=80",
      description: "Stephen Hawking's landmark book on black holes, cosmic origin, time dilation, and the universe.",
      stockStatus: "In Stock"
    },
    {
      id: 10,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      category: "Stories",
      price: 589,
      rating: 4.95,
      reviewsCount: 5100,
      issn: "ISBN 978-0060935467",
      badge: "Pulitzer Winner",
      image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=600&q=80",
      description: "The timeless novel of justice, honor, and human empathy in the Deep South.",
      stockStatus: "In Stock"
    },
    {
      id: 11,
      title: "Guns, Germs, and Steel: Fates of Human Societies",
      author: "Jared Diamond",
      category: "Geographical",
      price: 769,
      rating: 4.85,
      reviewsCount: 2200,
      issn: "ISBN 978-0393354379",
      badge: "Geography & Society",
      image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=600&q=80",
      description: "How geography, continental axes, and environmental factors shaped human civilizational dominance.",
      stockStatus: "In Stock"
    },
    {
      id: 12,
      title: "Steve Jobs: The Exclusive Biography",
      author: "Walter Isaacson",
      category: "History",
      price: 1119,
      rating: 4.92,
      reviewsCount: 3400,
      issn: "ISBN 978-1451648539",
      badge: "Official Biography",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=600&q=80",
      description: "The riveting biography based on forty interviews with Apple co-founder Steve Jobs.",
      stockStatus: "In Stock"
    },
    {
      id: 13,
      title: "The Lost City of Z: Amazonian Expedition",
      author: "David Grann",
      category: "Adventure",
      price: 699,
      rating: 4.85,
      reviewsCount: 1420,
      issn: "ISBN 978-1400082148",
      badge: "Jungle Exploration",
      image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=600&q=80",
      description: "A legendary British explorer's deadly quest to discover an ancient civilization in the Amazon rainforest.",
      stockStatus: "In Stock"
    },
    {
      id: 14,
      title: "1984: Dystopian Fiction Masterpiece",
      author: "George Orwell",
      category: "Stories",
      price: 519,
      rating: 4.92,
      reviewsCount: 6200,
      issn: "ISBN 978-0451524935",
      badge: "World Classic",
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=600&q=80",
      description: "George Orwell's chilling prophecy about totalitarian surveillance, Big Brother, and truth control.",
      stockStatus: "In Stock"
    },
    {
      id: 15,
      title: "The Alchemist: Magical Fable",
      author: "Paulo Coelho",
      category: "Stories",
      price: 609,
      rating: 4.88,
      reviewsCount: 4900,
      issn: "ISBN 978-0062315007",
      badge: "Global Phenomenon",
      image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=600&q=80",
      description: "An enchanting fable about following your dreams, listening to your heart, and reading life's omens.",
      stockStatus: "In Stock"
    },
    {
      id: 16,
      title: "The Revenge of Geography",
      author: "Robert D. Kaplan",
      category: "Geographical",
      price: 809,
      rating: 4.8,
      reviewsCount: 980,
      issn: "ISBN 978-0345848321",
      badge: "Geopolitics",
      image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=600&q=80",
      description: "What maps tell us about coming global conflicts and the battle against fate.",
      stockStatus: "In Stock"
    },
    {
      id: 17,
      title: "Astrology for the Soul",
      author: "Jan Spiller",
      category: "Astrology",
      price: 739,
      rating: 4.9,
      reviewsCount: 1750,
      issn: "ISBN 978-0553378382",
      badge: "North Node Guide",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80",
      description: "Discover your hidden talents, karmic fulfillment, and life purpose through North Node astrological charts.",
      stockStatus: "In Stock"
    },
    {
      id: 18,
      title: "Astrophysics for People in a Hurry",
      author: "Neil deGrasse Tyson",
      category: "Astrology",
      price: 659,
      rating: 4.87,
      reviewsCount: 3100,
      issn: "ISBN 978-0393609394",
      badge: "Astrophysics",
      image: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?auto=format&fit=crop&w=600&q=80",
      description: "Essential cosmic insights into black holes, quantum physics, the Big Bang, and space exploration.",
      stockStatus: "In Stock"
    },
    {
      id: 19,
      title: "Alexander Hamilton: Founding Biography",
      author: "Ron Chernow",
      category: "History",
      price: 1049,
      rating: 4.95,
      reviewsCount: 2800,
      issn: "ISBN 978-0143034759",
      badge: "Pulitzer Winner",
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=600&q=80",
      description: "The definitive biography of Founding Father Alexander Hamilton that inspired the hit Broadway musical.",
      stockStatus: "In Stock"
    },
    {
      id: 20,
      title: "When Breath Becomes Air",
      author: "Paul Kalanithi",
      category: "Medical",
      price: 699,
      rating: 4.95,
      reviewsCount: 3950,
      issn: "ISBN 978-0812988406",
      badge: "Memoir Classic",
      image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=600&q=80",
      description: "A young neurosurgeon's unforgettable memoir on facing terminal illness, mortality, and what makes life meaningful.",
      stockStatus: "In Stock"
    },
    {
      id: 21,
      title: "Wild: From Lost to Found on the Pacific Crest Trail",
      author: "Cheryl Strayed",
      category: "Adventure",
      price: 629,
      rating: 4.88,
      reviewsCount: 3100,
      issn: "ISBN 978-0307476074",
      badge: "Pacific Crest Memoir",
      image: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&w=600&q=80",
      description: "A 1,100-mile solo hike along the Pacific Crest Trail after personal tragedy and redemption.",
      stockStatus: "In Stock"
    },
    {
      id: 22,
      title: "In the Kingdom of Ice: Arctic Expedition",
      author: "Hampton Sides",
      category: "Adventure",
      price: 789,
      rating: 4.92,
      reviewsCount: 1620,
      issn: "ISBN 978-0307946379",
      badge: "Polar Survival",
      image: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&w=600&q=80",
      description: "The heroic voyage of the USS Jeannette trapped in frozen Arctic pack ice during a quest for the North Pole.",
      stockStatus: "In Stock"
    },
    {
      id: 23,
      title: "One Hundred Years of Solitude",
      author: "Gabriel García Márquez",
      category: "Stories",
      price: 659,
      rating: 4.96,
      reviewsCount: 5400,
      issn: "ISBN 978-0060883287",
      badge: "Nobel Masterpiece",
      image: "https://images.unsplash.com/photo-1544716278-e513176f20b5?auto=format&fit=crop&w=600&q=80",
      description: "The magical realism masterpiece depicting seven generations of the Buendía family in Macondo.",
      stockStatus: "In Stock"
    },
    {
      id: 24,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      category: "Stories",
      price: 509,
      rating: 4.94,
      reviewsCount: 6100,
      issn: "ISBN 978-0141439518",
      badge: "Classic Romance",
      image: "https://images.unsplash.com/photo-1474939557548-f84244685420?auto=format&fit=crop&w=600&q=80",
      description: "Jane Austen's timeless classic exploring manners, upbringing, morality, and marriage in Regency England.",
      stockStatus: "In Stock"
    },
    {
      id: 25,
      title: "The Map That Changed the World",
      author: "Simon Winchester",
      category: "Geographical",
      price: 739,
      rating: 4.86,
      reviewsCount: 1350,
      issn: "ISBN 978-0060931803",
      badge: "Geological History",
      image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=600&q=80",
      description: "William Smith and the birth of modern geology through the creation of the world's first geological map.",
      stockStatus: "In Stock"
    },
    {
      id: 26,
      title: "The Sixth Extinction: An Unnatural History",
      author: "Elizabeth Kolbert",
      category: "Geographical",
      price: 839,
      rating: 4.9,
      reviewsCount: 2250,
      issn: "ISBN 978-0805092998",
      badge: "Pulitzer Prize Winner",
      image: "https://images.unsplash.com/photo-1511497584788-876761c119ee?auto=format&fit=crop&w=600&q=80",
      description: "A major study of human-driven species extinction and planet Earth's changing biosphere.",
      stockStatus: "In Stock"
    },
    {
      id: 27,
      title: "The Planets: Solar System Exploration",
      author: "Dava Sobel",
      category: "Astrology",
      price: 699,
      rating: 4.87,
      reviewsCount: 1480,
      issn: "ISBN 978-0143036937",
      badge: "Planetary Science",
      image: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=600&q=80",
      description: "A poetic and scientific tour of the planets, moons, and planetary mythology of our solar system.",
      stockStatus: "In Stock"
    },
    {
      id: 28,
      title: "The Only Astrology Book You'll Ever Need",
      author: "Joanna Martine Woolfolk",
      category: "Astrology",
      price: 929,
      rating: 4.92,
      reviewsCount: 4200,
      issn: "ISBN 978-1589793774",
      badge: "Astrology Guide",
      image: "https://images.unsplash.com/photo-1532693322450-2cb5c511067d?auto=format&fit=crop&w=600&q=80",
      description: "The ultimate reference guide to sun signs, rising signs, moon placements, and horoscope forecasting.",
      stockStatus: "In Stock"
    },
    {
      id: 29,
      title: "The Guns of August: WWI Military History",
      author: "Barbara W. Tuchman",
      category: "History",
      price: 959,
      rating: 4.94,
      reviewsCount: 2980,
      issn: "ISBN 978-0345386236",
      badge: "Pulitzer Winner",
      image: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?auto=format&fit=crop&w=600&q=80",
      description: "The Pulitzer Prize-winning classic account of the opening month of World War I in 1914.",
      stockStatus: "In Stock"
    },
    {
      id: 30,
      title: "Leonardo da Vinci: Genius Biography",
      author: "Walter Isaacson",
      category: "History",
      price: 1229,
      rating: 4.95,
      reviewsCount: 3800,
      issn: "ISBN 978-1501139154",
      badge: "Master Biography",
      image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=600&q=80",
      description: "Walter Isaacson's masterwork biography connecting Leonardo's art, science, anatomy, and creative genius.",
      stockStatus: "In Stock"
    }
  ];

  const filteredJournals = sampleJournals.filter((j) => {
    const matchesCategory = selectedCategory === 'All' || j.category === selectedCategory;
    const matchesSearch = j.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          j.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          j.issn.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const addToCart = (book: JournalBook) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.book.id === book.id);
      if (existing) {
        return prev.map((item) =>
          item.book.id === book.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { book, qty: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((item) => item.book.id !== id));
  };

  const cartSubtotal = cart.reduce((sum, item) => sum + item.book.price * item.qty, 0);

  const handleCompleteOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setTrackingId(`BM-${Math.floor(100000 + Math.random() * 900000)}`);
    setOrderComplete(true);
    setTimeout(() => {
      setCart([]);
      setIsCheckoutOpen(false);
      setOrderComplete(false);
      setIsCartOpen(false);
    }, 2500);
  };

  return (
    <div className="home-container">
      <div className="ambient-glow glow-top-left"></div>
      <div className="ambient-glow glow-bottom-right"></div>

      <div className="dashboard-content">
        {/* Welcome Header */}
        <div className="welcome-hero" style={{ marginBottom: '1.5rem' }}>
          <div>
            <span className="live-pill" style={{ marginBottom: '12px' }}>
              <span className="pulse-dot"></span>
              2026 Academic Journal Catalog
            </span>
            <h1 className="welcome-title">Order Scientific Journals & Books</h1>
            <p className="welcome-subtitle">
              Direct access to peer-reviewed research papers, medical journals, adventure logs, stories, geographical maps, and astrology volumes.
            </p>
          </div>
          <button className="action-btn-primary" onClick={() => setIsCartOpen(true)}>
            <span>View Order Cart ({cart.reduce((a, b) => a + b.qty, 0)})</span>
          </button>
        </div>

        {/* Filter Controls */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', gap: '5px', flexWrap: 'wrap' }}>
          <div className="header-nav" style={{ padding: '4px', background: 'transparent', border: 'none', display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
            {['All', 'Adventure', 'Stories', 'Geographical', 'Astrology', 'Scientific', 'Medical', 'History'].map((cat) => (
              <button
                key={cat}
                type="button"
                className={`nav-link-btn ${selectedCategory === cat ? 'active' : ''}`}
                style={{ padding: '6px 14px', borderRadius: '999px', fontSize: '0.875rem', fontWeight: 700 }}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="header-search" style={{ width: '260px', background: '#ffffff', border: '1px solid #cbe6d7' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              placeholder="Search journals or authors..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Journal Cards Grid - 5px Gap & High-Definition Image Graphics */}
        <div className="metrics-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '5px' }}>
          {filteredJournals.map((journal) => (
            <div key={journal.id} className="metric-card" style={{ display: 'flex', flexDirection: 'column', background: 'transparent', border: 'none', boxShadow: 'none', padding: '10px' }}>
              {/* High-Definition Graphic Book Cover Container */}
              <div className="journal-cover-frame" style={{ height: '260px', borderRadius: '16px', overflow: 'hidden', marginBottom: '0.85rem', position: 'relative', background: '#0c2b1c', boxShadow: '0 8px 24px rgba(12, 43, 28, 0.12)' }}>
                <img
                  src={journal.image}
                  alt={journal.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s ease' }}
                />
              </div>

              <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '0.75rem', color: '#047857', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {journal.category} • {journal.issn}
                </span>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 800, margin: '6px 0', lineHeight: 1.35, color: '#0c2b1c' }}>
                  {journal.title}
                </h3>
                <div
                  className="author-byline"
                  style={{ marginBottom: '10px' }}
                  onClick={() => navigate(`/author/${encodeURIComponent(journal.author)}`)}
                >
                  <AuthorAvatar name={journal.author} size={24} />
                  <span className="author-name-text" style={{ fontSize: '0.85rem', color: '#047857', fontWeight: 700, textDecoration: 'underline' }}>
                    By {journal.author} →
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.85rem', color: '#d97706', marginBottom: '12px' }}>
                  <span style={{ fontWeight: 800 }}>★ {journal.rating}</span>
                  <span style={{ color: '#0a3d24', fontWeight: 600 }}>({journal.reviewsCount} reviews)</span>
                  <span style={{ marginLeft: 'auto', color: '#047857', fontSize: '0.75rem', fontWeight: 800 }}>{journal.stockStatus}</span>
                </div>

                <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '10px', borderTop: '1px solid #cbe6d7' }}>
                  <span style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0c2b1c' }}>
                    ₹{journal.price.toLocaleString('en-IN')}
                  </span>

                  <div style={{ display: 'flex', gap: '5px' }}>
                    <button
                      type="button"
                      className="action-btn-secondary"
                      style={{ padding: '8px 12px', fontSize: '0.8rem', background: '#ffffff', borderColor: '#cbe6d7' }}
                      onClick={() => setSelectedBookModal(journal)}
                    >
                      Details
                    </button>
                    <button
                      type="button"
                      className="action-btn-primary"
                      style={{ padding: '8px 14px', fontSize: '0.8rem' }}
                      onClick={() => addToCart(journal)}
                    >
                      Order Copy
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cart Drawer Modal */}
      {isCartOpen && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 2000, background: 'rgba(15,23,42,0.5)', backdropFilter: 'blur(8px)', display: 'flex', justifyContent: 'flex-end' }}>
          <div style={{ width: '100%', maxWidth: '420px', background: '#ffffff', borderLeft: '1px solid #e2e8f0', padding: '2rem', display: 'flex', flexDirection: 'column', color: '#0f172a' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid #e2e8f0' }}>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 700, margin: 0, color: '#0f172a' }}>Your Journal Cart ({cart.length})</h2>
              <button onClick={() => setIsCartOpen(false)} style={{ background: 'none', border: 'none', color: '#64748b', fontSize: '1.5rem', cursor: 'pointer' }}>×</button>
            </div>

            <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {cart.length === 0 ? (
                <p style={{ color: '#64748b', textAlign: 'center', marginTop: '2rem' }}>Your cart is empty.</p>
              ) : (
                cart.map((item) => (
                  <div key={item.book.id} style={{ display: 'flex', gap: '12px', padding: '12px', background: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                    <img src={item.book.image} alt={item.book.title} style={{ width: '50px', height: '65px', objectFit: 'cover', borderRadius: '6px' }} />
                    <div style={{ flex: 1 }}>
                      <h4 style={{ fontSize: '0.875rem', margin: '0 0 4px 0', fontWeight: 600, color: '#0f172a' }}>{item.book.title}</h4>
                      <p style={{ fontSize: '0.75rem', color: '#64748b', margin: '0 0 6px 0' }}>Qty: {item.qty} × ₹{item.book.price.toLocaleString('en-IN')}</p>
                      <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#059669' }}>₹{(item.book.price * item.qty).toLocaleString('en-IN')}</span>
                    </div>
                    <button onClick={() => removeFromCart(item.book.id)} style={{ background: 'none', border: 'none', color: '#dc2626', cursor: 'pointer', height: 'fit-content' }}>🗑️</button>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div style={{ paddingTop: '1.5rem', borderTop: '1px solid #e2e8f0', marginTop: 'auto' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', fontSize: '1.1rem', fontWeight: 700, color: '#0f172a' }}>
                  <span>Subtotal</span>
                  <span>₹{cartSubtotal.toLocaleString('en-IN')}</span>
                </div>
                <button
                  className="action-btn-primary"
                  style={{ width: '100%', padding: '14px', justifyContent: 'center' }}
                  onClick={() => setIsCheckoutOpen(true)}
                >
                  Proceed to Secure Checkout
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Checkout Modal */}
      {isCheckoutOpen && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 3000, background: 'rgba(15,23,42,0.6)', backdropFilter: 'blur(10px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
          <div style={{ width: '100%', maxWidth: '500px', background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '24px', padding: '2rem', color: '#0f172a' }}>
            {!orderComplete ? (
              <form onSubmit={handleCompleteOrder}>
                <h2 style={{ fontSize: '1.4rem', fontWeight: 700, margin: '0 0 8px 0', color: '#0f172a' }}>Order Checkout</h2>
                <p style={{ color: '#64748b', fontSize: '0.85rem', marginBottom: '1.5rem' }}>Enter delivery details to place your journal order.</p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '1.5rem' }}>
                  <input type="text" placeholder="Full Name / Academic Institution" required style={{ width: '100%', padding: '12px', background: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: '10px', color: '#0f172a' }} />
                  <input type="email" placeholder="Email Address" required style={{ width: '100%', padding: '12px', background: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: '10px', color: '#0f172a' }} />
                  <input type="text" placeholder="Shipping Address & Postal Code" required style={{ width: '100%', padding: '12px', background: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: '10px', color: '#0f172a' }} />
                  <select style={{ width: '100%', padding: '12px', background: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: '10px', color: '#0f172a' }}>
                    <option>Credit / Debit Card (Visa, Mastercard, AMEX)</option>
                    <option>Institutional Invoice / Purchase Order</option>
                    <option>PayPal Express</option>
                  </select>
                </div>

                <div style={{ display: 'flex', gap: '12px' }}>
                  <button type="button" className="action-btn-secondary" style={{ flex: 1 }} onClick={() => setIsCheckoutOpen(false)}>Cancel</button>
                  <button type="submit" className="action-btn-primary" style={{ flex: 1, justifyContent: 'center' }}>Confirm Order (₹{cartSubtotal.toLocaleString('en-IN')})</button>
                </div>
              </form>
            ) : (
              <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎉</div>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 700, margin: '0 0 8px 0', color: '#059669' }}>Order Successfully Placed!</h2>
                <p style={{ color: '#64748b', fontSize: '0.9rem' }}>Tracking ID: <strong>#{trackingId}</strong></p>
                <p style={{ color: '#94a3b8', fontSize: '0.85rem' }}>A confirmation email with shipping timeline has been sent.</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Book Detail Modal */}
      {selectedBookModal && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 3000, background: 'rgba(15,23,42,0.6)', backdropFilter: 'blur(10px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
          <div style={{ width: '100%', maxWidth: '640px', background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '24px', padding: '2rem', display: 'flex', gap: '2rem', color: '#0f172a' }}>
            <img src={selectedBookModal.image} alt={selectedBookModal.title} style={{ width: '180px', height: '250px', objectFit: 'cover', borderRadius: '14px' }} />
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '0.8rem', color: '#d97706', fontWeight: 700 }}>{selectedBookModal.category} • {selectedBookModal.issn}</span>
              <h2 style={{ fontSize: '1.35rem', fontWeight: 700, margin: '8px 0', color: '#0f172a' }}>{selectedBookModal.title}</h2>
              <div
                className="author-byline"
                style={{ marginBottom: '12px' }}
                onClick={() => {
                  const authName = selectedBookModal.author;
                  setSelectedBookModal(null);
                  navigate(`/author/${encodeURIComponent(authName)}`);
                }}
              >
                <AuthorAvatar name={selectedBookModal.author} size={26} />
                <span className="author-name-text" style={{ color: '#047857', fontSize: '0.9rem', fontWeight: 700, textDecoration: 'underline' }}>
                  By {selectedBookModal.author} →
                </span>
              </div>
              <p style={{ fontSize: '0.875rem', color: '#334155', lineHeight: 1.5, marginBottom: '1.5rem' }}>{selectedBookModal.description}</p>
              <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f172a' }}>₹{selectedBookModal.price.toLocaleString('en-IN')}</span>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <button className="action-btn-secondary" onClick={() => setSelectedBookModal(null)}>Close</button>
                  <button className="action-btn-primary" onClick={() => { addToCart(selectedBookModal); setSelectedBookModal(null); }}>Add to Order</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
