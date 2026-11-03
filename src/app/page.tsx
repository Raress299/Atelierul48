import { Benefits } from "@/components/Benefits";
import { Catalog } from "@/components/Catalog";
import { CustomBoard } from "@/components/CustomBoard";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Catalog />
        <CustomBoard />
        <Benefits />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
