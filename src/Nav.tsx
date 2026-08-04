import { NavLink } from 'react-router-dom';

export default function Nav() {
  const navItems = [
    { label: 'Home', path: '/home' },
    { label: 'Journals', path: '/journals' },
    { label: 'Category', path: '/category' },
    { label: 'Author', path: '/author' },
    { label: 'New Arrivals', path: '/new-arrivals' },
    { label: 'Contact', path: '/contact' },
    { label: 'Profile', path: '/profile' },
  ];

  return (
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
  );
}
