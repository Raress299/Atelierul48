import Image from "next/image";
import type { ProductCard } from "@/sanity/types";
import { whatsappLinkFor } from "@/sanity/load";

type CatalogProps = {
  products: ProductCard[];
  brand: string;
  whatsappNumber: string;
};

export function Catalog({ products, brand, whatsappNumber }: CatalogProps) {
  return (
    <section
      id="catalog"
      className="scroll-mt-4 bg-cream px-5 py-14 sm:px-6 sm:py-20 md:px-8 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-accent sm:text-xs">
            Catalog
          </p>
          <h2 className="mt-2 font-display text-[2rem] leading-tight text-ink sm:mt-3 sm:text-4xl md:text-5xl">
            Piese din atelier
          </h2>
          <p className="mt-3 text-[0.95rem] leading-relaxed text-muted sm:mt-4 sm:text-base md:text-lg">
            Modele unicat din lemn masiv. Alege o piesă sau{" "}
            <a
              href="#personalizat"
              className="text-accent underline-offset-4 transition hover:underline"
            >
              comandă una personalizată
            </a>
            .
          </p>
        </div>

        <div className="mt-10 grid gap-7 sm:mt-14 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
          {products.map((product, index) => (
            <article key={product.id} className="group flex flex-col">
              <div className="relative aspect-[4/5] overflow-hidden bg-linen">
                <Image
                  src={product.image}
                  alt={product.alt}
                  fill
                  className="object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
                  style={{ objectPosition: product.objectPosition }}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={index < 2}
                  loading={index < 2 ? "eager" : "lazy"}
                />
              </div>
              <div className="flex flex-1 flex-col border border-t-0 border-champagne/80 bg-cream px-4 py-4 sm:px-5 sm:py-5">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-[1.5rem] text-ink sm:text-2xl">
                    {product.name}
                  </h3>
                  <span className="shrink-0 text-sm font-medium text-accent">
                    {product.price}
                  </span>
                </div>
                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted sm:mt-3">
                  {product.description}
                </p>
                <p className="mt-3 text-[0.7rem] tracking-wide text-ink/45 sm:mt-4 sm:text-xs">
                  {product.wood} · {product.finish} · {product.detail}
                </p>
                <a
                  href={whatsappLinkFor(
                    whatsappNumber,
                    `Bună! Aș dori să comand piesa „${product.name}” de la ${brand}.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex min-h-12 w-full items-center justify-center gap-2 border border-walnut bg-walnut px-4 py-3 text-sm tracking-wide text-cream transition active:bg-walnut-deep sm:mt-5 sm:hover:bg-walnut-deep"
                >
                  Comandă pe WhatsApp
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
