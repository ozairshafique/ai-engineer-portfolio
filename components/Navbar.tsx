"use client";
import Link from "next/link";
import NavLinks from "./NavLinks";
import { useState } from "react";
import { link } from "fs";

function NeuralLogo() {
  return (
    <svg width="46" height="38" viewBox="0 0 38 32" fill="none">
      {/* Input layer */}
      <circle cx="3" cy="12" r="2" stroke="#10b981" strokeWidth="1.2" />
      <circle cx="3" cy="20" r="2" stroke="#10b981" strokeWidth="1.2" />
      {/* Hidden layer 1 */}
      <circle
        cx="13"
        cy="8"
        r="2"
        stroke="#10b981"
        strokeWidth="1.2"
        opacity="0.8"
      />
      <circle cx="13" cy="16" r="2.5" fill="#10b981" />
      <circle
        cx="13"
        cy="24"
        r="2"
        stroke="#10b981"
        strokeWidth="1.2"
        opacity="0.8"
      />
      {/* Hidden layer 2 */}
      <circle
        cx="25"
        cy="10"
        r="2"
        stroke="#10b981"
        strokeWidth="1.2"
        opacity="0.8"
      />
      <circle
        cx="25"
        cy="22"
        r="2"
        stroke="#10b981"
        strokeWidth="1.2"
        opacity="0.8"
      />
      {/* Output layer */}
      <circle cx="35" cy="16" r="2.5" fill="#10b981" opacity="0.6" />
      {/* Connections — input to hidden 1 */}
      <line
        x1="5"
        y1="12"
        x2="11"
        y2="8"
        stroke="#10b981"
        strokeWidth="0.7"
        opacity="0.35"
      />
      <line
        x1="5"
        y1="12"
        x2="11"
        y2="16"
        stroke="#10b981"
        strokeWidth="0.7"
        opacity="0.35"
      />
      <line
        x1="5"
        y1="12"
        x2="11"
        y2="24"
        stroke="#10b981"
        strokeWidth="0.7"
        opacity="0.35"
      />
      <line
        x1="5"
        y1="20"
        x2="11"
        y2="8"
        stroke="#10b981"
        strokeWidth="0.7"
        opacity="0.35"
      />
      <line
        x1="5"
        y1="20"
        x2="11"
        y2="16"
        stroke="#10b981"
        strokeWidth="0.7"
        opacity="0.35"
      />
      <line
        x1="5"
        y1="20"
        x2="11"
        y2="24"
        stroke="#10b981"
        strokeWidth="0.7"
        opacity="0.35"
      />
      {/* Connections — hidden 1 to hidden 2 */}
      <line
        x1="15"
        y1="8"
        x2="23"
        y2="10"
        stroke="#10b981"
        strokeWidth="0.7"
        opacity="0.35"
      />
      <line
        x1="15"
        y1="8"
        x2="23"
        y2="22"
        stroke="#10b981"
        strokeWidth="0.7"
        opacity="0.35"
      />
      <line
        x1="15.5"
        y1="16"
        x2="23"
        y2="10"
        stroke="#10b981"
        strokeWidth="0.7"
        opacity="0.35"
      />
      <line
        x1="15.5"
        y1="16"
        x2="23"
        y2="22"
        stroke="#10b981"
        strokeWidth="0.7"
        opacity="0.35"
      />
      <line
        x1="15"
        y1="24"
        x2="23"
        y2="10"
        stroke="#10b981"
        strokeWidth="0.7"
        opacity="0.35"
      />
      <line
        x1="15"
        y1="24"
        x2="23"
        y2="22"
        stroke="#10b981"
        strokeWidth="0.7"
        opacity="0.35"
      />
      {/* Connections — hidden 2 to output */}
      <line
        x1="27"
        y1="10"
        x2="32.5"
        y2="16"
        stroke="#10b981"
        strokeWidth="0.7"
        opacity="0.35"
      />
      <line
        x1="27"
        y1="22"
        x2="32.5"
        y2="16"
        stroke="#10b981"
        strokeWidth="0.7"
        opacity="0.35"
      />
    </svg>
  );
}
export default function Navbar() {
  const [display, setDisplay] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#1a1a1a]/10 backdrop-blur-md">
      <div className="max-w-5xl mx-auto flex items-center justify-between py-4 px-6">
        <Link href="/" className="flex items-center gap-3 group">
          <NeuralLogo />
          <div>
            <div className="text-sm font-semibold text-white group-hover:text-emerald-400 transition-colors font-mono">
              Uzair Shafique
            </div>
            <div className="text-xs text-emerald-500 font-mono">
              AI Engineer · MLOps · NLP · RAG
            </div>
          </div>
        </Link>
        <div className="hidden md:flex">
          <NavLinks />
        </div>
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setDisplay(!display)}
        >
          <span
            className={`w-5 h-0.5 bg-white/60 transition-all ${display ? "rotate-45 translate-y-2" : ""}`}
          ></span>
          <span
            className={`w-5 h-0.5 bg-white/60 transition-all ${display ? "opacity-0" : ""}`}
          ></span>
          <span
            className={`w-5 h-0.5 bg-white/60 transition-all ${display ? "-rotate-45 -translate-y-2" : ""}`}
          ></span>
        </button>
      </div>
      {/* Mobile menu */}
      {display && (
        <div className="md:hidden border-t border-white/10 bg-[#1a1a1a]/10 backdrop-blur-md">
          {[
            { href: "/", label: "Home" },
            { href: "/#about", label: "About" },
            { href: "/#experience", label: "Experience" },
            { href: "/projects", label: "Projects" },
            { href: "/#contact", label: "Contact" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-2 px-4 text-white/60 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
