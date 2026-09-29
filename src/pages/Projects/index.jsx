import { useMemo, useState } from 'react'
import { Seo } from '../../components/ui/Seo'
import { Container } from '../../components/ui/Container'
import { ProjectCard } from '../../components/project/ProjectCard'
import { ProjectFilter } from '../../components/project/ProjectFilter'
import { CtaBand } from '../../components/sections/CtaBand'
import { getProjectsByFilter, projectFilters } from '../../data/projects'

export default function ProjectsPage() {
  const [filter, setFilter] = useState('All')
  const list = useMemo(() => getProjectsByFilter(filter), [filter])

  return (
    <>
      <Seo
        title="SANRO Projects | Residential, Commercial and Waterproofing"
        description="Completed SANRO work across residential interiors, commercial spaces, custom doors and waterproofing in Kerala."
      />
      <section className="bg-surface pt-28 pb-16 lg:pt-32 lg:pb-20">
        <Container>
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-accent">Work</p>
          <h1 className="mt-4 text-4xl font-medium tracking-[-0.04em] sm:text-5xl">SANRO Projects</h1>
          <p className="mt-5 max-w-xl text-[15px] leading-7 text-muted">
            Real residential and commercial work — interior fibre doors, custom manufacturing and waterproofing.
          </p>
          <div className="mt-10">
            <ProjectFilter filters={projectFilters} active={filter} onChange={setFilter} />
          </div>
        </Container>
      </section>
      <section className="bg-white py-16 lg:py-24">
        <Container>
          <div className="grid gap-x-8 gap-y-14 md:grid-cols-2">
            {list.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </Container>
      </section>
      <CtaBand />
    </>
  )
}
