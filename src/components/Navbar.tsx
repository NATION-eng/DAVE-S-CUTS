import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Close menu automatically when user changes page
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1.5rem 5%",
        zIndex: 2000,
        background: "linear-gradient(to bottom, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 100%)",
      }}
    >
      {/* Logo Area */}
      <Link to="/" style={{ textDecoration: "none" }}>
        <div
          className="logo"
          style={{
            color: "white",
            fontWeight: "bold",
            letterSpacing: "2px",
          }}
        >
          DAVE'S{" "}
          <span
            style={{
              color: "var(--gold)",
              display: "block",
              fontSize: "0.7rem",
              letterSpacing: "5px",
            }}
          >
            CUT
          </span>
        </div>
      </Link>

      {/* DESKTOP NAVIGATION (Hidden on Mobile) */}
      <ul className="desktop-links">
        <li><Link to="/" style={navLinkStyle}>Home</Link></li>
        <li><Link to="/barbers" style={navLinkStyle}>Barbers</Link></li>
        <li><Link to="/services" style={navLinkStyle}>Services</Link></li>
        <li><Link to="/queue" style={navLinkStyle}>Live Queue</Link></li>
        <li><Link to="/contact" style={navLinkStyle}>Contact</Link></li>
        <li>
          <Link to="/bookings" className="btn-outline" style={bookBtnStyle}>
            BOOK NOW
          </Link>
        </li>
      </ul>

      {/* HAMBURGER BUTTON (Only visible on Mobile) */}
      <div className="hamburger" onClick={toggleMenu} style={{ zIndex: 3000 }}>
        <div className={`line ${isMenuOpen ? "open" : ""}`} style={lineStyle}></div>
        <div className={`line ${isMenuOpen ? "open" : ""}`} style={{ ...lineStyle, width: isMenuOpen ? "30px" : "20px" }}></div>
        <div className={`line ${isMenuOpen ? "open" : ""}`} style={lineStyle}></div>
      </div>

      {/* MOBILE FULL-SCREEN OVERLAY */}
      <div className={`mobile-overlay ${isMenuOpen ? "active" : ""}`}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', alignItems: 'center' }}>
          <Link to="/" style={mobileLinkStyle}>Home</Link>
          <Link to="/barbers" style={mobileLinkStyle}>Barbers</Link>
          <Link to="/services" style={mobileLinkStyle}>Services</Link>
          <Link to="/queue" style={mobileLinkStyle}>Live Queue</Link>
          <Link to="/contact" style={mobileLinkStyle}>Contact</Link>
          <Link to="/bookings" className="btn-gold" style={{ ...mobileLinkStyle, color: 'black', background: 'var(--gold)', padding: '1rem 3rem' }}>
            BOOK NOW
          </Link>
        </div>
      </div>

      {/* CSS Logic */}
      <style>{`
        .desktop-links {
          display: flex;
          list-style: none;
          align-items: center;
          gap: 2rem;
          margin: 0;
          padding: 0;
        }

        .hamburger {
          display: none;
          flex-direction: column;
          gap: 7px;
          cursor: pointer;
        }

        .mobile-overlay {
          position: fixed;
          top: 0;
          right: 0;
          width: 100%;
          height: 100vh;
          background: #050505;
          display: flex;
          justify-content: center;
          align-items: center;
          transform: translateX(100%);
          transition: transform 0.5s cubic-bezier(0.77, 0, 0.175, 1);
          z-index: 2500;
        }

        .mobile-overlay.active {
          transform: translateX(0);
        }

        /* Hover Effect for Links */
        .desktop-links a:hover {
          color: var(--gold) !important;
        }

        /* Burger Animation */
        .line.open:nth-child(1) { transform: translateY(9px) rotate(45deg); }
        .line.open:nth-child(2) { opacity: 0; }
        .line.open:nth-child(3) { transform: translateY(-9px) rotate(-45deg); }

        /* Responsive Breakpoints */
        @media (max-width: 992px) {
          .desktop-links {
            display: none;
          }
          .hamburger {
            display: flex;
          }
        }
      `}</style>
    </nav>
  );
};

const navLinkStyle: React.CSSProperties = {
  color: "white",
  textDecoration: "none",
  textTransform: "uppercase",
  fontSize: "0.75rem",
  letterSpacing: "1.5px",
  fontWeight: 600,
  transition: "0.3s",
};

const bookBtnStyle: React.CSSProperties = {
  textDecoration: "none",
  fontSize: "0.8rem",
  fontWeight: "bold",
  color: "white",
  padding: "0.8rem 1.5rem",
  border: "1px solid var(--gold)",
};

const mobileLinkStyle: React.CSSProperties = {
  color: "white",
  textDecoration: "none",
  textTransform: "uppercase",
  fontSize: "1.8rem",
  letterSpacing: "4px",
  fontWeight: "bold",
  fontFamily: "'Playfair Display', serif",
};

const lineStyle: React.CSSProperties = {
  width: "30px",
  height: "2px",
  background: "white",
  transition: "0.4s",
};

export default Navbar;
