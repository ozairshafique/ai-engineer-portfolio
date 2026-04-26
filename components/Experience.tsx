const experiences = [
  {
    role: "AI Engineer Intern",
    company: "Asclepyus SRL",
    location: "Bari, Italy",
    period: "Mar 2025 — Sep 2025",
    type: "Internship",
    description:
      "Developed a privacy-preserving RAG-based semantic search system for medical datasets. Built end-to-end ML pipeline including data preprocessing, embedding generation, and vector search using MongoDB Atlas and Cohere API.",
    achievements: [
      "Designed and implemented privacy-preserving semantic search for medical datasets",
      "Built end-to-end ML pipeline with embedding generation and HNSW vector indexing",
      "Developed FastAPI-based APIs for real-time semantic retrieval and inference",
      "Enhanced search performance using cosine similarity and embedding-based ranking",
    ],
    tags: [
      "RAG",
      "FastAPI",
      "MongoDB Atlas",
      "Cohere API",
      "NLP",
      "Vector Search",
    ],
    highlight: true,
  },
  {
    role: "Software Developer",
    company: "Burgsoft Technologies",
    location: "Karachi, Pakistan",
    period: "Sep 2018 — Feb 2021",
    type: "Full-time",
    description:
      "Developed scalable REST APIs using Python, significantly enhancing system performance. Automated data pipelines resulting in 30% reduction in manual effort.",
    achievements: [
      "Developed scalable REST APIs using Python — enhanced system performance",
      "Automated data pipelines — 30% reduction in manual effort",
      "Optimized database queries and backend performance",
    ],
    tags: ["Python", "REST API", "SQL", "Data Pipelines"],
    highlight: false,
  },
  {
    role: "Frontend Web Developer",
    company: "Pakish",
    location: "Karachi, Pakistan",
    period: "Mar 2018 — Sep 2018",
    type: "Full-time",
    description:
      "Developed responsive web applications utilizing React.js, HTML5, and CSS3.",
    achievements: [
      "Built responsive web applications with React.js, HTML5, CSS3",
      "Improved frontend performance and cross-browser compatibility",
    ],
    tags: ["React.js", "HTML5", "CSS3", "JavaScript"],
    highlight: false,
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="max-w-5xl mx-auto px-6 py-16 border-t border-white/10"
    >
      <p className="text-xs text-white/30 uppercase tracking-widest mb-10">
        Experience
      </p>

      <div className="flex flex-col gap-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`p-6 rounded-xl border transition-all ${
              exp.highlight
                ? "border-emerald-500/20 bg-emerald-500/[0.03]"
                : "border-white/10 bg-white/[0.02]"
            }`}
          >
            {/* Top row */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="text-base font-medium text-white">
                    {exp.role}
                  </h3>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full border ${
                      exp.highlight
                        ? "text-emerald-400 border-emerald-500/20 bg-emerald-500/10"
                        : "text-white/40 border-white/10"
                    }`}
                  >
                    {exp.type}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm text-white/50">
                  <span className="font-medium text-white/70">
                    {exp.company}
                  </span>
                  <span>·</span>
                  <span>{exp.location}</span>
                </div>
              </div>
              <span className="text-xs text-white/30 font-mono flex-shrink-0">
                {exp.period}
              </span>
            </div>

            {/* Description */}
            <p className="text-sm text-white/60 leading-relaxed mb-4">
              {exp.description}
            </p>

            {/* Achievements */}
            <ul className="flex flex-col gap-2 mb-4">
              {exp.achievements.map((achievement, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm text-white/50"
                >
                  <span className="text-emerald-500 mt-1 flex-shrink-0">→</span>
                  {achievement}
                </li>
              ))}
            </ul>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {exp.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 text-xs rounded-md border border-white/10 bg-white/5 text-white/40"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
