import { Link } from 'react-router-dom'
import { COURSES } from '../data/curricula'
import { ROLE_INDEX } from '../lib/catalog'

function courseDeptName(relatedRoleId: string | undefined): string {
  if (!relatedRoleId) return 'Other'
  return ROLE_INDEX[relatedRoleId]?.deptName ?? 'Other'
}

function groupedCourses() {
  const groups: { name: string; courses: typeof COURSES }[] = []
  const seen = new Map<string, number>()

  for (const course of COURSES) {
    const name = courseDeptName(course.relatedRoleId)
    const existing = seen.get(name)
    if (existing === undefined) {
      seen.set(name, groups.length)
      groups.push({ name, courses: [course] })
    } else {
      groups[existing].courses.push(course)
    }
  }

  return groups
}

export function CoursesPage() {
  const groups = groupedCourses()

  return (
    <div className="wrap section py-16">
      <div className="crumbs">
        <Link to="/">Map</Link> / Courses
      </div>
      <div className="eyebrow">Deep-Dive Curricula</div>
      <h1 className="mb-3.5 mt-0 max-w-[760px] text-4xl font-semibold">
        Full course outlines you can follow — and download
      </h1>
      <p className="m-0 mb-11 max-w-[680px] text-[17px] text-ink-muted">
        Structured learning paths that go deeper than a role snapshot. Each
        curriculum is organized by level, with topics, projects, and downloadable
        PDF, JSON, or Markdown.
      </p>

      {groups.map((group) => (
        <section key={group.name} className="mb-12 last:mb-0">
          <h2 className="mb-[18px] mt-0 flex items-center gap-2.5 font-mono text-[13px] uppercase tracking-[0.1em] text-copper-bright after:ml-0 after:h-px after:flex-1 after:bg-border after:content-['']">
            {group.name}
          </h2>
          <div className="role-list">
            {group.courses.map((course) => (
              <Link
                key={course.id}
                to={`/courses/${course.id}`}
                className="role-row"
              >
                <div className="role-row-left flex items-center gap-4">
                  <div>
                    <div className="font-display text-[17px] font-semibold">
                      {course.title}
                    </div>
                    <div className="mt-1 text-sm text-ink-muted">
                      {course.tagline}
                    </div>
                    <div className="mono mt-2 text-[11px] text-ink-dim">
                      {course.levels.length} levels · {course.tools.length} tools
                    </div>
                  </div>
                </div>
                <span className="rarrow text-ink-dim">→</span>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
