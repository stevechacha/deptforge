import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const dataDir = join(root, 'src', 'data', 'curricula')
const outDir = join(root, 'public', 'curricula')

const COURSE_FILES = ['react.json']

/** @param {unknown} course */
function courseToMarkdown(course) {
  const lines = [
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
    lines.push(`## ${level.title} — ${level.level}`, '')
    lines.push(`**Goal:** ${level.goal}`)
    lines.push(`**Duration:** ${level.duration}`, '')

    for (const section of level.sections) {
      lines.push(`### ${section.title}`, '')

      for (const topic of section.topics) {
        lines.push(`#### ${topic.title}`, '')
        for (const item of topic.items) {
          lines.push(`- ${item}`)
        }
        lines.push('')
      }
    }

    if (level.projects?.length) {
      lines.push('### Project Work', '')
      for (const project of level.projects) {
        lines.push(`- ${project}`)
      }
      lines.push('')
    }

    lines.push('---', '')
  }

  lines.push(
    '_Generated from Deptforge curriculum data. Visit the site for the latest version._',
  )

  return lines.join('\n')
}

async function main() {
  const courses = []

  for (const file of COURSE_FILES) {
    const raw = await readFile(join(dataDir, file), 'utf8')
    courses.push(JSON.parse(raw))
  }

  await mkdir(outDir, { recursive: true })

  const manifest = courses.map((course) => ({
    id: course.id,
    title: course.title,
    tagline: course.tagline,
    json: `/curricula/${course.id}-curriculum.json`,
    markdown: `/curricula/${course.id}-curriculum.md`,
  }))

  await writeFile(
    join(outDir, 'manifest.json'),
    `${JSON.stringify(manifest, null, 2)}\n`,
  )

  for (const course of courses) {
    await writeFile(
      join(outDir, `${course.id}-curriculum.json`),
      `${JSON.stringify(course, null, 2)}\n`,
    )
    await writeFile(
      join(outDir, `${course.id}-curriculum.md`),
      courseToMarkdown(course),
    )
  }

  console.log(`Exported ${courses.length} curriculum(s) to public/curricula/`)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
