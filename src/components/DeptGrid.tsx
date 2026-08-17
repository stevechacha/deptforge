import { Link } from 'react-router-dom'
import { DEPARTMENTS } from '../data'
import type { Department } from '../data'

export function DeptCard({ dept }: { dept: Department }) {
  return (
    <Link to={`/departments/${dept.id}`} className="dept-card">
      <span className="mono mb-3.5 block text-[11px] text-ink-dim">
        {dept.index} / {dept.icon}
      </span>
      <h3 className="mb-2.5 mt-0 text-lg font-semibold">{dept.name}</h3>
      <p className="mb-4 min-h-14 text-[13.5px] text-ink-muted">{dept.short}</p>
      <span className="font-mono text-[11px] uppercase tracking-[0.06em] text-copper-bright">
        {dept.roles.length} roles →
      </span>
      <span className="arrow">↗</span>
    </Link>
  )
}

export function DeptGrid() {
  return (
    <div className="dept-grid">
      {DEPARTMENTS.map((dept) => (
        <DeptCard key={dept.id} dept={dept} />
      ))}
    </div>
  )
}

export function DeptsSection() {
  return (
    <div className="wrap section py-16">
      <div className="mb-[30px] flex flex-wrap items-end justify-between gap-3.5">
        <div>
          <h2 className="m-0 text-[26px] font-semibold">The Seven Departments</h2>
          <p className="mt-1.5 max-w-[520px] text-[15px] text-ink-muted">
            Together, these form the complete tech system behind a modern company
            — building it, running it, securing it, and deciding what&apos;s next.
          </p>
        </div>
        <span className="tag-num">01 — 07</span>
      </div>
      <DeptGrid />
    </div>
  )
}
