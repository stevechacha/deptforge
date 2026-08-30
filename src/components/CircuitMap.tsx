import { useNavigate } from 'react-router-dom'
import { DEPARTMENTS } from '../data'

export function CircuitMap() {
  const navigate = useNavigate()
  const cx = 590
  const cy = 260
  const R = 190
  const n = DEPARTMENTS.length
  const hubs = DEPARTMENTS.map((d, i) => {
    const angle = (-90 + i * (360 / n)) * (Math.PI / 180)
    return {
      d,
      x: cx + R * Math.cos(angle),
      y: cy + R * Math.sin(angle),
    }
  })

  const crossPairs = Array.from({ length: n }, (_, i) => [i, (i + 2) % n] as const)

  return (
    <div className="map-shell">
      <span className="map-label">System Map — click a node to explore</span>
      <svg className="circuit" viewBox="0 0 1180 520" xmlns="http://www.w3.org/2000/svg">
        {hubs.map((h) => (
          <path
            key={`wire-${h.d.id}`}
            className="wire"
            d={`M${cx},${cy} L${h.x},${h.y}`}
          />
        ))}
        {crossPairs.map(([i, j]) => {
          const a = hubs[i]
          const b = hubs[j]
          const mx = (a.x + b.x) / 2 + (cy - (a.y + b.y) / 2) * 0.06
          const my = (a.y + b.y) / 2 + (cx - (a.x + b.x) / 2) * -0.06
          return (
            <path
              key={`cross-${i}-${j}`}
              className="wire"
              style={{ opacity: 0.35 }}
              d={`M${a.x},${a.y} Q${mx},${my} ${b.x},${b.y}`}
            />
          )
        })}

        <g
          className="node-hub"
          onClick={() => navigate('/departments')}
          role="link"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') navigate('/departments')
          }}
        >
          <rect
            className="core-shape map-node-bg map-node-stroke"
            x={cx - 46}
            y={cy - 46}
            width="92"
            height="92"
            strokeWidth="1.6"
            transform={`rotate(45 ${cx} ${cy})`}
          />
          <circle
            className="core-shape map-node-surface map-node-stroke"
            cx={cx}
            cy={cy}
            r="30"
            strokeWidth="1.2"
          />
          <text
            x={cx}
            y={cy - 3}
            textAnchor="middle"
            className="node-title map-node-text"
            fontSize="11"
          >
            TECH
          </text>
          <text
            x={cx}
            y={cy + 13}
            textAnchor="middle"
            className="node-sub map-node-accent"
            fontSize="9"
          >
            CAREER CORE
          </text>
        </g>

        {hubs.map((h) => (
          <g key={h.d.id}>
            <g
              className="node-hub"
              onClick={() => navigate(`/departments/${h.d.id}`)}
              role="link"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  navigate(`/departments/${h.d.id}`)
                }
              }}
            >
              <circle className="ring" cx={h.x} cy={h.y} r="46" stroke={h.d.color} />
              <circle
                className="core-shape map-node-surface"
                cx={h.x}
                cy={h.y}
                r="34"
                stroke={h.d.color}
                strokeWidth="1.4"
              />
              <text
                x={h.x}
                y={h.y - 2}
                textAnchor="middle"
                className="node-title map-node-text"
                fontSize="12"
              >
                {h.d.icon}
              </text>
              <text
                x={h.x}
                y={h.y + 13}
                textAnchor="middle"
                className="node-sub"
                fontSize="8.5"
                fill={h.d.color}
              >
                {h.d.roles.length} ROLES
              </text>
            </g>
            <text
              x={h.x}
              y={h.y + 62}
              textAnchor="middle"
              className="node-sub map-node-muted"
              fontSize="10.5"
              fontFamily="Space Grotesk, sans-serif"
              fontWeight="600"
            >
              {h.d.name}
            </text>
          </g>
        ))}
      </svg>
    </div>
  )
}
