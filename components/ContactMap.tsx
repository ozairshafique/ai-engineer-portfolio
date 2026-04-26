export default function ContactMap() {
  return (
    <div className="border-t border-white/10 pt-6">
      <p className="text-xs text-white/30 uppercase tracking-widest mb-4">
        Location
      </p>
      <div className="rounded-xl overflow-hidden border border-white/10 h-48">
        <iframe
          src="https://www.openstreetmap.org/export/embed.html?bbox=16.8%2C41.1%2C16.9%2C41.2&layer=mapnik&marker=41.1171%2C16.8719"
          width="100%"
          height="100%"
          style={{}}
          loading="lazy"
        />
      </div>
      <p className="text-xs text-white/30 mt-2 text-center">
        Bari, Puglia, Italy 🇮🇹
      </p>
    </div>
  );
}
