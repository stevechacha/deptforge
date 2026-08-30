import { Link, useParams } from 'react-router-dom'
import { RoleModules } from '../components/RoleModules'
import { RoleSidebar } from '../components/RoleSidebar'
import { COURSES } from '../data/curricula'
import { ROLE_INDEX } from '../lib/catalog'
import { NotFoundPage } from './NotFoundPage'

export function RolePage() {
  const { roleId } = useParams()
  const role = roleId ? ROLE_INDEX[roleId] : undefined
  if (!role) return <NotFoundPage />

  const relatedCourses = COURSES.filter(
    (course) => course.relatedRoleId === role.id,
  )

  return (
    <div className="wrap section py-16">
      <div className="crumbs">
        <Link to="/">Map</Link> /{' '}
        <Link to={`/departments/${role.deptId}`}>{role.deptName}</Link> /{' '}
        {role.name}
      </div>
      <div className="mb-2">
        <span
          className="mb-3.5 block font-mono text-[11px] uppercase tracking-[0.08em]"
          style={{ color: role.deptColor }}
        >
          {role.deptName}
          {role.tag ? ` · ${role.tag}` : ''}
        </span>
        <h1 className="mb-3.5 mt-0 max-w-[760px] text-4xl font-semibold">
          {role.name}
        </h1>
        <p className="m-0 max-w-[680px] text-[17px] text-ink-muted">{role.blurb}</p>
      </div>

      {relatedCourses.length > 0 && (
        <div className="pathway-strip mt-8">
          <p>
            <strong>Want the full curriculum?</strong> We have a downloadable,
            level-by-level course outline for this path — topics, projects, and
            JSON/Markdown exports.
          </p>
          <Link to={`/courses/${relatedCourses[0].id}`} className="btn ghost">
            View {relatedCourses[0].title} →
          </Link>
        </div>
      )}

      <div className="role-grid mt-11 grid grid-cols-1 items-start gap-12 md:grid-cols-[2fr_1fr]">
        <div>
          <RoleModules outline={role.outline} />
        </div>
        <RoleSidebar role={role} />
      </div>
    </div>
  )
}
