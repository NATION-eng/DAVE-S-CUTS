import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 992);
  const location = useLocation();

  // Handle window resizing to switch between desktop and mobile views
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 992);
      if (window.innerWidth > 992) setIsMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close menu on page change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: isMobile ? "1rem 5%" : "1.5rem 5%",
        zIndex: 9999,
        background: "rgba(0, 0, 0, 0.95)",
        borderBottom: "1px solid rgba(197, 160, 89, 0.1)",
      }}
    >
      {/* Logo */}
      <Link to="/" style={{ textDecoration: "none" }}>
        <div
          style={{
            color: "white",
            fontWeight: "bold",
            letterSpacing: "2px",
            lineHeight: 1,
          }}
        >
          DAVE'S{" "}
          <span
            style={{
              color: "#c5a059",
              display: "block",
              fontSize: "0.6rem",
              letterSpacing: "4px",
            }}
          >
            CUT
          </span>
        </div>
      </Link>

      {/* --- DESKTOP VIEW --- */}
      {!isMobile && (
        <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
          <Link to="/" style={navLinkStyle}>
            Home
          </Link>
          <Link to="/barbers" style={navLinkStyle}>
            Barbers
          </Link>
          <Link to="/services" style={navLinkStyle}>
            Services
          </Link>
          <Link to="/queue" style={navLinkStyle}>
            Queue
          </Link>
          <Link to="/contact" style={navLinkStyle}>
            Contact
          </Link>
          <Link to="/booking" style={desktopBookBtn}>
            BOOK NOW
          </Link>
        </div>
      )}

      {/* --- MOBILE HAMBURGER BUTTON --- */}
      {isMobile && (
        <div
          onClick={toggleMenu}
          style={{
            cursor: "pointer",
            zIndex: 10001,
            display: "flex",
            flexDirection: "column",
            gap: "6px",
          }}
        >
          <div
            style={{
              ...lineStyle,
              transform: isMenuOpen
                ? "rotate(45deg) translate(6px, 6px)"
                : "none",
            }}
          ></div>
          <div style={{ ...lineStyle, opacity: isMenuOpen ? 0 : 1 }}></div>
          <div
            style={{
              ...lineStyle,
              transform: isMenuOpen
                ? "rotate(-45deg) translate(5px, -6px)"
                : "none",
            }}
          ></div>
        </div>
      )}

      {/* --- MOBILE FULL-SCREEN OVERLAY --- */}
      {isMobile && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
            background: "#0a0a0a",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "2.5rem",
            transition: "transform 0.5s ease-in-out",
            transform: isMenuOpen ? "translateY(0)" : "translateY(-100%)",
            zIndex: 10000,
          }}
        >
          <Link to="/" style={mobileLinkStyle}>
            Home
          </Link>
          <Link to="/barbers" style={mobileLinkStyle}>
            Barbers
          </Link>
          <Link to="/services" style={mobileLinkStyle}>
            Services
          </Link>
          <Link to="/queue" style={mobileLinkStyle}>
            Live Queue
          </Link>
          <Link to="/contact" style={mobileLinkStyle}>
            Contact
          </Link>
          <Link to="/booking" style={mobileBookBtn}>
            BOOK NOW
          </Link>
        </div>
      )}
    </nav>
  );
};

// --- STYLES ---

const navLinkStyle: React.CSSProperties = {
  color: "white",
  textDecoration: "none",
  textTransform: "uppercase",
  fontSize: "0.75rem",
  letterSpacing: "1.5px",
  fontWeight: 600,
};

const desktopBookBtn: React.CSSProperties = {
  ...navLinkStyle,
  color: "#c5a059",
  border: "1px solid #c5a059",
  padding: "0.6rem 1.2rem",
};

const mobileLinkStyle: React.CSSProperties = {
  color: "white",
  textDecoration: "none",
  fontSize: "1.8rem",
  fontWeight: "bold",
  textTransform: "uppercase",
  letterSpacing: "3px",
};

const mobileBookBtn: React.CSSProperties = {
  ...mobileLinkStyle,
  color: "#000",
  background: "#c5a059",
  padding: "1rem 2.5rem",
  fontSize: "1.2rem",
};

const lineStyle: React.CSSProperties = {
  width: "28px",
  height: "2px",
  background: "white",
  transition: "0.3s ease-in-out",
};

export default Navbar;
