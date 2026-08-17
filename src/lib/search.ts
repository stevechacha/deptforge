import type { IndexedRole } from '../data/types'

export function searchRoles(
  query: string,
  roleIndex: Record<string, IndexedRole>,
): IndexedRole[] {
  const q = query.trim().toLowerCase()
  if (!q) return []

  return Object.values(roleIndex).filter((role) => {
    const haystack = [
      role.name,
      role.deptName,
      role.tag ?? '',
      ...(role.skills ?? []),
      ...(role.tools ?? []),
    ]
      .join(' ')
      .toLowerCase()
    return haystack.includes(q)
  })
}
