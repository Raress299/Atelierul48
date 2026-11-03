import { benefits } from "@/lib/constants";

export function Benefits() {
  return (
    <section
      id="beneficii"
      className="wood-grain relative scroll-mt-4 overflow-hidden bg-walnut px-5 py-14 text-cream sm:px-6 sm:py-20 md:px-8 md:py-28"
    >
      <div
        className="pointer-events-none absolute -right-24 top-10 hidden h-72 w-72 rounded-full bg-honey/10 blur-3xl sm:block"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-16 bottom-0 hidden h-64 w-64 rounded-full bg-champagne/10 blur-3xl sm:block"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl">
        <div className="max-w-xl">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-honey sm:text-xs">
            De ce Atelierul48
          </p>
          <h2 className="mt-2 font-display text-[2rem] leading-tight text-cream sm:mt-3 sm:text-4xl md:text-5xl">
            Trei lucruri pe care le simți la fiecare piesă
          </h2>
        </div>

        <div className="mt-10 grid gap-8 sm:mt-14 sm:gap-10 md:grid-cols-3 md:gap-8">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="border-t border-champagne/25 pt-6 sm:pt-8"
            >
              <BenefitIcon type={benefit.icon} />
              <h3 className="mt-4 font-display text-xl text-champagne sm:mt-5 sm:text-2xl">
                {benefit.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-champagne/75 sm:mt-3 md:text-base">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BenefitIcon({ type }: { type: "oil" | "wood" | "hand" }) {
  const common = "h-8 w-8 text-honey sm:h-9 sm:w-9";
  if (type === "oil") {
    return (
      <svg className={common} viewBox="0 0 40 40" fill="none" aria-hidden>
        <path
          d="M20 6c0 0-8 10-8 16a8 8 0 0016 0c0-6-8-16-8-16z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M17 24c1.5 2 4.5 2 6 0"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  if (type === "wood") {
    return (
      <svg className={common} viewBox="0 0 40 40" fill="none" aria-hidden>
        <rect
          x="8"
          y="10"
          width="24"
          height="20"
          rx="1"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M8 16c4 2 8-2 12 0s8-2 12 0M8 24c4 2 8-2 12 0s8-2 12 0"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  return (
    <svg className={common} viewBox="0 0 40 40" fill="none" aria-hidden>
      <path
        d="M14 22v-6a3 3 0 016 0v4M20 20v-5a3 3 0 016 0v7M26 22v-3a3 3 0 016 0v8c0 4-3 7-8 7h-4c-5 0-10-3-10-9v-5a3 3 0 016 0v3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
