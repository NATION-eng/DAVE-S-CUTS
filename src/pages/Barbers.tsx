import React from "react";

const Barbers: React.FC = () => {
  const team = [
    {
      name: "Seyi",
      role: "Master Artisan",
      specialty: "Skin Fades & Sharp Lines",
      // Professional Barber Portrait
      image:
        "https://plus.unsplash.com/premium_photo-1664048713133-a69782f08faa?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "John",
      role: "Creative Lead",
      specialty: "Classic Scissor Cuts",
      // Barber in action
      image:
        "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1000&auto=format&fit=crop",
    },
    {
      name: "David",
      role: "Stylist",
      specialty: "Beard Sculpture",
      // Sharp haircut detail
      image:
        "https://plus.unsplash.com/premium_photo-1661270415179-f7bcff006edb?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div
      style={{
        padding: "150px 5% 80px",
        background: "var(--bg-black)",
        minHeight: "100vh",
      }}
    >
      <div className="container">
        <h2
          className="serif"
          style={{ fontSize: "3.5rem", marginBottom: "1rem" }}
        >
          The <span className="gold-text italic">Artisans</span>
        </h2>
        <p
          style={{
            color: "var(--gray)",
            marginBottom: "4rem",
            maxWidth: "600px",
          }}
        >
          The hands behind the Cuts. Where every cut is a symphony of
          precision.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "3rem",
          }}
        >
          {team.map((barber, i) => (
            <div key={i} className="barber-card-container">
              <div className="image-frame">
                <img
                  src={barber.image}
                  alt={barber.name}
                  className="barber-img"
                />
              </div>

              <div
                style={{
                  marginTop: "1.5rem",
                  borderBottom: "var(--border)",
                  paddingBottom: "1.5rem",
                }}
              >
                <span
                  className="gold-text"
                  style={{
                    fontSize: "0.7rem",
                    letterSpacing: "3px",
                    fontWeight: "bold",
                  }}
                >
                  {barber.role.toUpperCase()}
                </span>
                <h3
                  className="serif"
                  style={{ fontSize: "2rem", margin: "0.5rem 0" }}
                >
                  {barber.name}
                </h3>
                <p style={{ color: "var(--gray)", fontSize: "0.9rem" }}>
                  {barber.specialty}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Hover Effect CSS */}
      <style>{`
        .image-frame {
          height: 450px;
          width: 100%;
          overflow: hidden;
          background: #111;
          border: 1px solid rgba(197, 160, 89, 0.1);
          transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
          position: relative;
        }

        .barber-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(100%); /* High-end FTLOM grayscale look */
          transition: all 0.8s ease;
        }

        /* Hover Transitions */
        .barber-card-container:hover .image-frame {
          border: 1.5px solid #c5a059; /* The Gold Border you asked for */
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.5);
          transform: translateY(-10px);
        }

        .barber-card-container:hover .barber-img {
          filter: grayscale(0%); /* Turns to color on hover */
          transform: scale(1.1); /* Subtle zoom */
        }

        .barber-card-container {
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default Barbers;
