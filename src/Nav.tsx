import { useState, useEffect, useRef } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import AuthorAvatar from './AuthorAvatar';

interface DropdownItem {
  icon: string;
  title: string;
  subtitle?: string;
  path: string;
}

export default function Nav() {
  const navigate = useNavigate();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
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
    <nav className="main-nav-bar" ref={navRef}>
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

        {/* Profile */}
        <li className="nav-item">
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              `nav-link ${isActive ? 'active' : ''}`
            }
          >
            <span>Profile</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
