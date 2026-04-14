import { MapPin } from "lucide-react";

const MAPS_LINK = "https://maps.app.goo.gl/SwnDEJZNN2AYmvne7";

export function EventDetails() {
  return (
    <section className="text-center py-10 px-6 animate-fade-up delay-200">
      <div className="flex items-center justify-center gap-6 md:gap-10 mb-8">
        <div className="text-center">
          <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-sans">MAY</p>
          <p className="text-xs text-muted-foreground font-sans">2026, Sunday</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-20 h-20 rounded-full border-2 border-gold/40 flex items-center justify-center">
            <span className="font-serif text-4xl font-light text-foreground">31</span>
          </div>
        </div>

        <div className="text-center">
          <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-sans">12 PM</p>
          <p className="text-xs text-muted-foreground font-sans">Onwards</p>
        </div>
      </div>

      <div className="border-t border-border/60 pt-6 max-w-sm mx-auto">
        <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-sans mb-2">
          Ceremony Venue
        </p>
        <h3 className="font-serif text-xl font-medium text-foreground mb-2">St. George Jacobite Syrian Church</h3>
        <a
          href={MAPS_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-muted-foreground font-sans inline-flex items-center justify-center gap-1 hover:text-primary transition-colors"
        >
          <MapPin className="w-3.5 h-3.5" />
          Karingachira, Ernakulam
        </a>
      </div>
    </section>
  );
}
