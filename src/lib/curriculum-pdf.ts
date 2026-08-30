import { jsPDF } from 'jspdf'
import type { Course } from '../data/curriculum-types'
import { SITE_BRAND, SITE_URL, SITE_WATERMARK } from './site'

const MARGIN = 18
const PAGE_WIDTH = 210
const PAGE_HEIGHT = 297
const CONTENT_WIDTH = PAGE_WIDTH - MARGIN * 2
const FOOTER_Y = PAGE_HEIGHT - 10
const CONTENT_BOTTOM = PAGE_HEIGHT - 22

type PdfDoc = InstanceType<typeof jsPDF>

function ensureSpace(doc: PdfDoc, y: number, needed: number): number {
  if (y + needed <= CONTENT_BOTTOM) return y
  doc.addPage()
  return MARGIN + 4
}

function writeLines(
  doc: PdfDoc,
  lines: string[],
  x: number,
  y: number,
  lineHeight: number,
): number {
  let cursor = y
  for (const line of lines) {
    cursor = ensureSpace(doc, cursor, lineHeight)
    doc.text(line, x, cursor)
    cursor += lineHeight
  }
  return cursor
}

function writeWrapped(
  doc: PdfDoc,
  text: string,
  x: number,
  y: number,
  maxWidth: number,
  lineHeight: number,
): number {
  const lines = doc.splitTextToSize(text, maxWidth) as string[]
  return writeLines(doc, lines, x, y, lineHeight)
}

function stampPageChrome(doc: PdfDoc): void {
  const total = doc.getNumberOfPages()

  for (let page = 1; page <= total; page += 1) {
    doc.setPage(page)

    // Diagonal site watermark (light ink so content stays readable)
    doc.setTextColor(205, 212, 222)
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(36)
    doc.text(SITE_WATERMARK, PAGE_WIDTH / 2, PAGE_HEIGHT / 2, {
      align: 'center',
      angle: 42,
    })

    doc.setDrawColor(200, 210, 220)
    doc.setLineWidth(0.3)
    doc.line(MARGIN, FOOTER_Y - 4, PAGE_WIDTH - MARGIN, FOOTER_Y - 4)

    doc.setFont('helvetica', 'normal')
    doc.setFontSize(8)
    doc.setTextColor(120, 130, 145)
    doc.text(`${SITE_BRAND} · ${SITE_URL}`, MARGIN, FOOTER_Y)
    doc.text(`Page ${page} of ${total}`, PAGE_WIDTH - MARGIN, FOOTER_Y, {
      align: 'right',
    })
  }
}

export function buildCoursePdf(course: Course): PdfDoc {
  const doc = new jsPDF({ unit: 'mm', format: 'a4', orientation: 'portrait' })
  let y = MARGIN

  doc.setFont('helvetica', 'bold')
  doc.setFontSize(20)
  doc.setTextColor(20, 35, 55)
  y = writeWrapped(doc, course.title, MARGIN, y + 4, CONTENT_WIDTH, 8)

  doc.setFont('helvetica', 'italic')
  doc.setFontSize(11)
  doc.setTextColor(90, 105, 125)
  y = writeWrapped(doc, course.tagline, MARGIN, y + 2, CONTENT_WIDTH, 5.5)

  doc.setFont('helvetica', 'normal')
  doc.setFontSize(10)
  doc.setTextColor(40, 55, 75)
  y = writeWrapped(doc, course.description, MARGIN, y + 4, CONTENT_WIDTH, 5)

  y = ensureSpace(doc, y + 4, 12)
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(12)
  doc.setTextColor(20, 35, 55)
  doc.text('Prerequisites', MARGIN, y)
  y += 6
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(10)
  doc.setTextColor(40, 55, 75)
  for (const item of course.prerequisites) {
    y = writeWrapped(doc, `•  ${item}`, MARGIN, y, CONTENT_WIDTH, 5)
    y += 1
  }

  y = ensureSpace(doc, y + 4, 12)
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(12)
  doc.setTextColor(20, 35, 55)
  doc.text('Tools & Technologies', MARGIN, y)
  y += 6
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(10)
  doc.setTextColor(40, 55, 75)
  y = writeWrapped(doc, course.tools.join(' · '), MARGIN, y, CONTENT_WIDTH, 5)

  for (const [levelIndex, level] of course.levels.entries()) {
    y = ensureSpace(doc, y + 8, 20)
    doc.setFillColor(14, 27, 46)
    doc.rect(MARGIN, y - 4, CONTENT_WIDTH, 12, 'F')
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(11)
    doc.setTextColor(255, 255, 255)
    doc.text(
      `Level ${levelIndex + 1}: ${level.title} — ${level.level}`,
      MARGIN + 3,
      y + 3.5,
    )
    y += 14

    doc.setFont('helvetica', 'normal')
    doc.setFontSize(10)
    doc.setTextColor(40, 55, 75)
    y = writeWrapped(doc, `Goal: ${level.goal}`, MARGIN, y, CONTENT_WIDTH, 5)
    y = writeWrapped(
      doc,
      `Duration: ${level.duration}`,
      MARGIN,
      y + 1,
      CONTENT_WIDTH,
      5,
    )

    for (const section of level.sections) {
      y = ensureSpace(doc, y + 5, 10)
      doc.setFont('helvetica', 'bold')
      doc.setFontSize(11)
      doc.setTextColor(201, 138, 46)
      y = writeWrapped(doc, section.title, MARGIN, y, CONTENT_WIDTH, 5.5)

      for (const topic of section.topics) {
        y = ensureSpace(doc, y + 3, 8)
        doc.setFont('helvetica', 'bold')
        doc.setFontSize(10)
        doc.setTextColor(20, 35, 55)
        y = writeWrapped(doc, topic.title, MARGIN + 2, y, CONTENT_WIDTH - 2, 5)

        doc.setFont('helvetica', 'normal')
        doc.setFontSize(9.5)
        doc.setTextColor(55, 70, 90)
        for (const item of topic.items) {
          y = writeWrapped(
            doc,
            `–  ${item}`,
            MARGIN + 4,
            y + 0.5,
            CONTENT_WIDTH - 4,
            4.8,
          )
        }
      }
    }

    if (level.projects?.length) {
      y = ensureSpace(doc, y + 5, 10)
      doc.setFont('helvetica', 'bold')
      doc.setFontSize(11)
      doc.setTextColor(201, 138, 46)
      y = writeWrapped(doc, 'Project Work', MARGIN, y, CONTENT_WIDTH, 5.5)

      doc.setFont('helvetica', 'normal')
      doc.setFontSize(9.5)
      doc.setTextColor(55, 70, 90)
      for (const project of level.projects) {
        y = writeWrapped(
          doc,
          `•  ${project}`,
          MARGIN + 2,
          y + 0.5,
          CONTENT_WIDTH - 2,
          4.8,
        )
      }
    }
  }

  y = ensureSpace(doc, y + 8, 12)
  doc.setFont('helvetica', 'italic')
  doc.setFontSize(9)
  doc.setTextColor(120, 130, 145)
  writeWrapped(
    doc,
    `Generated from ${SITE_BRAND}. Visit ${SITE_URL} for the latest version.`,
    MARGIN,
    y,
    CONTENT_WIDTH,
    4.5,
  )

  stampPageChrome(doc)
  return doc
}

export function downloadCoursePdf(course: Course): void {
  const doc = buildCoursePdf(course)
  doc.save(`${course.id}-curriculum.pdf`)
}
