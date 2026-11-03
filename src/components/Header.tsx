import { whatsappLinkFor } from "@/sanity/load";

const links = [
  { href: "#catalog", label: "Catalog" },
  { href: "#personalizat", label: "Personalizat" },
  { href: "#beneficii", label: "Beneficii" },
  { href: "#contact", label: "Contact" },
];

type HeaderProps = {
  brand: string;
  whatsappNumber: string;
};

export function Header({ brand, whatsappNumber }: HeaderProps) {
  const quickWhatsApp = whatsappLinkFor(
    whatsappNumber,
    `Bună! Am descoperit ${brand} și aș dori detalii.`
  );

  return (
    <header className="absolute inset-x-0 top-0 z-50 pt-[env(safe-area-inset-top)]">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-4 sm:px-6 md:px-8 md:py-6">
        <a
          href="#top"
          className="font-display text-lg tracking-[0.04em] text-cream transition-opacity active:opacity-80 sm:text-xl md:text-2xl"
        >
          {brand}
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
            className="inline-flex min-h-11 min-w-11 items-center justify-center text-sm tracking-wide text-champagne/90"
          >
            Catalog
          </a>
          <a
            href={quickWhatsApp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center justify-center bg-champagne/95 px-3.5 text-xs font-medium tracking-wide text-walnut-deep"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
