import { describe, expect, it } from 'vitest'
import { DEPARTMENTS } from '../data'
import { buildDeptIndex, buildRoleIndex } from './indexes'
import { searchRoles } from './search'

describe('indexes', () => {
  it('indexes all departments and roles', () => {
    const deptIndex = buildDeptIndex(DEPARTMENTS)
    const roleIndex = buildRoleIndex(DEPARTMENTS)

    expect(Object.keys(deptIndex)).toHaveLength(7)
    expect(Object.keys(roleIndex)).toHaveLength(28)
    expect(roleIndex['frontend-engineer'].deptId).toBe('software-engineering')
    expect(roleIndex['frontend-engineer'].deptName).toBe('Software Engineering')
  })
})

describe('searchRoles', () => {
  const roleIndex = buildRoleIndex(DEPARTMENTS)

  it('returns empty for blank query', () => {
    expect(searchRoles('   ', roleIndex)).toEqual([])
  })

  it('matches roles by skill or tool keywords', () => {
    const cloud = searchRoles('cloud', roleIndex)
    expect(cloud.length).toBeGreaterThan(0)
    expect(cloud.some((r) => r.id === 'cloud-engineer')).toBe(true)

    const security = searchRoles('security', roleIndex)
    expect(security.some((r) => r.deptName === 'Security Engineering')).toBe(true)

    const ai = searchRoles('AI', roleIndex)
    expect(ai.some((r) => r.id === 'ml-ai-engineer')).toBe(true)
  })
})
