export function InvitationCard() {
  return (
    <section className="text-center py-12 px-6 animate-fade-up">
      <p className="text-[11px] tracking-[0.22em] uppercase text-muted-foreground mb-1.5 font-sans">
        An Invitation For You
      </p>

      <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-6 font-sans">
        Together with their families
      </p>

      <div className="mb-2 flex flex-col items-center justify-center gap-3 sm:gap-4">
        <h3 className="font-serif text-3xl md:text-[2.75rem] font-medium leading-none tracking-[0.03em] text-foreground text-center">
          Bevin Binny
        </h3>

        <div className="flex items-center justify-center gap-3 text-gold/90">
          <span className="h-px w-10 bg-gold/35" />
          <span className="font-serif text-2xl md:text-[2.15rem] italic leading-none">&amp;</span>
          <span className="h-px w-10 bg-gold/35" />
        </div>

        <h3 className="font-serif text-3xl md:text-[2.75rem] font-medium leading-none tracking-[0.03em] text-foreground text-center">
          Jaimi Benny
        </h3>
      </div>

      <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mt-8 font-sans">
        Request the honor of your presence
      </p>
    </section>
  );
}
