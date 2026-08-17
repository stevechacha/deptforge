import { Link } from 'react-router-dom'
import type { IndexedRole } from '../data'
import { ROLE_INDEX } from '../lib/catalog'

export function RoleSidebar({ role }: { role: IndexedRole }) {
  return (
    <div>
      <div className="side-box">
        <h4>Requirements to Join</h4>
        <ul>
          {role.requirements.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="side-box">
        <h4>Core Skills</h4>
        <ul className="plain">
          {role.skills.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="side-box">
        <h4>Common Tools</h4>
        <div className="flex flex-wrap gap-[7px]">
          {role.tools.map((tool) => (
            <span key={tool} className="tool-chip">
              {tool}
            </span>
          ))}
        </div>
      </div>
      <div className="connects-box">
        <h4>Connects To</h4>
        <p className="mb-3.5 mt-0 text-[12.5px] text-ink-dim">
          How this role fits the wider system
        </p>
        {role.connects.map((cid) => {
          const connected = ROLE_INDEX[cid]
          if (!connected) return null
          return (
            <Link key={cid} to={`/roles/${cid}`} className="connect-link">
              <span className="text-[13.5px]">{connected.name}</span>
              <span className="font-mono text-[10.5px] text-ink-dim">
                {connected.deptName.split(' ')[0].toUpperCase()}
              </span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
