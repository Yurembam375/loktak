import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[88px]">
        <Projects />
      </main>
      <Footer />
    </>
  );
}
