import { DEPARTMENTS } from '../data'
import { buildDeptIndex, buildRoleIndex } from './indexes'

export const DEPT_INDEX = buildDeptIndex(DEPARTMENTS)
export const ROLE_INDEX = buildRoleIndex(DEPARTMENTS)
