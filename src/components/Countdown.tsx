import React, { useState, useEffect } from "react";

interface CountdownProps {
  initialMinutes: number;
  barberName: string;
}

const Countdown: React.FC<CountdownProps> = ({
  initialMinutes,
  barberName,
}) => {
  const [seconds, setSeconds] = useState(initialMinutes * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div
      style={{
        border: "1px solid rgba(197, 160, 89, 0.3)",
        padding: "2.5rem",
        background: "#0c0c0c",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative Accent like FTLOM ticket corners */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "10px",
          height: "10px",
          borderTop: "2px solid var(--gold)",
          borderLeft: "2px solid var(--gold)",
        }}
      ></div>

      <span
        style={{
          color: "var(--gold)",
          letterSpacing: "3px",
          fontSize: "0.7rem",
          fontWeight: "bold",
        }}
      >
        SESSION: {barberName.toUpperCase()}
      </span>

      <div
        className="serif"
        style={{
          fontSize: "4.5rem",
          color: "var(--gold)",
          margin: "1rem 0",
          lineHeight: "1",
        }}
      >
        {formatTime(seconds)}
      </div>

      <p
        style={{
          color: "#666",
          fontSize: "0.75rem",
          letterSpacing: "1px",
          textTransform: "uppercase",
        }}
      >
        Estimated Time Remaining
      </p>
    </div>
  );
};

export default Countdown;
