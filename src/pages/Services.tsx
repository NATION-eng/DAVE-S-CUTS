import React from "react";

const Services: React.FC = () => {
  const menu = [
    {
      service: "The Standard Cut",
      price: "₦15,000",
      desc: "Consultation, precision cut, and hot towel finish.",
    },
    {
      service: "Beard Art",
      price: "₦8,000",
      desc: "Shaping, lining, and essential oil treatment.",
    },
    {
      service: "The Full Cut",
      price: "₦20,000",
      desc: "Complete grooming: Cut, Beard, and Facial.",
    },
  ];

  return (
    <div style={{ padding: "150px 5% 80px", background: "var(--bg-black)" }}>
      <div className="container">
        <h2
          className="serif"
          style={{
            fontSize: "3.5rem",
            marginBottom: "4rem",
            textAlign: "center",
          }}
        >
          Our <span className="gold-text italic">Offerings</span>
        </h2>

        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          {menu.map((item, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "2rem 0",
                borderBottom: "1px solid rgba(197, 160, 89, 0.1)",
              }}
            >
              <div>
                <h3
                  className="serif"
                  style={{ fontSize: "1.8rem", color: "var(--gold)" }}
                >
                  {item.service}
                </h3>
                <p style={{ color: "var(--gray)", fontSize: "0.9rem" }}>
                  {item.desc}
                </p>
              </div>
              <div className="serif" style={{ fontSize: "1.8rem" }}>
                {item.price}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
