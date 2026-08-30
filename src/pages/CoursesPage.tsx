import { Link } from 'react-router-dom'
import { COURSES } from '../data/curricula'

export function CoursesPage() {
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
        JSON or Markdown for your own site or notes.
      </p>

      <div className="role-list">
        {COURSES.map((course) => (
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
                <div className="mt-1 text-sm text-ink-muted">{course.tagline}</div>
                <div className="mono mt-2 text-[11px] text-ink-dim">
                  {course.levels.length} levels · {course.tools.length} tools
                </div>
              </div>
            </div>
            <span className="rarrow text-ink-dim">→</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
