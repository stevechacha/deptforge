import type { LearningModule } from '../data'

export function RoleModules({ outline }: { outline: LearningModule[] }) {
  return (
    <div className="mb-11">
      <h3 className="mb-[18px] mt-0 flex items-center gap-2.5 font-mono text-[13px] uppercase tracking-[0.1em] text-copper-bright after:ml-0 after:h-px after:flex-1 after:bg-border after:content-['']">
        Learning Stages
      </h3>
      <p className="mb-[18px] mt-[-10px] font-mono text-xs text-ink-dim">
        What to learn now, and what&apos;s next — from first principles to a
        shippable capstone.
      </p>
      {outline.map((module, i) => (
        <div key={module.title} className="module">
          <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-4">
            <div className="flex items-center gap-3.5">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-copper font-mono text-[11px] text-bg">
                {i + 1}
              </div>
              <h4 className="m-0 font-display text-[15.5px] font-semibold">
                {module.title}
              </h4>
            </div>
            <div className="flex shrink-0 items-center gap-2">
              <span className="whitespace-nowrap rounded-full border border-[rgba(79,163,130,0.4)] px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.05em] text-teal-bright">
                {module.level}
              </span>
              <span className="mono whitespace-nowrap text-[11px] text-ink-dim">
                {module.dur}
              </span>
            </div>
          </div>
          <ul className="module-topics">
            {module.topics.map((topic) => (
              <li key={topic}>{topic}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
