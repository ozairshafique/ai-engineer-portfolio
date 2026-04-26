export default function Footer() {
  return (
    <footer className="border-t border-white mt-20">
      <div className="max-w-5xl mx-auto px-6 py-8 flex items-center justify-between text-xs text-white">
        <span>
          © {new Date().getFullYear()} Uzair Shafique · AI Engineer · NLP · RAG
          · MLOps
        </span>

        <span className="text-white/90 text-center md:text-right">
          Building production-grade AI systems · Open to EU & remote roles
        </span>
      </div>
    </footer>
  );
}
