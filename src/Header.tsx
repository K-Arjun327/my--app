import { useState, useEffect, useRef } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import AuthorAvatar from './AuthorAvatar';

interface DropdownItem {
  icon: string;
  title: string;
  subtitle?: string;
  path: string;
}

export default function Header() {
  const navigate = useNavigate();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
        setIsProfileOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const categoryItems: DropdownItem[] = [
    { icon: '🗺️', title: 'Adventure & Expeditions', subtitle: '540 Titles • Polar & Survival', path: '/category' },
    { icon: '✍️', title: 'Literary Stories & Fiction', subtitle: '820 Titles • Classic Anthologies', path: '/category' },
    { icon: '🌍', title: 'Geographical & Earth Sciences', subtitle: '960 Titles • Geology & Maps', path: '/category' },
    { icon: '✨', title: 'Vedic Astrology & Astronomy', subtitle: '410 Titles • Planetary Charts', path: '/category' },
    { icon: '⚛️', title: 'Scientific & Quantum Physics', subtitle: '1,240 Titles • Quantum Mechanics', path: '/category' },
    { icon: '🧬', title: 'Medical & Clinical Genomics', subtitle: '890 Titles • Oncology & Neuroscience', path: '/category' },
    { icon: '🏛️', title: 'History Chronicles & Biographies', subtitle: '730 Titles • Ancient Archives', path: '/category' },
  ];

  const journalItems: DropdownItem[] = [
    { icon: '⚛️', title: 'Quantum Physics & AI Intelligence', subtitle: 'Dr. Eliza Reed & Dr. Alan Chen', path: '/journals' },
    { icon: '🧬', title: 'Clinical Oncology & Genomics', subtitle: 'Dr. Marcus Vance & Harvard Med', path: '/journals' },
    { icon: '🗺️', title: "Endurance: Shackleton's Voyage", subtitle: 'Alfred Lansing • Polar Survival', path: '/journals' },
    { icon: '🪐', title: 'Cosmos & Astrobiology Review', subtitle: 'Carl Sagan • Planetary Science', path: '/journals' },
    { icon: '🌍', title: 'Prisoners of Geography Vol. IV', subtitle: 'Tim Marshall • Global Geopolitics', path: '/journals' },
    { icon: '🏛️', title: 'Ancient Civilizations & Warfare', subtitle: 'Oxford Historical Society', path: '/journals' },
  ];

  const authorItems: DropdownItem[] = [
    { icon: '🎭', title: 'William Shakespeare', subtitle: '11 Masterwork Plays & Sonnets', path: '/author/William%20Shakespeare' },
    { icon: '👁️', title: 'George Orwell', subtitle: '10 Dystopian & Political Works', path: '/author/George%20Orwell' },
    { icon: '👒', title: 'Jane Austen', subtitle: '10 Classic Romance Masterpieces', path: '/author/Jane%20Austen' },
    { icon: '🎣', title: 'Ernest Hemingway', subtitle: '10 Nobel Laureate Works', path: '/author/Ernest%20Hemingway' },
    { icon: '🔍', title: 'Arthur Conan Doyle', subtitle: '10 Sherlock Holmes Mysteries', path: '/author/Arthur%20Conan%20Doyle' },
    { icon: '🗝️', title: 'Agatha Christie', subtitle: '10 Queen of Crime Mysteries', path: '/author/Agatha%20Christie' },
    { icon: '📜', title: 'Leo Tolstoy', subtitle: '10 Russian Realist Epics', path: '/author/Leo%20Tolstoy' },
    { icon: '🕯️', title: 'Fyodor Dostoevsky', subtitle: '10 Psychological Classics', path: '/author/Fyodor%20Dostoevsky' },
    { icon: '🎩', title: 'Charles Dickens', subtitle: '10 Victorian Masterpieces', path: '/author/Charles%20Dickens' },
    { icon: '⚡', title: 'Stephen King', subtitle: '10 Suspense & Horror Bestsellers', path: '/author/Stephen%20King' },
    { icon: '🌌', title: 'Carl Sagan', subtitle: '10 Astronomy & Space Books', path: '/author/Carl%20Sagan' },
    { icon: '🏛️', title: 'Yuval Noah Harari', subtitle: '10 Sapiens & History Works', path: '/author/Yuval%20Noah%20Harari' },
  ];

  const toggleDropdown = (name: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveDropdown((prev) => (prev === name ? null : name));
  };

  const handleItemClick = (path: string) => {
    setActiveDropdown(null);
    navigate(path);
  };

  return (
    <div className="header-wrapper" ref={headerRef}>
      {/* ROW 1: Logo on Left | Search & Actions on Right */}
      <div className="header-top-bar">
        {/* Brand Logo & Name */}
        <div className="brand-logo-container" onClick={() => navigate('/home')}>
          <div className="logo-icon-box">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
              <path d="M8 7h8" />
              <path d="M8 11h6" />
            </svg>
          </div>
          <div className="brand-text-box">
            <h2 className="brand-name">Book<span className="brand-accent">Mart</span></h2>
            <p>Academic &amp; Literary Publishing</p>
          </div>
        </div>

        {/* TOP RIGHT: Search Bar, Order Cart, Profile Dropdown */}
        <div className="header-top-right">
          <div className="header-search">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input type="text" placeholder="Search titles..." />
          </div>

          <div className="header-actions-right">
            <button 
              type="button" 
              className="cart-button-link"
              onClick={() => navigate('/journals')}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
              <span>Order Cart</span>
              <span className="cart-badge">3</span>
            </button>

            {/* Profile Dropdown Container */}
            <div className="profile-dropdown-wrapper" style={{ position: 'relative' }}>
              <button
                type="button"
                className="account-button-link"
                onClick={() => setIsProfileOpen((prev) => !prev)}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '4px' }}>
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                <span>Profile</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ marginLeft: '4px', transform: isProfileOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}>
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>

              {isProfileOpen && (
                <div className="profile-menu-dropdown">
                  <button
                    type="button"
                    className="profile-menu-item"
                    onClick={() => {
                      setIsProfileOpen(false);
                      navigate('/profile');
                    }}
                  >
                    <span style={{ fontSize: '1rem' }}>👤</span>
                    <span>My Account</span>
                  </button>

                  <div style={{ height: '1px', background: '#e2e8f0', margin: '4px 0' }}></div>

                  <button
                    type="button"
                    className="profile-menu-item logout-item"
                    onClick={() => {
                      setIsProfileOpen(false);
                      navigate('/login');
                    }}
                  >
                    <span style={{ fontSize: '1rem' }}>🚪</span>
                    <span>Logout</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ROW 2: Navigation Links */}
      <div className="header-nav-row">
        <nav className="main-nav-bar">
          <ul className="nav-list">
            {/* Home */}
            <li className="nav-item">
              <NavLink
                to="/home"
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'active' : ''}`
                }
              >
                <span>Home</span>
              </NavLink>
            </li>

            {/* New Arrivals */}
            <li className="nav-item">
              <NavLink
                to="/new-arrivals"
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'active' : ''}`
                }
              >
                <span>New Arrivals</span>
              </NavLink>
            </li>

            {/* Category with Downward Arrow */}
            <li className="nav-item">
              <div className="nav-item-dropdown-wrapper">
                <NavLink
                  to="/category"
                  className={({ isActive }) =>
                    `nav-link nav-link-with-arrow ${isActive ? 'active' : ''}`
                  }
                >
                  <span>Category</span>
                </NavLink>
                <button
                  type="button"
                  className="nav-arrow-btn"
                  aria-label="Toggle Category Menu"
                  onClick={(e) => toggleDropdown('category', e)}
                >
                  <svg
                    className={`nav-arrow-icon ${activeDropdown === 'category' ? 'open' : ''}`}
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>

                {activeDropdown === 'category' && (
                  <div className="nav-custom-dropdown">
                    <div className="nav-dropdown-header">
                      <h5>Explore Categories</h5>
                    </div>
                    <div className="nav-dropdown-list">
                      {categoryItems.map((cat, idx) => (
                        <button
                          key={idx}
                          type="button"
                          className="nav-dropdown-item"
                          onClick={() => handleItemClick(cat.path)}
                        >
                          <span className="nav-dropdown-item-icon">{cat.icon}</span>
                          <div className="nav-dropdown-item-text">
                            <span className="nav-dropdown-item-title">{cat.title}</span>
                            <span className="nav-dropdown-item-sub">{cat.subtitle}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                    <button
                      type="button"
                      className="nav-dropdown-footer-link"
                      onClick={() => handleItemClick('/category')}
                    >
                      View All Categories Overview →
                    </button>
                  </div>
                )}
              </div>
            </li>

            {/* Journals with Downward Arrow */}
            <li className="nav-item">
              <div className="nav-item-dropdown-wrapper">
                <NavLink
                  to="/journals"
                  className={({ isActive }) =>
                    `nav-link nav-link-with-arrow ${isActive ? 'active' : ''}`
                  }
                >
                  <span>Journals</span>
                </NavLink>
                <button
                  type="button"
                  className="nav-arrow-btn"
                  aria-label="Toggle Journals Menu"
                  onClick={(e) => toggleDropdown('journals', e)}
                >
                  <svg
                    className={`nav-arrow-icon ${activeDropdown === 'journals' ? 'open' : ''}`}
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>

                {activeDropdown === 'journals' && (
                  <div className="nav-custom-dropdown">
                    <div className="nav-dropdown-header">
                      <h5>Featured Journals &amp; Papers</h5>
                    </div>
                    <div className="nav-dropdown-list">
                      {journalItems.map((j, idx) => (
                        <button
                          key={idx}
                          type="button"
                          className="nav-dropdown-item"
                          onClick={() => handleItemClick(j.path)}
                        >
                          <span className="nav-dropdown-item-icon">{j.icon}</span>
                          <div className="nav-dropdown-item-text">
                            <span className="nav-dropdown-item-title">{j.title}</span>
                            <span className="nav-dropdown-item-sub">{j.subtitle}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                    <button
                      type="button"
                      className="nav-dropdown-footer-link"
                      onClick={() => handleItemClick('/journals')}
                    >
                      Browse Full Journal Catalog →
                    </button>
                  </div>
                )}
              </div>
            </li>

            {/* Author with Downward Arrow */}
            <li className="nav-item">
              <div className="nav-item-dropdown-wrapper">
                <NavLink
                  to="/author"
                  className={({ isActive }) =>
                    `nav-link nav-link-with-arrow ${isActive ? 'active' : ''}`
                  }
                >
                  <span>Author</span>
                </NavLink>
                <button
                  type="button"
                  className="nav-arrow-btn"
                  aria-label="Toggle Author Menu"
                  onClick={(e) => toggleDropdown('author', e)}
                >
                  <svg
                    className={`nav-arrow-icon ${activeDropdown === 'author' ? 'open' : ''}`}
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>

                {activeDropdown === 'author' && (
                  <div className="nav-custom-dropdown">
                    <div className="nav-dropdown-header">
                      <h5>Editorial &amp; Authors Board</h5>
                    </div>
                    <div className="nav-dropdown-list">
                      {authorItems.map((auth, idx) => (
                        <button
                          key={idx}
                          type="button"
                          className="nav-dropdown-item"
                          onClick={() => handleItemClick(auth.path)}
                        >
                          <AuthorAvatar name={auth.title} size={32} />
                          <div className="nav-dropdown-item-text">
                            <span className="nav-dropdown-item-title">{auth.title}</span>
                            <span className="nav-dropdown-item-sub">{auth.subtitle}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                    <button
                      type="button"
                      className="nav-dropdown-footer-link"
                      onClick={() => handleItemClick('/author')}
                    >
                      View All Authors Board →
                    </button>
                  </div>
                )}
              </div>
            </li>

            {/* Contact */}
            <li className="nav-item">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'active' : ''}`
                }
              >
                <span>Contact</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}