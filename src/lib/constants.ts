export const BRAND = "Atelierul48";
export const WHATSAPP_NUMBER = "40749313489";
export const WHATSAPP_BASE = `https://wa.me/${WHATSAPP_NUMBER}`;
export const HERO_IMAGE = "/products/hero.jpg";
export const HERO_IMAGE_MOBILE = "/products/hero-mobile.jpg";

export function whatsappLink(message: string) {
  return `${WHATSAPP_BASE}?text=${encodeURIComponent(message)}`;
}

export const products = [
  {
    id: "frunza-mere",
    name: "Frunză",
    description:
      "Sculptată în formă de frunză, fiecare lob e tăiat de mână — deci fiecare Frunză e altfel. Lemn masiv, finisaj food-safe pentru fructe, brânzeturi sau un platou de duminică. Cadoul care transformă masa într-un gest frumos.",
    wood: "Lemn masiv sculptat",
    finish: "Ulei mineral food-safe",
    detail: "Formă frunză",
    price: "La cerere",
    image: "/products/frunza-mere.jpg",
    alt: "Platou sculptat în formă de frunză",
    objectPosition: "50% 45%",
  },
  {
    id: "maner-ars",
    name: "Arcă",
    description:
      "Sculptată pe rând, cu mâner ars și fibră pe care n-o vei mai găsi la fel pe alt tocător. Lemn masiv, uleiat food-safe — stă frumos pe blat și ține ani întregi. Un cadou care se simte făcut pe bune, nu cumpărat din raft.",
    wood: "Lemn masiv",
    finish: "Ulei mineral food-safe",
    detail: "Mâner + finisaj ars",
    price: "La cerere",
    image: "/products/maner-ars.jpg",
    alt: "Tocător Arcă cu mâner carbonizat",
    objectPosition: "50% 32%",
  },
  {
    id: "maner-sculptat",
    name: "Cornul",
    description:
      "Formă sălbatică, muchii carbonizate și desen de lemn pe care doar mâna îl poate scoate așa. Finisaj cu ulei alimentar și ceară organică, sigur la contact cu mâncarea. Pe masă arată ca o piesă de atelier — și rămâne acolo, sezon după sezon.",
    wood: "Lemn masiv",
    finish: "Ulei + ceară organică",
    detail: "Formă sculptată",
    price: "La cerere",
    image: "/products/maner-sculptat.jpg",
    alt: "Tocător Cornul cu muchii carbonizate",
    objectPosition: "50% 28%",
  },
  {
    id: "duo-sant",
    name: "Perechea",
    description:
      "Două piese surori, fiecare cu muchia ei naturală — un set pe care îl dai cadou și se ține minte. Lemn masiv, șanț practic, ulei food-safe. Gătești pe una, servești pe cealaltă; ambele îmbătrânesc frumos pe blat.",
    wood: "Lemn masiv live-edge",
    finish: "Ulei mineral food-safe",
    detail: "Set 2 piese",
    price: "La cerere",
    image: "/products/duo-sant.jpg",
    alt: "Set de două tocătoare cu șanț",
    objectPosition: "50% 42%",
  },
  {
    id: "live-edge",
    name: "Scoarță",
    description:
      "Păstrează conturul arborelui — scoarță, noduri, urme pe care lemnul le-a scris singur. Finisată cu ulei food-safe, gata pentru tăiat și pentru servit. Pe blat aduce căldura atelierului; în timp, doar se înfrumusețează.",
    wood: "Lemn masiv cu scoarță",
    finish: "Ulei mineral food-safe",
    detail: "Live-edge",
    price: "La cerere",
    image: "/products/live-edge.jpg",
    alt: "Tocător live-edge cu scoarță naturală",
    objectPosition: "50% 40%",
  },
  {
    id: "nuc-alungit",
    name: "Lungime",
    description:
      "Alungită, grea în mână, cu desen închis pe care doar esența masivă îl poate avea. Uleiată food-safe, pentru pâine, brânză sau platouri întinse. Un cadou care umple masa — și rămâne acolo ani de zile.",
    wood: "Esență închisă masivă",
    finish: "Ulei mineral food-safe",
    detail: "Formă alungită",
    price: "La cerere",
    image: "/products/nuc-alungit.jpg",
    alt: "Tocător alungit din lemn închis",
    objectPosition: "50% 45%",
  },
  {
    id: "platou-burl",
    name: "Burl",
    description:
      "Din burl dens, cu adâncitură sculptată — o piesă pe care n-o poți copia. Lemn masiv, ulei și ceară organice, sigure la contact cu mâncarea. Pe masă arată ca un obiect de preț; se folosește fără grijă, sezon după sezon.",
    wood: "Burl masiv",
    finish: "Ulei + ceară organică",
    detail: "Platou cu adâncitură",
    price: "La cerere",
    image: "/products/platou-burl.jpg",
    alt: "Platou Burl cu adâncitură sculptată",
    objectPosition: "50% 48%",
  },
] as const;

export const customBoard = {
  title: "Tocător personalizat",
  description:
    "Alegi esența, dimensiunea, forma și detaliile — mâner, șanț, gravură sau finisaj. Lucrăm piesa pe baza ideii tale.",
  points: [
    "Dimensiuni și formă la alegere",
    "Esență și finisaj food-safe",
    "Opțional: gravură sau detalii speciale",
  ],
  cta: "Discută pe WhatsApp",
  message:
    "Bună! Aș dori un tocător personalizat de la Atelierul48. Am câteva idei despre formă / dimensiuni / esență.",
};

export const benefits = [
  {
    title: "Ulei Food-Safe",
    description:
      "Finisaj cu uleiuri sigure pentru contact alimentar — fără miros, fără toxine.",
    icon: "oil" as const,
  },
  {
    title: "Lemn Masiv",
    description:
      "Doar esențe solide, alese pentru densitate și desen. Fără aglomerat, fără furnir.",
    icon: "wood" as const,
  },
  {
    title: "Lucrat Manual",
    description:
      "Tăiat, șlefuit și uleiat în atelier. Fiecare piesă e unicat.",
    icon: "hand" as const,
  },
] as const;
