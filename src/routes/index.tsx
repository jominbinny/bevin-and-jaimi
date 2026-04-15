import { createFileRoute } from "@tanstack/react-router";
import { useState, useCallback, useEffect } from "react";
import confetti from "canvas-confetti";
import { InvitationCard } from "@/components/InvitationCard";
import { EventDetails } from "@/components/EventDetails";
import { Countdown } from "@/components/Countdown";
import { RSVPForm } from "@/components/RSVPForm";
import { ConfirmationView } from "@/components/ConfirmationView";
import { FloralOverlay } from "@/components/FloralOverlay";

export const Route = createFileRoute("/")({
  component: WeddingInvitation,
  head: () => ({
    meta: [
      { title: "Wedding Invitation — Bevin & Jaimi" },
      { name: "description", content: "You're invited to celebrate the wedding of Bevin Binny & Jaimi Benny. RSVP now!" },
      { property: "og:title", content: "Wedding Invitation — Bevin & Jaimi" },
      { property: "og:description", content: "You're invited to celebrate our special day. RSVP now!" },
    ],
  }),
});

function WeddingInvitation() {
  const [submitted, setSubmitted] = useState(false);
  const [attending, setAttending] = useState(false);

  useEffect(() => {
    const cleanUrl = `${window.location.pathname}${window.location.hash}`;
    if (window.location.search) {
      window.history.replaceState({}, "", cleanUrl);
    }

  }, []);

  const handleSubmit = useCallback(async (count: number) => {
  try {
    await fetch("https://bevin-backend.onrender.com/api/rsvp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ count }),
    });

    setSubmitted(true);

    // 🎉 confetti (keep same)
    const end = Date.now() + 2000;
    const fire = () => {
      confetti({ particleCount: 3, angle: 60, spread: 55, origin: { x: 0 }, colors: ["#c9a84c", "#f0d78c", "#ffffff"] });
      confetti({ particleCount: 3, angle: 120, spread: 55, origin: { x: 1 }, colors: ["#c9a84c", "#f0d78c", "#ffffff"] });
      if (Date.now() < end) requestAnimationFrame(fire);
    };
    fire();

  } catch (err) {
    console.error("RSVP failed:", err);
  }
}, []);


  

  return (
    <div className="min-h-screen bg-background relative">
      <FloralOverlay />

      <div className="relative z-10 max-w-lg mx-auto px-4 py-8 md:py-12">
        {/* Top ornament */}
        <div className="text-center mb-4 animate-fade-in">
          <span className="text-gold text-3xl font-serif">✦</span>
        </div>

        {/* Header */}
        <div className="text-center animate-fade-up mb-2">
          <p className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground font-sans">
            Wedding Invitation
          </p>
        </div>

        <InvitationCard />

        <div className="flex justify-center my-2">
          <div className="w-16 h-px bg-gold/40" />
        </div>

        <EventDetails />

        <div className="flex justify-center my-2">
          <div className="w-16 h-px bg-gold/40" />
        </div>

        {submitted ? (
          <ConfirmationView />
        ) : attending ? (
          <RSVPForm onSubmit={handleSubmit} />
        ) : (
          <section className="text-center py-10 px-6 animate-fade-up delay-300">
            <div className="max-w-sm mx-auto bg-card rounded-2xl border border-border/60 shadow-sm p-8">
              <h3 className="font-serif text-2xl font-medium text-foreground mb-2">Will You Attend?</h3>
              <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-sans mb-8">
                We would love to have you
              </p>
              <div className="flex flex-col gap-3">
                <button
                  onClick={() => setAttending(true)}
                  className="w-full py-3.5 rounded-xl bg-primary text-primary-foreground font-sans text-sm font-medium tracking-[0.15em] uppercase hover:opacity-90 transition-opacity"
                >
                  Joyfully Accept
                </button>
                <button
                  className="w-full py-3.5 rounded-xl border border-border text-foreground/70 font-sans text-sm font-medium tracking-[0.15em] uppercase hover:bg-secondary transition-colors"
                >
                  Regretfully Decline
                </button>
              </div>
            </div>
          </section>
        )}

        <Countdown />

        {/* Footer */}
        <div className="text-center py-6 animate-fade-in delay-700">
          <span className="text-gold text-2xl font-serif">❦</span>
          <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-sans mt-2">
            We can't wait to celebrate with you
          </p>
        </div>
      </div>
    </div>
  );
}
