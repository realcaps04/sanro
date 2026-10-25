import { Navigate } from 'react-router-dom'

/** Project case studies are paused until real photography is ready. */
export default function ProjectDetailsPage() {
  return <Navigate to="/projects" replace />
}
