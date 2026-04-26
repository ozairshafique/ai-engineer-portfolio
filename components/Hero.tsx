import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="max-w-5xl mx-auto px-6 pt-36 pb-20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left — text */}
        <div className="flex-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            Open to AI Engineer roles in Europe
          </div>
          <h1 className="text-5xl font-bold tracking-tight mb-4">
            Uzair Shafique
          </h1>
          <p className="text-2xl text-white/50 font-light mb-6">
            AI Engineer · MLOps · NLP · RAG
          </p>
          <p className="text-base text-white/60 max-w-xl leading-relaxed mb-10">
            I design and build production-grade AI systems and scalable backend
            services. From RAG pipelines and NLP models to full MLOps
            infrastructure, I focus on creating intelligent applications that
            are reliable, efficient, and ready for real-world use.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link
              href="/projects"
              className="px-5 py-2.5 bg-white text-black text-sm font-medium rounded-lg hover:bg-white/90 transition-colors"
            >
              View projects
            </Link>
            <a
              href="https://github.com/ozairshafique"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 border border-white/20 text-sm rounded-lg hover:border-white/40 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/uzair-shafique-97836810a"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 border border-white/20 text-sm rounded-lg hover:border-white/40 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Right — photo */}
        <div className="flex-shrink-0 flex flex-col items-center gap-4">
          <div className="relative w-52 h-52 rounded-full overflow-hidden border-2 border-emerald-500/30 ring-4 ring-emerald-500/10">
            <Image
              src="/photos1.png"
              alt="Ozair Shafique — AI Engineer"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            Open to work
          </div>
        </div>
      </div>
    </section>
  );
}
