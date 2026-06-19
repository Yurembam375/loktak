import { Footer } from "@/components/Footer";
import { MissionSection } from "@/components/MissionSection";
import { Navbar } from "@/components/Navbar";

export default function MissionPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[88px]">
        <MissionSection />
      </main>
      <Footer />
    </>
  );
}
