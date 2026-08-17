import { Link, useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'

function BrandMark() {
  return (
    <svg className="h-[26px] w-[26px] shrink-0" viewBox="0 0 24 24" fill="none">
      <rect x="1" y="1" width="22" height="22" stroke="#E8A33D" strokeWidth="1.3" />
      <circle cx="12" cy="12" r="3.2" fill="#E8A33D" />
      <line x1="12" y1="1" x2="12" y2="8.5" stroke="#E8A33D" strokeWidth="1.3" />
      <line x1="12" y1="15.5" x2="12" y2="23" stroke="#E8A33D" strokeWidth="1.3" />
      <line x1="1" y1="12" x2="8.5" y2="12" stroke="#E8A33D" strokeWidth="1.3" />
      <line x1="15.5" y1="12" x2="23" y2="12" stroke="#E8A33D" strokeWidth="1.3" />
    </svg>
  )
}

export function Header() {
  const navigate = useNavigate()
  const location = useLocation()
  const [searchParams] = useSearchParams()
  const qFromUrl = searchParams.get('q') ?? ''
  const [query, setQuery] = useState(
    location.pathname === '/search' ? qFromUrl : '',
  )
  const typingRef = useRef(false)

  useEffect(() => {
    if (location.pathname === '/search') {
      setQuery(qFromUrl)
    } else if (!typingRef.current) {
      setQuery('')
    }
  }, [location.pathname, qFromUrl])

  useEffect(() => {
    if (!typingRef.current || !query.trim()) return
    const handle = window.setTimeout(() => {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`)
      typingRef.current = false
    }, 220)
    return () => window.clearTimeout(handle)
  }, [query, navigate])

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-[rgba(14,27,46,0.92)] backdrop-blur-[8px]">
      <div className="topbar mx-auto flex max-w-[1180px] items-center justify-between px-7 py-4">
        <Link to="/" className="flex items-center gap-2.5 no-underline">
          <BrandMark />
          <div className="font-display text-[15px] font-semibold tracking-[0.02em]">
            DEPTFORGE<span className="text-copper-bright">.map</span>
          </div>
        </Link>
        <div className="nav-links flex items-center gap-[26px]">
          <Link
            to="/"
            className="font-mono text-xs uppercase tracking-[0.08em] text-ink-muted no-underline transition-colors hover:text-copper-bright"
          >
            Map
          </Link>
          <Link
            to="/departments"
            className="font-mono text-xs uppercase tracking-[0.08em] text-ink-muted no-underline transition-colors hover:text-copper-bright"
          >
            Departments
          </Link>
          <div className="flex items-center gap-2 rounded-sm border border-border bg-surface px-3 py-[7px]">
            <span className="font-mono text-xs text-ink-dim">/</span>
            <input
              id="searchInput"
              type="text"
              value={query}
              onChange={(e) => {
                typingRef.current = true
                setQuery(e.target.value)
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && query.trim()) {
                  typingRef.current = false
                  navigate(`/search?q=${encodeURIComponent(query.trim())}`)
                }
              }}
              placeholder="search a skill or role"
              className="w-[150px] border-none bg-transparent font-mono text-xs text-ink outline-none placeholder:text-ink-dim"
              aria-label="Search a skill or role"
            />
          </div>
        </div>
      </div>
    </header>
  )
}
