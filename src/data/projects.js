export const projectFilters = ['All', 'Residential', 'Commercial', 'Interior', 'Waterproofing', 'Custom']

/** Real project case studies will replace this list when photography is ready. */
export const projects = []

export const projectsUpdatingSoon = true

export function getProjectBySlug(slug) {
  return projects.find((item) => item.slug === slug) ?? null
}

export function getProjectsByFilter(filter) {
  if (!filter || filter === 'All') return projects
  return projects.filter((item) => item.tags.includes(filter) || item.category === filter)
}
