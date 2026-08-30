import { Link, useParams } from 'react-router-dom'
import { CurriculumDownload } from '../components/CurriculumDownload'
import { CurriculumModules } from '../components/CurriculumModules'
import { COURSE_INDEX } from '../lib/curriculum-catalog'
import { ROLE_INDEX } from '../lib/catalog'
import { NotFoundPage } from './NotFoundPage'

export function CoursePage() {
  const { courseId } = useParams()
  const course = courseId ? COURSE_INDEX[courseId] : undefined
  if (!course) return <NotFoundPage />

  const relatedRole = course.relatedRoleId
    ? ROLE_INDEX[course.relatedRoleId]
    : undefined

  return (
    <div className="wrap section py-16">
      <div className="crumbs">
        <Link to="/">Map</Link> / <Link to="/courses">Courses</Link> /{' '}
        {course.title}
      </div>
      <div className="mb-2">
        <span className="mb-3.5 block font-mono text-[11px] uppercase tracking-[0.08em] text-teal-bright">
          Curriculum · {course.levels.length} levels
        </span>
        <h1 className="mb-3.5 mt-0 max-w-[760px] text-4xl font-semibold">
          {course.title}
        </h1>
        <p className="m-0 max-w-[680px] text-[17px] text-ink-muted">
          {course.description}
        </p>
      </div>

      <div className="role-grid mt-11 grid grid-cols-1 items-start gap-12 md:grid-cols-[2fr_1fr]">
        <div>
          <CurriculumModules course={course} />
        </div>
        <div>
          <CurriculumDownload course={course} />
          <div className="side-box">
            <h4>Prerequisites</h4>
            <ul>
              {course.prerequisites.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="side-box">
            <h4>Tools Covered</h4>
            <div className="flex flex-wrap gap-[7px]">
              {course.tools.map((tool) => (
                <span key={tool} className="tool-chip">
                  {tool}
                </span>
              ))}
            </div>
          </div>
          {relatedRole && (
            <div className="connects-box">
              <h4>Related Role</h4>
              <p className="mb-3.5 mt-0 text-[12.5px] text-ink-dim">
                This curriculum supports the {relatedRole.name} career path
              </p>
              <Link
                to={`/roles/${relatedRole.id}`}
                className="connect-link"
              >
                <span className="text-[13.5px]">{relatedRole.name}</span>
                <span className="font-mono text-[10.5px] text-ink-dim">
                  {relatedRole.deptName.split(' ')[0].toUpperCase()}
                </span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
