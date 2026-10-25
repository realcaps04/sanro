import { Seo } from '../../components/ui/Seo'
import { Container } from '../../components/ui/Container'
import { CtaBand } from '../../components/sections/CtaBand'
import { ProjectsUpdatingSoon } from '../../components/project/ProjectsUpdatingSoon'

export default function ProjectsPage() {
  return (
    <>
      <Seo
        title="SANRO Projects | Updating Soon"
        description="SANRO project case studies are being updated with accurate photography from completed work across Kerala."
      />
      <section className="bg-white pt-28 pb-16 lg:pt-32 lg:pb-20">
        <Container>
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-accent">Work</p>
          <h1 className="mt-4 text-4xl font-medium tracking-[-0.04em] sm:text-5xl">
            <span className="text-accent">SANRO</span> Projects
          </h1>
          <p className="mt-5 max-w-xl text-[15px] leading-7 text-muted">
            Residential, commercial and waterproofing case studies — with real site photography — will appear here soon.
          </p>
        </Container>
      </section>
      <section className="bg-white pb-16 lg:pb-24">
        <Container>
          <ProjectsUpdatingSoon />
        </Container>
      </section>
      <CtaBand />
    </>
  )
}
