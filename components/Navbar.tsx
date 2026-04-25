import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#1a1a1a]/10 backdrop-blur-md">
      <div className="max-w-5xl mx-auto flex items-center justify-between py-4 px-6">
        <Link
          href="/"
          className="font-mono text-sm text-white/60 hover:text-white transition-colors"
        >
          AI Engineer Portfolio
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
