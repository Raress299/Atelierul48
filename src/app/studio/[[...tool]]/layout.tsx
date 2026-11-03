export const metadata = {
  title: "Atelierul48 Studio",
  robots: { index: false, follow: false },
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="fixed inset-0 z-[100] h-screen w-screen overflow-hidden bg-white">
      {children}
    </div>
  );
}
