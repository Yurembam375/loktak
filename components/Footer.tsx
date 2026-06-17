import { Facebook, Mail, MapPin, Youtube } from "lucide-react";
import { footerLinks } from "@/lib/site-data";

export function Footer() {
  return (
    <footer id="contact" className="bg-navy py-16 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:px-8">
        <div>
          <a href="#" className="flex items-center gap-3">
            <span className="grid size-32 place-items-center overflow-hidden">
              <img
                src="/images/logo.png"
                alt="Loktak Development Authority logo"
                className="h-full w-full object-contain"
              />
            </span>
          </a>
          <p className="mt-5 max-w-xs text-sm leading-6 text-white/62">
            Loktak Lake is a living wetland ecosystem of immense ecological and cultural importance.
          </p>
          <div className="mt-5 flex gap-3 text-white/86">
            {[Facebook, Mail, Youtube].map((Icon, index) => (
              <a key={index} href="#" aria-label="Social link" className="transition hover:text-gold">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {Object.entries(footerLinks).map(([heading, links]) => (
          <div key={heading}>
            <h3 className="font-serif font-bold tracking-[-0.01em]">{heading}</h3>
            <div className="mt-5 grid gap-3 text-sm text-white/66">
              {links.map((link) => (
                <a key={link} href="#" className="transition hover:text-gold">
                  {link}
                </a>
              ))}
            </div>
          </div>
        ))}

        <div>
          <h3 className="font-serif font-bold tracking-[-0.01em]">Contact</h3>
          <div className="mt-5 grid gap-4 text-sm text-white/66">
            <p>
              <span className="block font-bold text-white">Email</span>
              loktaklda@gmail.com
            </p>
            <p className="flex gap-3">
              <MapPin className="mt-1 shrink-0" size={16} />
              <span>
                <span className="block font-bold text-white">Address</span>
                Loktak Development Authority Imphal West, Manipur
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
