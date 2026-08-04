import { Outlet, Link } from 'react-router-dom';
import Header from './Header';
import './Navbar.css';

export default function Layout() {
  return (
    <div className="layout-container">
      <header className="site-header">
        <Header />
      </header>

      <main className="main-content-outlet">
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>Lumina Books & Journals</h3>
            <p>Empowering academic discovery & global research publishing worldwide.</p>
          </div>
          <div className="footer-col">
            <h4>Publications</h4>
            <ul>
              <li><Link to="/journals">Scientific Journals</Link></li>
              <li><Link to="/category">Medical Research</Link></li>
              <li><Link to="/journals">Technology Papers</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/home">Home Overview</Link></li>
              <li><Link to="/author">Editorial Board</Link></li>
              <li><Link to="/new-arrivals">New 2026 Releases</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Support</h4>
            <ul>
              <li><Link to="/contact">Manuscript Submissions</Link></li>
              <li><Link to="/contact">Institutional Licensing</Link></li>
              <li><Link to="/profile">Member Dashboard</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Lumina Academic Publishing Inc. All rights reserved.</p>
          <p>ISSN Registered Publisher • Peer-Reviewed Content</p>
        </div>
      </footer>
    </div>
  );
}