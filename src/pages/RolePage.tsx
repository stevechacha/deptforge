import { Link, useParams } from 'react-router-dom'
import { RoleModules } from '../components/RoleModules'
import { RoleSidebar } from '../components/RoleSidebar'
import { ROLE_INDEX } from '../lib/catalog'
import { NotFoundPage } from './NotFoundPage'

export function RolePage() {
  const { roleId } = useParams()
  const role = roleId ? ROLE_INDEX[roleId] : undefined
  if (!role) return <NotFoundPage />

  return (
    <div className="wrap section py-16">
      <div className="crumbs">
        <Link to="/">Map</Link> /{' '}
        <Link to={`/departments/${role.deptId}`}>{role.deptName}</Link> /{' '}
        {role.name}
      </div>
      <div className="mb-2">
        <span
          className="mb-3.5 block font-mono text-[11px] uppercase tracking-[0.08em]"
          style={{ color: role.deptColor }}
        >
          {role.deptName}
          {role.tag ? ` · ${role.tag}` : ''}
        </span>
        <h1 className="mb-3.5 mt-0 max-w-[760px] text-4xl font-semibold">
          {role.name}
        </h1>
        <p className="m-0 max-w-[680px] text-[17px] text-ink-muted">{role.blurb}</p>
      </div>

      <div className="role-grid mt-11 grid grid-cols-1 items-start gap-12 md:grid-cols-[2fr_1fr]">
        <div>
          <RoleModules outline={role.outline} />
        </div>
        <RoleSidebar role={role} />
      </div>
    </div>
  )
}
