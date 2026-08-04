import { useNavigate } from 'react-router-dom';
import './Home.css';

export default function Profile() {
  const navigate = useNavigate();

  const activeSubscriptions = [
    { name: "Quantum Physics Quarterly", tier: "Annual Hardcover License", status: "Active • Auto-renews Nov 2026", price: "$149/yr" },
    { name: "Journal of Clinical Neuroscience", tier: "Institutional Digital + Print", status: "Active • Auto-renews Jan 2027", price: "$185/yr" }
  ];

  const pastOrders = [
    { id: "#LUM-884920", title: "Handcrafted Leather Journal", date: "July 12, 2026", status: "Delivered 📦", total: "$89.00" },
    { id: "#LUM-742911", title: "AI Intelligence Review (Vol. 42)", date: "May 28, 2026", status: "Delivered 📦", total: "$120.00" }
  ];

  return (
    <div className="home-container">
      <div className="ambient-glow glow-top-left"></div>
      <div className="ambient-glow glow-bottom-right"></div>

      <div className="dashboard-content">
        <div className="welcome-hero">
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'linear-gradient(135deg, #6366f1, #a855f7)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', fontWeight: 800 }}>
              👨‍🔬
            </div>
            <div>
              <span className="live-pill" style={{ marginBottom: '6px' }}>
                Verified Academic Subscriber
              </span>
              <h1 className="welcome-title" style={{ fontSize: '1.8rem' }}>Alex Morgan, Ph.D.</h1>
              <p className="welcome-subtitle" style={{ margin: 0 }}>alex.dev@example.com • MIT Department of Physics</p>
            </div>
          </div>
          <button className="logout-nav-btn" onClick={() => navigate('/')}>
            Log Out Account
          </button>
        </div>

        <div className="dashboard-grid">
          <div>
            {/* Subscriptions */}
            <div className="section-card">
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '1rem' }}>Active Journal Subscriptions</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {activeSubscriptions.map((sub, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 16px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '14px' }}>
                    <div>
                      <h4 style={{ margin: '0 0 4px 0', fontSize: '0.95rem', fontWeight: 700 }}>{sub.name}</h4>
                      <p style={{ margin: '0 0 4px 0', fontSize: '0.8rem', color: '#f59e0b' }}>{sub.tier}</p>
                      <span style={{ fontSize: '0.75rem', color: '#34d399' }}>{sub.status}</span>
                    </div>
                    <span style={{ fontSize: '1.1rem', fontWeight: 800 }}>{sub.price}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Order History */}
            <div className="section-card">
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '1rem' }}>Recent Book Orders</h3>
              <div className="projects-table-wrapper">
                <table className="projects-table">
                  <thead>
                    <tr>
                      <th>Order ID</th>
                      <th>Journal Title</th>
                      <th>Date</th>
                      <th>Status</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pastOrders.map((ord) => (
                      <tr key={ord.id}>
                        <td style={{ fontWeight: 700, color: '#a5b4fc' }}>{ord.id}</td>
                        <td>{ord.title}</td>
                        <td style={{ color: '#94a3b8' }}>{ord.date}</td>
                        <td><span className="status-tag status-deployed">{ord.status}</span></td>
                        <td style={{ fontWeight: 700 }}>{ord.total}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Side Account Info */}
          <div>
            <div className="section-card">
              <h4 style={{ margin: '0 0 12px 0', fontSize: '1.1rem' }}>📦 Shipping Address</h4>
              <p style={{ color: '#94a3b8', fontSize: '0.875rem', lineHeight: 1.5, margin: '0 0 1rem 0' }}>
                77 Massachusetts Ave<br />
                Building 10, Room 302<br />
                Cambridge, MA 02139, USA
              </p>
              <button className="action-btn-secondary" style={{ width: '100%', fontSize: '0.825rem' }}>Edit Address</button>
            </div>

            <div className="section-card">
              <h4 style={{ margin: '0 0 12px 0', fontSize: '1.1rem' }}>💳 Saved Payment Method</h4>
              <p style={{ color: '#94a3b8', fontSize: '0.875rem', margin: '0 0 1rem 0' }}>
                Visa ending in <strong>•••• 4920</strong><br />
                Expires 08/2028
              </p>
              <button className="action-btn-secondary" style={{ width: '100%', fontSize: '0.825rem' }}>Manage Payment</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
