import Link from "next/link";

function NeuralLogo() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <circle cx="6" cy="10" r="3" stroke="#10b981" strokeWidth="1.5" />
      <circle cx="6" cy="22" r="3" stroke="#10b981" strokeWidth="1.5" />
      <circle cx="16" cy="16" r="3" fill="#10b981" />
      <circle cx="26" cy="10" r="3" stroke="#10b981" strokeWidth="1.5" />
      <circle cx="26" cy="22" r="3" stroke="#10b981" strokeWidth="1.5" />
      <line
        x1="9"
        y1="11"
        x2="13"
        y2="15"
        stroke="#10b981"
        strokeWidth="1"
        opacity="0.5"
      />
      <line
        x1="9"
        y1="21"
        x2="13"
        y2="17"
        stroke="#10b981"
        strokeWidth="1"
        opacity="0.5"
      />
      <line
        x1="19"
        y1="15"
        x2="23"
        y2="11"
        stroke="#10b981"
        strokeWidth="1"
        opacity="0.5"
      />
      <line
        x1="19"
        y1="17"
        x2="23"
        y2="21"
        stroke="#10b981"
        strokeWidth="1"
        opacity="0.5"
      />
    </svg>
  );
}
export default function Navbar() {
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
              AI Engineer
            </div>
          </div>
        </Link>
        <div className="space-x-4 text-sm gap-6 text-white/60">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <Link href="/projects" className="hover:text-white transition-colors">
            Projects
          </Link>
          <Link
            href="mailto:uzairi_11@hotmail.com"
            className="hover:text-white transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
