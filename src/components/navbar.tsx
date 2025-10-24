"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/work", label: "Work" },
    { href: "/services", label: "Services" },
  ];

  const pathname = usePathname();

  return (
    <nav className="flex items-center justify-center gap-8 py-6 sticky top-6 z-50 bg-white/10 backdrop-blur-lg max-w-4xl mx-auto rounded-2xl my-10">
      {navLinks.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            className={` font-medium transition ${
              isActive ? "text-orange-500" : "text-white hover:text-orange-500"
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
