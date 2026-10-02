
"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const links: [string, string][] = [
  ["Home", "home"],
  ["About Me", "about"],
  ["Experience", "experience"],
  ["Skills", "skills"],
  ["Contact", "contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-pink/30 bg-paper/95 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <a
          href="#home"
          className="flex items-center gap-3"
        >
          <span className="grid h-10 w-10 place-items-center rounded-full bg-hotpink text-sm font-bold text-white">
            KM
          </span>
          <span className="text-base font-bold tracking-tight text-ink">
            Kristelle <span className="text-hotpink">Mumar.</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              className="text-sm font-medium text-ink/70 transition hover:text-hotpink"
            >
              {label}
            </a>
          ))}

          <a
            href="#contact"
            className="rounded-full bg-hotpink px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-ink"
          >
            Hire Me ↗
          </a>
        </div>

        <button
          className="rounded-full border border-pink/50 p-2 text-ink md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="flex flex-col gap-5 border-t border-pink/30 bg-paper px-6 py-6 md:hidden">
          {links.map(([label, id]) => (
            <a
              key={id}
              onClick={() => setOpen(false)}
              href={`#${id}`}
              className="text-base font-medium text-ink transition hover:text-hotpink"
            >
              {label}
            </a>
          ))}

          <a
            onClick={() => setOpen(false)}
            href="#contact"
            className="w-fit rounded-full bg-hotpink px-6 py-3 text-sm font-bold text-white"
          >
            Hire Me ↗
          </a>
        </div>
      )}
    </header>
  );
}