import { Footer } from "@/components/Footer";
import { LdaSection } from "@/components/LdaSection";
import { Navbar } from "@/components/Navbar";

export default function LdaPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[88px]">
        <LdaSection />
      </main>
      <Footer />
    </>
  );
}
