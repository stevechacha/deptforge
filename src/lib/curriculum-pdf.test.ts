import { describe, expect, it } from 'vitest'
import { getCourse } from '../data/curricula'
import { buildCoursePdf } from './curriculum-pdf'
import { SITE_URL, SITE_WATERMARK } from './site'

describe('curriculum-pdf', () => {
  it('builds a multi-page PDF with website watermark metadata', () => {
    const course = getCourse('react')
    expect(course).toBeDefined()
    const doc = buildCoursePdf(course!)
    expect(doc.getNumberOfPages()).toBeGreaterThan(1)

    const page1 = doc.output('datauristring') as string
    expect(page1.startsWith('data:application/pdf')).toBe(true)
    expect(SITE_WATERMARK).toBe('deptforge.wesacco.com')
    expect(SITE_URL).toContain('deptforge.wesacco.com')
  })

  it('builds Android curriculum PDF without throwing', () => {
    const course = getCourse('android')
    expect(course).toBeDefined()
    const doc = buildCoursePdf(course!)
    expect(doc.getNumberOfPages()).toBeGreaterThan(0)
    expect(doc.internal.pages).toBeTruthy()
  })
})
