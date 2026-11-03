import { BRAND, WHATSAPP_NUMBER, whatsappLink } from "@/lib/constants";

const contactLink = whatsappLink(
  `Bună! Aș dori mai multe detalii despre tocătoarele ${BRAND}.`
);

export function Footer() {
  const phoneDisplay = `+${WHATSAPP_NUMBER.slice(0, 2)} ${WHATSAPP_NUMBER.slice(2, 5)} ${WHATSAPP_NUMBER.slice(5, 8)} ${WHATSAPP_NUMBER.slice(8)}`;

  return (
    <footer
      id="contact"
      className="scroll-mt-4 bg-walnut-deep px-5 py-12 text-champagne sm:px-6 sm:py-16 md:px-8 md:py-20"
    >
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.4fr_1fr] md:gap-12">
        <div>
          <p className="font-display text-[1.75rem] tracking-[0.04em] text-cream sm:text-3xl md:text-4xl">
            {BRAND}
          </p>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-champagne/75 sm:mt-4 md:text-base">
            Atelier local de tocătoare din lemn masiv. Lucrate manual, finisate
            food-safe, făcute să dureze generații.
          </p>
        </div>

        <div className="space-y-5 text-sm md:text-base">
          <div>
            <p className="text-[0.7rem] uppercase tracking-[0.2em] text-honey sm:text-xs">
              Contact
            </p>
            <a
              href={contactLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex min-h-11 items-center text-cream transition active:text-honey sm:hover:text-honey"
            >
              WhatsApp — {phoneDisplay}
            </a>
          </div>
          <div>
            <p className="text-[0.7rem] uppercase tracking-[0.2em] text-honey sm:text-xs">
              Email
            </p>
            <a
              href="mailto:contact@atelierul48.ro"
              className="mt-2 inline-flex min-h-11 items-center break-all text-cream transition active:text-honey sm:hover:text-honey"
            >
              contact@atelierul48.ro
            </a>
          </div>
          <div>
            <p className="text-[0.7rem] uppercase tracking-[0.2em] text-honey sm:text-xs">
              Atelier
            </p>
            <p className="mt-2 text-champagne/80">
              Comenzi pe WhatsApp · Livrare în toată țara
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-6xl flex-col gap-2 border-t border-champagne/15 pt-6 text-xs text-champagne/50 sm:mt-14 sm:flex-row sm:items-center sm:justify-between sm:gap-3 sm:pt-8 pb-[env(safe-area-inset-bottom)]">
        <p>
          © {new Date().getFullYear()} {BRAND}. Toate drepturile rezervate.
        </p>
        <p>Lemn masiv · Lucrat manual · Food-safe</p>
      </div>
    </footer>
  );
}
