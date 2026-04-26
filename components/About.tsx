const stats = [
  { label: "Degree", value: "MSc Computer Science (AI)" },
  { label: "University", value: "University of Bari" },
  { label: "Graduation", value: "2025" },
  { label: "Location", value: "Bari, Italy 🇮🇹" },
  { label: "Languages", value: "English, Italian, Urdu" },
  { label: "Status", value: "Open to Work", highlight: true },
  { label: "Permit", value: "EU Residence Permit  ✓" },
  { label: "Available", value: "EU + Remote" },
];

const achievements = [
  { metric: "F1: 0.85", label: "Sentiment Analysis API" },
  { metric: "ROC-AUC: 0.96", label: "NLP Classifier" },
  { metric: "End-to-end", label: "MLOps Pipeline built" },
  { metric: "30%", label: "Reduction in manual effort" },
];

export default function About() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20 border-t border-white/20">
      <p
        className="text-xs text-white/30 uppercase tracking-widest mb-6"
        id="about"
      >
        About
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="flex flex-col gap-6">
          <p className="text-white/70 text-sm ">
            AI & Backend Engineer with 3+ years of experience building scalable
            REST APIs and production-grade ML systems. Specialized in NLP, RAG,
            and MLOps with hands-on experience designing end-to-end ML pipelines
            and deploying real-time inference systems.
          </p>
          <p className="text-white/70 text-sm leading-relaxed">
            Completed AI internship at{" "}
            <span className="text-white">Asclepyus </span>
            in collaboration with the University of Bari, developing a
            privacy-preserving semantic search system for medical datasets using
            FastAPI, MongoDB Atlas, and Cohere API with HNSW vector indexing.
          </p>

          <p className="text-white/70 text-sm leading-relaxed">
            {" "}
            Built a full MLOps pipeline using MLflow, DVC, Docker, and
            Prometheus for the Crop Classification project — including CI/CD
            with GitHub Actions, data drift detection with Alibi Detect, and
            load testing with Locust. Pylint score of 8.6/10.
          </p>

          {/* Left column with stats */}
          <div className="grid grid-cols-2 gap-3 ">
            {achievements.map((achievement) => (
              <div
                key={achievement.metric}
                className="p-3 border border-white/10 bg-white/[0.06]"
              >
                <div className="font-mono text-sm text-emerald-400 font-medium mb-1">
                  {achievement.metric}
                </div>
                <div className="text-white/50 text-xs">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right column with stats */}
        <div className="flex flex-col gap-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex border-b justify-between text-sm border-white/10 last:border-0 pb-3 "
            >
              <span className="text-white/50 ">{stat.label}</span>
              <span
                className={
                  stat.highlight
                    ? "text-emerald-400 font-medium"
                    : "text-white/70"
                }
              >
                {stat.value}
              </span>
            </div>
          ))}
          {/* Buttons */}
          <div className="flex flex-col gap-3 mt-4">
            <a
              href="mailto:uzairi_11@hotmail.com"
              className="inline-flex items-center font-medium justify-center px-5 py-2.5 rounded-lg text-black text-sm bg-white hover:bg-white/90 transition-colors"
            >
              Get in touch →
            </a>
            <a
              href="https://drive.google.com/file/d/12rEBAnm8RFxc00InNCdLkX3mdQoNkmLL/view?usp=sharing"
              target="_blank"
              className="inline-flex text-sm font-medium items-center px-5 py-2.5 rounded-lg border bordre-white/20 justify-center hover:border-white/90 text-white/70 hover:text-white transition-colors"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
