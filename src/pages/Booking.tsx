import React from "react";

const Booking: React.FC = () => {
  return (
    <div className="booking-wrapper">
      <div className="container">

        {/* HEADER */}
        <div className="booking-header">
          <span className="gold-text booking-eyebrow">
            RESERVE THE EXPERIENCE
          </span>
          <h2 className="serif booking-title">
            Book Your <span className="gold-text italic">Session</span>
          </h2>
        </div>

        {/* GRID */}
        <div className="booking-grid">

          {/* LEFT COLUMN */}
          <div className="booking-left">
            <h3 className="serif booking-subtitle">The Policy</h3>

            <div className="policy-text">
              <p>• Please arrive 10 minutes before your scheduled time.</p>
              <p>• Cancellations must be made 24 hours in advance.</p>
              <p>• Every session includes a complimentary beverage and consultation.</p>
            </div>

            <div className="opening-hours">
              <h4 className="serif">Opening Hours</h4>
              <div className="hours-row">
                <span>Mon – Sunday</span>
                <span className="gold-text">9:00 AM – 8:00 PM</span>
              </div>
              <div className="hours-row">
                <span>Saturday</span>
                <span className="gold-text">5:00 PM – 9:00 PM</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <form className="booking-form">

            {/* SERVICE */}
            <div className="booking-step">
              <label>01. CHOOSE SERVICE</label>
              <div className="form-grid">
                <ServiceOption name="The Signature" price="₦15k" />
                <ServiceOption name="Beard Art" price="₦8k" />
                <ServiceOption name="Kids Cut" price="₦10k" />
                <ServiceOption name="Full Cut" price="₦25k" />
              </div>
            </div>

            {/* BARBER */}
            <div className="booking-step">
              <label>02. SELECT ARTISAN</label>
              <select className="booking-input">
                <option>First Available Artisan</option>
                <option>Seyi (Master Artisan)</option>
                <option>John (Creative Lead)</option>
                <option>David (Senior Stylist)</option>
              </select>
            </div>

            {/* DATE */}
            <div className="booking-step">
              <label>03. SELECT DATE & TIME</label>
              <div className="form-grid">
                <input type="date" className="booking-input" />
                <input type="time" className="booking-input" />
              </div>
            </div>

            {/* DETAILS */}
            <div className="booking-step">
              <label>04. YOUR DETAILS</label>
              <input className="booking-input" placeholder="Full Name" />
              <input className="booking-input" placeholder="Phone Number" />
            </div>

            <button className="btn-gold booking-btn">
              CONFIRM RESERVATION
            </button>
          </form>
        </div>
      </div>

      {/* ===== STYLES (ALL IN ONE FILE) ===== */}
      <style>{`
        .booking-wrapper {
          padding: 150px 5% 80px;
          background: var(--bg-black);
          min-height: 100vh;
        }

        .booking-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .booking-eyebrow {
          letter-spacing: 4px;
          font-size: 0.7rem;
          font-weight: bold;
        }

        .booking-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          margin-top: 1rem;
        }

        .booking-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
        }

        .booking-left {
          border-right: 1px solid rgba(197,160,89,0.15);
          padding-right: 2rem;
        }

        .booking-subtitle {
          color: var(--gold);
          margin-bottom: 1.5rem;
        }

        .policy-text {
          color: var(--gray);
          font-size: 0.9rem;
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }

        .opening-hours {
          margin-top: 3rem;
          padding: 2rem;
          background: #0c0c0c;
          border: 1px solid rgba(197,160,89,0.1);
        }

        .hours-row {
          display: flex;
          justify-content: space-between;
          margin-top: 0.5rem;
        }

        .booking-form {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .booking-step label {
          color: var(--gold);
          font-size: 0.7rem;
          letter-spacing: 3px;
          font-weight: bold;
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-top: 1rem;
        }

        .booking-input {
          width: 100%;
          background: transparent;
          border: 1px solid rgba(197,160,89,0.3);
          padding: 1rem;
          color: white;
          margin-top: 1rem;
          outline: none;
        }

        .service-card {
          border: 1px solid rgba(255,255,255,0.1);
          padding: 1.5rem;
          cursor: pointer;
          transition: 0.3s;
          background: #0c0c0c;
        }

        .service-card:hover {
          border-color: var(--gold);
          background: rgba(197,160,89,0.05);
        }

        .booking-btn {
          padding: 1.5rem;
          font-weight: bold;
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 992px) {
          .booking-grid {
            grid-template-columns: 1fr;
          }

          .booking-left {
            border-right: none;
            border-bottom: 1px solid rgba(197,160,89,0.15);
            padding-right: 0;
            padding-bottom: 2rem;
          }
        }

        @media (max-width: 576px) {
          .booking-wrapper {
            padding: 120px 6% 60px;
          }

          .form-grid {
            grid-template-columns: 1fr;
          }
        }

        input[type="date"]::-webkit-calendar-picker-indicator,
        input[type="time"]::-webkit-calendar-picker-indicator {
          filter: invert(1);
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

const ServiceOption = ({ name, price }: { name: string; price: string }) => (
  <div className="service-card">
    <div className="serif">{name}</div>
    <div className="gold-text" style={{ fontSize: "0.8rem", fontWeight: "bold" }}>
      {price}
    </div>
  </div>
);

export default Booking;
