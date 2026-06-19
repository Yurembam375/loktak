import { Footer } from "@/components/Footer";
import { LoktakWetlandComplexSection } from "@/components/LoktakWetlandComplexSection";
import { Navbar } from "@/components/Navbar";

export default function LoktakWetlandComplexPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[88px]">
        <LoktakWetlandComplexSection />
      </main>
      <Footer />
    </>
  );
}
