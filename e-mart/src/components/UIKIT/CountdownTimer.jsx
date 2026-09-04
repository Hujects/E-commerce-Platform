import { useState, useEffect } from "react";

function CountdownTimer({ targetDate }) {
  const calculateTimeLeft = () => {
    const difference = new Date(targetDate) - new Date();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // cleanup - component unmount হলে interval বন্ধ হবে
  }, [targetDate]);

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Min", value: timeLeft.minutes },
    { label: "Sec", value: timeLeft.seconds },
  ];

  return (
    <div>
      <p className="font-bold mb-3">HURRY UP! OFFER ENDS IN:</p>
      <div className="flex gap-3">
        {timeUnits.map((unit, index) => (
          <div key={index} className="bg-gray-100 rounded-lg px-5 py-3 text-center min-w-[70px]">
            <p className="text-2xl font-medium text-[var(--erie-black)]">
              {String(unit.value).padStart(2, "0")}
            </p>
            <p className="text-xs text-gray-500">{unit.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CountdownTimer;