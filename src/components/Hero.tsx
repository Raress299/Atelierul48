import Image from "next/image";
import { whatsappLinkFor } from "@/sanity/load";

type HeroProps = {
  brand: string;
  headline: string;
  subtext: string;
  heroImage: string;
  heroImageMobile: string;
  whatsappNumber: string;
};

export function Hero({
  brand,
  headline,
  subtext,
  heroImage,
  heroImageMobile,
  whatsappNumber,
}: HeroProps) {
  const orderLink = whatsappLinkFor(
    whatsappNumber,
    `Bună! Am descoperit ${brand} și aș dori să comand un tocător din lemn masiv.`
  );

  return (
    <section
      id="top"
      className="wood-grain relative flex min-h-[100svh] items-end overflow-hidden bg-walnut-deep"
    >
      {/* Desktop background via CSS so mobile only downloads one hero image */}
      <div
        className="absolute inset-0 hidden bg-cover bg-center md:block"
        style={{ backgroundImage: `url(${heroImage})` }}
        aria-hidden
      />
      <Image
        src={heroImageMobile}
        alt={`${brand} — tocător din lemn masiv`}
        fill
        priority
        className="object-cover object-[center_28%] md:hidden"
        sizes="100vw"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-walnut-deep via-walnut-deep/60 to-walnut-deep/20 md:via-walnut-deep/45 md:to-walnut-deep/10"
        aria-hidden
      />
      <div
        className="absolute inset-0 hidden bg-gradient-to-r from-walnut-deep/55 via-transparent to-transparent md:block"
        aria-hidden
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-[max(5.5rem,calc(env(safe-area-inset-bottom)+4.5rem))] pt-28 sm:px-6 md:px-8 md:pb-24 md:pt-32">
        <p className="animate-fade-up font-display text-[2.65rem] leading-[0.95] tracking-[0.04em] text-cream sm:text-5xl md:text-7xl lg:text-8xl">
          {brand}
        </p>
        <h1 className="animate-fade-up-delay-1 mt-4 max-w-[18rem] font-display text-[1.35rem] font-light leading-snug text-champagne sm:mt-5 sm:max-w-xl sm:text-3xl md:mt-7 md:text-4xl">
          {headline}
        </h1>
        <p className="animate-fade-up-delay-1 mt-3 max-w-sm text-[0.95rem] leading-relaxed text-champagne/80 sm:mt-4 md:text-lg">
          {subtext}
        </p>
        <div className="animate-fade-up-delay-2 mt-7 flex w-full flex-col gap-3 sm:mt-8 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
          <a
            href={orderLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 bg-champagne px-6 py-3.5 text-sm font-medium tracking-wide text-walnut-deep transition active:bg-cream sm:w-auto sm:hover:bg-cream"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Comandă pe WhatsApp
          </a>
          <a
            href="#personalizat"
            className="inline-flex min-h-12 w-full items-center justify-center px-2 py-3.5 text-sm tracking-wide text-champagne/90 underline-offset-4 transition active:text-cream sm:w-auto sm:justify-start sm:hover:underline"
          >
            Tocător personalizat
          </a>
        </div>
      </div>
    </section>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
