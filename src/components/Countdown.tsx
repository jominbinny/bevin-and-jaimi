import { useState, useEffect } from "react";

const EVENT_DATE = new Date("2026-05-31T12:00:00+05:30");
const INITIAL_TIME = { days: 0, hours: 0, minutes: 0, seconds: 0 };

function getTimeLeft() {
  const diff = EVENT_DATE.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
  };
}

export function Countdown() {
  const [time, setTime] = useState(INITIAL_TIME);

  useEffect(() => {
    // Set the first client value after mount so SSR and hydration markup match.
    setTime(getTimeLeft());
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { label: "Days", value: time.days },
    { label: "Hours", value: time.hours },
    { label: "Mins", value: time.minutes },
    { label: "Secs", value: time.seconds },
  ];

  return (
    <section className="text-center py-8 px-6 animate-fade-up delay-500">
      <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground font-sans mb-5">
        Countdown to Celebration
      </p>
      <div className="flex justify-center gap-4 md:gap-6">
        {units.map((u) => (
          <div key={u.label} className="flex flex-col items-center">
            <div className="w-16 h-16 md:w-18 md:h-18 rounded-xl bg-card border border-border/60 shadow-sm flex items-center justify-center">
              <span className="font-serif text-2xl md:text-3xl font-light text-foreground">
                {String(u.value).padStart(2, "0")}
              </span>
            </div>
            <span className="text-[10px] tracking-[0.15em] uppercase text-muted-foreground mt-2 font-sans">
              {u.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
