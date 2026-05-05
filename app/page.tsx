import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Contact from "@/components/Contacts";

const skills = [
  {
    category: "AI & Machine Learning",
    skills: [
      "Python",
      "RAG",
      "NLP",
      "Scikit-learn",
      "TensorFlow",
      "Pandas",
      "NumPy",
      "Hugging Face",
      "Cohere API",
      "Semantic Search",
    ],
  },

  {
    category: "Backend & APIs",
    skills: ["FastAPI", "REST APIs", "PostgreSQL", "MongoDB", "SQL", "NoSQL"],
  },
  {
    category: "MLOps & DevOps",
    skills: [
      "MLflow",
      "DVC",
      "Docker",
      "Kubernetes",
      "GitHub Actions",
      "CI/CD",
      "Alibi Detect",
      "Locust",
      "Great Expectations",
      "Pytest",
      "Pylint",
    ],
  },
  {
    category: "Monitoring & Cloud",
    skills: [
      "Prometheus",
      "Grafana",
      "AWS EC2",
      "AWS S3",
      "AWS Cloudwatch",
      "AWS IAM",
      "MongoDB Atlas",
      "Vercel",
    ],
  },
  {
    category: "Frontend & Tools",
    skills: ["Next.js", "TypeScript", "Tailwind CSS", "Git", "GitHub"],
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Experience />
      <section className="max-w-5xl mx-auto px-6 py-12 border-t white-border/50">
        <p className="text-xs text-white/40 uppercase tracking-widest mb-8">
          Tech Stack
        </p>
        <div className="flex flex-col gap-8">
          {skills.map((skill) => (
            <div key={skill.category} className="flex flex-col gap-3">
              <p className="text-xs text-white/40 font-medium">
                {skill.category}
              </p>
              <div className="flex flex-wrap gap-2 w-full">
                {skill.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm border border-white/50 rounded-md bg-white/5 text-white/60 hover:border-white/50 hover:text-white transition-colors cursor-pointer"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <Contact />
    </main>
  );
}
