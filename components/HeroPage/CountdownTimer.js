import React, { useState, useEffect } from "react";
import AOS from "aos";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({});
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 2500, // Animation duration in milliseconds
    });
    setMounted(true); // Set mounted state
  }, []);

  const calculateTimeLeft = () => {
    const eventDate = new Date("2024-11-26T00:00:00");
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
    } else {
      timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }
    return timeLeft;
  };

  useEffect(() => {
    if (mounted) {
      // Initial calculation of time left
      setTimeLeft(calculateTimeLeft());

      // Set up the timer to update every second
      const timer = setInterval(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);

      // Cleanup function to clear the interval
      return () => clearInterval(timer);
    }
  }, [mounted]); // Only run when mounted

  return (
    <div className="timer-container">
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
