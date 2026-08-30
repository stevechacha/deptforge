import { describe, expect, it } from 'vitest'
import { REACT_COURSE } from '../data/curricula/react'
import { courseToJson, courseToMarkdown } from './curriculum-export'

describe('curriculum-export', () => {
  it('renders markdown with all three levels', () => {
    const md = courseToMarkdown(REACT_COURSE)
    expect(md).toContain('# Learn React')
    expect(md).toContain('React Foundations — Beginner')
    expect(md).toContain('Building Real Applications — Intermediate')
    expect(md).toContain('Production-Grade React — Expert')
    expect(md).toContain('useState hook')
    expect(md).toContain('M-Pesa STK push demo')
  })

  it('serializes valid JSON', () => {
    const json = courseToJson(REACT_COURSE)
    const parsed = JSON.parse(json)
    expect(parsed.id).toBe('react')
    expect(parsed.levels).toHaveLength(3)
  })
})
