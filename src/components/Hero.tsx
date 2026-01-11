import React from "react";

const Hero: React.FC = () => {
  return (
    <header
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        background:
          'linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url("https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2074") center/cover no-repeat',
      }}
    >
      <div className="container">
        <p
          style={{
            color: "var(--gold)",
            letterSpacing: "4px",
            fontWeight: "700",
            fontSize: "0.8rem",
            marginBottom: "1rem",
          }}
        >
          More Than a Cut. It’s a Statement.
        </p>
        <h1
          style={{
            fontSize: "clamp(2.5rem, 8vw, 5rem)",
            lineHeight: "1.1",
            marginBottom: "2rem",
          }}
        >
          Some styles are heard. <br />
          <span className="gold-text italic">This one is felt.</span>
        </h1>
        <div style={{ display: "flex", gap: "1rem" }}>
          <button className="btn-gold">Book Appointment</button>
          <button className="btn-outline">Meet Barbers</button>
        </div>
      </div>
    </header>
  );
};

export default Hero;
