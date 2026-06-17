import { Events } from "@/components/Events";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export default function EventsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[88px]">
        <Events />
      </main>
      <Footer />
    </>
  );
}
