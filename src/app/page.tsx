import { Benefits } from "@/components/Benefits";
import { Catalog } from "@/components/Catalog";
import { CustomBoard } from "@/components/CustomBoard";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { getProducts, getSiteContent } from "@/sanity/load";

export const revalidate = 60;

export default async function Home() {
  const [products, site] = await Promise.all([getProducts(), getSiteContent()]);

  return (
    <>
      <Header brand={site.brand} whatsappNumber={site.whatsappNumber} />
      <main className="flex-1">
        <Hero
          brand={site.brand}
          headline={site.heroHeadline}
          subtext={site.heroSubtext}
          heroImage={site.heroImage}
          heroImageMobile={site.heroImageMobile}
          whatsappNumber={site.whatsappNumber}
        />
        <Catalog
          products={products}
          brand={site.brand}
          whatsappNumber={site.whatsappNumber}
        />
        <CustomBoard
          title={site.customTitle}
          description={site.customDescription}
          brand={site.brand}
          whatsappNumber={site.whatsappNumber}
        />
        <Benefits />
      </main>
      <Footer
        brand={site.brand}
        whatsappNumber={site.whatsappNumber}
        email={site.email}
      />
      <WhatsAppFloat brand={site.brand} whatsappNumber={site.whatsappNumber} />
    </>
  );
}
