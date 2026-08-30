import type { Course } from '../data/curriculum-types'
import {
  downloadCourseJson,
  downloadCourseMarkdown,
} from '../lib/curriculum-export'

export function CurriculumDownload({ course }: { course: Course }) {
  return (
    <div className="side-box">
      <h4>Download Curriculum</h4>
      <p className="mb-3.5 mt-0 text-[12.5px] text-ink-dim">
        Take this outline offline or import it into your own learning platform.
      </p>
      <div className="flex flex-col gap-2.5">
        <button
          type="button"
          className="btn w-full justify-center"
          onClick={() => downloadCourseMarkdown(course)}
        >
          Download Markdown
        </button>
        <button
          type="button"
          className="btn ghost w-full justify-center"
          onClick={() => downloadCourseJson(course)}
        >
          Download JSON
        </button>
        <a
          href={`/curricula/${course.id}-curriculum.json`}
          className="btn ghost w-full justify-center"
          download
        >
          Direct JSON link
        </a>
        <a
          href={`/curricula/${course.id}-curriculum.md`}
          className="btn ghost w-full justify-center"
          download
        >
          Direct Markdown link
        </a>
      </div>
    </div>
  )
}
