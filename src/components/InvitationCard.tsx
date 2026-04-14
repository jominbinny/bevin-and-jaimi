export function InvitationCard() {
  return (
    <section className="text-center py-12 px-6 animate-fade-up">
      <p className="text-[11px] tracking-[0.22em] uppercase text-muted-foreground mb-1.5 font-sans">
        An Invitation For You
      </p>

      <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-6 font-sans">
        Together with their families
      </p>

      <div className="mb-2 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-8 md:gap-10">
        <div className="w-full max-w-[12rem] sm:max-w-[14.5rem] text-center">
          <h3 className="font-serif text-2xl md:text-[2.2rem] font-semibold leading-tight sm:whitespace-nowrap text-foreground">Bevin Binny</h3>
          <p className="mt-1 text-[11px] tracking-[0.14em] uppercase text-gold/80 font-sans">Son of</p>
          <p className="font-serif text-[1.02rem] md:text-[1.16rem] leading-snug text-foreground/85 italic">P.C. Binny</p>
        </div>

        <div className="flex flex-col items-center gap-1">
          <span className="text-gold text-2xl">&amp;</span>
        </div>

        <div className="w-full max-w-[12rem] sm:max-w-[14.5rem] text-center">
          <h3 className="font-serif text-2xl md:text-[2.2rem] font-semibold leading-tight sm:whitespace-nowrap text-foreground">Jaimi Benny</h3>
          <p className="mt-1 text-[11px] tracking-[0.14em] uppercase text-gold/80 font-sans">Daughter of</p>
          <p className="font-serif text-[1.02rem] md:text-[1.16rem] leading-snug text-foreground/85 italic">Benny Vezhaparambil</p>
        </div>
      </div>

      <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mt-8 font-sans">
        Request the honor of your presence
      </p>
    </section>
  );
}
