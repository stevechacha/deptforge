import type { Course, CourseLevelModule } from '../data/curriculum-types'

function levelHeading(level: CourseLevelModule): string {
  return `## ${level.title} — ${level.level}`
}

export function courseToMarkdown(course: Course): string {
  const lines: string[] = [
    `# ${course.title}`,
    '',
    `> ${course.tagline}`,
    '',
    course.description,
    '',
    '## Prerequisites',
    '',
    ...course.prerequisites.map((item) => `- ${item}`),
    '',
    '## Tools & Technologies',
    '',
    ...course.tools.map((tool) => `- ${tool}`),
    '',
    '---',
    '',
  ]

  for (const level of course.levels) {
    lines.push(levelHeading(level))
    lines.push('')
    lines.push(`**Goal:** ${level.goal}`)
    lines.push(`**Duration:** ${level.duration}`)
    lines.push('')

    for (const section of level.sections) {
      lines.push(`### ${section.title}`)
      lines.push('')

      for (const topic of section.topics) {
        lines.push(`#### ${topic.title}`)
        lines.push('')
        for (const item of topic.items) {
          lines.push(`- ${item}`)
        }
        lines.push('')
      }
    }

    if (level.projects?.length) {
      lines.push('### Project Work')
      lines.push('')
      for (const project of level.projects) {
        lines.push(`- ${project}`)
      }
      lines.push('')
    }

    lines.push('---')
    lines.push('')
  }

  lines.push(
    '_Generated from Deptforge curriculum data. Visit the site for the latest version._',
  )

  return lines.join('\n')
}

export function courseToJson(course: Course): string {
  return `${JSON.stringify(course, null, 2)}\n`
}

export function downloadTextFile(
  filename: string,
  content: string,
  mimeType: string,
): void {
  const blob = new Blob([content], { type: mimeType })
  const url = URL.createObjectURL(blob)
  const anchor = document.createElement('a')
  anchor.href = url
  anchor.download = filename
  anchor.click()
  URL.revokeObjectURL(url)
}

export function downloadCourseMarkdown(course: Course): void {
  downloadTextFile(
    `${course.id}-curriculum.md`,
    courseToMarkdown(course),
    'text/markdown;charset=utf-8',
  )
}

export function downloadCourseJson(course: Course): void {
  downloadTextFile(
    `${course.id}-curriculum.json`,
    courseToJson(course),
    'application/json;charset=utf-8',
  )
}
