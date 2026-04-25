"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/#contact", label: "Contact" },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <div className="flex gap-6 text-sm">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`transition-colors hover:text-white ${
            pathname === link.href ? "text-white font-medium" : "text-white/50"
          }`}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}
