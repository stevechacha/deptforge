import { Link } from 'react-router-dom'
import { DeptsSection } from '../components/DeptGrid'

export function DepartmentsPage() {
  return (
    <>
      <div className="wrap section pb-6 pt-12">
        <div className="crumbs">
          <Link to="/">Map</Link> / Departments
        </div>
        <div className="border-none pb-0">
          <h1 className="m-0 text-[32px] font-semibold">All Departments</h1>
          <p className="mt-3.5 max-w-[680px] text-[17px] text-ink-muted">
            Seven functions, one system. Click any department to see its roles,
            requirements, and stage-by-stage learning outlines.
          </p>
        </div>
      </div>
      <DeptsSection />
    </>
  )
}
