import { BRAND, whatsappLink } from "@/lib/constants";

const links = [
  { href: "#catalog", label: "Catalog" },
  { href: "#personalizat", label: "Personalizat" },
  { href: "#beneficii", label: "Beneficii" },
  { href: "#contact", label: "Contact" },
];

const quickWhatsApp = whatsappLink(
  `Bună! Am descoperit ${BRAND} și aș dori detalii.`
);

export function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-50 pt-[env(safe-area-inset-top)]">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-4 sm:px-6 md:px-8 md:py-6">
        <a
          href="#top"
          className="font-display text-lg tracking-[0.04em] text-cream transition-opacity active:opacity-80 sm:text-xl md:text-2xl"
        >
          {BRAND}
        </a>
        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Navigare principală"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm tracking-wide text-champagne/85 transition-colors hover:text-cream"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4 md:hidden">
          <a
            href="#catalog"
            className="min-h-11 min-w-11 inline-flex items-center justify-center text-sm tracking-wide text-champagne/90"
          >
            Catalog
          </a>
          <a
            href={quickWhatsApp}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-11 inline-flex items-center justify-center bg-champagne/95 px-3.5 text-xs font-medium tracking-wide text-walnut-deep"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
