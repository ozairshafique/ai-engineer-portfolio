"use client";

import { useEffect, useState } from "react";

interface Project {
  _id: string;
  title: string;
  description: string;
  tags: string[];
  metrics?: string;
  githubLink?: string;
  demoUrl?: string;
  featured: boolean;
  order: number;
}

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/projects")
      .then((r) => r.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <main className="min-h-screen">
      <div className="max-w-5xl mx-auto px-6 pt-28 pb-12">
        <p className="text-xs text-white/30 uppercase tracking-widest mb-2">
          Portfolio
        </p>
        <h1 className="text-3xl font-bold mb-2">Projects</h1>
        <p className="text-white/50 text-sm">
          {projects.length} projects · ML systems, NLP pipelines, MLOps
          infrastructure
        </p>
      </div>

      <section className="max-w-5xl mx-auto px-6 pb-20">
        {loading ? (
          <div className="text-center py-20 text-sm text-white/30">
            Loading projects...
          </div>
        ) : projects.length === 0 ? (
          <div className="text-center py-20 text-sm text-white/30">
            No projects yet
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {projects.map((project) => {
              const isExpanded = expanded === project._id;
              return (
                <div
                  key={project._id}
                  className={`border rounded-xl transition-all duration-300 ${
                    isExpanded
                      ? "border-emerald-500/30 bg-emerald-500/[0.03]"
                      : "border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/5"
                  }`}
                >
                  {/* Always visible — click to expand */}
                  <div
                    className="p-6 cursor-pointer"
                    onClick={() => setExpanded(isExpanded ? null : project._id)}
                  >
                    {/* Title row */}
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div className="flex items-center gap-3 flex-wrap">
                        <h2 className="text-base font-medium">
                          {project.title}
                        </h2>
                        {project.featured && (
                          <span className="px-2 py-0.5 text-xs text-emerald-400 bg-emerald-500/15 rounded-full border border-emerald-500/20">
                            featured
                          </span>
                        )}
                      </div>
                      <span
                        className={`text-white/30 text-sm transition-transform duration-300 flex-shrink-0 ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                      >
                        ↓
                      </span>
                    </div>

                    {/* Short description */}
                    <p
                      className={`text-sm text-white/50 leading-relaxed mb-3 ${
                        isExpanded ? "" : "line-clamp-2"
                      }`}
                    >
                      {project.description}
                    </p>

                    {/* First 4 tags — collapsed only */}
                    {!isExpanded && (
                      <div className="flex flex-wrap gap-2 mb-2">
                        {project.tags.slice(0, 4).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 text-xs rounded-md border border-white/10 bg-white/5 text-white/50"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 4 && (
                          <span className="px-2 py-0.5 text-xs rounded-md border border-white/10 bg-white/5 text-white/30">
                            +{project.tags.length - 4} more
                          </span>
                        )}
                      </div>
                    )}

                    {/* Hint when collapsed */}
                    {!isExpanded && (
                      <p className="text-xs text-white/20 mt-1">
                        Click to see full details →
                      </p>
                    )}
                  </div>

                  {/* Expanded content */}
                  {isExpanded && (
                    <div className="px-6 pb-6 border-t border-white/10 pt-5">
                      {/* <p className="text-sm text-white/60 leading-relaxed mb-4">
                        {project.description}
                      </p> */}

                      {project.metrics && (
                        <div className="p-3 bg-emerald-500/5 border border-emerald-500/10 rounded-lg mb-4">
                          <p className="text-xs text-white/30 uppercase tracking-widest mb-1">
                            Metrics
                          </p>
                          <p className="text-sm text-emerald-400 font-mono">
                            {project.metrics}
                          </p>
                        </div>
                      )}

                      <div className="mb-4">
                        <p className="text-xs text-white/30 uppercase tracking-widest mb-2">
                          Tech Stack
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-0.5 text-xs rounded-md border border-white/10 bg-white/5 text-white/50"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-3">
                        {project.githubLink && (
                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="text-xs text-white/40 hover:text-white border border-white/10 px-3 py-1.5 rounded-md hover:border-white/30 transition-colors"
                          >
                            View on GitHub →
                          </a>
                        )}
                        {project.demoUrl && (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="text-xs text-emerald-400 hover:text-emerald-300 border border-emerald-500/20 px-3 py-1.5 rounded-md hover:border-emerald-500/40 transition-colors"
                          >
                            Live demo →
                          </a>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </section>
    </main>
  );
}
