import connectDB from "@/lib/mongodb";
import Project from "@/lib/models/Project";

async function getProjects() {
  try {
    await connectDB();
    const projects = await Project.find({})
      .sort({ order: 1, createdAt: -1 })
      .lean();
    return JSON.parse(JSON.stringify(projects));
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
}

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <main className="min-h-screen">
      {/* Header */}
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

      {/* Projects */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        {projects.length === 0 ? (
          <div className="text-center py-20 text-sm text-white/30">
            No projects yet — add them via the admin page
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {projects.map((project: any) => (
              <div
                key={project._id}
                className="border border-white/10 rounded-xl p-6 bg-white/[0.02] hover:bg-white/5 hover:border-white/20 transition-all"
              >
                {/* Title row */}
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex items-center gap-3">
                    <h2 className="text-base font-medium">{project.title}</h2>
                    {project.featured && (
                      <span className="px-2 py-0.5 text-xs text-emerald-400 bg-emerald-500/15 rounded-full border border-emerald-500/20">
                        featured
                      </span>
                    )}
                  </div>
                  {/* Links */}
                  <div className="flex gap-3 flex-shrink-0">
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-white/40 hover:text-white transition-colors border border-white/10 px-3 py-1 rounded-md hover:border-white/30"
                      >
                        GitHub →
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-emerald-400 hover:text-emerald-300 transition-colors border border-emerald-500/20 px-3 py-1 rounded-md hover:border-emerald-500/40"
                      >
                        Live demo →
                      </a>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-white/60 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Metrics */}
                {project.metrics && (
                  <p className="text-xs text-emerald-400 font-mono mb-4">
                    {project.metrics}
                  </p>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-xs rounded-md border border-white/10 bg-white/5 text-white/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
