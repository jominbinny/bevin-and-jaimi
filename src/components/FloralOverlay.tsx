import { useState, useEffect } from "react";

export function FloralOverlay() {
  const [dots, setDots] = useState<Array<{ w: number; h: number; t: number; l: number; bg: string; o: number }>>([]);

  useEffect(() => {
    const colors = ['#c9a84c', '#f0d78c', '#ffffff', '#a89060', '#d4b86a'];
    setDots(
      Array.from({ length: 30 }, (_, i) => ({
        w: 3 + Math.random() * 6,
        h: 3 + Math.random() * 6,
        t: Math.random() * 100,
        l: Math.random() * 100,
        bg: colors[i % 5],
        o: 0.3 + Math.random() * 0.3,
      }))
    );
  }, []);

  if (dots.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 opacity-15">
      {dots.map((d, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${d.w}px`,
            height: `${d.h}px`,
            top: `${d.t}%`,
            left: `${d.l}%`,
            backgroundColor: d.bg,
            opacity: d.o,
          }}
        />
      ))}
    </div>
  );
}
