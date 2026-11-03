import { customBoard, whatsappLink } from "@/lib/constants";

export function CustomBoard() {
  return (
    <section
      id="personalizat"
      className="scroll-mt-4 bg-linen px-5 py-14 sm:px-6 sm:py-20 md:px-8 md:py-28"
    >
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1.2fr_1fr] md:items-end md:gap-16">
        <div>
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-accent sm:text-xs">
            Comandă specială
          </p>
          <h2 className="mt-2 font-display text-[2rem] leading-tight text-ink sm:mt-3 sm:text-4xl md:text-5xl">
            {customBoard.title}
          </h2>
          <p className="mt-4 max-w-xl text-[0.95rem] leading-relaxed text-muted sm:mt-5 sm:text-base md:text-lg">
            {customBoard.description}
          </p>
          <ul className="mt-6 space-y-3 sm:mt-8">
            {customBoard.points.map((point) => (
              <li
                key={point}
                className="flex items-start gap-3 text-sm text-ink/80 md:text-base"
              >
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                  aria-hidden
                />
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="border border-champagne bg-cream px-5 py-7 sm:px-6 sm:py-8 md:px-8">
          <p className="font-display text-[1.5rem] text-ink sm:text-2xl md:text-3xl">
            Spune-ne ce îți imaginezi
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Trimite pe WhatsApp o schiță, dimensiuni aproximative sau o poză de
            inspirație — îți propunem esența și prețul.
          </p>
          <a
            href={whatsappLink(customBoard.message)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex min-h-12 w-full items-center justify-center bg-walnut px-5 py-3.5 text-sm tracking-wide text-cream transition active:bg-walnut-deep sm:mt-8 sm:hover:bg-walnut-deep"
          >
            {customBoard.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
