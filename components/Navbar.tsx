"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header
      className="sticky top-0 z-20 
                       bg-slate-950/50 backdrop-blur-xl
                       border-b border-slate-800 shadow-lg"
    >
      <div
        className="mx-auto max-w-6xl px-4 sm:px-8 md:px-10 lg:px-12 
                      h-16 flex items-center justify-between"
      >
        {}
        <Link href="/">
          <span
            className="text-lg font-semibold tracking-tight 
                           bg-gradient-to-r from-cyan-400 via-blue-400 to-fuchsia-400
                           text-transparent bg-clip-text"
          >
            Huy.dev
          </span>
        </Link>

        {}
        <nav className="flex items-center gap-3 sm:gap-4 text-sm">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`
                  px-4 py-1.5 rounded-full transition-all duration-200
                  ${
                    active
                      ? "bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400 text-slate-950 shadow-md shadow-cyan-400/30 font-medium"
                      : "text-slate-300 hover:text-white hover:bg-slate-800/70"
                  }
                `}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
