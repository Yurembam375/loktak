import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Notifications } from "@/components/Notifications";

export default function NotificationsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[88px]">
        <Notifications />
      </main>
      <Footer />
    </>
  );
}
