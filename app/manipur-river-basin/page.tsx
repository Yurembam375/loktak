import { Footer } from "@/components/Footer";
import { ManipurRiverBasinSection } from "@/components/ManipurRiverBasinSection";
import { Navbar } from "@/components/Navbar";

export default function ManipurRiverBasinPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[88px]">
        <ManipurRiverBasinSection />
      </main>
      <Footer />
    </>
  );
}
