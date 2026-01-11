import React from "react";
import Countdown from "../components/Countdown"; // Adjust path if needed

const QueuePage: React.FC = () => {
  // This data would eventually come from your database/backend
  const activeSessions = [
    { id: 1, barber: "Seyi", mins: 15 },
    { id: 2, barber: "John", mins: 8 },
    { id: 3, barber: "David", mins: 22 },
  ];

  return (
    <div
      style={{ minHeight: "100vh", background: "#050505", paddingTop: "120px" }}
    >
      <div className="container">
        <div style={{ marginBottom: "4rem", textAlign: "center" }}>
          <h2
            className="serif"
            style={{ fontSize: "3.5rem", marginBottom: "1rem" }}
          >
            Live <span className="gold-text italic">Queue</span>
          </h2>
          <p style={{ color: "#888", maxWidth: "600px", margin: "0 auto" }}>
            Experience the art of grooming in real-time. Follow our master
            barbers as they craft the next cut in style.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2.5rem",
            paddingBottom: "5rem",
          }}
        >
          {activeSessions.map((session) => (
            <Countdown
              key={session.id}
              barberName={session.barber}
              initialMinutes={session.mins}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default QueuePage;
