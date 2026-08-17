import type { Department, IndexedRole } from '../data/types'

export function buildDeptIndex(
  departments: Department[],
): Record<string, Department> {
  const index: Record<string, Department> = {}
  for (const dept of departments) {
    index[dept.id] = dept
  }
  return index
}

export function buildRoleIndex(
  departments: Department[],
): Record<string, IndexedRole> {
  const index: Record<string, IndexedRole> = {}
  for (const dept of departments) {
    for (const role of dept.roles) {
      index[role.id] = {
        ...role,
        deptId: dept.id,
        deptName: dept.name,
        deptColor: dept.color,
      }
    }
  }
  return index
}
