import { useState } from 'react'
import type { Course } from '../data/curriculum-types'
import {
  downloadCourseJson,
  downloadCourseMarkdown,
} from '../lib/curriculum-export'
import { downloadCoursePdf } from '../lib/curriculum-pdf'

export function CurriculumDownload({ course }: { course: Course }) {
  const [pdfBusy, setPdfBusy] = useState(false)

  async function handlePdfDownload() {
    if (pdfBusy) return
    setPdfBusy(true)
    try {
      // Yield so the button can show "Preparing…" before the sync PDF build.
      await new Promise((resolve) => window.setTimeout(resolve, 0))
      downloadCoursePdf(course)
    } finally {
      setPdfBusy(false)
    }
  }

  return (
    <div className="side-box">
      <h4>Download Curriculum</h4>
      <p className="mb-3.5 mt-0 text-[12.5px] text-ink-dim">
        Take this outline offline — PDF includes a Deptforge website watermark.
      </p>
      <div className="flex flex-col gap-2.5">
        <button
          type="button"
          className="btn w-full justify-center"
          disabled={pdfBusy}
          onClick={() => void handlePdfDownload()}
        >
          {pdfBusy ? 'Preparing PDF…' : 'Download PDF'}
        </button>
        <button
          type="button"
          className="btn ghost w-full justify-center"
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
