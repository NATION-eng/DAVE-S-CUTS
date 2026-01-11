import React from "react";

const Bookings: React.FC = () => {
  return (
    <div
      style={{
        padding: "120px 5% 80px", // Reduced top padding slightly for better mobile start
        background: "var(--bg-black)",
        minHeight: "100vh",
      }}
    >
      <div
        className="container"
        style={{ maxWidth: "1100px", margin: "0 auto" }}
      >
        {/* Header Section */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <span
            className="gold-text"
            style={{
              letterSpacing: "4px",
              fontSize: "0.7rem",
              fontWeight: "bold",
            }}
          >
            RESERVE THE EXPERIENCE
          </span>
          <h2
            className="serif"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", marginTop: "1rem" }}
          >
            Book Your <span className="gold-text italic">Session</span>
          </h2>
        </div>

        <div className="responsive-booking-grid">
          {/* Left Column: Details & Info */}
          <div className="info-column">
            <h3
              className="serif"
              style={{
                fontSize: "1.8rem",
                color: "var(--gold)",
                marginBottom: "1.5rem",
              }}
            >
              The Policy
            </h3>
            <div
              style={{
                color: "var(--gray)",
                fontSize: "0.9rem",
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              <p>• Please arrive 10 minutes before your scheduled time.</p>
              <p>• Cancellations must be made 24 hours in advance.</p>
              <p>
                • Every session includes a complimentary beverage and
                consultation.
              </p>
            </div>

            <div
              style={{
                marginTop: "3rem",
                padding: "2rem",
                background: "#0c0c0c",
                border: "1px solid rgba(197, 160, 89, 0.1)",
              }}
            >
              <h4
                className="serif"
                style={{ color: "white", marginBottom: "1rem" }}
              >
                Opening Hours
              </h4>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "0.5rem",
                }}
              >
                <span>Mon - Friday</span>
                <span className="gold-text">9:00 AM - 8:00 PM</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>Saturday</span>
                <span className="gold-text">5:00 PM - 9:00 PM</span>
              </div>
            </div>
          </div>

          {/* Right Column: The Detailed Form */}
          <form
            style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
          >
            {/* Step 1: Service */}
            <div className="booking-step">
              <label style={labelStyle}>01. CHOOSE SERVICE</label>
              <div className="services-grid">
                <ServiceOption id="s1" name="The Signature" price="₦15k" />
                <ServiceOption id="s2" name="Beard Art" price="₦8k" />
                <ServiceOption id="s3" name="Kids Cut" price="₦10k" />
                <ServiceOption id="s4" name="Full Cut" price="₦25k" />
              </div>
            </div>

            {/* Step 2: Artisan */}
            <div className="booking-step">
              <label style={labelStyle}>02. SELECT ARTISAN</label>
              <select style={inputStyle}>
                <option>First Available Artisan</option>
                <option>Seyi (Master Artisan)</option>
                <option>John (Creative Lead)</option>
                <option>David (Senior Stylist)</option>
              </select>
            </div>

            {/* Step 3: Schedule */}
            <div className="booking-step">
              <label style={labelStyle}>03. SELECT DATE & TIME</label>
              <div className="schedule-grid">
                <input type="date" style={inputStyle} />
                <input type="time" style={inputStyle} />
              </div>
            </div>

            {/* Step 4: Contact */}
            <div className="booking-step">
              <label style={labelStyle}>04. YOUR DETAILS</label>
              <input
                type="text"
                placeholder="Full Name"
                style={{ ...inputStyle, marginTop: "1rem" }}
              />
              <input
                type="tel"
                placeholder="Phone Number (WhatsApp preferred)"
                style={{ ...inputStyle, marginTop: "1rem" }}
              />
            </div>

            <button
              type="button"
              className="btn-gold"
              style={{ width: "100%", padding: "1.5rem", fontWeight: "bold" }}
            >
              CONFIRM RESERVATION
            </button>
          </form>
        </div>
      </div>

      <style>{`
        /* Responsive Grid Logic */
        .responsive-booking-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          align-items: start;
        }

        .services-grid, .schedule-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-top: 1rem;
        }

        .info-column {
          border-right: none;
          padding-right: 0;
          border-bottom: 1px solid rgba(197, 160, 89, 0.1);
          padding-bottom: 3rem;
        }

        /* Tablet and Desktop Styles */
        @media (min-width: 992px) {
          .responsive-booking-grid {
            grid-template-columns: 1fr 1.2fr;
            gap: 4rem;
          }
          .info-column {
            border-right: 1px solid rgba(197, 160, 89, 0.1);
            padding-right: 4rem;
            border-bottom: none;
            padding-bottom: 0;
          }
        }

        /* Mobile specific adjustments for very small screens */
        @media (max-width: 480px) {
          .services-grid {
            grid-template-columns: 1fr;
          }
          .schedule-grid {
            grid-template-columns: 1fr;
          }
        }

        input[type="date"]::-webkit-calendar-picker-indicator,
        input[type="time"]::-webkit-calendar-picker-indicator {
          filter: invert(1);
          cursor: pointer;
        }
        
        .service-card:hover {
          border-color: var(--gold) !important;
          background: rgba(197, 160, 89, 0.05) !important;
        }
      `}</style>
    </div>
  );
};

const ServiceOption = ({
  name,
  price,
}: {
  id: string;
  name: string;
  price: string;
}) => (
  <div
    className="service-card"
    style={{
      border: "1px solid rgba(255, 255, 255, 0.1)",
      padding: "1.5rem",
      cursor: "pointer",
      transition: "0.3s",
      background: "#0c0c0c",
    }}
  >
    <div
      className="serif"
      style={{ fontSize: "1.1rem", marginBottom: "0.2rem" }}
    >
      {name}
    </div>
    <div
      className="gold-text"
      style={{ fontSize: "0.8rem", fontWeight: "bold" }}
    >
      {price}
    </div>
  </div>
);

const labelStyle: React.CSSProperties = {
  color: "var(--gold)",
  fontSize: "0.7rem",
  letterSpacing: "3px",
  fontWeight: "bold",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "transparent",
  border: "1px solid rgba(197, 160, 89, 0.3)",
  padding: "1rem",
  color: "white",
  fontFamily: "Montserrat, sans-serif",
  outline: "none",
  fontSize: "0.9rem",
};

export default Bookings;
