import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
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
        padding: "2rem 5%",
        zIndex: 1000,
        background:
          "linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%)",
      }}
    >
      {/* Logo Area */}
      <div
        className="logo"
        style={{
          color: "white",
          fontWeight: "bold",
          letterSpacing: "2px",
          cursor: "pointer",
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

      {/* Navigation Links */}
      <ul
        style={{
          display: "flex",
          listStyle: "none",
          alignItems: "center",
          gap: "2rem",
          margin: 0,
          padding: 0,
        }}
      >
        <li>
          <Link to="/" style={navLinkStyle}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/barbers" style={navLinkStyle}>
            Barbers
          </Link>
        </li>
        <li>
          <Link to="/services" style={navLinkStyle}>
            Services
          </Link>
        </li>
        <li>
          <Link to="/queue" style={navLinkStyle}>
            Live Queue
          </Link>
        </li>
        <li>
          <Link to="/contact" style={navLinkStyle}>
            Contact
          </Link>
        </li>

        {/* The CTA Button */}
        <li>
          <Link
            to="/Booking"
            className="btn-outline"
            style={{
              textDecoration: "none",
              fontSize: "0.8rem",
              fontWeight: "bold",
              color: "white",
            }}
          >
            BOOK NOW
          </Link>
        </li>
      </ul>
    </nav>
  );
};

// Reusable style object for navigation links
const navLinkStyle: React.CSSProperties = {
  color: "white",
  textDecoration: "none",
  textTransform: "uppercase",
  fontSize: "0.75rem",
  letterSpacing: "1.5px",
  fontWeight: 600,
  transition: "0.3s",
};

export default Navbar;
