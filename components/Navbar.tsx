"use client";

import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "@/lib/site-data";

const dropdownItems = ["About Loktak", "Acts & Rules", "Projects", "Conservation", "Publications", "Gallery", "News & Events"];
const actsAndRulesLinks = ["Loktak Protection Act 2006", "Loktak Protection Rules 2008"];

function getNavHref(item: string) {
  if (item === "Projects") {
    return "/projects";
  }

  if (item === "News & Events") {
    return "/events";
  }

  if (item === "Notifications") {
    return "/notifications";
  }

  if (item === "Contact") {
    return "/#contact";
  }

  return `/#${item.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [actsOpen, setActsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#263f43]/92 text-white shadow-lg backdrop-blur-[14px]">
      <nav className="mx-auto flex h-[88px] max-w-[1516px] items-center justify-between px-4 lg:px-6">
        <a href="/" className="flex min-w-[210px] items-center gap-2">
          <img className="h-20 w-20 object-contain" src="/images/image 16 (1).png" alt="Loktak Development Authority logo" />
          <span className="text-[14px] font-bold leading-[1.05] text-white">
            <span className="block">Loktak</span>
            <span className="block">Development</span>
            <span className="block">Authority</span>
          </span>
        </a>

        <div className="hidden flex-1 items-center justify-end gap-3 align-middle font-sans text-[12px] font-medium leading-[13.84px] tracking-normal text-white xl:gap-5 lg:flex">
          {navItems.map((item) => {
            const hasDropdown = dropdownItems.includes(item);
            const href = getNavHref(item);

            if (item === "Acts & Rules") {
              return (
                <div key={item} className="relative">
                  <button
                    type="button"
                    className={`inline-flex items-center gap-2 whitespace-nowrap border-b pb-1 transition hover:text-white ${
                      actsOpen ? "border-white text-white" : "border-transparent"
                    }`}
                    onClick={() => setActsOpen((value) => !value)}
                    aria-expanded={actsOpen}
                  >
                    {item}
                    <ChevronDown size={14} strokeWidth={2.5} />
                  </button>

                  {actsOpen ? (
                    <div className="absolute left-1/2 top-12 w-[288px] -translate-x-1/2 rounded-xl bg-[#263f43]/96 px-5 py-4 font-sans text-[12px] font-medium leading-[13.84px] tracking-normal text-white shadow-[0_16px_34px_rgba(0,0,0,0.28)] backdrop-blur-[14px]">
                      {actsAndRulesLinks.map((link) => (
                        <a
                          key={link}
                          href={`/#${link.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                          className="block rounded-md px-1 py-1.5 transition hover:text-gold"
                          onClick={() => setActsOpen(false)}
                        >
                          {link}
                        </a>
                      ))}
                    </div>
                  ) : null}
                </div>
              );
            }

            return (
              <a key={item} href={href} className="inline-flex items-center gap-2 whitespace-nowrap transition hover:text-white">
                {item}
                {hasDropdown ? <ChevronDown size={14} strokeWidth={2.5} /> : null}
              </a>
            );
          })}
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          className="grid size-11 place-items-center rounded-full border border-white/15 text-white lg:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-white/10 bg-navy/96 px-5 pb-5 lg:hidden">
          <div className="grid gap-2 pt-3 text-sm text-white/80">
            {navItems.map((item) => (
              <a
                key={item}
                href={getNavHref(item)}
                className="rounded-md px-3 py-2 transition hover:bg-white/8 hover:text-gold"
                onClick={() => setOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
