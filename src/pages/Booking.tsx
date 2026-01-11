import React, { useState } from "react";

const Bookings: React.FC = () => {
  const [step, setStep] = useState(1);
  
  const barbers = ["Seyi", "John", "David"];
  const services = [
    { name: "Executive Cut", price: "£35" },
    { name: "Beard Sculpture", price: "£20" },
    { name: "The Full Service", price: "£50" }
  ];
  const times = ["09:00", "10:30", "12:00", "14:30", "16:00", "17:30"];

  return (
    <div style={containerStyle}>
      <div style={wrapperStyle}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h2 className="serif" style={titleStyle}>Secure Your <span className="gold-text">Session</span></h2>
          <p style={{ color: "var(--gray)" }}>Step {step} of 3</p>
        </div>

        {/* Responsive Grid System */}
        <div className="booking-grid">
          
          {/* Section 1: Select Barber & Service */}
          <div style={cardStyle}>
            <h3 style={sectionTitle}>1. Select Service</h3>
            {services.map((s, i) => (
              <div key={i} style={optionStyle}>
                <span>{s.name}</span>
                <span className="gold-text">{s.price}</span>
              </div>
            ))}
            
            <h3 style={{ ...sectionTitle, marginTop: '2rem' }}>2. Choose Artisan</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              {barbers.map((b, i) => (
                <button key={i} style={selectionBtn}>{b}</button>
              ))}
            </div>
          </div>

          {/* Section 2: Select Time */}
          <div style={cardStyle}>
            <h3 style={sectionTitle}>3. Available Times</h3>
            <div className="time-grid">
              {times.map((t, i) => (
                <button key={i} style={timeBtnStyle}>{t}</button>
              ))}
            </div>
            
            <button className="btn-gold" style={confirmBtn}>
              CONFIRM BOOKING
            </button>
          </div>

        </div>
      </div>

      <style>{`
        .booking-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2rem;
        }

        .time-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
        }

        @media (max-width: 768px) {
          .booking-grid {
            grid-template-columns: 1fr;
          }
          .time-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </div>
  );
};

// --- STYLES ---

const containerStyle: React.CSSProperties = {
  padding: "120px 5% 80px",
  background: "var(--bg-black)",
  minHeight: "100vh",
  color: "white"
};

const wrapperStyle: React.CSSProperties = {
  maxWidth: "1100px",
  margin: "0 auto"
};

const titleStyle: React.CSSProperties = {
  fontSize: "clamp(2rem, 5vw, 3rem)",
  marginBottom: "0.5rem"
};

const cardStyle: React.CSSProperties = {
  background: "rgba(255, 255, 255, 0.03)",
  border: "1px solid rgba(197, 160, 89, 0.1)",
  padding: "2rem",
  borderRadius: "4px"
};

const sectionTitle: React.CSSProperties = {
  fontSize: "0.8rem",
  letterSpacing: "2px",
  textTransform: "uppercase",
  color: "#c5a059",
  marginBottom: "1.5rem",
  borderBottom: "1px solid rgba(197, 160, 89, 0.2)",
  paddingBottom: "10px"
};

const optionStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  padding: "1rem",
  background: "rgba(255,255,255,0.05)",
  marginBottom: "10px",
  cursor: "pointer",
  transition: "0.3s",
  border: "1px solid transparent"
};

const selectionBtn: React.CSSProperties = {
  padding: "0.8rem",
  background: "transparent",
  color: "white",
  border: "1px solid rgba(255,255,255,0.2)",
  cursor: "pointer"
};

const timeBtnStyle: React.CSSProperties = {
  padding: "1rem",
  background: "rgba(197, 160, 89, 0.05)",
  color: "white",
  border: "1px solid rgba(197, 160, 89, 0.2)",
  cursor: "pointer",
  fontSize: "0.9rem"
};

const confirmBtn: React.CSSProperties = {
  width: "100%",
  marginTop: "2rem",
  padding: "1.2rem",
  fontWeight: "bold",
  letterSpacing: "2px",
  background: "#c5a059",
  border: "none",
  cursor: "pointer"
};

export default Bookings;
