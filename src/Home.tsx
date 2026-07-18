import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "40px 20px", textAlign: "center", fontFamily: "sans-serif" }}>
      <h1 style={{ fontSize: "2.5rem", color: "#1e293b", marginBottom: "20px" }}>this is my Home</h1>
      <p style={{ color: "#64748b", marginBottom: "30px", fontSize: "1.1rem" }}>
        Welcome to your dashboard! You have successfully logged in.
      </p>
      
      <div style={{ display: "flex", gap: "15px", justifyContent: "center" }}>
        <button 
          style={{
            padding: "12px 24px",
            fontSize: "1rem",
            fontWeight: "600",
            color: "white",
            background: "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            boxShadow: "0 4px 15px rgba(99, 102, 241, 0.3)",
            transition: "all 0.2s ease"
          }}
          onClick={() => alert("Welcome to the Dashboard!")}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow = "0 6px 20px rgba(99, 102, 241, 0.4)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 4px 15px rgba(99, 102, 241, 0.3)";
          }}
        >
          Explore Dashboard
        </button>

        <button 
          style={{
            padding: "12px 24px",
            fontSize: "1rem",
            fontWeight: "600",
            color: "#ef4444",
            background: "transparent",
            border: "2px solid #fecaca",
            borderRadius: "8px",
            cursor: "pointer",
            transition: "all 0.2s ease"
          }}
          onClick={() => navigate("/")}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#fee2e2";
            e.currentTarget.style.borderColor = "#fca5a5";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.borderColor = "#fecaca";
          }}
        >
          Log Out
        </button>
      </div>
    </div>
  );
}

export default Home;