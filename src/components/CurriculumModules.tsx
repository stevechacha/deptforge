import type { Course, CourseLevelModule } from '../data/curriculum-types'

const LEVEL_STYLES: Record<CourseLevelModule['level'], string> = {
  Beginner: 'border-[rgba(79,163,130,0.4)] text-teal-bright',
  Intermediate: 'border-[rgba(201,138,46,0.4)] text-copper-bright',
  Expert: 'border-[rgba(201,98,46,0.4)] text-danger',
}

export function CurriculumModules({ course }: { course: Course }) {
  return (
    <div className="mb-11">
      {course.levels.map((level, levelIndex) => (
        <section key={level.title} className="mb-10">
          <div className="mb-[18px] flex flex-wrap items-center justify-between gap-3">
            <h3 className="m-0 flex items-center gap-2.5 font-mono text-[13px] uppercase tracking-[0.1em] text-copper-bright after:ml-0 after:h-px after:flex-1 after:bg-border after:content-['']">
              Level {levelIndex + 1}
            </h3>
            <span
              className={`whitespace-nowrap rounded-full border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.05em] ${LEVEL_STYLES[level.level]}`}
            >
              {level.level}
            </span>
          </div>

          <div className="module mb-4">
            <div className="px-5 py-4">
              <h4 className="m-0 font-display text-lg font-semibold">
                {level.title}
              </h4>
              <p className="mb-0 mt-2 text-sm text-ink-muted">{level.goal}</p>
              <p className="mono mb-0 mt-2 text-[11px] text-ink-dim">
                {level.duration}
              </p>
            </div>
          </div>

          {level.sections.map((section) => (
            <div key={section.title} className="module">
              <div className="px-5 py-4">
                <h5 className="m-0 font-display text-[15.5px] font-semibold">
                  {section.title}
                </h5>
              </div>
              <div className="px-5 pb-[18px] pl-[58px]">
                {section.topics.map((topic) => (
                  <div key={topic.title} className="mb-4 last:mb-0">
                    <h6 className="m-0 mb-1.5 font-mono text-[11px] uppercase tracking-[0.06em] text-ink-dim">
                      {topic.title}
                    </h6>
                    <ul className="module-topics !p-0 !pl-4">
                      {topic.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {level.projects && level.projects.length > 0 && (
            <div className="module">
              <div className="px-5 py-4">
                <h5 className="m-0 font-display text-[15.5px] font-semibold">
                  Project Work
                </h5>
              </div>
              <ul className="module-topics">
                {level.projects.map((project) => (
                  <li key={project}>{project}</li>
                ))}
              </ul>
            </div>
          )}
        </section>
      ))}
    </div>
  )
}
