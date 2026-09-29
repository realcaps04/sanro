import { Link, useParams } from 'react-router-dom'
import { Seo } from '../../components/ui/Seo'
import { Container } from '../../components/ui/Container'
import { Button } from '../../components/ui/Button'
import { CtaBand } from '../../components/sections/CtaBand'
import { getProjectBySlug, projects } from '../../data/projects'
import { ProjectCard } from '../../components/project/ProjectCard'
import { useQuote } from '../../context/QuoteContext'

export default function ProjectDetailsPage() {
  const { slug } = useParams()
  const project = getProjectBySlug(slug)
  const { openQuote } = useQuote()
  const others = projects.filter((item) => item.slug !== slug).slice(0, 2)

  if (!project) {
    return (
      <section className="px-5 pt-32 pb-24 text-center">
        <h1 className="text-3xl font-medium">Project not found</h1>
        <Link to="/projects" className="mt-6 inline-block text-sm uppercase tracking-[0.16em]">
          Back to projects
        </Link>
      </section>
    )
  }

  return (
    <>
      <Seo title={`${project.name} | SANRO Projects`} description={project.short} />
      <section className="bg-white pt-28 pb-16 lg:pt-32">
        <Container>
          <p className="text-[11px] uppercase tracking-[0.22em] text-muted">
            {project.category} · {project.location} · {project.year}
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-medium tracking-[-0.04em] sm:text-5xl">{project.name}</h1>
          <p className="mt-5 max-w-2xl text-[15px] leading-7 text-muted">{project.description}</p>
        </Container>
      </section>
      <section className="pb-20">
        <Container className="space-y-4">
          <div className="overflow-hidden rounded-card bg-surface shadow-card">
            <div className="aspect-[16/9]">
              <img src={project.images[0]} alt={project.name} className="img-cover" />
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {project.images.slice(1).map((src) => (
              <div key={src} className="overflow-hidden rounded-card bg-surface shadow-card">
                <div className="aspect-[5/4]">
                  <img src={src} alt="" className="img-cover" />
                </div>
              </div>
            ))}
          </div>
          <div className="pt-8">
            <Button onClick={() => openQuote()}>Request a Similar Project</Button>
          </div>
        </Container>
      </section>
      {others.length ? (
        <section className="bg-white py-16">
          <Container>
            <h2 className="mb-10 text-2xl font-medium">More projects</h2>
            <div className="grid gap-10 md:grid-cols-2">
              {others.map((item) => (
                <ProjectCard key={item.slug} project={item} />
              ))}
            </div>
          </Container>
        </section>
      ) : null}
      <CtaBand />
    </>
  )
}
