import { Link, useSearchParams } from 'react-router-dom'
import { ROLE_INDEX } from '../lib/catalog'
import { searchRoles } from '../lib/search'

export function SearchPage() {
  const [params] = useSearchParams()
  const query = params.get('q') ?? ''
  const results = searchRoles(query, ROLE_INDEX)

  return (
    <div className="wrap section py-16">
      <div className="crumbs">
        <Link to="/">Map</Link> / Search
      </div>
      <div className="mb-[30px] flex flex-wrap items-end justify-between gap-3.5">
        <div>
          <h2 className="m-0 text-[26px] font-semibold">
            Search results for &quot;{query}&quot;
          </h2>
          <p className="mt-1.5 text-[15px] text-ink-muted">
            {results.length} role{results.length === 1 ? '' : 's'} matched
          </p>
        </div>
      </div>
      {results.length ? (
        <div className="results-list">
          {results.map((role) => (
            <Link key={role.id} to={`/roles/${role.id}`} className="result-item">
              <div>
                <div className="font-display text-[15px] font-semibold">
                  {role.name}
                </div>
                <div className="mt-1 font-mono text-[11px] text-ink-dim">
                  {role.deptName}
                </div>
              </div>
              <span className="text-ink-dim">→</span>
            </Link>
          ))}
        </div>
      ) : (
        <p className="empty-note">
          No roles match that search — try a broader term like &quot;cloud&quot;,
          &quot;security&quot;, &quot;mobile&quot;, or &quot;AI&quot;.
        </p>
      )}
    </div>
  )
}
