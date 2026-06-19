"use client";

import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "@/lib/site-data";

const dropdownItems = ["About Loktak", "Wetland Complex", "Acts & Rules", "Projects", "Conservation", "Publications", "Gallery", "News & Events"];
const aboutLinks = [
  {
    label: "LDA",
    href: "/lda/"
  },
  {
    label: "Mission",
    href: "/mission/"
  },
  {
    label: "Messages",
    href: "/#messages"
  }
];
const actsAndRulesLinks = [
  {
    label: "THE MANIPUR LOKTAK LAKE (PROTECTION) ACT, 2006",
    pdf: "/pdfs/Loktak Lake Protection Act 2006.pdf"
  },
  {
    label: "THE MANIPUR LOKTAK LAKE (PROTECTION) RULES, 2008",
    pdf: "/pdfs/Loktak Lake Protection Rules 2008.pdf"
  }
];
const wetlandComplexLinks = [
  {
    label: "Manipur River Basin",
    href: "/manipur-river-basin/"
  },
  {
    label: "Loktak Wetland Complex",
    href: "/loktak-wetland-complex/"
  },
  {
    label: "Loktak Lake",
    href: "/loktak-lake/"
  }
];
const newsletterLinks = [
  {
    label: "Newsletter Vol 1",
    pdf: "/pdfs/vol1.pdf"
  },
  {
    label: "Newsletter Vol 2",
    pdf: "/pdfs/vol2.pdf"
  },
  {
    label: "Newsletter Vol 3",
    pdf: "/pdfs/vol3.pdf"
  },
  {
    label: "Newsletter Vol 4",
    pdf: "/pdfs/vol4.pdf"
  },
  {
    label: "Newsletter Vol 5",
    pdf: "/pdfs/vol5.pdf"
  },
  {
    label: "Newsletter Vol 6",
    pdf: "/pdfs/vol6.pdf"
  }
];
const publicationMenuItems = [
  {
    label: "Loktak – The Atlas of Loktak",
    pdf: "/pdfs/Loktak-atlas.pdf"
  },
  {
    label: "Newsletter",
    items: newsletterLinks
  },
  {
    label: "Water Bird Report-2014",
    pdf: "/pdfs/WB-LDA.pdf"
  }
];

function getNavHref(item: string) {
  if (item === "Projects") {
    return "/projects/";
  }

  if (item === "News & Events") {
    return "/events/";
  }

  if (item === "Notifications") {
    return "/notifications/";
  }

  if (item === "Contact") {
    return "/#contact";
  }

  return `/#${item.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [wetlandOpen, setWetlandOpen] = useState(false);
  const [actsOpen, setActsOpen] = useState(false);
  const [publicationsOpen, setPublicationsOpen] = useState(false);
  const [newsletterOpen, setNewsletterOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#08171D66] text-white shadow-lg backdrop-blur-[14px]">
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

            if (item === "About Loktak") {
              return (
                <div key={item} className="relative">
                  <button
                    type="button"
                    className={`inline-flex items-center gap-2 whitespace-nowrap border-b transition hover:text-white ${
                      aboutOpen ? "border-white text-white" : "border-transparent"
                    }`}
                    onClick={() => {
                      setAboutOpen((value) => !value);
                      setWetlandOpen(false);
                      setActsOpen(false);
                      setPublicationsOpen(false);
                      setNewsletterOpen(false);
                    }}
                    aria-expanded={aboutOpen}
                  >
                    {item}
                    <ChevronDown size={14} strokeWidth={2.5} />
                  </button>

                  {aboutOpen ? (
                    <div className="absolute left-1/2 top-12 w-[200px] -translate-x-1/2 rounded-xl bg-[#08171D]/90 px-5 py-4 font-sans text-[12px] font-medium leading-[13.84px] tracking-normal text-white shadow-[0_16px_34px_rgba(0,0,0,0.28)] backdrop-blur-[14px]">
                      {aboutLinks.map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          className="block rounded-md px-1 py-1.5 transition hover:text-gold"
                          onClick={() => setAboutOpen(false)}
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  ) : null}
                </div>
              );
            }

            if (item === "Wetland Complex") {
              return (
                <div key={item} className="relative">
                  <button
                    type="button"
                    className={`inline-flex items-center gap-2 whitespace-nowrap border-b transition hover:text-white ${
                      wetlandOpen ? "border-white text-white" : "border-transparent"
                    }`}
                    onClick={() => {
                      setWetlandOpen((value) => !value);
                      setAboutOpen(false);
                      setActsOpen(false);
                      setPublicationsOpen(false);
                      setNewsletterOpen(false);
                    }}
                    aria-expanded={wetlandOpen}
                  >
                    {item}
                    <ChevronDown size={14} strokeWidth={2.5} />
                  </button>

                  {wetlandOpen ? (
                    <div className="absolute left-1/2 top-12 w-[236px] -translate-x-1/2 rounded-xl bg-[#08171D]/90 px-5 py-4 font-sans text-[12px] font-medium leading-[13.84px] tracking-normal text-white shadow-[0_16px_34px_rgba(0,0,0,0.28)] backdrop-blur-[14px]">
                      {wetlandComplexLinks.map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          className="block rounded-md px-1 py-1.5 transition hover:text-gold"
                          onClick={() => setWetlandOpen(false)}
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  ) : null}
                </div>
              );
            }

            if (item === "Acts & Rules") {
              return (
                <div key={item} className="relative">
                  <button
                    type="button"
                    className={`inline-flex items-center gap-2 whitespace-nowrap border-b transition hover:text-white ${
                      actsOpen ? "border-white text-white" : "border-transparent"
                    }`}
                    onClick={() => {
                      setActsOpen((value) => !value);
                      setAboutOpen(false);
                      setWetlandOpen(false);
                      setPublicationsOpen(false);
                      setNewsletterOpen(false);
                    }}
                    aria-expanded={actsOpen}
                  >
                    {item}
                    <ChevronDown size={14} strokeWidth={2.5} />
                  </button>

                  {actsOpen ? (
                    <div className="absolute left-1/2 top-12 w-[420px] -translate-x-1/2 rounded-xl bg-[#08171D]/90 px-6 py-5 font-sans text-[12px] font-medium leading-[13.84px] tracking-normal text-white shadow-[0_16px_34px_rgba(0,0,0,0.28)] backdrop-blur-[14px]">
                      {actsAndRulesLinks.map((link) => (
                        <a
                          key={link.label}
                          href={link.pdf}
                          target="_blank"
                          rel="noreferrer"
                          className="block rounded-md px-1 py-2 font-bold leading-snug transition hover:text-gold"
                          onClick={() => setActsOpen(false)}
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  ) : null}
                </div>
              );
            }

            if (item === "Publications") {
              return (
                <div key={item} className="relative">
                  <button
                    type="button"
                    className={`inline-flex items-center gap-2 whitespace-nowrap border-b transition hover:text-white ${
                      publicationsOpen ? "border-white text-white" : "border-transparent"
                    }`}
                    onClick={() => {
                      setPublicationsOpen((value) => !value);
                      setNewsletterOpen(false);
                      setAboutOpen(false);
                      setWetlandOpen(false);
                      setActsOpen(false);
                    }}
                    aria-expanded={publicationsOpen}
                  >
                    {item}
                    <ChevronDown size={14} strokeWidth={2.5} />
                  </button>

                  {publicationsOpen ? (
                    <div className="absolute left-1/2 top-12 w-[288px] -translate-x-1/2 rounded-xl bg-[#08171D]/90 px-5 py-4 font-sans text-[12px] font-medium leading-[13.84px] tracking-normal text-white shadow-[0_16px_34px_rgba(0,0,0,0.28)] backdrop-blur-[14px] transition duration-200">
                      <div className="grid gap-2">
                        <a
                          href={publicationMenuItems[0].pdf}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block rounded-md px-1 py-1.5 font-bold transition hover:text-gold"
                          onClick={() => {
                            setPublicationsOpen(false);
                            setNewsletterOpen(false);
                          }}
                        >
                          {publicationMenuItems[0].label}
                        </a>

                        <div className="relative">
                          <button
                            type="button"
                            className="flex w-full items-center justify-between rounded-md px-1 py-1.5 text-left font-bold transition hover:text-gold"
                            onClick={() => setNewsletterOpen((value) => !value)}
                            aria-expanded={newsletterOpen}
                          >
                            {publicationMenuItems[1].label}
                            <ChevronDown size={14} strokeWidth={2.5} className="-rotate-90" />
                          </button>
                          {newsletterOpen ? (
                            <div className="absolute left-full top-0 ml-3 w-[220px] rounded-xl bg-[#08171D]/90 px-5 py-4 text-white shadow-[0_16px_34px_rgba(0,0,0,0.28)] backdrop-blur-[14px] transition duration-200">
                              {newsletterLinks.map((link) => (
                                <a
                                  key={link.label}
                                  href={link.pdf}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="block rounded-md py-1 font-bold transition hover:text-gold"
                                  onClick={() => {
                                    setPublicationsOpen(false);
                                    setNewsletterOpen(false);
                                  }}
                                >
                                  {link.label}
                                </a>
                              ))}
                            </div>
                          ) : null}
                        </div>

                        <a
                          href={publicationMenuItems[2].pdf}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block rounded-md px-1 py-1.5 font-bold transition hover:text-gold"
                          onClick={() => {
                            setPublicationsOpen(false);
                            setNewsletterOpen(false);
                          }}
                        >
                          {publicationMenuItems[2].label}
                        </a>
                      </div>
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
            {navItems.map((item) => {
              if (item === "About Loktak") {
                return (
                  <div key={item}>
                    <button
                      type="button"
                      className="flex w-full items-center justify-between rounded-md px-3 py-2 text-left transition hover:bg-white/8 hover:text-gold"
                      onClick={() => {
                        setAboutOpen((value) => !value);
                        setWetlandOpen(false);
                        setActsOpen(false);
                        setPublicationsOpen(false);
                        setNewsletterOpen(false);
                      }}
                      aria-expanded={aboutOpen}
                    >
                      {item}
                      <ChevronDown
                        size={14}
                        strokeWidth={2.5}
                        className={`transition ${aboutOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    {aboutOpen ? (
                      <div className="ml-3 grid gap-1 border-l border-white/10 pl-3">
                        {aboutLinks.map((link) => (
                          <a
                            key={link.label}
                            href={link.href}
                            className="rounded-md px-3 py-2 text-white/70 transition hover:bg-white/8 hover:text-gold"
                            onClick={() => {
                              setAboutOpen(false);
                              setOpen(false);
                            }}
                          >
                            {link.label}
                          </a>
                        ))}
                      </div>
                    ) : null}
                  </div>
                );
              }

              if (item === "Wetland Complex") {
                return (
                  <div key={item}>
                    <button
                      type="button"
                      className="flex w-full items-center justify-between rounded-md px-3 py-2 text-left transition hover:bg-white/8 hover:text-gold"
                      onClick={() => {
                        setWetlandOpen((value) => !value);
                        setAboutOpen(false);
                        setActsOpen(false);
                        setPublicationsOpen(false);
                        setNewsletterOpen(false);
                      }}
                      aria-expanded={wetlandOpen}
                    >
                      {item}
                      <ChevronDown
                        size={14}
                        strokeWidth={2.5}
                        className={`transition ${wetlandOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    {wetlandOpen ? (
                      <div className="ml-3 grid gap-1 border-l border-white/10 pl-3">
                        {wetlandComplexLinks.map((link) => (
                          <a
                            key={link.label}
                            href={link.href}
                            className="rounded-md px-3 py-2 text-white/70 transition hover:bg-white/8 hover:text-gold"
                            onClick={() => {
                              setWetlandOpen(false);
                              setOpen(false);
                            }}
                          >
                            {link.label}
                          </a>
                        ))}
                      </div>
                    ) : null}
                  </div>
                );
              }

              if (item === "Acts & Rules") {
                return (
                  <div key={item}>
                    <button
                      type="button"
                      className="flex w-full items-center justify-between rounded-md px-3 py-2 text-left transition hover:bg-white/8 hover:text-gold"
                      onClick={() => {
                        setActsOpen((value) => !value);
                        setAboutOpen(false);
                        setWetlandOpen(false);
                        setPublicationsOpen(false);
                        setNewsletterOpen(false);
                      }}
                      aria-expanded={actsOpen}
                    >
                      {item}
                      <ChevronDown
                        size={14}
                        strokeWidth={2.5}
                        className={`transition ${actsOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    {actsOpen ? (
                      <div className="ml-3 grid gap-1 border-l border-white/10 pl-3">
                        {actsAndRulesLinks.map((link) => (
                          <a
                            key={link.label}
                            href={link.pdf}
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-md px-3 py-2 text-white/70 transition hover:bg-white/8 hover:text-gold"
                            onClick={() => {
                              setActsOpen(false);
                              setOpen(false);
                            }}
                          >
                            {link.label}
                          </a>
                        ))}
                      </div>
                    ) : null}
                  </div>
                );
              }

              if (item === "Publications") {
                return (
                  <div key={item}>
                    <button
                      type="button"
                      className="flex w-full items-center justify-between rounded-md px-3 py-2 text-left transition hover:bg-white/8 hover:text-gold"
                      onClick={() => {
                        setPublicationsOpen((value) => !value);
                        setNewsletterOpen(false);
                        setAboutOpen(false);
                        setWetlandOpen(false);
                        setActsOpen(false);
                      }}
                      aria-expanded={publicationsOpen}
                    >
                      {item}
                      <ChevronDown
                        size={14}
                        strokeWidth={2.5}
                        className={`transition ${publicationsOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    {publicationsOpen ? (
                      <div className="ml-3 grid gap-1 border-l border-white/10 pl-3">
                        <a
                          href={publicationMenuItems[0].pdf}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-md px-3 py-2 font-bold text-white transition hover:bg-white/8 hover:text-gold"
                          onClick={() => setOpen(false)}
                        >
                          {publicationMenuItems[0].label}
                        </a>

                        <div>
                          <button
                            type="button"
                            className="flex w-full items-center justify-between rounded-md px-3 py-2 text-left font-bold text-white transition hover:bg-white/8 hover:text-gold"
                            onClick={() => setNewsletterOpen((value) => !value)}
                            aria-expanded={newsletterOpen}
                          >
                            {publicationMenuItems[1].label}
                            <ChevronDown
                              size={14}
                              strokeWidth={2.5}
                              className={`transition ${newsletterOpen ? "rotate-180" : ""}`}
                            />
                          </button>
                          {newsletterOpen ? (
                            <div className="ml-3 grid gap-1 border-l border-white/10 pl-3">
                              {newsletterLinks.map((link) => (
                                <a
                                  key={link.label}
                                  href={link.pdf}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="rounded-md px-3 py-2 font-bold text-white transition hover:bg-white/8 hover:text-gold"
                                  onClick={() => setOpen(false)}
                                >
                                  {link.label}
                                </a>
                              ))}
                            </div>
                          ) : null}
                        </div>

                        <a
                          href={publicationMenuItems[2].pdf}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-md px-3 py-2 font-bold text-white transition hover:bg-white/8 hover:text-gold"
                          onClick={() => setOpen(false)}
                        >
                          {publicationMenuItems[2].label}
                        </a>
                      </div>
                    ) : null}
                  </div>
                );
              }

              return (
                <a
                  key={item}
                  href={getNavHref(item)}
                  className="rounded-md px-3 py-2 transition hover:bg-white/8 hover:text-gold"
                  onClick={() => setOpen(false)}
                >
                  {item}
                </a>
              );
            })}
          </div>
        </div>
      ) : null}
    </header>
  );
}
