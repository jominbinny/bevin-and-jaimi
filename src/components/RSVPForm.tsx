import { useState } from "react";
import { Minus, Plus } from "lucide-react";

interface RSVPFormProps {
  onSubmit: (count: number) => void;
}

export function RSVPForm({ onSubmit }: RSVPFormProps) {
  const [count, setCount] = useState(1);

  return (
    <section className="text-center py-10 px-6 animate-fade-up delay-300">
      <div className="max-w-sm mx-auto bg-card rounded-2xl border border-border/60 shadow-sm p-8">
        <h3 className="font-serif text-2xl font-medium text-foreground mb-1">Wonderful!</h3>
        <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-sans mb-6">
          Details for RSVP
        </p>

        <p className="font-serif text-base text-foreground/80 italic mb-6">
          "How many family members will attend?"
        </p>

        <div className="flex items-center justify-center gap-6 mb-3">
          <button
            onClick={() => setCount((c) => Math.max(1, c - 1))}
            className="w-10 h-10 rounded-full border border-border bg-warm-white flex items-center justify-center text-foreground/70 hover:bg-sage-light hover:border-sage transition-colors"
          >
            <Minus className="w-4 h-4" />
          </button>

          <span className="font-serif text-4xl font-light text-foreground w-12 text-center">
            {count}
          </span>

          <button
            onClick={() => setCount((c) => c + 1)}
            className="w-10 h-10 rounded-full border border-border bg-warm-white flex items-center justify-center text-foreground/70 hover:bg-sage-light hover:border-sage transition-colors"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>

        <p className="text-xs text-muted-foreground font-sans mb-8 tracking-wide">
          Including yourself
        </p>

        <button
          onClick={() => onSubmit(count)}
          className="w-full py-3.5 rounded-xl bg-primary text-primary-foreground font-sans text-sm font-medium tracking-[0.15em] uppercase hover:opacity-90 transition-opacity"
        >
          Submit RSVP
        </button>
      </div>
    </section>
  );
}
