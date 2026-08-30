import type { Course } from '../curriculum-types'

const modules = import.meta.glob('./*.json', {
  eager: true,
  import: 'default',
}) as Record<string, Course>

/** Role order matches department order in departments.ts */
const ROLE_ORDER = [
  'frontend-engineer',
  'backend-engineer',
  'mobile-engineer',
  'fullstack-engineer',
  'data-analyst',
  'data-engineer',
  'data-scientist',
  'ml-ai-engineer',
  'devops-engineer',
  'site-reliability-engineer',
  'cloud-engineer',
  'platform-engineer',
  'appsec-engineer',
  'security-analyst',
  'penetration-tester',
  'cloud-security-engineer',
  'product-manager',
  'uiux-designer',
  'ux-researcher',
  'technical-writer',
  'qa-engineer',
  'automation-engineer',
  'performance-engineer',
  'release-manager',
  'it-support-engineer',
  'systems-administrator',
  'network-engineer',
  'solutions-engineer',
]

function roleRank(roleId: string | undefined): number {
  if (!roleId) return ROLE_ORDER.length + 1
  const index = ROLE_ORDER.indexOf(roleId)
  return index === -1 ? ROLE_ORDER.length : index
}

export const COURSES: Course[] = Object.values(modules).sort((a, b) => {
  const byRole = roleRank(a.relatedRoleId) - roleRank(b.relatedRoleId)
  if (byRole !== 0) return byRole
  return a.title.localeCompare(b.title)
})

export function getCourse(id: string): Course | undefined {
  return COURSES.find((course) => course.id === id)
}
