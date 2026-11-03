import {
  BRAND,
  HERO_IMAGE,
  HERO_IMAGE_MOBILE,
  WHATSAPP_NUMBER,
  customBoard,
  products as fallbackProducts,
} from "@/lib/constants";
import { sanityClient } from "./client";
import { isSanityConfigured } from "./env";
import { urlForImage } from "./image";
import {
  FEATURED_PRODUCT_QUERY,
  PRODUCTS_QUERY,
  SITE_SETTINGS_QUERY,
} from "./queries";
import type { ProductCard, SiteContent } from "./types";

type SanityProduct = {
  _id: string;
  name?: string;
  description?: string;
  wood?: string;
  finish?: string;
  detail?: string;
  price?: string;
  alt?: string;
  image?: {
    asset?: { _ref?: string };
    hotspot?: { x?: number; y?: number };
  };
  imageUrl?: string;
  hotspot?: { x?: number; y?: number };
};

type SanitySettings = {
  brand?: string;
  whatsappNumber?: string;
  heroHeadline?: string;
  heroSubtext?: string;
  heroImageUrl?: string;
  heroImageMobileUrl?: string;
  heroImage?: unknown;
  heroImageMobile?: unknown;
  customTitle?: string;
  customDescription?: string;
  email?: string;
};

function objectPositionFromHotspot(hotspot?: { x?: number; y?: number }) {
  if (hotspot?.x == null || hotspot?.y == null) return "50% 45%";
  return `${Math.round(hotspot.x * 100)}% ${Math.round(hotspot.y * 100)}%`;
}

function mapProduct(product: SanityProduct): ProductCard | null {
  const image =
    (product.image && urlForImage(product.image)?.width(900).quality(80).url()) ||
    product.imageUrl;
  if (!product.name || !image) return null;

  return {
    id: product._id,
    name: product.name,
    description: product.description || "",
    wood: product.wood || "Lemn masiv",
    finish: product.finish || "Ulei food-safe",
    detail: product.detail || "Piesă unicat",
    price: product.price || "La cerere",
    image,
    alt: product.alt || product.name,
    objectPosition: objectPositionFromHotspot(product.hotspot || product.image?.hotspot),
  };
}

export async function getProducts(): Promise<ProductCard[]> {
  if (!isSanityConfigured || !sanityClient) {
    return fallbackProducts.map((product) => ({ ...product }));
  }

  try {
    const rows = await sanityClient.fetch<SanityProduct[]>(PRODUCTS_QUERY);
    const mapped = (rows || []).map(mapProduct).filter(Boolean) as ProductCard[];
    return mapped.length > 0
      ? mapped
      : fallbackProducts.map((product) => ({ ...product }));
  } catch {
    return fallbackProducts.map((product) => ({ ...product }));
  }
}

export async function getSiteContent(): Promise<SiteContent> {
  const defaults: SiteContent = {
    brand: BRAND,
    whatsappNumber: WHATSAPP_NUMBER,
    heroHeadline: "Tocătoare din lemn masiv, lucrate manual.",
    heroSubtext: "Piese unicat, finisaj food-safe și atenție la fiecare fibră.",
    heroImage: HERO_IMAGE,
    heroImageMobile: HERO_IMAGE_MOBILE,
    customTitle: customBoard.title,
    customDescription: customBoard.description,
    email: "contact@atelierul48.ro",
  };

  if (!isSanityConfigured || !sanityClient) return defaults;

  try {
    const [settings, featured] = await Promise.all([
      sanityClient.fetch<SanitySettings | null>(SITE_SETTINGS_QUERY),
      sanityClient.fetch<SanityProduct | null>(FEATURED_PRODUCT_QUERY),
    ]);

    const featuredDesktop: string | undefined =
      (featured?.image
        ? urlForImage(featured.image)
            ?.width(1920)
            .height(1080)
            .fit("crop")
            .quality(85)
            .url()
        : undefined) || featured?.imageUrl;
    const featuredMobile: string | undefined =
      (featured?.image
        ? urlForImage(featured.image)
            ?.width(1080)
            .height(1620)
            .fit("crop")
            .quality(80)
            .url()
        : undefined) || featured?.imageUrl;

    const settingsDesktop: string | undefined =
      (settings?.heroImage
        ? urlForImage(settings.heroImage as Parameters<typeof urlForImage>[0])
            ?.width(1920)
            .height(1080)
            .fit("crop")
            .quality(85)
            .url()
        : undefined) || settings?.heroImageUrl;
    const settingsMobile: string | undefined =
      (settings?.heroImageMobile
        ? urlForImage(
            settings.heroImageMobile as Parameters<typeof urlForImage>[0]
          )
            ?.width(1080)
            .height(1620)
            .fit("crop")
            .quality(80)
            .url()
        : undefined) || settings?.heroImageMobileUrl;

    return {
      brand: settings?.brand || defaults.brand,
      whatsappNumber: settings?.whatsappNumber || defaults.whatsappNumber,
      heroHeadline: settings?.heroHeadline || defaults.heroHeadline,
      heroSubtext: settings?.heroSubtext || defaults.heroSubtext,
      heroImage: settingsDesktop || featuredDesktop || defaults.heroImage,
      heroImageMobile:
        settingsMobile || featuredMobile || defaults.heroImageMobile,
      customTitle: settings?.customTitle || defaults.customTitle,
      customDescription:
        settings?.customDescription || defaults.customDescription,
      email: settings?.email || defaults.email,
    };
  } catch {
    return defaults;
  }
}

export function whatsappLinkFor(number: string, message: string) {
  const digits = number.replace(/\D/g, "");
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}
