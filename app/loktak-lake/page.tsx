import { Footer } from "@/components/Footer";
import { LoktakLakeSection } from "@/components/LoktakLakeSection";
import { Navbar } from "@/components/Navbar";

export default function LoktakLakePage() {
  return (
    <>
      <Navbar />
      <main className="pt-[88px]">
        <LoktakLakeSection />
      </main>
      <Footer />
    </>
  );
}
