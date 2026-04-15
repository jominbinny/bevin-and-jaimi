import { MapPin, Phone } from "lucide-react";

export function ConfirmationView() {
  return (
    <section className="text-center py-10 px-6 animate-scale-in">
      <div className="max-w-sm mx-auto">
        <p className="font-serif text-base text-foreground/80 italic mb-8 leading-relaxed">
          Your RSVP has been received! We look forward to celebrating with you.
        </p>

        <div className="bg-card rounded-2xl border border-border/60 shadow-sm p-6 mb-6">
          <div className="flex items-start justify-between gap-4">
            
            {/* Date */}
            <div className="text-left">
              <div className="border border-border rounded-lg p-3 inline-block mb-2">
                <p className="font-serif text-3xl font-light text-foreground leading-none">
                  31
                </p>
                <p className="text-[10px] tracking-[0.15em] uppercase text-muted-foreground font-sans">
                  MAY
                </p>
              </div>
              <p className="text-xs text-muted-foreground font-sans">Sunday</p>
              <p className="text-xs text-muted-foreground font-sans">12 PM</p>
            </div>

            {/* Venue */}
            <div className="text-right flex-1">
              <h4 className="font-serif text-lg font-medium text-foreground mb-0.5">
                St. George Jacobite Syrian Church
              </h4>
              <p className="text-xs text-muted-foreground font-sans mb-3">
                Karingachira, Ernakulam
              </p>

              <a
                href="https://maps.google.com/?q=St.+George+Jacobite+Syrian+Church+Karingachira+Ernakulam"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-primary font-sans font-medium hover:underline"
              >
                <MapPin className="w-3.5 h-3.5" />
                Click here for location
              </a>
            </div>
          </div>
        </div>

        {/* Contact */}
        <a
          href="tel:+919497192652"
          className="inline-flex items-center gap-2 text-sm text-foreground/70 font-sans mb-6 hover:text-foreground transition-colors"
        >
          <Phone className="w-4 h-4" />
          9497192652
        </a>

        {/* Final message */}
        <p className="text-xs text-muted-foreground font-sans">
          See you at the celebration 🎉
        </p>
      </div>
    </section>
  );
}