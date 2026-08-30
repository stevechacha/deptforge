import { describe, expect, it } from 'vitest'
import { COURSES, getCourse } from '../data/curricula'
import { DEPARTMENTS } from '../data/departments'
import { courseToJson, courseToMarkdown } from './curriculum-export'

describe('curriculum-export', () => {
  it('covers every role with at least one course', () => {
    const roleIds = DEPARTMENTS.flatMap((dept) => dept.roles.map((role) => role.id))
    const covered = new Set(
      COURSES.map((course) => course.relatedRoleId).filter(Boolean),
    )
    for (const roleId of roleIds) {
      expect(covered.has(roleId), `missing curriculum for ${roleId}`).toBe(true)
    }
  })

  it('renders React markdown with three levels', () => {
    const course = getCourse('react')
    expect(course).toBeDefined()
    const md = courseToMarkdown(course!)
    expect(md).toContain('# Learn React')
    expect(md).toContain('React Foundations — Beginner')
    expect(md).toContain('useState hook')
  })

  it('serializes valid JSON for every course', () => {
    expect(COURSES.length).toBeGreaterThanOrEqual(29)
    const ids = COURSES.map((course) => course.id)
    expect(new Set(ids).size).toBe(ids.length)
    for (const course of COURSES) {
      const parsed = JSON.parse(courseToJson(course))
      expect(parsed.id).toBe(course.id)
      expect(parsed.levels).toHaveLength(3)
    }
  })
})
