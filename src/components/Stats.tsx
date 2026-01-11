import React from "react";

const Stats: React.FC = () => {
  return (
    <section
      style={{
        background: "#111",
        padding: "5rem 0",
        borderTop: "var(--border)",
        borderBottom: "var(--border)",
      }}
    >
      <div
        className="container"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          textAlign: "center",
          gap: "3rem",
        }}
      >
        <div>
          <h2
            className="serif"
            style={{ fontSize: "3.5rem", color: "var(--gold)" }}
          >
            5,000+
          </h2>
          <p
            style={{ fontSize: "0.8rem", letterSpacing: "2px", color: "#888" }}
          >
            HEADS GROOMED
          </p>
        </div>
        <div>
          <h2
            className="serif"
            style={{ fontSize: "3.5rem", color: "var(--gold)" }}
          >
            12+
          </h2>
          <p
            style={{ fontSize: "0.8rem", letterSpacing: "2px", color: "#888" }}
          >
            MASTER BARBERS
          </p>
        </div>
        <div>
          <h2
            className="serif"
            style={{ fontSize: "3.5rem", color: "var(--gold)" }}
          >
            COUNTLESS
          </h2>
          <p
            style={{ fontSize: "0.8rem", letterSpacing: "2px", color: "#888" }}
          >
            STORYTELLERS
          </p>
        </div>
      </div>
    </section>
  );
};

export default Stats;
