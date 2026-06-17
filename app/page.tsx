import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { Initiatives } from "@/components/Initiatives";
import { Navbar } from "@/components/Navbar";
import { Newsletter } from "@/components/Newsletter";
import { Publications } from "@/components/Publications";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Initiatives />
        <Publications />
        <Gallery />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
