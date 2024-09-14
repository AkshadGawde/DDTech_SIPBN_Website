import React, { useState, useEffect } from "react";
import AOS from "aos";

const CountdownTimer = () => {
  useEffect(() => {
    AOS.init({
      duration: 2500, // Animation duration in milliseconds
    });
  }, []);

  const calculateTimeLeft = () => {
    const eventDate = new Date("2024-10-26T00:00:00");
    const currentTime = new Date();
    const difference = eventDate - currentTime;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <div className="timer-container heroContainer">
      <div className="timer">
        <div className="time-box">
          <h2 className="digits">{timeLeft.days || "0"}</h2>
          <span>Days</span>
        </div>
        <div className="colon">:</div>
        <div className="time-box">
          <h2 className="digits">{timeLeft.hours || "0"}</h2>
          <span>Hours</span>
        </div>
        <div className="colon">:</div>
        <div className="time-box">
          <h2 className="digits">{timeLeft.minutes || "0"}</h2>
          <span>Minutes</span>
        </div>
        <div className="colon">:</div>
        <div className="time-box">
          <h2 className="digits">{timeLeft.seconds || "0"}</h2>
          <span>Seconds</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
