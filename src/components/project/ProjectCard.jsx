import { Link } from 'react-router-dom'

export function ProjectCard({ project }) {
  return (
    <article className="group">
      <Link to={`/projects/${project.slug}`} className="block">
        <div className="overflow-hidden rounded-card bg-surface shadow-card">
          <div className="aspect-[5/4]">
            <img
              src={project.image}
              alt={`${project.name} in ${project.location}`}
              className="img-cover transition-transform duration-700 group-hover:scale-[1.04]"
            />
          </div>
        </div>
        <div className="flex items-start justify-between gap-4 pt-5">
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-muted">
              {project.category} · {project.location}
            </p>
            <h3 className="mt-2 text-xl font-medium tracking-[-0.03em]">{project.name}</h3>
            <p className="mt-2 max-w-md text-sm leading-6 text-muted">{project.short}</p>
          </div>
        </div>
      </Link>
    </article>
  )
}
