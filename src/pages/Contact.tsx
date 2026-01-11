import React from "react";

const Contact: React.FC = () => {
  const inputStyle = {
    background: "var(--bg-black)",
    border: "var(--border)",
    color: "var(--text-white)",
    padding: "0.75rem",
    fontSize: "1rem",
    fontFamily: "inherit",
  };

  return (
    <div style={{ padding: "150px 5% 80px", background: "var(--bg-black)" }}>
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "5rem",
          }}
        >
          <div>
            <h2
              className="serif"
              style={{ fontSize: "3.5rem", marginBottom: "2rem" }}
            >
              Reach <span className="gold-text">Out</span>
            </h2>
            <p style={{ color: "var(--gray)", marginBottom: "2rem" }}>
              Our home base is in the heart of Port Harcourt. Stop by for the
              experience.
            </p>

            <div style={{ marginBottom: "1.5rem" }}>
              <span
                className="gold-text"
                style={{
                  fontSize: "0.7rem",
                  letterSpacing: "2px",
                  fontWeight: "bold",
                }}
              >
                LOCATION
              </span>
              <p>The Grooming Ark, Aba Road, Port Harcourt</p>
            </div>

            <div>
              <span
                className="gold-text"
                style={{
                  fontSize: "0.7rem",
                  letterSpacing: "2px",
                  fontWeight: "bold",
                }}
              >
                EMAIL
              </span>
              <p>info@groomingmovement.com</p>
            </div>
          </div>

          <div
            style={{
              background: "#0c0c0c",
              padding: "3rem",
              border: "var(--border)",
            }}
          >
            <h3 className="serif" style={{ marginBottom: "1.5rem" }}>
              Send a Message
            </h3>
            <textarea
              placeholder="Your Message"
              style={{
                ...inputStyle,
                width: "100%",
                height: "150px",
                marginBottom: "1rem",
              }}
            ></textarea>
            <button className="btn-gold" style={{ width: "100%" }}>
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
