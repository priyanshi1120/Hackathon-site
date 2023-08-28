import React, { useEffect, useRef, useState } from "react";

const CountDown = () => {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date("May 30, 2024 00:00:00").getTime();
    interval.current = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      if (distance <= 0) {
        clearInterval(interval.current);
        // Optionally: Set the timer values to "00" when the countdown reaches zero
        setTimerDays("00");
        setTimerHours("00");
        setTimerMinutes("00");
        setTimerSeconds("00");
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimerDays(days.toString().padStart(2, "0"));
        setTimerHours(hours.toString().padStart(2, "0"));
        setTimerMinutes(minutes.toString().padStart(2, "0"));
        setTimerSeconds(seconds.toString().padStart(2, "0"));
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  }, []);

  return (
    <div className="flex gap-[40px]  ">
      <div className=" bg-gray-500 p-1 bg-opacity-25">
        <p>{timerDays}</p>
        <p>
          <small className="text-xs">Days</small>
        </p>
      </div>
      <span>:</span>
      <div className=" bg-gray-500 p-1 bg-opacity-25">
        <p>{timerHours}</p>
        <p>
          <small  className="text-xs">Hours</small>
        </p>
      </div>
      <span>:</span>
      <div className=" bg-gray-500 p-1 bg-opacity-25">
        <p>{timerMinutes}</p>
        <p>
          <small  className="text-xs">Minutes</small>
        </p>
      </div >
      <span>:</span>
      <div className=" bg-gray-500 p-1 bg-opacity-25">
        <p>{timerSeconds}</p>
        <p>
          <small  className="text-xs">Seconds</small>
        </p>
      </div>
    </div>
  );
};

export default CountDown;
