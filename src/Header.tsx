import { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const navItems = [
    { label: 'Home', path: '/home' },
    { label: 'Journals', path: '/journals' },
    { label: 'Category', path: '/category' },
    { label: 'Author', path: '/author' },
    { label: 'New Arrivals', path: '/new-arrivals' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <div className="header-wrapper">
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
            <h2 className="brand-name">Lumina Books <span className="brand-accent">&amp;</span> Journals</h2>
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

      {/* ROW 2: Navigation Links (Home, Journals, Category, etc.) BELOW Icon, Left-Aligned */}
      <div className="header-nav-row">
        <nav className="main-nav-bar">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.path} className="nav-item">
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `nav-link ${isActive ? 'active' : ''}`
                  }
                >
                  <span>{item.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}