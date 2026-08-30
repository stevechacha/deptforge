import { Link, useParams } from 'react-router-dom'
import { COURSES } from '../data/curricula'
import { DEPT_INDEX, ROLE_INDEX } from '../lib/catalog'
import { NotFoundPage } from './NotFoundPage'

export function DepartmentPage() {
  const { deptId } = useParams()
  const dept = deptId ? DEPT_INDEX[deptId] : undefined
  if (!dept) return <NotFoundPage />

  const deptCourses = COURSES.filter((course) => {
    const role = course.relatedRoleId
      ? ROLE_INDEX[course.relatedRoleId]
      : undefined
    return role?.deptId === dept.id
  })

  return (
    <div className="wrap section pb-6 pt-16">
      <div className="crumbs">
        <Link to="/">Map</Link> / <Link to="/departments">Departments</Link> /{' '}
        {dept.name}
      </div>
      <div className="mb-9 border-b border-border pb-8">
        <div className="mb-4 flex items-center gap-4">
          <div
            className="flex h-11 w-11 shrink-0 items-center justify-center border font-mono text-[13px]"
            style={{ color: dept.color, borderColor: `${dept.color}66` }}
          >
            {dept.icon}
          </div>
          <span className="tag-num">DEPARTMENT {dept.index}</span>
        </div>
        <h1 className="m-0 text-[32px] font-semibold">{dept.name}</h1>
        <p className="mt-3.5 max-w-[680px] text-[17px] text-ink-muted">
          {dept.purpose}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {dept.functions.map((fn) => (
            <span key={fn} className="func-chip">
              {fn}
            </span>
          ))}
        </div>
        {dept.toolsList ? (
          <div className="mt-2.5 flex flex-wrap gap-2">
            {dept.toolsList.map((tool) => (
              <span key={tool} className="tool-chip">
                {tool}
              </span>
            ))}
          </div>
        ) : null}
      </div>

      {deptCourses.length > 0 && (
        <div className="pathway-strip mb-11 mt-0">
          <p>
            <strong>Full curricula for this department.</strong> Level-by-level
            outlines you can download as PDF, Markdown, or JSON.
          </p>
          <div className="flex flex-wrap gap-3">
            {deptCourses.map((course) => (
              <Link
                key={course.id}
                to={`/courses/${course.id}`}
                className="btn ghost"
              >
                {course.title} →
              </Link>
            ))}
          </div>
        </div>
      )}

      <div className="mb-0 flex flex-wrap items-end justify-between gap-3.5">
        <h2 className="m-0 text-xl font-semibold">Roles in this department</h2>
        <span className="tag-num">{dept.roles.length} ROLES</span>
      </div>
      <div className="role-list">
        {dept.roles.map((role, i) => (
          <Link key={role.id} to={`/roles/${role.id}`} className="role-row">
            <div className="role-row-left flex items-baseline gap-[18px]">
              <span className="rnum w-[26px] font-mono text-xs text-ink-dim">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h4 className="m-0 font-display text-lg font-semibold">{role.name}</h4>
              <span className="rtag ml-3.5 font-mono text-[11px] text-ink-dim">
                {role.tag ?? ''}
              </span>
            </div>
            <span className="rarrow text-base text-ink-dim">→</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
